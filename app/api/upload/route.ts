import { NextRequest, NextResponse } from "next/server";
import { put } from "@vercel/blob";

// POST — Upload file (PDF atau Image) ke Vercel Blob
export async function POST(req: NextRequest) {
    try {
        const formData = await req.formData();
        const file = formData.get("file") as File | null;
        const type = formData.get("type") as string | null; // "pdf" atau "image"

        if (!file) {
            return NextResponse.json({ error: "File tidak ditemukan" }, { status: 400 });
        }

        // Validate file type
        const allowedPdf = ["application/pdf"];
        const allowedImages = ["image/jpeg", "image/png", "image/webp", "image/jpg"];

        if (type === "image") {
            if (!allowedImages.includes(file.type)) {
                return NextResponse.json({ error: "Hanya file JPG, PNG, atau WebP yang diperbolehkan" }, { status: 400 });
            }
        } else {
            if (!allowedPdf.includes(file.type)) {
                return NextResponse.json({ error: "Hanya file PDF yang diperbolehkan" }, { status: 400 });
            }
        }

        // Max 10MB
        if (file.size > 10 * 1024 * 1024) {
            return NextResponse.json({ error: "Ukuran file maksimal 10MB" }, { status: 400 });
        }

        const folder = type === "image" ? "events" : "articles";
        const timestamp = Date.now();
        const safeFileName = file.name.replace(/[^a-zA-Z0-9.-]/g, "_");
        const blobPath = `${folder}/${timestamp}_${safeFileName}`;

        const blob = await put(blobPath, file, { access: "public" });

        return NextResponse.json({ filePath: blob.url, fileName: blob.pathname }, { status: 201 });
    } catch (error) {
        console.error("Error uploading file:", error);
        return NextResponse.json({ error: "Gagal mengupload file" }, { status: 500 });
    }
}

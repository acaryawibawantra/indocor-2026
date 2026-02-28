import type { Metadata } from "next";
import "@fontsource/uncut-sans/400.css";
import "@fontsource/uncut-sans/500.css";
import "@fontsource/uncut-sans/600.css";
import "@fontsource/uncut-sans/700.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "INDOCOR ITS Student Chapter",
  description:
    "Official Website of Indonesian Corrosion Association — Student Chapter of Institut Teknologi Sepuluh Nopember",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}

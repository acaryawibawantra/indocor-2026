"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";
import { CalendarDays, ArrowRight, User } from "lucide-react";
import { blogData } from "@/data/blog";

export default function BlogPage() {
    const [searchQuery, setSearchQuery] = useState("");

    const filteredBlogs = blogData.filter(blog =>
        blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.category.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <main className="min-h-screen bg-gray-50 pb-24">
            {/* Hero */}
            <section className="bg-gray-950 py-20 md:py-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/landing-page/background2.png')] bg-cover bg-center opacity-20" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent" />

                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 relative z-10 text-center">
                    <FadeIn direction="up">
                        <span className="inline-block py-1 px-3 rounded-full bg-red/10 border border-red/20 text-red text-xs font-bold tracking-widest uppercase mb-6">
                            Insights & Berita
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight">
                            Our Blog
                        </h1>
                        <p className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
                            Kumpulan artikel teknis, opini industri, dan kabar terbaru dari seluruh kegiatan operasional INDOCOR ITS Student Chapter.
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* Content */}
            <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 -mt-10 relative z-20">

                {/* Search */}
                <FadeIn direction="up" delay={0.1}>
                    <div className="flex justify-center mb-16">
                        <div className="bg-white p-2 rounded-full shadow-lg border border-gray-100 flex items-center w-full max-w-xl">
                            <input
                                type="text"
                                placeholder="Cari artikel atau kategori..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full px-6 py-3 bg-transparent outline-none text-gray-700 placeholder:text-gray-400"
                            />
                            <div className="w-12 h-12 bg-red rounded-full flex items-center justify-center text-white shrink-0 shadow-sm cursor-pointer hover:bg-red/90 transition-colors">
                                <ArrowRight size={20} />
                            </div>
                        </div>
                    </div>
                </FadeIn>

                {/* Grid */}
                {filteredBlogs.length > 0 ? (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredBlogs.map((blog, index) => (
                            <FadeIn key={blog.id} direction="up" delay={0.1 * (index + 1)}>
                                <Link href={`/blog/${blog.slug}`} className="block h-full group">
                                    <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-red/5 border border-gray-100/80 transition-all duration-500 h-full flex flex-col items-start translate-y-0 hover:-translate-y-2">

                                        {/* Image */}
                                        <div className="relative h-60 w-full overflow-hidden p-2">
                                            <div className="relative h-full w-full rounded-2xl overflow-hidden">
                                                <Image
                                                    src={blog.image}
                                                    alt={blog.title}
                                                    fill
                                                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />

                                                {/* Category */}
                                                <div className="absolute top-4 left-4 z-20">
                                                    <span className="px-4 py-1.5 text-[11px] font-bold tracking-wider uppercase rounded-full bg-white text-black shadow-lg">
                                                        {blog.category}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="p-8 flex flex-col flex-grow w-full">
                                            {/* Meta */}
                                            <div className="flex items-center gap-4 text-xs font-semibold text-gray-500 mb-4">
                                                <div className="flex items-center gap-1.5">
                                                    <CalendarDays size={14} className="text-red" />
                                                    <span>{blog.date}</span>
                                                </div>
                                                <span className="w-1 h-1 rounded-full bg-gray-300" />
                                                <div className="flex items-center gap-1.5">
                                                    <User size={14} className="text-red" />
                                                    <span className="truncate max-w-[100px]">{blog.author}</span>
                                                </div>
                                            </div>

                                            {/* Title */}
                                            <h3 className="text-2xl font-bold text-gray-900 mb-4 line-clamp-3 group-hover:text-red transition-colors duration-300 leading-snug">
                                                {blog.title}
                                            </h3>

                                            {/* Excerpt */}
                                            <p className="text-gray-600 leading-relaxed line-clamp-2 mb-8 flex-grow">
                                                {blog.excerpt}
                                            </p>

                                            {/* Footer */}
                                            <div className="mt-auto w-full pt-6 border-t border-gray-100 flex items-center justify-between">
                                                <span className="text-sm font-bold text-gray-900 group-hover:text-red transition-colors">
                                                    Baca Selengkapnya
                                                </span>
                                                <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-red group-hover:border-red group-hover:text-white transition-all duration-300">
                                                    <ArrowRight size={14} className="text-current transition-transform duration-300 group-hover:-rotate-45" />
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </Link>
                            </FadeIn>
                        ))}
                    </div>
                ) : (
                    <FadeIn direction="up">
                        <div className="text-center py-32 bg-white rounded-3xl border border-gray-100 shadow-sm px-6">
                            <div className="w-20 h-20 bg-gray-50 rounded-full mx-auto flex items-center justify-center mb-6">
                                <span className="text-3xl">📭</span>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">Artikel Tidak Ditemukan</h3>
                            <p className="text-gray-500 max-w-sm mx-auto">Kami tidak dapat menemukan artikel dengan kata kunci "{searchQuery}". Coba kata kunci lainnya.</p>
                            <button
                                onClick={() => setSearchQuery("")}
                                className="mt-8 px-8 py-3 bg-red text-white text-sm font-bold rounded-full hover:bg-red/90 transition-colors"
                            >
                                Reset Pencarian
                            </button>
                        </div>
                    </FadeIn>
                )}

            </section>
        </main>
    );
}

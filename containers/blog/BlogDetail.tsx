"use client";

import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";
import { CalendarDays, User, Tag, Search } from "lucide-react";
import { BlogPost, blogData } from "@/data/blog";

interface BlogDetailProps {
    blog: BlogPost;
}

export default function BlogDetail({ blog }: BlogDetailProps) {
    // Sidebar data
    const recentPosts = blogData
        .filter((post) => post.id !== blog.id)
        .slice(0, 3);

    return (
        <article className="min-h-screen bg-gray-50/50 pb-24 pt-10">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex flex-col lg:flex-row gap-12">

                {/* Main Content */}
                <div className="lg:w-2/3">
                    <FadeIn direction="up">
                        {/* Category */}
                        <div className="mb-4">
                            <span className="inline-block bg-red text-white text-xs font-bold px-3 py-1 rounded-sm uppercase tracking-wider">
                                {blog.category}
                            </span>
                        </div>

                        {/* Title */}
                        <h1 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-gray-900 leading-tight mb-6">
                            {blog.title}
                        </h1>

                        {/* Meta */}
                        <div className="flex flex-wrap items-center gap-4 text-sm font-semibold text-gray-600 mb-8 border-b border-gray-200 pb-6">
                            <div className="flex items-center gap-2">
                                <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                                    <User size={14} className="text-gray-500" />
                                </div>
                                <span>By <span className="text-gray-900">{blog.author}</span></span>
                            </div>
                            <span className="w-1 h-1 rounded-full bg-gray-300" />
                            <div className="flex items-center gap-1.5">
                                <CalendarDays size={16} className="text-gray-400" />
                                <span>{blog.date}</span>
                            </div>
                            <span className="w-1 h-1 rounded-full bg-gray-300" />
                            <div className="flex items-center gap-1.5">
                                <Tag size={16} className="text-gray-400" />
                                <span className="text-red">#{blog.category.replace(/\s+/g, '')}</span>
                            </div>
                        </div>

                        {/* Featured Image */}
                        <div className="w-full aspect-[16/9] relative rounded-lg overflow-hidden mb-8 shadow-sm">
                            <Image
                                src={blog.image}
                                alt={blog.title}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>

                        {/* Article Content */}
                        <div className="pt-6 pb-20">
                            {/* Excerpt */}
                            {blog.excerpt && (
                                <div className="text-xl md:text-[22px] text-[#2b3a4a] font-medium leading-[1.7] mb-10 pb-10 border-b border-gray-200 italic">
                                    "{blog.excerpt}"
                                </div>
                            )}

                            {/* Content */}
                            <div
                                className="prose md:prose-lg max-w-none text-[#2d3748] leading-[1.8] tracking-wide
                                    prose-headings:font-bold prose-headings:text-[#1a202c] prose-headings:mt-12 prose-headings:mb-6
                                    prose-p:mb-8
                                    prose-a:text-[#9D0808] hover:prose-a:text-[#7A0606] prose-a:font-semibold
                                    prose-img:rounded-xl prose-img:shadow-sm"
                                dangerouslySetInnerHTML={{ __html: blog.content }}
                            />
                        </div>
                    </FadeIn>
                </div>

                {/* Sidebar */}
                <div className="lg:w-1/3">
                    <FadeIn direction="left" delay={0.2}>
                        <div className="sticky top-28 flex flex-col gap-8">

                            {/* Search */}
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="Cari ..."
                                        className="w-full pl-4 pr-12 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red/20 focus:border-red transition-all"
                                    />
                                    <button className="absolute right-0 top-0 bottom-0 px-4 bg-red text-white font-bold rounded-r-lg hover:bg-red/90 transition-colors">
                                        Cari
                                    </button>
                                </div>
                            </div>

                            {/* Recent Posts */}
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                <h3 className="text-xl font-bold text-gray-900 mb-6 pb-4 border-b border-gray-100 border-dashed">
                                    Pos-Pos Terbaru
                                </h3>
                                <div className="flex flex-col gap-6">
                                    {recentPosts.map((post) => (
                                        <Link href={`/blog/${post.slug}`} key={post.id} className="group flex gap-4">
                                            <div className="relative w-20 h-20 rounded-md overflow-hidden flex-shrink-0">
                                                <Image
                                                    src={post.image}
                                                    alt={post.title}
                                                    fill
                                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                                />
                                            </div>
                                            <div className="flex flex-col">
                                                <h4 className="text-sm font-bold text-gray-900 line-clamp-2 group-hover:text-red transition-colors leading-snug mb-2">
                                                    {post.title}
                                                </h4>
                                                <span className="text-xs font-semibold text-gray-500 mt-auto">
                                                    {post.date}
                                                </span>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            {/* Categories */}
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                <h3 className="text-xl font-bold text-gray-900 mb-6 pb-4 border-b border-gray-100 border-dashed">
                                    Kategori
                                </h3>
                                <ul className="space-y-3">
                                    {['Industrial Insight', 'Technical Guide', 'Campus Events', 'News'].map((cat, idx) => (
                                        <li key={idx}>
                                            <Link href="/blog" className="text-gray-600 font-medium hover:text-red hover:pl-2 transition-all flex items-center justify-between">
                                                <span>{cat}</span>
                                                <span className="w-6 h-6 rounded-full bg-gray-50 flex items-center justify-center text-xs text-gray-400">
                                                    {Math.floor(Math.random() * 5) + 1}
                                                </span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                        </div>
                    </FadeIn>
                </div>

            </div>
        </article>
    );
}

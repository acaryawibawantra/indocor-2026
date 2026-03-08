import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { blogData } from '@/data/blog';
import BlogDetail from '@/containers/blog/BlogDetail';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Generate static params for all known blog posts (optional but good for performance)
export function generateStaticParams() {
    return blogData.map((blog) => ({
        slug: blog.slug,
    }));
}

// Generate dynamic metadata based on the blog slug
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const blog = blogData.find((b) => b.slug === slug);

    if (!blog) {
        return {
            title: 'Artikel Tidak Ditemukan - INDOCOR ITS SC',
        };
    }

    return {
        title: `${blog.title} - INDOCOR ITS SC`,
        description: blog.excerpt,
    };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const blog = blogData.find((b) => b.slug === slug);

    if (!blog) {
        // Automatically render the generic 404 page if blog is not found
        notFound();
    }

    return (
        <main className="bg-white min-h-screen pt-20">
            <Navbar />
            <BlogDetail blog={blog} />
            <Footer />
        </main>
    );
}

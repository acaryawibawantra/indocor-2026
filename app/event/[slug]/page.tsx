import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { eventsData } from '@/data/events';
import EventDetail from '@/containers/event/EventDetail';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Generate static params for all known events (optional but good for performance)
export function generateStaticParams() {
    return eventsData.map((event) => ({
        slug: event.slug,
    }));
}

// Generate dynamic metadata based on the event slug
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const event = eventsData.find((e) => e.slug === slug);

    if (!event) {
        return {
            title: 'Acara Tidak Ditemukan - INDOCOR ITS SC',
        };
    }

    return {
        title: `${event.title} - INDOCOR ITS SC`,
        description: event.description,
    };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const event = eventsData.find((e) => e.slug === slug);

    if (!event) {
        // Automatically render the generic 404 page if event is not found
        notFound();
    }

    return (
        <main className="bg-white min-h-screen pt-20">
            <Navbar />
            <EventDetail event={event} />
            <Footer />
        </main>
    );
}

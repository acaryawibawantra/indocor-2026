"use client";

import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";
import { CalendarDays, MapPin, ArrowLeft, Users, PlayCircle, CheckCircle } from "lucide-react";
import { Event } from "@/data/events";

interface EventDetailProps {
    event: Event;
}

export default function EventDetail({ event }: EventDetailProps) {
    const isUpcoming = event.status === "upcoming";

    return (
        <article className="min-h-screen bg-white pb-24">

            {/* Hero Section */}
            <section className="relative h-[60vh] min-h-[500px] bg-black overflow-hidden flex items-end">
                <div className="absolute inset-0 z-0">
                    <Image
                        src={event.image}
                        alt={event.title}
                        fill
                        className="object-cover opacity-60"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                </div>

                <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 lg:px-20 w-full pb-16">
                    <FadeIn direction="up">
                        <Link
                            href="/event"
                            className="inline-flex items-center text-gray-300 hover:text-white transition-colors mb-8 group"
                        >
                            <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />
                            Back to Events
                        </Link>

                        <div className="flex flex-wrap items-center gap-3 mb-6">
                            <span className={`px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase ${isUpcoming ? "bg-red text-white" : "bg-gray-800 text-gray-300"
                                }`}>
                                {isUpcoming ? "Upcoming" : "Past Event"}
                            </span>
                        </div>

                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 tracking-tight">
                            {event.title}
                        </h1>

                        <div className="flex flex-col md:flex-row gap-4 md:gap-8 text-gray-300">
                            <div className="flex items-center gap-3">
                                <CalendarDays size={20} className="text-red flex-shrink-0" />
                                <span className="text-lg">{event.date}</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <MapPin size={20} className="text-red flex-shrink-0" />
                                <span className="text-lg">{event.location}</span>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Content Body */}
            <section className="max-w-5xl mx-auto px-6 md:px-12 lg:px-20 py-16">
                <div className="grid lg:grid-cols-3 gap-16">

                    {/* Main Content (Left) */}
                    <div className="lg:col-span-2">
                        <FadeIn direction="up">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-red/10 flex items-center justify-center">
                                    <span className="w-2.5 h-2.5 rounded-full bg-red" />
                                </div>
                                Tentang Acara Ini
                            </h2>
                            <div className="prose prose-lg prose-red text-gray-600 leading-relaxed mb-12">
                                <p>{event.description}</p>
                                <p>
                                    Acara ini didesain khusus bagi praktisi, akademisi, dan mahasiswa untuk saling bertukar gagasan,
                                    membangun jaringan, dan memecahkan masalah industri riil yang berkaitan dengan pengendalian korosi
                                    di Indonesia.
                                </p>
                            </div>
                        </FadeIn>

                        {/* Speakers Section (if any) */}
                        {event.speakers && event.speakers.length > 0 && (
                            <FadeIn direction="up" delay={0.1}>
                                <h3 className="text-xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                                    <Users size={24} className="text-red" />
                                    Pembicara Utama
                                </h3>
                                <div className="grid sm:grid-cols-2 gap-6">
                                    {event.speakers.map((speaker, idx) => (
                                        <div key={idx} className="flex items-center gap-4 p-4 rounded-2xl border border-gray-100 bg-gray-50/50 hover:bg-white hover:shadow-sm transition-all">
                                            <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0 border-2 border-white shadow-sm">
                                                <Image
                                                    src={speaker.image}
                                                    alt={speaker.name}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-gray-900">{speaker.name}</h4>
                                                <p className="text-sm text-gray-500">{speaker.role}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </FadeIn>
                        )}
                    </div>

                    {/* Sidebar (Right) */}
                    <div className="lg:col-span-1">
                        <FadeIn direction="left" delay={0.2}>
                            <div className="sticky top-32 bg-gray-50 rounded-3xl p-8 border border-gray-100 shadow-sm">
                                <h3 className="text-lg font-bold text-gray-900 mb-6">Informasi Detail</h3>

                                <ul className="space-y-6 mb-8">
                                    <li className="flex gap-4">
                                        <div className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center flex-shrink-0 text-red">
                                            <CalendarDays size={18} />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500 mb-1">Tanggal Pelaksanaan</p>
                                            <p className="font-medium text-gray-900">{event.date}</p>
                                        </div>
                                    </li>
                                    <li className="flex gap-4">
                                        <div className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center flex-shrink-0 text-red">
                                            <MapPin size={18} />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500 mb-1">Lokasi Kegiatan</p>
                                            <p className="font-medium text-gray-900">{event.location}</p>
                                        </div>
                                    </li>
                                </ul>

                                {isUpcoming ? (
                                    <>
                                        <div className="bg-red/5 border border-red/10 rounded-xl p-4 mb-6">
                                            <div className="flex items-center gap-2 text-red font-bold mb-2">
                                                <PlayCircle size={18} />
                                                <span>Pendaftaran Terbuka</span>
                                            </div>
                                            <p className="text-sm text-gray-600">Amankan kursi Anda sekarang. Kuota terbatas untuk acara offline.</p>
                                        </div>
                                        {event.registrationLink ? (
                                            <Link
                                                href={event.registrationLink}
                                                className="block w-full text-center bg-red hover:bg-red/90 text-white font-bold py-4 rounded-full transition-colors shadow-lg shadow-red/30"
                                            >
                                                Daftar Sekarang
                                            </Link>
                                        ) : (
                                            <button className="w-full bg-red text-white py-4 rounded-full opacity-50 cursor-not-allowed">
                                                Link Belum Tersedia
                                            </button>
                                        )}
                                    </>
                                ) : (
                                    <div className="bg-gray-100 rounded-xl p-6 text-center text-gray-500 border border-gray-200">
                                        <CheckCircle size={32} className="mx-auto text-gray-400 mb-3" />
                                        <p className="font-medium">Acara Telah Selesai</p>
                                        <p className="text-sm mt-1">Terima kasih kepada seluruh peserta.</p>
                                    </div>
                                )}
                            </div>
                        </FadeIn>
                    </div>

                </div>
            </section>
        </article>
    );
}

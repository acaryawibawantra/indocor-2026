import Link from "next/link";
import { Mail, MapPin, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-navy-900 text-steel-400 py-12 border-t border-navy-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <Link href="/" className="font-heading font-bold text-2xl text-white flex items-center gap-2">
                            <span className="text-primary-500">INDOCOR</span>
                            <span className="font-light">ITS</span>
                        </Link>
                        <p className="text-sm max-w-sm leading-relaxed">
                            Indonesian Corrosion Association Student Chapter of Institut Teknologi Sepuluh Nopember. Advancing corrosion knowledge and practices.
                        </p>
                        <div className="flex space-x-4 pt-2">
                            <a href="#" className="text-steel-400 hover:text-white transition-colors">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="text-steel-400 hover:text-white transition-colors">
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Contact */}
                    <div className="space-y-4">
                        <h4 className="font-heading text-lg font-semibold text-white">Contact Us</h4>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <MapPin size={20} className="text-primary-500 shrink-0 mt-0.5" />
                                <span className="text-sm">
                                    Departemen Teknik Material dan Metalurgi<br />
                                    Institut Teknologi Sepuluh Nopember<br />
                                    Surabaya, Indonesia
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={20} className="text-primary-500 shrink-0" />
                                <a href="mailto:indocor@its.ac.id" className="text-sm hover:text-white transition-colors">
                                    indocor@its.ac.id
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="font-heading text-lg font-semibold text-white">Quick Links</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="#about" className="text-sm hover:text-white transition-colors">About Us</Link>
                            </li>
                            <li>
                                <Link href="#events" className="text-sm hover:text-white transition-colors">Events</Link>
                            </li>
                            <li>
                                <Link href="#resources" className="text-sm hover:text-white transition-colors">Resources</Link>
                            </li>
                            <li>
                                <Link href="#join" className="text-sm hover:text-white transition-colors">Join Chapter</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-navy-800 text-sm text-center">
                    <p>&copy; {new Date().getFullYear()} INDOCOR ITS Student Chapter. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

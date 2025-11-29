"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

interface Experience {
    year: string;
    title: string;
    type: string;
    company: string;
    location: string;
    period: string;
    description: string[];
    current?: boolean;
}

const experiences: Experience[] = [
    {
        year: "2025",
        title: "Mobile App Development",
        type: "Study Independent",
        company: "NF Academy",
        current: true,
        location: "Indonesia",
        period: "Sep - Dec 2025",
        description: [
            "Mempelajari pengembangan aplikasi mobile menggunakan Flutter dengan fokus pada mobile-first design.",
            "Mengimplementasikan state management dan integrasi dengan berbagai services.",
            "Membangun aplikasi mobile yang responsif dan user-friendly.",
            "Menerapkan best practices dalam pengembangan mobile application.",
        ],
    },
    {
        year: "2024",
        title: "Core Team Mobile Development",
        type: "Core Team",
        company: "SLP Community",
        location: "Indonesia",
        period: "Nov 2024 - Present",
        description: [
            "Memberikan materi tentang dasar-dasar Flutter, widget, state management (Provider/Bloc), dan integrasi Firebase.",
            "Membimbing peserta dalam membangun UI/UX, mengelola state, dan mengintegrasikan Firebase (Auth, Firestore, Storage).",
            "Memberikan mentoring, dukungan teknis, dan evaluasi hasil kerja kepada peserta.",
            "Berkolaborasi dengan tim dalam penyusunan kurikulum dan materi pelatihan untuk memastikan proses pembelajaran yang efektif.",
        ],
    },

    {
        year: "2024",
        title: "Web Developer",
        type: "Internship",
        company: "Kersa",
        location: "Indonesia",
        period: "Apr - Jun 2024",
        description: [
            "Membuat tampilan awal website, termasuk struktur halaman utama, navigasi, dan elemen visual menggunakan HTML, CSS, dan JavaScript.",
            "Mengembangkan halaman artikel, memastikan tampilan yang responsif dan mudah dibaca oleh pengguna.",
            "Merancang UI/UX untuk halaman admin, memastikan antarmuka yang intuitif dan user-friendly bagi pengelola konten.",
            "Membangun dashboard admin menggunakan Laravel, mengimplementasikan fitur manajemen data, otentikasi pengguna, dan pengelolaan konten.",
            "Mengoptimalkan performa dan responsivitas website, serta memastikan kompatibilitas dengan berbagai perangkat.",
        ],
    },
    {
        year: "2024",
        title: "Fullstack Developer",
        type: "Project Based Internship - By Rakamin Academy",
        company: "BTPN Syariah",
        location: "Indonesia",
        period: "Oct - Dec 2024",
        description: [
            "Merancang dan mengembangkan API menggunakan GoLang untuk fitur upload dan hapus gambar.",
            "Menerapkan sistem autentikasi dan otorisasi menggunakan JWT untuk mengamankan data pengguna.",
            "Mengelola dan merancang struktur database menggunakan GORM dengan MySQL, termasuk implementasi relasi antar model.",
            "Berkolaborasi dalam tim untuk menyelesaikan project-based tasks dengan efektif.",
        ],
    },
];

const ExperienceCard: React.FC<{ experience: Experience; index: number }> = ({
    experience,
    index,
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative flex gap-6 md:gap-8 group"
        >
            {/* Year Column */}
            <div className="flex-shrink-0 w-16 md:w-20 text-right">
                <span className="text-lg md:text-xl font-bold text-primary">
                    {experience.year}
                </span>
            </div>

            {/* Timeline Line & Dot */}
            <div className="relative flex flex-col items-center">
                <div className="w-4 h-4 rounded-full bg-primary ring-4 ring-secondary  z-10 group-hover:scale-125 transition-transform duration-300" />
                <div className="w-0.5 h-full bg-gradient-to-b from-primary to-transparent dark:from-primary/50 absolute top-4" />
            </div>

            {/* Content Card */}
            <div className="flex-1 pb-12">
                <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                    className="bg-white dark:bg-gray-800 rounded-2xl transition-all duration-300 p-6 md:p-8 border border-gray-100 dark:border-gray-700"
                >
                    {/* Header */}
                    <div className="mb-4">
                        <div className="flex items-start justify-between flex-wrap gap-2 mb-2">
                            <h3 className="text-xl md:text-2xl font-bold text-primary">
                                {experience.title}
                            </h3>
                            {experience.current && (
                                <span className="px-3 py-1 bg-primary text-secondary text-xs font-semibold rounded-full">
                                    Current
                                </span>
                            )}
                        </div>

                        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400     font-medium mb-3">
                            <Briefcase className="w-4 h-4" />
                            <span className="text-sm md:text-base">
                                {experience.type} at {experience.company}
                            </span>
                        </div>

                        <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
                            <div className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                <span>{experience.period}</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <MapPin className="w-4 h-4" />
                                <span>{experience.location}</span>
                            </div>
                        </div>
                    </div>

                    {/* Description */}
                    <div className="space-y-2">
                        <ul className="space-y-2">
                            {experience.description.map((item, idx) => (
                                <motion.li
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                                    className="flex gap-3 text-gray-700 dark:text-gray-300 text-sm md:text-base"
                                >
                                    <span className="text-purple-500 mt-1.5 flex-shrink-0">
                                        •
                                    </span>
                                    <span className="leading-relaxed">{item}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

const Experiences: React.FC = () => {
    return (
        <section
            id="experience"
            className="py-20 md:py-32 bg-gradient-to-br from-gray-50 via-purple-50/30 to-gray-50 dark:from-gray-900 dark:via-purple-900/10 dark:to-gray-900"
        >
            <div className="container mx-auto px-4 md:px-6 max-w-6xl">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16 md:mb-20"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary rounded-full mb-6">
                        <Briefcase className="w-5 h-5 text-secondary" />
                        <span className="text-secondary font-medium">
                            Experience
                        </span>
                    </div>

                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-primary">
                        My Professional Journey
                    </h2>

                    <p className="text-gray-600 dark:text-gray-400 text-md md:text-lg max-w-3xl mx-auto">
                        From honing my skills to leading projects, explore the milestones
                        that define my career.
                    </p>
                </motion.div>

                {/* Timeline */}
                <div className="relative">
                    {experiences.map((experience, index) => (
                        <ExperienceCard
                            key={index}
                            experience={experience}
                            index={index}
                        />
                    ))}
                </div>

                {/* Footer CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mt-12"
                >
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                        Want to know more about my journey?
                    </p>
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-secondary font-semibold rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300"
                    >
                        Let's Connect
                        <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                        </svg>
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Experiences;

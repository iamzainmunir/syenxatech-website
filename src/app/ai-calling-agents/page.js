"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
    ArrowRight,
    Phone,
    Clock,
    TrendingUp,
    ShieldCheck,
    Globe,
    Calendar,
    MessageSquare,
} from "lucide-react";
import CountUp from "@/components/countup";

export default function AICallingAgents() {
    return (
        <div className="min-h-screen bg-[#020202] text-white selection:bg-[#ff541f]/30 selection:text-[#ff541f]">
            {/* Global Grain Texture */}
            <div
                className="fixed inset-0 pointer-events-none opacity-[0.04] mix-blend-white"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                }}
            />

            {/* Hero Section */}
            <section className="relative pt-40 pb-24 px-6 md:px-12 max-w-7xl mx-auto text-center z-10">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#ff541f]/10 rounded-full blur-[128px] pointer-events-none" />

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block py-1 px-3 rounded-full border border-white/10 bg-white/5 text-[#ff541f] text-xs font-mono tracking-widest uppercase mb-6 backdrop-blur-md">
                        AI Voice Intelligence
                    </span>
                    <h1 className="font-display text-5xl md:text-8xl font-bold leading-[0.9] tracking-tight text-white mb-8">
                        Transform Your Sales <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/40">
                            With Adaptive AI.
                        </span>
                    </h1>
                    <p className="font-body text-lg md:text-2xl text-white/50 max-w-3xl mx-auto leading-relaxed mb-10">
                        Speed to lead is everything. Syenxa Tech's AI Agents
                        provide 24/7 global coverage, ensuring every lead is
                        qualified and booked in seconds.
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                        <Link
                            href="/contact"
                            className="px-8 py-4 bg-[#ff541f] text-white font-bold rounded-full hover:bg-white hover:text-black transition-all duration-300"
                        >
                            Get Started
                        </Link>
                        <Link
                            href="/use-cases"
                            className="flex items-center gap-2 px-8 py-4 bg-white/5 border border-white/10 text-white font-medium rounded-full hover:bg-white/10 transition-all duration-300 group"
                        >
                            View Use Cases
                            <ArrowRight
                                size={18}
                                className="group-hover:translate-x-1 transition-transform"
                            />
                        </Link>
                    </div>
                </motion.div>
            </section>

            {/* Stats Section */}
            <section className="py-20 border-y border-white/5 bg-white/[0.02]">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                    {[
                        { value: 100, suffix: "%", label: "Lead Coverage" },
                        { value: 0, suffix: "s", label: "Wait Time" },
                        { value: 24, suffix: "/7", label: "Availability" },
                        { value: 3, suffix: "x", label: "Conversion Rate" },
                    ].map((stat, i) => (
                        <div key={i}>
                            <div className="font-display font-bold text-4xl md:text-5xl text-white mb-2">
                                <span className="text-[#ff541f]">
                                    {stat.value}
                                    {stat.suffix}
                                </span>
                            </div>
                            <p className="text-white/40 text-sm uppercase tracking-wider">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto relative">
                <div className="mb-16 text-center">
                    <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                        Built for Performance
                    </h2>
                    <p className="text-lg text-white/50 max-w-2xl mx-auto">
                        Skip the call center overhead. Our AI agents scale
                        infinitely and never have a bad day.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            title: "24/7 Availability",
                            desc: "Never miss a lead again. Our agents capture opportunities day and night.",
                            icon: Clock,
                        },
                        {
                            title: "Natural NLP",
                            desc: "Conversations that feel human, professional, and indistinguishable from reality.",
                            icon: MessageSquare,
                        },
                        {
                            title: "Global Scalability",
                            desc: "Handle hundreds of simultaneous calls without hiring new staff.",
                            icon: Globe,
                        },
                        {
                            title: "Auto-Booking",
                            desc: "Seamlessly integrates with your calendar to book meetings directly.",
                            icon: Calendar,
                        },
                        {
                            title: "Instant Qualify",
                            desc: "AI asks the right questions to ensure you only speak to serious buyers.",
                            icon: ShieldCheck,
                        },
                        {
                            title: "Revenue Growth",
                            desc: "Increase conversion rates by engaging leads immediately.",
                            icon: TrendingUp,
                        },
                    ].map((feature, index) => (
                        <div
                            key={index}
                            className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-[#ff541f]/50 hover:bg-white/10 transition-all duration-300 group"
                        >
                            <div className="w-12 h-12 rounded-xl bg-[#ff541f]/10 text-[#ff541f] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <feature.icon size={24} />
                            </div>
                            <h3 className="font-display text-xl font-bold text-white mb-3 group-hover:text-[#ff541f] transition-colors">
                                {feature.title}
                            </h3>
                            <p className="font-body text-white/50 leading-relaxed group-hover:text-white/70 transition-colors">
                                {feature.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA Strip */}
            <section className="py-24 px-6 text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[#ff541f]/5" />
                <div className="relative z-10 max-w-4xl mx-auto">
                    <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-8">
                        Ready to Automate Your Outreach?
                    </h2>
                    <p className="text-xl text-white/60 mb-10">
                        See how our AI agents fit into your specific industry.
                    </p>
                    <Link
                        href="/use-cases"
                        className="inline-flex items-center gap-3 px-10 py-5 bg-white text-black font-bold rounded-full hover:bg-[#ff541f] hover:text-white transition-all duration-300 scale-100 hover:scale-105"
                    >
                        Explore Use Cases
                        <ArrowRight size={20} />
                    </Link>
                </div>
            </section>
        </div>
    );
}

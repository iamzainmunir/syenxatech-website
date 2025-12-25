"use client";

import { motion } from "motion/react";
import { useMemo } from "react";

/**
 * PageTransitionOverlay - Simple curtain animation
 *
 * @param {string} state - "entering" | "leaving" | "hidden"
 */
export default function PageTransitionOverlay({
    state,
    color = "var(--primary-color)",
    direction = "right",
    durationIn = 0.3,
    durationOut = 0.3,
}) {
    // Calculate slide positions
    const variants = useMemo(() => {
        const positions = {
            left: { enterFrom: { x: "-100%" }, exitTo: { x: "100%" } },
            right: { enterFrom: { x: "100%" }, exitTo: { x: "-100%" } },
            top: { enterFrom: { y: "-100%" }, exitTo: { y: "100%" } },
            bottom: { enterFrom: { y: "100%" }, exitTo: { y: "-100%" } },
        };

        return {
            fromOffscreen: positions[direction].enterFrom,
            center: { x: 0, y: 0 },
            toOffscreen: positions[direction].exitTo,
        };
    }, [direction]);

    // Determine animation state
    const getAnimate = () => {
        if (state === "entering") return "center";
        if (state === "leaving") return "toOffscreen";
        return "fromOffscreen";
    };

    return (
        <motion.div
            className="fixed inset-0 z-[9999] pointer-events-none"
            style={{ backgroundColor: color }}
            initial="fromOffscreen"
            animate={getAnimate()}
            variants={variants}
            transition={{
                type: "tween",
                ease: [0.25, 1, 0.5, 1],
                duration: state === "leaving" ? durationOut : durationIn,
            }}
        />
    );
}

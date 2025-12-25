"use client";

import { motion } from "motion/react";
import { useEffect, useState, useMemo, useRef } from "react";

/**
 * AnimatedPageWrapper - Only animates when enabled becomes true
 */
export default function AnimatedPageWrapper({
    children,
    staggerDelay = 0.06,
    enabled = true,
}) {
    const [isVisible, setIsVisible] = useState(false);
    const prevEnabledRef = useRef(enabled);

    // ALL hooks first
    const containerVariants = useMemo(() => ({
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: staggerDelay,
                delayChildren: 0.05,
            },
        },
    }), [staggerDelay]);

    const itemVariants = useMemo(() => ({
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "tween",
                ease: [0.25, 1, 0.5, 1],
                duration: 0.4,
            },
        },
    }), []);

    useEffect(() => {
        // Only trigger animation when enabled transitions from false to true
        if (enabled && !prevEnabledRef.current) {
            setIsVisible(true);
        } else if (!enabled) {
            // Reset when disabled
            setIsVisible(false);
        }

        // Update ref for next render
        prevEnabledRef.current = enabled;
    }, [enabled]);

    // If disabled, render children directly without motion wrapper
    if (!enabled) {
        return <>{children}</>;
    }

    const childrenArray = Array.isArray(children) ? children : [children];

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
        >
            {childrenArray.map((child, index) => (
                <motion.div
                    key={child.key || index}
                    variants={itemVariants}
                >
                    {child}
                </motion.div>
            ))}
        </motion.div>
    );
}

"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import PageTransitionOverlay from "./PageTransitionOverlay";

/**
 * PageTransitionProvider - Clean, simple transitions
 */
export default function PageTransitionProvider({
    children,
    config = {},
}) {
    const pathname = usePathname();
    const previousPathname = useRef(pathname);
    const [overlayState, setOverlayState] = useState("hidden"); // hidden | entering | leaving
    const timeoutRef = useRef(null);

    const {
        color = "var(--primary-color)",
        direction = "right",
        durationIn = 0.3,
        durationOut = 0.3,
        holdDuration = 0.1,
        enabled = true,
    } = config;

    useEffect(() => {
        // Skip initial mount
        if (previousPathname.current === pathname) {
            previousPathname.current = pathname;
            return;
        }

        // Clear any existing timeout
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        // Start transition
        setOverlayState("entering");

        // Phase 1: Hold at center
        timeoutRef.current = setTimeout(() => {
            setOverlayState("leaving");
        }, (durationIn + holdDuration) * 1000);

        // Phase 2: Hide overlay completely
        timeoutRef.current = setTimeout(() => {
            setOverlayState("hidden");
        }, (durationIn + holdDuration + durationOut) * 1000);

        previousPathname.current = pathname;

        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, [pathname, durationIn, durationOut, holdDuration]);

    if (!enabled) {
        return <>{children}</>;
    }

    return (
        <>
            {overlayState !== "hidden" && (
                <PageTransitionOverlay
                    state={overlayState}
                    color={color}
                    direction={direction}
                    durationIn={durationIn}
                    durationOut={durationOut}
                />
            )}

            {/* Always render children directly - no separate content animation */}
            {children}
        </>
    );
}

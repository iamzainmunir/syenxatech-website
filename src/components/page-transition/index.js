/**
 * Page Transition Components
 *
 * A cinematic overlay/curtain reveal page transition system for Next.js App Router.
 *
 * @module page-transition
 *
 * @example Basic usage in layout.js:
 * ```jsx
 * import PageTransitionProvider from "@/components/page-transition";
 *
 * export default function RootLayout({ children }) {
 *     return (
 *         <html lang="en">
 *             <body>
 *                 <PageTransitionProvider>
 *                     {children}
 *                 </PageTransitionProvider>
 *             </body>
 *         </html>
 *     );
 * }
 * ```
 *
 * @example With custom configuration:
 * ```jsx
 * <PageTransitionProvider
 *     config={{
 *         color: "#ff541f",
 *         direction: "left",
 *         durationIn: 0.5,
 *         durationOut: 0.6,
 *         enableContentAnimation: true,
 *     }}
 * >
 *     {children}
 * </PageTransitionProvider>
 * ```
 */

export { default as PageTransitionProvider } from "./PageTransitionProvider";
export { default as PageTransitionOverlay } from "./PageTransitionOverlay";
export { default as AnimatedPageWrapper } from "./AnimatedPageWrapper";
export { default } from "./PageTransitionProvider";

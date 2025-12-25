# Page Transition System

A cinematic overlay/curtain reveal page transition system for Next.js App Router using Framer Motion.

## Overview

This system provides smooth, professional page transitions that:
- Slide a branded overlay curtain to cover the current page
- Hold briefly while the next page loads
- Reveal the new page with an exit animation
- Fade-up page content with staggered timing

## Files Created

```
src/components/page-transition/
├── PageTransitionProvider.jsx    # Main orchestrator (detects route changes)
├── PageTransitionOverlay.jsx     # The curtain animation
├── AnimatedPageWrapper.jsx       # Content reveal animation
└── index.js                      # Export barrel
```

## Files Modified

```
src/app/layout.js                 # Wrapped {children} with PageTransitionProvider
```

## Animation Lifecycle

```
1. User clicks link
   ↓
2. usePathname() detects route change
   ↓
3. Overlay slides IN from direction (covers viewport)
   Duration: 0.4s (configurable)
   ↓
4. Hold (maintains coverage)
   Duration: 0.15s (configurable)
   ↓
5. New page mounts behind curtain (invisible to user)
   ↓
6. Overlay slides AWAY (opposite direction)
   Duration: 0.5s (configurable)
   ↓
7. Page content fades up with stagger
   Stagger: 0.08s per element
   ↓
8. Complete - ready for next navigation
```

## Configuration Options

Edit the `config` prop in `src/app/layout.js`:

```jsx
<PageTransitionProvider
    config={{
        // Overlay color - use your brand variable or hex
        color: "var(--primary-color)", // or "#ff541f"

        // Animation direction
        direction: "right", // "left" | "right" | "top" | "bottom"

        // Timing (in seconds)
        durationIn: 0.4,    // Overlay enter duration
        holdDuration: 0.15, // Hold time before exit
        durationOut: 0.5,   // Overlay exit duration

        // Content animation
        enableContentAnimation: true,  // Enable staggered fade-up
        staggerDelay: 0.08,            // Delay between elements

        // Global toggle
        enabled: true,     // Set false to disable all transitions
    }}
>
    {children}
</PageTransitionProvider>
```

### Direction Examples

| Direction | Effect | Best For |
|-----------|--------|----------|
| `"right"` | Slides from right, exits left | Forward navigation (default) |
| `"left"` | Slides from left, exits right | Back navigation feel |
| `"top"` | Slides down from top | Dramatic reveal |
| `"bottom"` | Slides up from bottom | Rising curtain effect |

### Color Options

```jsx
// CSS variable (recommended)
color: "var(--primary-color)"

// Hex color
color: "#ff541f"

// Tailwind class (needs wrapper)
color: "rgb(255, 84, 31)"

// Named color
color: "black"
```

## Accessibility

The system automatically detects `prefers-reduced-motion`:

- **Reduced motion ON**: Simple 0.2s cross-fade (no motion effects)
- **Reduced motion OFF**: Full cinematic transition

## Performance Optimizations

1. **GPU Acceleration**: Only animates `transform` and `opacity`
2. **Conditional Rendering**: Overlay doesn't render when idle
3. **will-change**: Applied only during active animations
4. **No Layout Shift**: Fixed positioning prevents content jump
5. **Navigation Spam Prevention**: Ignores rapid successive clicks
6. **Cleanup**: Timers and listeners properly cleared

## Edge Cases Handled

| Scenario | Behavior |
|----------|----------|
| Rapid link clicks | Ignores subsequent clicks until transition complete |
| Browser back/forward | Works seamlessly |
| Direct page load | No transition (only on route changes) |
| Initial mount | No transition |
| SSR/Hydration | No mismatch - transitions run client-side only |

## Customization Examples

### Faster, Subtle Transition

```jsx
config={{
    durationIn: 0.25,
    holdDuration: 0.1,
    durationOut: 0.3,
    enableContentAnimation: false,
}}
```

### Dramatic, Slow Transition

```jsx
config={{
    durationIn: 0.6,
    holdDuration: 0.3,
    durationOut: 0.7,
    direction: "top",
    enableContentAnimation: true,
    staggerDelay: 0.15,
}}
```

### Per-Page Transitions

To customize transitions for specific routes, create a custom provider:

```jsx
// In a specific page
import PageTransitionProvider from "@/components/page-transition";

export default function CustomPage() {
    return (
        <PageTransitionProvider
            config={{
                color: "var(--secondary-color)", // Different color
                direction: "left",               // Different direction
                durationIn: 0.3,
            }}
        >
            <YourPageContent />
        </PageTransitionProvider>
    );
}
```

### Disable Transitions for Specific Pages

```jsx
// Option 1: Use the global toggle in config
config={{ enabled: false }}

// Option 2: Don't wrap the page with PageTransitionProvider
// (Works because layout.js still wraps, but you can override)
```

## Troubleshooting

### Transitions not working
1. Check console for errors
2. Verify `enabled: true` in config
3. Ensure you're using `usePathname()` for navigation (Next.js Link component)
4. Check that framer-motion is installed: `npm list framer-motion`

### Content animation looks weird
1. Set `enableContentAnimation: false` to disable
2. Adjust `staggerDelay` for different timing
3. For complex pages, consider wrapping specific sections only

### Overlay color not showing
1. Verify CSS variable exists in `globals.css`
2. Try a hex color instead: `"#ff541f"`
3. Check browser inspector for the overlay element

### Performance issues on mobile
1. Reduce `durationIn` and `durationOut`
2. Set `enableContentAnimation: false`
3. The system already handles reduced motion preference

## Technical Details

### Dependencies
- `framer-motion` (already installed as `motion` package)
- `next/navigation` (built-in)

### Browser Support
- All modern browsers (Chrome, Firefox, Safari, Edge)
- Requires JavaScript enabled
- Gracefully degrades without JS (no transitions, but functional)

### Z-Index
- Overlay: `z-[9999]` - Above everything
- Content: Default stacking

## Removing the System

To completely remove page transitions:

1. **Restore layout.js** - Remove the PageTransitionProvider wrapper:
   ```jsx
   // Change from:
   <PageTransitionProvider config={{...}}>{children}</PageTransitionProvider>

   // Back to:
   {children}
   ```

2. **Delete the folder** (optional):
   ```bash
   rm -rf src/components/page-transition
   ```

3. **Remove import** from layout.js:
   ```jsx
   // Remove this line:
   import PageTransitionProvider from "@/components/page-transition";
   ```

---
name: Obsidian Cybernetic
colors:
  surface: '#111318'
  surface-dim: '#111318'
  surface-bright: '#37393e'
  surface-container-lowest: '#0c0e12'
  surface-container-low: '#1a1c20'
  surface-container: '#1e2024'
  surface-container-high: '#282a2e'
  surface-container-highest: '#333539'
  on-surface: '#e2e2e8'
  on-surface-variant: '#b9cacb'
  inverse-surface: '#e2e2e8'
  inverse-on-surface: '#2f3035'
  outline: '#849495'
  outline-variant: '#3b494b'
  surface-tint: '#00dbe9'
  primary: '#dbfcff'
  on-primary: '#00363a'
  primary-container: '#00f0ff'
  on-primary-container: '#006970'
  inverse-primary: '#006970'
  secondary: '#adc6ff'
  on-secondary: '#002e6a'
  secondary-container: '#0566d9'
  on-secondary-container: '#e6ecff'
  tertiary: '#d8ffe7'
  on-tertiary: '#003824'
  tertiary-container: '#65f2b5'
  on-tertiary-container: '#006d4a'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#7df4ff'
  primary-fixed-dim: '#00dbe9'
  on-primary-fixed: '#002022'
  on-primary-fixed-variant: '#004f54'
  secondary-fixed: '#d8e2ff'
  secondary-fixed-dim: '#adc6ff'
  on-secondary-fixed: '#001a42'
  on-secondary-fixed-variant: '#004395'
  tertiary-fixed: '#6ffbbe'
  tertiary-fixed-dim: '#4edea3'
  on-tertiary-fixed: '#002113'
  on-tertiary-fixed-variant: '#005236'
  background: '#111318'
  on-background: '#e2e2e8'
  surface-variant: '#333539'
typography:
  display-hero:
    fontFamily: Space Grotesk
    fontSize: 64px
    fontWeight: '700'
    lineHeight: 72px
    letterSpacing: -0.03em
  display-hero-mobile:
    fontFamily: Space Grotesk
    fontSize: 38px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 36px
    fontWeight: '600'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 26px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Space Grotesk
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: '0'
  body-lg:
    fontFamily: Geist
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: -0.01em
  body-md:
    fontFamily: Geist
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: '0'
  body-sm:
    fontFamily: Geist
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: '0'
  code-inline:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
    letterSpacing: '0'
  code-block:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: '0'
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.08em
  label-status:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.02em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-sm: 1rem
  gutter-lg: 2rem
  margin: 1.5rem
  margin-md: 3rem
  margin-lg: 5rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style
The design system establishes a high-performance, developer-first narrative for an autonomous software engineer and designer. It synthesizes the visual discipline of developer tooling with the luxury of modern high-end product showcases. 

The aesthetic is precision dark-mode: deep obsidian and charcoal structural planes layered with electric cyan energy accents. The emotional goal is immediate credibility, architectural rigor, and understated technological power. Visual elements rely on sharp layout geometry, low-profile hairline borders, micro-glow interactive signals, and intentional monospace accents that anchor the interface in software engineering mastery without descending into retro-terminal cliché.

## Colors
The color hierarchy is engineered specifically for deep-contrast technical dark mode:

- **Surface Tiers**: Base canvas rests at `#05070a` (true obsidian). Elevated panels and structural cards utilize `#0b0f17` (charcoal), layered against floating interactive elements at `#131924`.
- **Primary (`#00f0ff`)**: Electric Cyan serves as the active signal color—reserved for prominent CTAs, live execution metrics, high-priority interactive states, and core brand accents.
- **Secondary (`#3b82f6`)**: Cobalt Blue acts as the computational bridge, anchoring gradient backdrops, secondary links, and auxiliary tech stack identifiers.
- **Tertiary (`#10b981`)**: Emerald Pulse functions exclusively for system telemetry, active availability indicators, automated pipeline triggers, and operational status chips.
- **Neutral Accents & Borders**: Hairline dividers and micro-borders leverage `#1e2638` with an active hover state stepping up to `#2e3d5b`. Primary text renders at `#f1f5f9` (stark white-silver), secondary body text at `#94a3b8` (muted zinc), and technical metadata at `#64748b`.

## Typography
The typographical hierarchy balances structural modernism with mechanical precision:

- **Headlines (`Space Grotesk`)**: Provides geometric character and modern architectural weight. Used across page hero sections, project case-study titles, and system modules. Tight negative letter-spacing ensures a solid visual silhouette.
- **Body Text (`Geist`)**: Delivers hyper-legible, neutral reading experiences across long-form architecture overviews, engineering case notes, and project descriptions.
- **Technical Metadata & Telemetry (`JetBrains Mono`)**: Dictates metrics, tag labels, status chips, commit timestamps, and integrated code blocks. All uppercase metadata (`label-caps`) requires an expanded letter-spacing of `0.08em` for crisp legibility against dark surfaces.

## Layout & Spacing
The layout adheres to a fixed-max-width 12-column grid bounded at `1280px` desktop width, nested within responsive outer gutters:

- **Desktop (1024px+)**: 12-column grid with `2rem` gutters and `5rem` page margins. Structural project cards conform to 6-column or 4-column configurations; terminal preview panels span 8 columns.
- **Tablet (768px - 1023px)**: 8-column layout with `1.5rem` gutters and `3rem` margins. Interactive demo sidebars stack cleanly below project overviews.
- **Mobile (<768px)**: 4-column layout with `1rem` gutters and `1.5rem` margins. All structural grids collapse into vertical linear stacks.

Internal rhythm is controlled by standard spacing tokens (`space-xs` through `space-xl`). Card interiors strictly employ `space-lg` padding to preserve visual weight and prevent technical density from feeling cramped.

## Elevation & Depth
Visual hierarchy is articulated through high-definition dark surfaces, micro-borders, and targeted luminosity rather than soft drop shadows:

- **Surface Layers**: Canvas rests at Level 0 (`#05070a`). Containers and showcase cards occupy Level 1 (`#0b0f17`). Floating popovers, dropdowns, and navigation docks occupy Level 2 (`#131924`).
- **Hairline Micro-Borders**: Every panel utilizes a 1px solid border (`rgba(255, 255, 255, 0.08)` or `#1e2638`). This provides structural distinction across monochromatic dark planes.
- **Cyan Light Sheen & Bloom**: Interactive hovering activates a localized gradient stroke (`linear-gradient(135deg, rgba(0,240,255,0.4), transparent)`) and a diffused micro-glow: `0 0 24px -4px rgba(0, 240, 255, 0.15)`.
- **Backdrop Diffusion**: Floating navigation bars and modal overlays apply an ultra-dense backdrop blur (`blur(16px)` with `background: rgba(11, 15, 23, 0.8)`).

## Shapes
The shape language conveys precision instrument styling. Corners are disciplined and restrained (`roundedness: 1`):

- **Micro Components (Chips, Tags, Inputs)**: 4px border radius (`0.25rem`). Maintains a sharp, engineered form factor.
- **Cards, Code Snippets & Bento Blocks**: 8px border radius (`rounded-lg: 0.5rem`). Delivers modern softness without sacrificing the hard-tech aesthetic.
- **Special Status Pills**: Explicit status dots remain 100% circular (`rounded-full`), enclosed within 4px rounded rectangular badges.

## Components

### Buttons
- **Primary**: Solid Electric Cyan background (`#00f0ff`) with deep obsidian text (`#05070a`), `JetBrains Mono` medium typography, `0.25rem` radius, and 1px border (`#00f0ff`). Hover state applies an intense glow shadow (`0 0 20px rgba(0, 240, 255, 0.35)`) with an active scale tap effect of `0.98`.
- **Secondary / Ghost**: Transparent surface bounded by a 1px border (`#1e2638`), slate text (`#f1f5f9`). Hover triggers surface background change to `rgba(255, 255, 255, 0.04)` and border shift to `rgba(0, 240, 255, 0.4)`.

### Project Showcase Cards
- Constructed with a charcoal background (`#0b0f17`), 1px structural outline (`#1e2638`), and `0.5rem` radius.
- Cards feature an upper telemetry bar displaying git branch indicators, autonomous runtime labels, and deployment tags.
- On hover, the border transitions to cyan-tinted glow with an ambient background radial sheen originating from the cursor trajectory.

### Status Badges & Chips
- **System Status (Active / Building / Deployed)**: Encased in a `0.25rem` capsule with a 1px border (`rgba(16, 185, 129, 0.2)`), containing an internal breathing LED dot (`#10b981` with keyframe pulse) and `label-status` typography.
- **Tech Stack Badges**: Neutral slate backdrops (`rgba(255, 255, 255, 0.03)`), 1px border (`#1e2638`), displaying uppercase `label-caps` in `JetBrains Mono`.

### Input Fields & Search Bars
- Background surface is inset dark (`#070a0f`), 1px border (`#1e2638`), and `0.25rem` corner radius.
- Focus states dismiss default browser rings and assert a 1px electric cyan border accompanied by an internal focus bloom (`box-shadow: 0 0 12px rgba(0, 240, 255, 0.15)`). Monospaced placeholders render in `#64748b`.

### Interactive Code Previews & Metric Panels
- Terminal-styled wrappers equipped with minimal window control glyphs (monochromatic muted rings) and active line-numbering gutters.
- Metric display blocks highlight key numerical accomplishments (latency reduction, model parameters, API throughput) using `Space Grotesk` paired with cyan micro-labels.
# Gonzaga Code — Design System

> **Sites que convertem.** A design system for a Brazilian web agency focused on high-conversion websites: performance, technical SEO, and clean, mobile-first design.

This system was **designed from scratch** — Gonzaga Code had no prior logo, palette, or fonts. No codebase or Figma was provided. If brand assets exist, share them and this system will be reconciled against them. **Fonts are loaded from Google Fonts (CDN)** — see Visual Foundations to self-host.

---

## 1. Brand context

Gonzaga Code is a development agency that builds websites for businesses from small shops to large companies. The promise is commercial, not cosmetic: a site is an **asset that generates leads and sales**, judged by performance, SEO, and conversion — not by how it looks alone.

Operating principles that shape the brand voice and the product surfaces:
- **Technical priority** — Clean Architecture, mobile-first, modular and efficient code, native solutions before dependencies.
- **Growth lens** — every feature is justified by owner benefit (e.g. "faster load → less bounce → more leads").
- **Conversion proactivity** — suggest ways to test conversion (A/B testing on CTAs).
- **Consistency** — strict naming and style structure (this system).

**Products represented**
1. **Marketing / agency website** — the public site that sells the agency.
2. **Client landing-page template** — a reusable single-offer, high-conversion page sold to clients.
3. **Dashboard / client portal** — where a client sees their site's leads, conversion, and Core Web Vitals.

**Sources given:** brand brief only (Portuguese). No Figma, no repository, no existing site.

---

## 2. Content fundamentals

**Languages.** Primary copy is **Portuguese (BR)**; English is fine for technical/UI labels and code. Sample content across this system is PT-BR.

**Voice.** Direct, practical, confident — an expert who respects the reader's time. Sells outcomes (leads, sales, speed), not features. Avoids jargon with non-technical clients; uses precise technical language (LCP, CLS, schema) where it builds authority.

**Person.** Speaks to the client as **"você"** and about the team as **"a gente" / "nós"**. Warm but professional.

**Casing.** Sentence case for headlines and UI ("Sites que convertem.", "Solicitar orçamento"). UPPERCASE only for mono eyebrows/labels with wide tracking. Never Title Case Everything.

**Tone examples (use these as a guide):**
- Headline: *"Sites que não só impressionam — convertem."*
- Sub: *"Código limpo, carregamento abaixo de 1s e SEO técnico de verdade — menos rejeição, mais leads."*
- CTA: *"Solicitar orçamento"*, *"Quero meu orçamento"*, *"Garantir minha vaga"* (action + outcome).
- Proof: *"+38% conversão"*, *"0.9s carregamento"*, *"2.4x mais leads em 90 dias"*.
- Reassurance (mono): *"// resposta em até 24h · sem spam"*.

**Numbers & proof.** Lead with measurable outcomes. Pair a number with what it means for the business. Percentages and deltas are first-class; show trend direction.

**Emoji.** Essentially none in product UI. A single celebratory 🚀 is tolerable in a form success state — keep it rare. Never decorate headings or lists with emoji.

**Code as voice.** The "/code" identity shows up as monospace eyebrows, `// comment` reassurance lines, and code-style metric panels. Use sparingly — it's seasoning, not the meal.

---

## 3. Visual foundations

**Overall vibe.** Dark-first, premium, developer-grade. Confident electric-blue accent, generous whitespace in light contexts, sharp typography. Restrained — "subtle & premium," not loud. Light is the default theme; dark (`[data-theme="dark"]` / `.dark`) is used for heroes, footers, process bands, and the dashboard sidebar.

**Color.** Slate-based **ink** neutral scale (`--ink-50…950`). Signature accent is **electric blue** (`--brand-600 #2563EB`) for primary actions, with **cyan** (`--cyan-500/400`) as a highlight (speed/performance) and **emerald** (`--emerald-500/600`) for growth/conversion/success signals. Status: emerald/amber/red. Semantic aliases (`--bg`, `--surface`, `--text`, `--border`, `--accent`, `--growth`, …) flip per theme — always style with these, not raw scale values. Imagery/mockups skew cool (blue→cyan gradients).

**Gradient.** One signature gradient, `--grad-brand` (blue→cyan, 135°). Reserved for hero accents, the logo mark, and the occasional feature icon. Never as a full-page background. `--grad-ink` is a subtle dark vertical for dark surfaces.

**Type.**
- **Display — Space Grotesk** (700): headlines & hero, tight tracking (−0.03em), line-height ~1.05, `text-wrap: balance`.
- **Body/UI — Manrope** (400–800): paragraphs and interface, body 16/1.65.
- **Mono — JetBrains Mono** (400–700): the "code" identity — eyebrows, labels, metrics, tags, code panels.
Scale runs `--text-xs (12)` → `--text-5xl (76)` on a tuned ~1.25 ratio.

**Spacing.** 4px base grid (`--space-1`=4 … `--space-12`=80). Section padding is fluid: `clamp(56px, 8vw, 104px)`. Container max 1200px (`--container`), wide 1360px, prose 720px; gutter `clamp(1.25rem, 4vw, 3rem)`.

**Radii.** `xs 4 · sm 6 · md 10 (buttons/inputs) · lg 14 (cards) · xl 20 · 2xl 28 · full (pills/avatars)`. Moderate, premium — never pill-shaped buttons by default.

**Borders.** Hairline `1px` default (`--border`), `1.5px` for emphasis (checkboxes, feature outlines). In dark mode borders are translucent ink (`color-mix`).

**Shadows.** Soft, low-spread, cool-tinted (`rgba(11,17,32,…)`): `xs → xl`. In **dark mode** shadows go near-black and borders + a signature **glow** (`--glow-brand`, `--glow-cyan`) do the elevation work. Primary buttons carry the brand glow.

**Cards.** White surface, `--radius-lg`, `1px` border, `--shadow-sm` at rest. Variants: `accent` (3px top brand bar), `feature` (accent outline — for the recommended option), `glass` (blur over imagery). Interactive cards lift `translateY(-3px)` to `--shadow-lg` on hover.

**Backgrounds.** Mostly flat surfaces. Heroes use soft radial accent glows (`radial-gradient(... var(--accent-soft) ...)`) — never busy. No textures, no noise, no stock-photo washes. Browser-frame mockups stand in for client screenshots.

**Motion.** Quick and purposeful. Durations `--dur-fast 120ms` / `base 200ms` / `slow 320ms`. Easing `--ease-out` (decel) for most UI, `--ease-spring` for small playful pops (checkbox tick). Respect `prefers-reduced-motion` (base.css zeroes durations). No infinite/decorative loops.

**Hover / press states.** Hover: darken accent (`--accent-hover`) or raise surface (`--surface-2`) + deeper shadow. Press: `translateY(1px) scale(0.99)` on buttons, `scale(0.94)` on icon buttons. Links underline on hover with 3px offset.

**Focus.** Always visible: `--focus-ring` (3px accent-tinted ring). Never remove outlines without replacing them.

**Transparency & blur.** Sticky navs and the dashboard topbar use `backdrop-filter: blur(12px)` over a `color-mix` translucent surface. Glass cards over imagery only. Used deliberately, not everywhere.

---

## 4. Iconography

- **System:** [Lucide](https://lucide.dev) — clean 1.75px-stroke line icons that match the techy-but-friendly tone. Loaded from CDN (`lucide@0.469.0` UMD) in the UI kits; rendered via `<i data-lucide="name">` + `lucide.createIcons()` (see `ui_kits/_shared/kit.jsx`, the `Icon` helper). **This is a substitution** — no proprietary icon set existed; Lucide is the recommended default. Swap if the brand later adopts another set.
- **Stroke, not fill.** 1.75 stroke weight, round caps/joins. Avoid filled/duotone icons except tiny status dots and star ratings.
- **Logo mark** is hand-built inline SVG (a `</>` code-bracket glyph on the brand gradient) — see `assets/logo-mark.svg`, `assets/logo-mark-mono.svg`, and the `Logo` component. It carries no external dependency.
- **Emoji** are not part of the icon system (see Content Fundamentals).
- **Unicode** chars are not used as icons.

---

## 5. Index / manifest

**Root**
- `styles.css` — the single entry point consumers link (only `@import`s).
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `base.css`.
- `assets/` — `logo-mark.svg`, `logo-mark-mono.svg`.
- `SKILL.md` — Agent-Skill wrapper for Claude Code.

**Components** (`components/<group>/` — React, exported on `window.GonzagaCodeDesignSystem_*`)
- `brand/` — **Logo**
- `buttons/` — **Button**, **IconButton**
- `forms/` — **Field**, **Input**, **Select**, **Checkbox**
- `display/` — **Card**, **Badge**, **Tag**, **Stat**
- `navigation/` — **Navbar**, **Footer**
Each has `<Name>.jsx`, `<Name>.d.ts`, `<Name>.prompt.md`, and a directory `*.card.html` showcase.

**UI kits** (`ui_kits/<product>/index.html` + JSX)
- `marketing-site/` — full agency website.
- `landing-page/` — single-offer high-conversion template.
- `dashboard/` — client performance portal.
- `_shared/kit.jsx` — `Icon`, `Eyebrow`, `Section`, `Container` helpers.

**Foundation cards** (`guidelines/*.card.html`) — Colors, Type, Spacing, Brand specimens shown in the Design System tab.

**Compiler outputs** (do not edit): `_ds_bundle.js`, `_ds_manifest.json`, `_adherence.oxlintrc.json`.

---

## 6. Caveats / open questions
- **Fonts via CDN** (Google Fonts). Provide licensed `.woff2` files to self-host and replace `tokens/fonts.css`.
- **Lucide icons substituted** for a real set — confirm or swap.
- **No real logo** — the `</>` wordmark is an original starting point; happy to iterate.
- **Sample content invented** (client names, metrics, testimonials) for realism — replace with real cases.

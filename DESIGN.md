---
name: Mode Cero
description: Studio site for Mode Cero, an independent games studio from Spain. Each game is shown inside the logo's own TV screen.
colors:
  ground: "#f2f2f0"
  ink: "#16131f"
  ink-soft: "#4d4a58"
  rule: "#16131f"
  screen-hi: "#4a4458"
  screen-mid: "#221e30"
  screen-lo: "#100e18"
  on-screen: "#ffffff"
  on-screen-soft: "#c4c0d0"
  glitch-magenta: "#ff2bd6"
  glitch-cyan: "#22d3ee"
typography:
  display:
    fontFamily: "BBH Bogle, Barlow, sans-serif"
    fontSize: "clamp(3rem, 8.6vw, 8.5rem)"
    fontWeight: 400
    lineHeight: 0.95
    letterSpacing: "0em"
  headline:
    fontFamily: "BBH Bogle, Barlow, sans-serif"
    fontSize: "clamp(2.75rem, 6vw, 5rem)"
    fontWeight: 400
    lineHeight: 0.95
  headline-doc:
    fontFamily: "BBH Bogle, Barlow, sans-serif"
    fontSize: "clamp(2.5rem, 6vw, 4rem)"
    fontWeight: 400
    lineHeight: 1
  lead:
    fontFamily: "Barlow, system-ui, sans-serif"
    fontSize: "clamp(1.125rem, 1.5vw, 1.375rem)"
    fontWeight: 400
    lineHeight: 1.5
  body:
    fontFamily: "Barlow, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.5
  pitch:
    fontFamily: "Barlow, system-ui, sans-serif"
    fontSize: "1.1875rem"
    fontWeight: 400
    lineHeight: 1.5
  small:
    fontFamily: "Barlow, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Barlow, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 700
    lineHeight: 1.35
  data:
    fontFamily: "Barlow, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 600
    lineHeight: 1.5
rounded:
  focus: "4px"
  control: "12px"
  footer-top: "48px"
spacing:
  gutter: "clamp(16px, 4vw, 56px)"
  max: "1440px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "48px"
components:
  button-solid:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.ground}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "14px 24px"
    height: "48px"
  button-line:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "14px 24px"
    height: "48px"
  button-line-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.ground}"
  screen-play:
    backgroundColor: "{colors.on-screen}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "14px 26px 14px 20px"
    height: "52px"
  footer-screen:
    backgroundColor: "{colors.screen-mid}"
    textColor: "{colors.on-screen}"
    padding: "clamp(36px, 4vw, 56px) clamp(28px, 5vw, 80px) clamp(20px, 2.4vw, 32px)"
  footer-icon-link:
    textColor: "{colors.on-screen}"
    rounded: "{rounded.control}"
    size: "56px"
  footer-link:
    textColor: "{colors.on-screen-soft}"
    typography: "{typography.small}"
---

# Design System: Mode Cero

## Overview

**Creative North Star: "The Studio's Own Screen"**

Mode Cero's logo is a rounded CRT television with the name on it and an RGB glitch cutting through it. The site turns that screen into the studio's display case. Every game sits inside the logo's exact TV silhouette, where its key art shows clean and still. Everything around it is a quiet, cool, light page set in ink. The page stays calm so the screen does the talking, and the only raised voice is the solid ink button that says Email the studio. The page closes on the same screen material: a flat, dark footer with scanlines inside the main column. Its top edge, the separator, carries the TV screen's convex curve, and below that it is square. It carries a small inverted flat logo and a row of contact icons: email, X, YouTube and TikTok.

The page reads like an index. A huge uppercase statement in BBH Bogle is followed by a numbered list of games, separated by heavy 3px ink rules. Each row puts the title, pitch and facts on one side and the screen on the other. Density is low and the type is large. Ornament stays inside the screen and in the brief glitch that answers hover, focus and play.

The refused default is the dark neon games-studio trailer page: a black hero, a nav bar and a screenshot grid. Here the ground is light, there is no navigation, and neon colour appears only as a glitch.

**Key Characteristics:**
- Light cool ground with ink type. The only dark material is the CRT screen, used for the game screens and the footer.
- The logo's TV silhouette is the frame for every game. It is cut from the logo PNG's own alpha.
- Magenta and cyan exist only as RGB-split glitch slices, and only in motion or active states.
- BBH Bogle in uppercase for display, Barlow for everything readable.
- 3px ink rules between list rows. Ink-filled or ink-outlined controls with 12px corners.
- The page ends on the screen material: a flat footer with scanlines inside the main column. Its top edge has the TV's convex curve, and it holds the small inverted logo and an icon-only contact row.

## Colors

A two-tone ink-on-paper page with one dark screen material (game screens and the footer) and two glitch colours that are never at rest.

### Primary
- **Screen Ink** (ink): the logo's screen black, used for all text, the 3px rules, the solid button fill, focus outlines and selection. Its job is authority, and it is the page's only strong colour at rest.

### Neutral
- **Cool Paper** (ground): the page background everywhere. It is also the text colour on ink buttons and the browser theme colour.
- **Faded Ink** (ink-soft): secondary text such as the supporting statement line, fact labels, the game index number and pending placeholders on the light page.
- **Rule** (rule): equal to ink. Used for the 3px row rules and the 2px facts rule. Hairlines under fact rows use ink at 25% alpha.

### Screen material
- **Screen Highlight / Screen Body / Screen Edge** (screen-hi, screen-mid, screen-lo): the three stops of the screen's radial gradient. In the CRT shape the ellipse is 70% x 62% at 28% 20% (body stop at 52%). In the footer it is 70% x 90% at 22% 8% (body stop at 50%), so the light sits near the upper-left edge. Used only for the CRT screens and the footer.
- **Phosphor White** (on-screen): type and the play button on the screen, and the footer contact icons. Selection on the footer inverts to Phosphor White with ink text, and focus outlines switch to Phosphor White.
- **Dim Phosphor** (on-screen-soft): the footer's base line, legal links and pending placeholders. The footer's base rule is Dim Phosphor at 35% alpha.

### Glitch
- **Glitch Magenta** (glitch-magenta) and **Glitch Cyan** (glitch-cyan): the logo's RGB fringe. They appear as paired, opposed offsets (-2px/+2px text-shadow on controls, drop-shadow on footer icons), and as the two slices in the power-on flash. The caret also uses magenta.

### Named Rules
**The Glitch-Only Rule.** Magenta and cyan never fill a surface, colour body text or appear at rest. They show up in four places only: as paired, opposed RGB offsets on button hover and footer icon hover, as the two slices in the power-on flash, and inside the logo artwork itself, including the header logo's glitch burst. The logo artwork, static or animated, carries its own glitch slices and is exempt; it is used as supplied. Game key art never glitches.

**The One Dark Thing Rule.** The page is light. The only dark material is the CRT screen material, which owns exactly two places: the game screens and the footer that closes the page. Both stay inside the main column, never full-bleed. Never add any other dark sections, bands or heroes.

## Typography

**Display Font:** BBH Bogle (with Barlow, sans-serif)
**Body Font:** Barlow 400 / 600 / 700 (with system-ui, sans-serif)

**Character:** BBH Bogle is the logo's own face. It is condensed and heavy, and set in uppercase it reads like a title card. Barlow is a plain, slightly technical grotesk that keeps reading effortless for someone short on time.

### Hierarchy
- **Display** (BBH Bogle 400, uppercase, clamp 3rem to 8.5rem, line-height 0.95, max 16ch, balanced wrap): the single studio statement at the top of the page.
- **Headline** (BBH Bogle 400, uppercase, clamp 2.75rem to 5rem, line-height 0.95): game titles, preceded by a tabular two-digit index number ("01") in Faded Ink.
- **Document Headline** (BBH Bogle 400, uppercase, clamp 2.5rem to 4rem, line-height 1): legal page titles.
- **Lead** (Barlow 400, clamp 1.125rem to 1.375rem, line-height 1.5, Faded Ink, max 34rem): the one supporting line under the statement.
- **Body** (Barlow 400, 1.125rem, line-height 1.5, max 34rem): running text. Long-form documents are capped at 65ch.
- **Pitch** (Barlow 400, 1.1875rem, line-height 1.5, max 34rem): the game pitch under each title, one step above body.
- **Small** (Barlow 400, 1rem): the footer base row (© line and legal links), and the header button at 480px and below.
- **Data** (Barlow 600): fact labels in Faded Ink and fact values in Ink, in a two-column definition list.
- **Label** (Barlow 700, 1.0625rem, line-height 1.35): button text, in sentence case.

### Named Rules
**The Unstretched Display Rule.** On the site, BBH Bogle is set at its natural proportions. The 4:3 stretch belongs to the logo artwork only and is never applied in CSS.

**The Uppercase-for-Display-Only Rule.** Only BBH Bogle display and headline text is uppercase. Barlow text, including buttons, stays in sentence case.

## Layout

A single centred column (max width 1440px) with a fluid gutter (clamp 16px to 56px). The header has the logo badge on the left (clamp 52px to 80px tall) and the one contact button on the right. There is no navigation.

The game list is an ordered list. Each game is a row opened by a 3px ink rule. On desktop the row is a two-column grid at 5fr : 6fr (gap clamp 28px to 72px). The title and the body sit in the left column, and the CRT screen fills the right column across both rows. At 900px and below, the row stacks: title, then screen, then body. At 480px and below, the header button tightens to 10px 14px and drops its icon.

Spacing is fluid. Section padding and gaps use clamp() ranges rather than a fixed scale, with fixed steps of 8, 16, 24 and 48px for gaps inside components.

The footer stays inside the main column (max 1440px, page gutters). It is never full-bleed. It sits clamp 72px to 136px below the content and runs flush to the bottom of the page. The dark panel is kept short while it has little content. Its padding is clamp 36px to 56px on top, clamp 28px to 80px at the sides and clamp 20px to 32px at the bottom. Its main row is a vertically centred flex row, spread to both edges (gap clamp 32px to 56px). The small inverted logo (clamp 112px to 176px wide) is on the left. The contact icon row is on the right (gap clamp 4px to 12px). It is pulled 11px outward so the glyph, not its hit area, meets the column edge: on the right on desktop, and on the left once the row stacks. A base row (clamp 28px to 40px below, 16px of padding above its content) has a 1px Dim Phosphor rule at 35% alpha, with the © line on the left and the Legal notice and Privacy links on the right. At 900px and below the main row stacks into a left-aligned column.

## Elevation & Depth

The page is flat. Rules and contrast create structure, not shadows. The one lifted object is the game's CRT screen. It sits on a soft ambient drop shadow, so it reads as a physical set on the paper. The footer is flat and casts no shadow. Depth inside the footer comes from the screen material's radial gradient and a scanline overlay of 1px white lines on a 4px period at 4.5%. The footer is the only place with scanlines. The game screen shows its key art or video clean, with no overlay.

### Shadow Vocabulary
- **Set Shadow** (`filter: drop-shadow(0 18px 22px rgba(22, 19, 31, 0.28))`): only under the CRT frame. It sits on a wrapper as a filter, so it follows the masked TV silhouette.
- **RGB Split** (`text-shadow: -2px 0 #ff2bd6, 2px 0 #22d3ee`): the hover response on all buttons. It is a glitch state, not elevation. The footer contact icons use the same split as `filter: drop-shadow(-2px 0 #ff2bd6) drop-shadow(2px 0 #22d3ee)`, so it follows the glyph shape.

### Named Rules
**The Only-the-Set-Floats Rule.** Nothing on the page casts a shadow except the CRT screen.

## Shapes

The controls use one radius: 12px rounded rectangles. Focus outlines are 3px ink with a 3px offset and a 4px radius. Rules are straight, full-width and heavy (3px between rows, 2px over facts, 1px at 25% alpha between fact rows).

The signature silhouette is the logo's CRT outline: convex sides and tight, soft corners. It is used in two ways.
- **The game screens** (aspect ratio 1024 / 804) use the full silhouette as a CSS mask taken from the logo PNG itself (mask-size 100% 100%), so the shape always matches the official mark exactly.
- **The footer's top edge** carries only the TV's top curve. site.js draws a clip-path from the element's real box and redraws it on resize, so the curve never stretches. The top edge is a convex bulge of clamp(8px, 1.2% of width, 18px), with rounded top corners of clamp(24px, 4% of width, 56px). The sides then run straight down to a square bottom. Without JS or clip-path support, the footer falls back to the footer-top radius on its top corners only (48px 48px 0 0).

site.js also keeps a full-silhouette clip-path for `data-tv-shape` with no value, but no shipped element uses it. Never approximate the full TV shape with a plain border-radius.

## Components

### Buttons
Ink and confident, with a glitch on contact.
- **Shape:** gently rounded rectangle (12px), with a 2px ink border on every variant and a minimum height of 48px.
- **Solid:** ink fill with Cool Paper text, padding 14px 24px, an optional 20px icon at a 10px gap (see Icons). Reserved for the single primary action, Email the studio.
- **Line:** transparent with ink text and border. On hover it fills with ink. Used for secondary actions such as Download press kit.
- **Hover:** all buttons pick up the RGB Split text-shadow. Colour and shadow transitions run at 0.18 to 0.2s on the expo-out ease.
- **Focus:** 3px ink outline, offset 3px.

### Screen Play Button
- A Phosphor White button with 12px corners (minimum height 52px) on the CRT, with ink label and a 22px Fill-weight play icon. Hover adds the RGB Split, and focus switches the outline to Phosphor White.
- It sits at the bottom centre of the screen (the card is bottom-aligned with 8% padding, 10% at the bottom). Only the button takes pointer events.
- It stays hidden until the game has a video, so the screen never shows a dead control.

### CRT Screen (signature)
- The logo's TV silhouette, masked from the logo PNG, with the three-stop screen gradient behind the content. It has no scanline overlay.
- **At rest** it shows the game's key art, full-bleed (object-fit cover) under the mask, with nothing over it, with a responsive 800w / 1600w source set (sizes 92vw at 900px and below, otherwise 48vw). The key art carries the game's own logo, so no type is set on the screen. When the game has a video, the play button appears at the bottom centre.
- **No hover effect:** the key art sits still. It never glitches, slips or changes on hover or focus.
- **Power-on:** pressing play removes the key art, collapses the card and runs a 0.62s flash. A white horizontal line opens to full width, then to full height, with one magenta and one cyan slice, then fades. The video (16:9, inset 7%) then replaces it, letterboxed like an old TV. Under reduced motion the swap happens instantly.

### Game Key Art (per-game rule)
- Every game supplies one key art image for its screen, stored with its other assets in `assets/games/<slug>/`.
- **Format:** 1600 x 1256 (1.27:1, matching the logo TV's 1024 / 804), WebP under 250 KB, full-bleed and opaque. Also supply a derived 800w version for the source set.
- **Safe area:** keep key content in the central 80% x 75%, and nothing important within about 150px of the corners, which the TV mask cuts away.
- **Never overlaid:** no scanlines, no glitch and no type over the key art. The same applies to the video that replaces it.
- Write alt text that describes the art, including the game logo it carries.

### Facts List
- A two-column definition list (labels at content width, values filling the rest), capped at 34rem. A 2px ink rule sits on top, with 1px hairlines at 25% alpha and 10px vertical padding between rows. Labels are 600 in Faded Ink, and values are 600 in Ink.

### Header Logo
Static at rest, with a glitch that plays once on load and again on hover or focus.
- **At rest:** the still logo (`assets/brand/modecero_logo_still.webp`, 960 x 753, lossless). It is frame 1 of the official animated logo, pixel for pixel, so rest and motion join seamlessly. Don't substitute the static PNG here, because its pixels differ from that frame.
- **Burst:** `assets/brand/modecero_logo_glitch_burst.webp`. This is the official animated logo with only its timing changed (frame 1 hold of 40ms, plays once, about 590ms in total). Its pixels are untouched.
- **Behavior:** site.js plays the burst once on page load, and again on mouseenter or focus of the logo link. Each play uses a fresh blob URL, so it restarts from frame 1 without refetching. After the burst's duration plus 60ms it returns to the still.
- **Fallbacks:** with reduced motion or without JS, only the still shows.
- The header is the only place the logo animates. The footer keeps the static inverted flat SVG. The official animated WebP (`modecero_logo_original_glitch.webp`) is kept as the source asset only. The static PNG remains the CRT mask source and the favicon.

### Icons
One icon family, Phosphor Icons. Each is inlined as SVG (256 viewBox, currentColor, aria-hidden, not focusable), so nothing loads from outside.
- **Fill** weight for the footer contact icons and the play button.
- **Bold** weight for the icons inside ink-bordered buttons (the header envelope and the press-kit download).
- Icons take their size from the component: 20px in buttons, 22px on the play button and 34px in the footer. The header button drops its icon at 480px and below.

### Navigation
- None. The header holds only the logo (linking home) and the contact button.

### Footer (signature)
The page's closing panel: flat and dark, inside the main column and flush to the page bottom.
- **Shape:** the TV's convex curve on the top edge only (see Shapes). The sides are straight and the bottom is square. It casts no shadow.
- **Material:** the screen gradient lit near the upper left, with the scanline overlay at 4.5% white.
- **Logo:** the user-supplied inverted flat logo (white TV screen, ink letters, RGB glitch), used unmodified and small (clamp 112px to 176px wide).
- **Contact icons:** an icon-only row of email (envelope), X, YouTube and TikTok. Each uses a Fill-weight icon at 34px in Phosphor White, centred in a 56 x 56px hit area with the 12px control radius. Every link carries an aria-label. Hover adds a white 8% background and the RGB Split as a drop-shadow filter, which reduced motion removes. Focus uses the Phosphor White outline.
- **Links:** legal links are Barlow 600 with 2px underlines offset 0.2em. Legal links sit in Dim Phosphor at Small size in the base row. Focus outlines and selection switch to Phosphor White on the dark ground.

## Do's and Don'ts

### Do:
- **Do** use the official logo PNG unmodified, and derive the CRT silhouette from its alpha mask. On the dark footer, use the inverted flat logo SVG unmodified. In the header, rest on the still frame and play the burst (both derived from the official animated WebP, pixels untouched) only on load and on hover or focus.
- **Do** frame every game, its key art and its video in the CRT screen, one game per ruled row. Each key art follows the per-game spec (1600 x 1256 WebP under 250 KB, opaque, safe area in the central 80% x 75%) and lives in `assets/games/<slug>/`.
- **Do** keep magenta (#ff2bd6) and cyan (#22d3ee) as paired, opposed offsets that appear only on hover, focus or the power-on moment.
- **Do** set display text in uppercase BBH Bogle at natural proportions, and everything readable in Barlow.
- **Do** separate list rows with 3px ink rules, and keep controls at a 12px radius with a 2px ink border.
- **Do** close every page with the flat scanline footer, kept inside the main column and flush to the page bottom, with the TV's convex curve on its top edge only. Inside it, put contact in the icon row and separate the base row with a 1px Dim Phosphor rule at 35% alpha.
- **Do** draw the footer's curved top edge with the computed clip-path, so the curve never stretches with the width.
- **Do** draw every icon from Phosphor Icons, inlined as SVG in currentColor: Fill weight on dark screens and the play button, Bold in buttons. Give every icon-only link an aria-label and a 56px hit area.
- **Do** provide a reduced-motion path that removes the power-on animation, the RGB-split hovers and the logo burst.

### Don't:
- **Don't** animate the logo anywhere but the header, loop it at rest, or play it under reduced motion.
- **Don't** glitch the game key art or lay scanlines over it (or over the video). It sits clean and still in the screen.
- **Don't** set type over the key art on the screen. The art carries the game's logo.
- **Don't** mix icon families, or draw one-off icons by hand.
- **Don't** stretch BBH Bogle 4:3 in CSS. That proportion belongs to the logo artwork alone.
- **Don't** use magenta or cyan as fills, text colours, borders or resting decoration.
- **Don't** add dark page sections, bands or a dark hero, and don't run the screen material full-bleed. It belongs only to the game screens and the footer.
- **Don't** add shadows to anything except the CRT screen.
- **Don't** add more than one solid ink button to a view. The solid fill is the page's one raised voice.

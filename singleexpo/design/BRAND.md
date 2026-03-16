# 🎨 Brand Guide — singleexpo.com
## Design System for the Event Platform

---

## Brand Essence

| Attribute | Detail |
|-----------|--------|
| **Personality** | Bold, energetic, festival-grade, inclusive |
| **Tone** | Exciting, celebratory — "you NEED to be here" |
| **Feeling** | Urgency + FOMO + belonging |
| **Reference** | Music festival x lifestyle expo |

---

## Color System

### Primary Palette
```
Dark BG           #1A0533    ████  Deep purple — event darkness
Primary (Purple)  #7B2FBE    ████  Brand purple — glow effects
Accent (Coral)    #FF6B6B    ████  CTAs, energy, urgency
Yellow            #FFD60A    ████  Prices, highlights, numbers
```

### Supporting
```
Light Purple      #FAF5FF    ████  Light sections bg
Muted Purple      #9B89B4    ████  Secondary text on dark
Border            #E9D5FF    ████  Light mode borders
White             #FFFFFF    ████  Text on dark bg
White/70                          Secondary text on dark
```

---

## Typography

```
Display/Heading:  Space Grotesk (700, 600)
Body:             Plus Jakarta Sans (500, 400)
Numbers/Prices:   Space Grotesk (900) — big and bold
```

### Type Scale (dark bg optimised)
```
Event Name (hero):   80–120px Space Grotesk 700
Section H2:          40–56px Space Grotesk 700  
Card Title:          20–24px Space Grotesk 600
Body:                16px Plus Jakarta Sans 400
Price:               40–56px Space Grotesk 900 text-yellow
Countdown number:    48–64px Space Grotesk 700 text-yellow
```

---

## Key Visual Motifs

1. **Glow effects** — blurred circles of purple/coral behind content
2. **Glassmorphism cards** — white/10 bg + border white/20 + backdrop-blur
3. **Gradient text** — hero title uses gradient fill accent→yellow
4. **Dark sections** — 90% of site is dark bg (party vibe)
5. **Light sections** — use white/5 panels, never full white

---

## Countdown Timer Spec

```
Container: 4 boxes, gap 16px
Box:        64×64px (desktop 80×80px)
            bg: white/10 | border: white/20
            border-radius: 16px
Number:     Space Grotesk 700 | 28px (desktop 36px) | color: #FFD60A
Label:      11px | letter-spacing 0.2em | color: white/40 | uppercase
```

---

## Ticket Cards

```
General:
  bg: white/5 | border: white/10
  border-radius: 24px | padding: 32px

VIP (featured):
  bg: gradient from-primary/40 to-accent/20
  border: accent/50 (glowing border)
  Add: "แนะนำ" badge in accent color
  Add: subtle box-shadow 0 0 32px rgba(255,107,107,0.2)
```

---

## Zone Cards

```
Grid: 4 columns (desktop) / 2 columns (mobile)
Card: aspect-ratio ~1:1
      bg: white/5 | border: white/10
      hover: border white/30 + gradient overlay (10% opacity)
      each zone has its own gradient pair
      border-radius: 20px
      padding: 24px
Icon: 32px emoji or svg
Label: Plus Jakarta Sans 500 white/80
```

---

## CTA Buttons (Event Context)

```
Primary CTA (Buy Ticket):
  bg: gradient from accent to primary
  text: white | font: Space Grotesk 700 | 18px
  padding: 16px 40px | border-radius: 9999px
  shadow: 0 8px 32px rgba(255,107,107,0.3)
  
Secondary:
  border: white/20 | text: white
  hover: bg white/10
```

---

## Figma Structure

```
Pages:
├── 🎨 Design System       → Colors, fonts, effects library
├── 📱 Mobile (375px)      → Homepage, tickets, schedule
├── 💻 Desktop (1440px)    → Full event pages
├── 🎪 Event Collateral    → Social posts, posters, email
└── 🏢 B2B Sponsor Deck    → Sponsor package visuals
```

---

*Event brand refreshes annually post-expo*

# 🎪 singleexpo.com — Web
## Next.js 14 | Event Platform

---

## Claude Code — อ่านก่อนทำงาน

**Domain role:** Event platform สำหรับ Single Expo Thailand  
**Tone:** Festival energy, bold, exciting — ต้องทำให้คนอยากซื้อตั๋ว  
**Design:** ดู `../design/BRAND.md` — dark bg, purple/coral  
**Colors/Fonts:** `../../_shared/brand-tokens.ts` → `singleExpo`  
**Types:** `../../_shared/types/index.ts` → `ExpoEvent`, `Exhibitor`, `ExpoSession`

---

## Pages & Routes

```
app/
├── page.tsx                    → Event homepage (hero + countdown + CTA)
├── tickets/
│   ├── page.tsx                → Ticket tiers + buy flow
│   └── [orderId]/page.tsx      → Order confirmation + QR ticket
├── exhibitors/
│   ├── page.tsx                → All exhibitors grid
│   └── [id]/page.tsx           → Exhibitor detail
├── schedule/
│   └── page.tsx                → Session schedule by zone
├── sponsor/
│   └── page.tsx                → Become a sponsor (B2B landing)
└── api/
    ├── tickets/purchase/route.ts
    └── newsletter/route.ts
```

---

## Key Components

| Component | Description |
|-----------|-------------|
| `CountdownTimer` | Days/Hours/Min/Sec to event |
| `TicketCard` | Tier card with perks list |
| `ExhibitorGrid` | Filterable exhibitor cards by zone |
| `ScheduleTimeline` | Day/time/zone session grid |
| `ZoneMap` | Interactive venue zone map |
| `SponsorTierCard` | B2B sponsor package card |

---

## Ticket Purchase Flow

```
1. User selects tier on /tickets
2. Quantity + attendee details form
3. Payment (Stripe / PromptPay)
4. Order confirmation + QR code generation
5. Email confirmation via Resend
6. QR code for entry scan at event
```

---

## Setup

```bash
npx create-next-app@latest . --typescript --tailwind --app
npm install @stripe/stripe-js @stripe/react-stripe-js
npm install qrcode react-qr-code
npm install date-fns
npm install lucide-react
npm install framer-motion
```

---

## Priority Build Order

1. `app/page.tsx` — Event homepage with countdown
2. `components/CountdownTimer.tsx`
3. `app/tickets/page.tsx` — Ticket purchase
4. `app/exhibitors/page.tsx` — Exhibitor listing
5. `app/schedule/page.tsx` — Schedule
6. `app/sponsor/page.tsx` — Sponsor B2B page

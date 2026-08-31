# Portfolio Website — Nitesh Mishra

A personal portfolio built with Next.js (App Router) and TypeScript, featuring a live backend-powered feature that streams real-time data from a Spring Boot service.

## Tech Stack

- **Frontend:** Next.js 16 (App Router), TypeScript, Tailwind CSS v4, Framer Motion
- **Live backend feature:** Spring Boot (separate repo: `traffic-pulse`), Server-Sent Events

## Folder Structure
src/
├── app/ # Routes only (Next.js App Router convention)
│ ├── page.tsx → Overview ("/")
│ ├── systems/ → Projects ("/systems")
│ ├── resume/ → Resume ("/resume")
│ └── contact/ → Contact ("/contact")
├── components/
│ ├── ui/ # Reusable primitives (Button, Card, Badge, Section, Reveal)
│ └── sections/ # Page-level building blocks (Nav, TrafficPulse, ScrollBackground)
├── hooks/ # Custom React hooks (useTrafficStream)
├── lib/ # Pure data/helpers (resume-data.ts)
└── types/ # Shared TypeScript types


## Running Locally

```bash
npm install
npm run dev
```
Visit `localhost:3000`.

### Live feature (optional)
The traffic panel on the homepage requires the companion Spring Boot service (`traffic-pulse`) running on port 8080. Without it, the panel gracefully shows an "offline" state.

```bash
cd ../traffic-pulse
./mvnw spring-boot:run
```

## Design System
- **Ink navy** (`#16213E`) — primary/trust color
- **Lightning amber** (`#FFB627`) — reserved for live/active states only
- **Pulse teal** (`#12D6B4`) — success/healthy states
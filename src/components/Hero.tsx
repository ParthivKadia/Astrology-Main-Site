// import { Link } from "react-router-dom";

// // 👉 Your image lives in /public, so the path starts with "/" — no import needed.
// const astrologerPhoto = "/astrologer.png";

// const calendarDays = Array.from({ length: 30 }, (_, i) => i + 1);
// const highlightedDay = 14;

// const appointments = [
//   { name: "Rohan Mehta", time: "Apr 12 · 10:00 AM", status: "Upcoming", tint: "bg-lavender/15 text-lavender" },
//   { name: "Sneha Patel", time: "Apr 12 · 2:30 PM", status: "Completed", tint: "bg-sage/15 text-sage" },
//   { name: "Amit Shah", time: "Apr 13 · 11:00 AM", status: "Upcoming", tint: "bg-gold/15 text-gold" },
// ];

// const clients = [
//   { name: "Rohan Mehta", status: "Upcoming", tint: "bg-lavender/15 text-lavender" },
//   { name: "Sneha Patel", status: "Completed", tint: "bg-sage/15 text-sage" },
//   { name: "Amit Shah", status: "Completed", tint: "bg-gold/15 text-gold" },
// ];

// // Placeholder trust numbers — replace with your real figures once you have them.
// const stats = [
//   { value: "500+", label: "Astrologers onboard" },
//   { value: "50K+", label: "Bookings completed" },
//   { value: "35+", label: "Cities across India" },
//   { value: "4.8★", label: "Average rating" },
// ];

// function Avatar({ name, tint }: { name: string; tint: string }) {
//   const initials = name
//     .split(" ")
//     .map((part) => part[0])
//     .join("");
//   return (
//     <span
//       className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[10px] font-semibold ${tint}`}
//     >
//       {initials}
//     </span>
//   );
// }

// function StatusPill({ label, tint }: { label: string; tint: string }) {
//   return (
//     <span className={`whitespace-nowrap rounded-full px-2 py-0.5 text-[9px] font-medium ${tint}`}>
//       {label}
//     </span>
//   );
// }

// /** Plain colored status text (no pill background) — used in the compact mobile cards. */
// function StatusText({ status }: { status: string }) {
//   const color = status === "Upcoming" ? "text-lavender" : "text-sage";
//   return <span className={`text-[11px] font-medium ${color}`}>{status}</span>;
// }

// /**
//  * Traditional Indian astrology motif — a mandala / zodiac-wheel line drawing.
//  * Purely decorative, absolutely positioned, very low opacity so it reads as
//  * texture rather than a graphic. Non-denominational geometric pattern
//  * (concentric rings + 12 spokes, like a chart wheel) rather than any
//  * specific religious symbol, so it stays universal.
//  */
// function MandalaMotif({ className = "" }: { className?: string }) {
//   const spokes = Array.from({ length: 12 }, (_, i) => i * 30);
//   return (
//     <svg
//       aria-hidden="true"
//       viewBox="0 0 500 500"
//       className={`pointer-events-none absolute opacity-[0.05] ${className}`}
//     >
//       <circle cx="250" cy="250" r="220" stroke="var(--color-navy)" strokeWidth="1" fill="none" />
//       <circle cx="250" cy="250" r="170" stroke="var(--color-navy)" strokeWidth="1" fill="none" />
//       <circle cx="250" cy="250" r="120" stroke="var(--color-gold)" strokeWidth="1" fill="none" />
//       <circle cx="250" cy="250" r="4" fill="var(--color-gold)" />
//       {spokes.map((angle) => (
//         <line
//           key={angle}
//           x1="250"
//           y1="30"
//           x2="250"
//           y2="470"
//           stroke="var(--color-navy)"
//           strokeWidth="1"
//           transform={`rotate(${angle} 250 250)`}
//         />
//       ))}
//       {spokes.map((angle, i) => (
//         <circle
//           key={`dot-${angle}`}
//           cx={250 + 220 * Math.cos((angle * Math.PI) / 180)}
//           cy={250 + 220 * Math.sin((angle * Math.PI) / 180)}
//           r={i % 3 === 0 ? 3 : 1.6}
//           fill="var(--color-gold)"
//         />
//       ))}
//     </svg>
//   );
// }

// /** Small trust chip overlaid on the astrologer photo. */
// function VerifiedBadge() {
//   return (
//     <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-full border border-border bg-surface/95 px-3 py-1.5 shadow-card backdrop-blur">
//       <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
//         <circle cx="6" cy="6" r="6" fill="var(--color-sage)" />
//         <path d="M3.3 6.2l1.6 1.6 3.3-3.6" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
//       </svg>
//       <span className="text-[10px] font-medium text-navy">Verified · 9 yrs experience</span>
//     </div>
//   );
// }

// function BrowserMockup() {
//   return (
//     <div className="relative rounded-2xl border border-border bg-navy p-2 shadow-card">
//       <div className="overflow-hidden rounded-xl bg-surface">
//         {/* mini nav */}
//         <div className="flex items-center justify-between border-b border-border px-5 py-3">
//           <span className="font-heading text-sm text-navy">✦</span>
//           <div className="hidden gap-4 text-[11px] text-body sm:flex">
//             <span>Home</span>
//             <span>About</span>
//             <span>Services</span>
//             <span>Contact</span>
//           </div>
//         </div>

//         {/* hero content */}
//         <div className="relative flex h-80 items-center overflow-hidden sm:h-96 lg:h-80">
//           <MandalaMotif className="left-1/2 top-1/2 h-[140%] w-[140%] -translate-x-1/2 -translate-y-1/2" />

//           <div className="relative z-10 max-w-[55%] p-6 sm:p-7">
//             <p className="font-heading text-lg text-navy sm:text-xl">
//               Acharya Dev Sharma
//             </p>
//             <p className="mt-1 text-xs text-body sm:text-[13px]">
//               Vedic astrologer &amp; life guide
//             </p>
//             <span className="mt-4 inline-block rounded-btn bg-gold px-4 py-2 text-xs font-semibold text-white">
//               Book consultation
//             </span>
//           </div>

//           {/* astrologer photo panel */}
//           <div className="absolute inset-y-0 right-0 w-[45%] bg-[var(--color-card-peach)]">
//             <img
//               src={astrologerPhoto}
//               alt="Acharya Dev Sharma"
//               className="h-full w-full object-cover object-top"
//             />
//             <div
//               className="pointer-events-none absolute inset-y-0 left-0 w-1/3"
//               style={{
//                 background:
//                   "linear-gradient(90deg, var(--color-surface) 0%, rgba(0,0,0,0) 100%)",
//               }}
//             />
//           </div>

//           <VerifiedBadge />
//         </div>
//       </div>
//       {/* laptop base */}
//       <div className="mx-auto mt-2 h-2 w-1/2 rounded-b-lg bg-white/10" />
//     </div>
//   );
// }

// /* ============================================================
//    DESKTOP / TABLET FLOATING CARDS
//    ============================================================ */

// function CalendarCard() {
//   return (
//     <div className="card hidden w-40 p-3 sm:absolute sm:-top-1 sm:-right-[9.5rem] sm:block lg:-right-36">
//       <p className="text-[11px] font-medium text-navy">April 2025</p>
//       <div className="mt-2 grid grid-cols-7 gap-y-1 text-center text-[8px] text-body">
//         {calendarDays.map((day) => (
//           <span
//             key={day}
//             className={
//               day === highlightedDay
//                 ? "mx-auto flex h-4 w-4 items-center justify-center rounded-full bg-gold text-white"
//                 : "mx-auto flex h-4 w-4 items-center justify-center"
//             }
//           >
//             {day}
//           </span>
//         ))}
//       </div>
//     </div>
//   );
// }

// function AppointmentsCard() {
//   return (
//     <div className="card hidden w-52 p-3 lg:absolute lg:top-44 lg:-right-40 lg:block">
//       <p className="text-[11px] font-medium text-navy">Upcoming appointments</p>
//       <ul className="mt-2.5 space-y-2.5">
//         {appointments.map((item) => (
//           <li key={item.name} className="flex items-center gap-2">
//             <Avatar name={item.name} tint="bg-lavender/15 text-lavender" />
//             <div className="min-w-0 flex-1">
//               <p className="truncate text-[10px] font-medium text-navy">{item.name}</p>
//               <p className="text-[9px] text-body">{item.time}</p>
//             </div>
//             <StatusPill label={item.status} tint={item.tint} />
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// function RevenueCard() {
//   return (
//     <div className="card hidden w-36 p-3 sm:absolute sm:bottom-16 sm:-left-6 sm:block">
//       <p className="text-[10px] text-body">Total revenue</p>
//       <div className="mt-1 flex items-baseline gap-1.5">
//         <p className="font-heading text-base text-navy">₹1,48,000</p>
//         <span className="text-[10px] font-medium text-success">+12%</span>
//       </div>
//       <svg viewBox="0 0 100 30" className="mt-2 h-6 w-full" preserveAspectRatio="none">
//         <polyline
//           points="0,26 15,22 30,24 45,16 60,18 75,8 100,4"
//           fill="none"
//           stroke="var(--color-sage)"
//           strokeWidth="2"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         />
//       </svg>
//     </div>
//   );
// }

// function RecentClientsCard() {
//   return (
//     <div className="card hidden w-48 p-3 lg:absolute lg:bottom-10 lg:left-40 lg:block">
//       <p className="text-[11px] font-medium text-navy">Recent clients</p>
//       <ul className="mt-2.5 space-y-2">
//         {clients.map((item) => (
//           <li key={item.name} className="flex items-center gap-2">
//             <Avatar name={item.name} tint="bg-sage/15 text-sage" />
//             <p className="flex-1 truncate text-[10px] font-medium text-navy">{item.name}</p>
//             <StatusPill label={item.status} tint={item.tint} />
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// /* ============================================================
//    MOBILE-ONLY CARDS
//    ============================================================ */

// function MobileCalendarCard() {
//   const weekdayLabels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
//   const start = Math.min(Math.max(highlightedDay - 3, 1), calendarDays.length - 6);
//   const weekStrip = calendarDays.slice(start - 1, start + 6);

//   return (
//     <div className="card p-4">
//       <div className="flex items-center justify-between">
//         <p className="text-sm font-medium text-navy">April 2025</p>
//         <div className="flex items-center gap-1">
//           <button
//             type="button"
//             aria-label="Previous week"
//             className="flex h-6 w-6 items-center justify-center rounded-full text-body"
//           >
//             ‹
//           </button>
//           <button
//             type="button"
//             aria-label="Next week"
//             className="flex h-6 w-6 items-center justify-center rounded-full text-body"
//           >
//             ›
//           </button>
//         </div>
//       </div>

//       <div className="mt-3 grid grid-cols-7 gap-y-1 text-center">
//         {weekdayLabels.map((label) => (
//           <span key={label} className="text-[10px] font-medium text-body">
//             {label}
//           </span>
//         ))}
//       </div>

//       <div className="mt-1 grid grid-cols-7 gap-y-1 text-center">
//         {weekStrip.map((day) => (
//           <span
//             key={day}
//             className={
//               day === highlightedDay
//                 ? "mx-auto flex h-7 w-7 items-center justify-center rounded-full bg-gold text-xs font-semibold text-white"
//                 : "mx-auto flex h-7 w-7 items-center justify-center text-xs text-navy"
//             }
//           >
//             {day}
//           </span>
//         ))}
//       </div>
//     </div>
//   );
// }

// function MobileAppointmentsCard() {
//   return (
//     <div className="card p-4">
//       <p className="text-sm font-medium text-navy">Upcoming appointments</p>
//       <ul className="mt-3 space-y-3.5">
//         {appointments.map((item) => (
//           <li key={item.name} className="flex items-center gap-3">
//             <Avatar name={item.name} tint={item.tint} />
//             <div className="min-w-0 flex-1">
//               <p className="truncate text-xs font-medium text-navy">{item.name}</p>
//               <p className="text-[11px] text-body">{item.time}</p>
//             </div>
//             <StatusText status={item.status} />
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// function MobileRevenueCard() {
//   return (
//     <div className="card p-4">
//       <p className="text-xs text-body">Total earnings</p>
//       <div className="mt-1 flex items-baseline gap-2">
//         <p className="font-heading text-xl text-navy">₹1,48,000</p>
//         <span className="text-xs font-medium text-success">+12%</span>
//       </div>
//       <svg viewBox="0 0 100 30" className="mt-3 h-8 w-full" preserveAspectRatio="none">
//         <polyline
//           points="0,26 15,22 30,24 45,16 60,18 75,8 100,4"
//           fill="none"
//           stroke="var(--color-sage)"
//           strokeWidth="2"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         />
//       </svg>
//     </div>
//   );
// }

// function MobileRecentClientsCard() {
//   return (
//     <div className="card p-4">
//       <p className="text-sm font-medium text-navy">Recent clients</p>
//       <ul className="mt-3 space-y-3">
//         {clients.map((item) => (
//           <li key={item.name} className="flex items-center gap-3">
//             <Avatar name={item.name} tint={item.tint} />
//             <p className="flex-1 truncate text-xs font-medium text-navy">{item.name}</p>
//             <StatusText status={item.status} />
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// function MobileCards() {
//   return (
//     <div className="mt-6 space-y-4 sm:hidden">
//       <MobileCalendarCard />
//       <MobileAppointmentsCard />
//       <MobileRevenueCard />
//       <MobileRecentClientsCard />
//     </div>
//   );
// }

// /** Small avatar-stack + rating line shown under the CTA buttons. */
// function TrustLine() {
//   const sampleNames = [
//     { name: "Rohan Mehta", tint: "bg-lavender/20 text-lavender" },
//     { name: "Sneha Patel", tint: "bg-sage/20 text-sage" },
//     { name: "Amit Shah", tint: "bg-gold/20 text-gold" },
//   ];
//   return (
//     <div className="mt-7 flex items-center gap-3">
//       <div className="flex -space-x-2">
//         {sampleNames.map((p) => (
//           <span
//             key={p.name}
//             className={`flex h-8 w-8 items-center justify-center rounded-full border-2 border-background text-[10px] font-semibold ${p.tint}`}
//           >
//             {p.name.split(" ").map((n) => n[0]).join("")}
//           </span>
//         ))}
//       </div>
//       <p className="text-xs text-body">
//         <span className="font-medium text-navy">500+ astrologers</span> already building
//         their practice with us
//       </p>
//     </div>
//   );
// }

// /** Stat strip shown under the whole hero — same slot Sarvam uses for
//  * customer logos, adapted here to your own usage numbers. */
// function TrustStrip() {
//   return (
//     <div className="border-t border-border bg-surface">
//       <div className="container-page grid grid-cols-2 gap-6 py-8 sm:grid-cols-4 sm:gap-4">
//         {stats.map((stat, i) => (
//           <div
//             key={stat.label}
//             className={`text-center sm:text-left ${i > 0 ? "sm:border-l sm:border-border sm:pl-4" : ""}`}
//           >
//             <p className="font-heading text-2xl text-navy">{stat.value}</p>
//             <p className="mt-1 text-xs text-body">{stat.label}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default function Hero() {
//   return (
//     <>
//       <section className="relative overflow-hidden border-b border-border bg-background">
//         <MandalaMotif className="-right-40 -top-40 h-[520px] w-[520px]" />

//         <div className="container-page relative py-16 sm:py-24">
//           <div className="grid gap-16 lg:grid-cols-[1fr_1.3fr] lg:items-start">
//             {/* Left — copy */}
//             <div className="max-w-xl">
//               <h1 className="font-heading text-4xl text-navy sm:text-5xl">
//                 Stop managing bookings over WhatsApp
//               </h1>
//               <p className="mt-5 max-w-md text-base text-body sm:text-lg">
//                 Get a professional booking website, a client dashboard, and
//                 payment tracking — without touching a line of code.
//               </p>
//               <div className="mt-8 flex flex-wrap gap-4">
//                 <Link to="/booking" className="btn-primary">
//                   Create your website
//                 </Link>
//                 <Link to="/about" className="btn-secondary">
//                   View a live example
//                 </Link>
//               </div>

//               <TrustLine />
//             </div>

//             {/* Right — mockup + cards */}
//             <div className="relative mx-auto w-full max-w-md pb-16 pt-8 sm:max-w-lg lg:mx-0 lg:max-w-none lg:pb-28 lg:pt-10 lg:pl-8 lg:-mr-24">
//               <BrowserMockup />

//               <CalendarCard />
//               <AppointmentsCard />
//               <RevenueCard />
//               <RecentClientsCard />

//               <MobileCards />
//             </div>
//           </div>
//         </div>
//       </section>

//       <TrustStrip />
//     </>
//   );
// }

import { Link } from "react-router-dom";
import { GatewayMotif, KundaliDiamond } from "./BrandMotifs";

// 👉 Your image lives in /public, so the path starts with "/" — no import needed.
const astrologerPhoto = "/astrologer.png";

const calendarDays = Array.from({ length: 30 }, (_, i) => i + 1);
const highlightedDay = 14;

const appointments = [
  { name: "Rohan Mehta", time: "Apr 12 · 10:00 AM", status: "Upcoming", tint: "bg-lavender/15 text-lavender" },
  { name: "Sneha Patel", time: "Apr 12 · 2:30 PM", status: "Completed", tint: "bg-sage/15 text-sage" },
  { name: "Amit Shah", time: "Apr 13 · 11:00 AM", status: "Upcoming", tint: "bg-gold/15 text-gold" },
];

const clients = [
  { name: "Rohan Mehta", status: "Upcoming", tint: "bg-lavender/15 text-lavender" },
  { name: "Sneha Patel", status: "Completed", tint: "bg-sage/15 text-sage" },
  { name: "Amit Shah", status: "Completed", tint: "bg-gold/15 text-gold" },
];

// What a professional practice actually gets — real product pillars,
// not unverified numbers. Swap copy here once you have real testimonials
// or credentials to add alongside these.
// const trustPillars = [
//   { title: "Secure payments", detail: "Client payments processed and tracked, no manual reconciliation." },
//   { title: "Reliable bookings", detail: "One calendar, no double-bookings, no back-and-forth over chat." },
//   { title: "A professional presence", detail: "A dedicated website clients find credible before they even call." },
//   { title: "Built for astrologers", detail: "Consultation types, not generic 'services' — built around how you work." },
// ];

function Avatar({ name, tint }: { name: string; tint: string }) {
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .join("");
  return (
    <span
      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[10px] font-semibold ${tint}`}
    >
      {initials}
    </span>
  );
}

function StatusPill({ label, tint }: { label: string; tint: string }) {
  return (
    <span className={`whitespace-nowrap rounded-full px-2 py-0.5 text-[9px] font-medium ${tint}`}>
      {label}
    </span>
  );
}

function StatusText({ status }: { status: string }) {
  const color = status === "Upcoming" ? "text-lavender" : "text-sage";
  return <span className={`text-[11px] font-medium ${color}`}>{status}</span>;
}

/** Small trust chip overlaid on the astrologer photo. */
function VerifiedBadge() {
  return (
    <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-full border border-border bg-surface/95 px-3 py-1.5 shadow-card backdrop-blur">
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
        <circle cx="6" cy="6" r="6" fill="var(--color-sage)" />
        <path d="M3.3 6.2l1.6 1.6 3.3-3.6" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className="text-[10px] font-medium text-navy">Verified · 9 yrs experience</span>
    </div>
  );
}

function BrowserMockup() {
  return (
    <div className="relative rounded-2xl border border-border bg-navy p-2 shadow-card">
      <div className="relative overflow-hidden rounded-xl bg-surface">
        {/* mini nav */}
        <div className="relative z-10 flex items-center justify-between border-b border-border bg-surface px-5 py-3">
          <span className="font-heading text-sm font-semibold text-navy">✦</span>
          <div className="hidden gap-4 text-[11px] text-body sm:flex">
            <span>Home</span>
            <span>About</span>
            <span>Services</span>
            <span>Contact</span>
          </div>
        </div>

        {/* hero content */}
        <div className="relative flex h-80 items-center overflow-hidden sm:h-96 lg:h-80">
          <GatewayMotif className="left-1/2 top-1/2 h-[130%] w-[130%] -translate-x-1/2 -translate-y-1/2" opacity={0.05} />

          <div className="relative z-10 max-w-[55%] p-6 sm:p-7">
            <p className="font-heading text-lg font-semibold text-navy sm:text-xl">
              Acharya Dev Sharma
            </p>
            <p className="mt-1 text-xs text-body sm:text-[13px]">
              Vedic astrologer &amp; life guide
            </p>
            <span className="mt-4 inline-block rounded-btn bg-gold px-4 py-2 text-xs font-semibold text-white">
              Book consultation
            </span>
          </div>

          {/* astrologer photo panel */}
          <div className="absolute inset-y-0 right-0 w-[45%] bg-[var(--color-card-peach)]">
            <img
              src={astrologerPhoto}
              alt="Acharya Dev Sharma"
              className="h-full w-full object-cover object-top"
            />
            <div
              className="pointer-events-none absolute inset-y-0 left-0 w-1/3"
              style={{
                background: "linear-gradient(90deg, var(--color-surface) 0%, rgba(0,0,0,0) 100%)",
              }}
            />
          </div>

          <VerifiedBadge />
        </div>
      </div>
      <div className="mx-auto mt-2 h-2 w-1/2 rounded-b-lg bg-white/10" />
    </div>
  );
}

/* ---------- Desktop / tablet floating cards (unchanged logic) ---------- */

function CalendarCard() {
  return (
    <div className="card hidden w-40 p-3 sm:absolute sm:-top-1 sm:-right-[9.5rem] sm:block lg:-right-36">
      <p className="text-[11px] font-medium text-navy">April 2025</p>
      <div className="mt-2 grid grid-cols-7 gap-y-1 text-center text-[8px] text-body">
        {calendarDays.map((day) => (
          <span
            key={day}
            className={
              day === highlightedDay
                ? "mx-auto flex h-4 w-4 items-center justify-center rounded-full bg-gold text-white"
                : "mx-auto flex h-4 w-4 items-center justify-center"
            }
          >
            {day}
          </span>
        ))}
      </div>
    </div>
  );
}

function AppointmentsCard() {
  return (
    <div className="card hidden w-52 p-3 lg:absolute lg:top-44 lg:-right-40 lg:block">
      <p className="text-[11px] font-medium text-navy">Upcoming appointments</p>
      <ul className="mt-2.5 space-y-2.5">
        {appointments.map((item) => (
          <li key={item.name} className="flex items-center gap-2">
            <Avatar name={item.name} tint="bg-lavender/15 text-lavender" />
            <div className="min-w-0 flex-1">
              <p className="truncate text-[10px] font-medium text-navy">{item.name}</p>
              <p className="text-[9px] text-body">{item.time}</p>
            </div>
            <StatusPill label={item.status} tint={item.tint} />
          </li>
        ))}
      </ul>
    </div>
  );
}

function RevenueCard() {
  return (
    <div className="card hidden w-36 p-3 sm:absolute sm:bottom-16 sm:-left-6 sm:block">
      <p className="text-[10px] text-body">Total revenue</p>
      <div className="mt-1 flex items-baseline gap-1.5">
        <p className="font-heading text-base font-semibold text-navy">₹1,48,000</p>
        <span className="text-[10px] font-medium text-success">+12%</span>
      </div>
      <svg viewBox="0 0 100 30" className="mt-2 h-6 w-full" preserveAspectRatio="none">
        <polyline
          points="0,26 15,22 30,24 45,16 60,18 75,8 100,4"
          fill="none"
          stroke="var(--color-sage)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

function RecentClientsCard() {
  return (
    <div className="card hidden w-48 p-3 lg:absolute lg:bottom-10 lg:left-40 lg:block">
      <p className="text-[11px] font-medium text-navy">Recent clients</p>
      <ul className="mt-2.5 space-y-2">
        {clients.map((item) => (
          <li key={item.name} className="flex items-center gap-2">
            <Avatar name={item.name} tint="bg-sage/15 text-sage" />
            <p className="flex-1 truncate text-[10px] font-medium text-navy">{item.name}</p>
            <StatusPill label={item.status} tint={item.tint} />
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ---------- Mobile-only compact cards (unchanged logic) ---------- */

function MobileCalendarCard() {
  const weekdayLabels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const start = Math.min(Math.max(highlightedDay - 3, 1), calendarDays.length - 6);
  const weekStrip = calendarDays.slice(start - 1, start + 6);

  return (
    <div className="card p-4">
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-navy">April 2025</p>
        <div className="flex items-center gap-1">
          <button type="button" aria-label="Previous week" className="flex h-6 w-6 items-center justify-center rounded-full text-body">‹</button>
          <button type="button" aria-label="Next week" className="flex h-6 w-6 items-center justify-center rounded-full text-body">›</button>
        </div>
      </div>
      <div className="mt-3 grid grid-cols-7 gap-y-1 text-center">
        {weekdayLabels.map((label) => (
          <span key={label} className="text-[10px] font-medium text-body">{label}</span>
        ))}
      </div>
      <div className="mt-1 grid grid-cols-7 gap-y-1 text-center">
        {weekStrip.map((day) => (
          <span
            key={day}
            className={
              day === highlightedDay
                ? "mx-auto flex h-7 w-7 items-center justify-center rounded-full bg-gold text-xs font-semibold text-white"
                : "mx-auto flex h-7 w-7 items-center justify-center text-xs text-navy"
            }
          >
            {day}
          </span>
        ))}
      </div>
    </div>
  );
}

function MobileAppointmentsCard() {
  return (
    <div className="card p-4">
      <p className="text-sm font-medium text-navy">Upcoming appointments</p>
      <ul className="mt-3 space-y-3.5">
        {appointments.map((item) => (
          <li key={item.name} className="flex items-center gap-3">
            <Avatar name={item.name} tint={item.tint} />
            <div className="min-w-0 flex-1">
              <p className="truncate text-xs font-medium text-navy">{item.name}</p>
              <p className="text-[11px] text-body">{item.time}</p>
            </div>
            <StatusText status={item.status} />
          </li>
        ))}
      </ul>
    </div>
  );
}

function MobileRevenueCard() {
  return (
    <div className="card p-4">
      <p className="text-xs text-body">Total earnings</p>
      <div className="mt-1 flex items-baseline gap-2">
        <p className="font-heading text-xl font-semibold text-navy">₹1,48,000</p>
        <span className="text-xs font-medium text-success">+12%</span>
      </div>
      <svg viewBox="0 0 100 30" className="mt-3 h-8 w-full" preserveAspectRatio="none">
        <polyline
          points="0,26 15,22 30,24 45,16 60,18 75,8 100,4"
          fill="none"
          stroke="var(--color-sage)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

function MobileRecentClientsCard() {
  return (
    <div className="card p-4">
      <p className="text-sm font-medium text-navy">Recent clients</p>
      <ul className="mt-3 space-y-3">
        {clients.map((item) => (
          <li key={item.name} className="flex items-center gap-3">
            <Avatar name={item.name} tint={item.tint} />
            <p className="flex-1 truncate text-xs font-medium text-navy">{item.name}</p>
            <StatusText status={item.status} />
          </li>
        ))}
      </ul>
    </div>
  );
}

function MobileCards() {
  return (
    <div className="mt-6 space-y-4 sm:hidden">
      <MobileCalendarCard />
      <MobileAppointmentsCard />
      <MobileRevenueCard />
      <MobileRecentClientsCard />
    </div>
  );
}

// /** Real product pillars, not fabricated stats — see comment on trustPillars above. */
// function TrustSection() {
//   return (
//     <div className="border-t border-border bg-surface">
//       <div className="container-page py-14 sm:py-16">
//         <h2 className="max-w-md font-heading text-2xl font-semibold text-navy sm:text-3xl">
//           Everything you need to run astrology professionally
//         </h2>
//         <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
//           {trustPillars.map((pillar) => (
//             <div key={pillar.title}>
//               <p className="font-heading text-base font-semibold text-navy">{pillar.title}</p>
//               <p className="mt-2 text-sm text-body">{pillar.detail}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

export default function Hero() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border bg-background">
        <KundaliDiamond className="-right-24 -top-24 h-[440px] w-[440px]" />

        <div className="container-page relative py-16 sm:py-24">
          <div className="grid gap-16 lg:grid-cols-[1fr_1.3fr] lg:items-start">
            {/* Left — copy */}
            <div className="max-w-xl">
              <span className="eyebrow">For professional astrologers</span>

              <h1 className="mt-5 font-heading font-semibold text-navy" style={{ fontSize: "var(--text-hero)", lineHeight: "var(--line-height-heading)" }}>
                Stop managing bookings over WhatsApp
              </h1>

              <p className="mt-5 max-w-md text-base text-body sm:text-lg">
                A professional booking website, a client dashboard, and payment
                tracking — built specifically for how astrologers work.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link to="/booking" className="btn-primary">
                  Get started
                </Link>
                <Link to="/about" className="btn-secondary">
                  View a live example
                </Link>
              </div>

              <p className="mt-8 text-sm">
                <span className="text-navy">Modern technology.</span>{" "}
                <span className="text-editorial">Rooted in a tradition of understanding.</span>
              </p>
            </div>

            {/* Right — real product UI */}
            <div className="relative mx-auto w-full max-w-md pb-16 pt-8 sm:max-w-lg lg:mx-0 lg:max-w-none lg:pb-28 lg:pt-10 lg:pl-8 lg:-mr-24">
              <BrowserMockup />

              <CalendarCard />
              <AppointmentsCard />
              <RevenueCard />
              <RecentClientsCard />

              <MobileCards />
            </div>
          </div>
        </div>
      </section>

      {/* <TrustSection /> */}
    </>
  );
}
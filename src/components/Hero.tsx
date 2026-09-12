import { Link } from "react-router-dom";
// import ZodiacMotif from "./ZodiacMotif";

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

/** Plain colored status text (no pill background) — used in the compact mobile cards. */
function StatusText({ status }: { status: string }) {
  const color = status === "Upcoming" ? "text-lavender" : "text-sage";
  return <span className={`text-[11px] font-medium ${color}`}>{status}</span>;
}

function BrowserMockup() {
  return (
    <div className="rounded-2xl border border-border bg-navy p-2 shadow-card">
      <div className="overflow-hidden rounded-xl bg-surface">
        {/* mini nav */}
        <div className="flex items-center justify-between border-b border-border px-5 py-3">
          <span className="font-heading text-sm text-navy">✦</span>
          <div className="hidden gap-4 text-[11px] text-body sm:flex">
            <span>Home</span>
            <span>About</span>
            <span>Services</span>
            <span>Contact</span>
          </div>
        </div>

        {/* hero content */}
        <div className="relative flex h-80 items-center overflow-hidden sm:h-96 lg:h-80">
          {/* <div className="absolute inset-0 opacity-[0.12]">
            <ZodiacMotif />
          </div> */}

          <div className="relative z-10 max-w-[55%] p-6 sm:p-7">
            <p className="font-heading text-lg text-navy sm:text-xl">
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
                background:
                  "linear-gradient(90deg, var(--color-surface) 0%, rgba(0,0,0,0) 100%)",
              }}
            />
          </div>
        </div>
      </div>
      {/* laptop base */}
      <div className="mx-auto mt-2 h-2 w-1/2 rounded-b-lg bg-white/10" />
    </div>
  );
}

/* ============================================================
   DESKTOP / TABLET FLOATING CARDS — restored to their original
   positions exactly as they were before the mobile changes.
   Hidden below their breakpoint, so mobile never sees these.
   ============================================================ */

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
        <p className="font-heading text-base text-navy">₹1,48,000</p>
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

/* ============================================================
   MOBILE-ONLY CARDS — compact, stacked, styled to match the
   reference design (weekday strip calendar, colored status
   text, small sparkline). Only rendered below the sm breakpoint.
   ============================================================ */

function MobileCalendarCard() {
  const weekdayLabels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  // 7-day strip centered around the highlighted day
  const start = Math.min(Math.max(highlightedDay - 3, 1), calendarDays.length - 6);
  const weekStrip = calendarDays.slice(start - 1, start + 6);

  return (
    <div className="card p-4">
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-navy">April 2025</p>
        <div className="flex items-center gap-1">
          <button
            type="button"
            aria-label="Previous week"
            className="flex h-6 w-6 items-center justify-center rounded-full text-body"
          >
            ‹
          </button>
          <button
            type="button"
            aria-label="Next week"
            className="flex h-6 w-6 items-center justify-center rounded-full text-body"
          >
            ›
          </button>
        </div>
      </div>

      <div className="mt-3 grid grid-cols-7 gap-y-1 text-center">
        {weekdayLabels.map((label) => (
          <span key={label} className="text-[10px] font-medium text-body">
            {label}
          </span>
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
        <p className="font-heading text-xl text-navy">₹1,48,000</p>
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

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-background">
      <div className="container-page relative py-16 sm:py-24">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.3fr] lg:items-start">
          {/* Left — copy (unchanged) */}
          <div className="max-w-xl">
            {/* <span className="inline-flex items-center rounded-full border border-border bg-surface px-4 py-1.5 text-xs text-body">
              For astrologers, by astrologers
            </span> */}
            <h1 className="mt-5 font-heading text-4xl text-navy sm:text-5xl">
              Stop managing bookings over WhatsApp
            </h1>
            <p className="mt-5 max-w-md text-base text-body sm:text-lg">
              Get a professional booking website, a client dashboard, and payment tracking — without touching a line of code.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/booking" className="btn-primary">
                Create your website
              </Link>
              <Link to="/about" className="btn-secondary">
                View a live example
              </Link>
            </div>
          </div>

          {/* Right — mockup + cards */}
          <div className="relative mx-auto w-full max-w-md pb-16 pt-8 sm:max-w-lg lg:mx-0 lg:max-w-none lg:pb-28 lg:pt-10 lg:pl-8 lg:-mr-24">
            <BrowserMockup />

            {/* Desktop/tablet floating cards — unchanged from before */}
            <CalendarCard />
            <AppointmentsCard />
            <RevenueCard />
            <RecentClientsCard />

            {/* Mobile-only compact stacked cards */}
            <MobileCards />
          </div>
        </div>
      </div>
    </section>
  );
}
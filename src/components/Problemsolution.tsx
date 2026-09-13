import type { LucideIcon } from "lucide-react";
import {
  MessageCircle,
  CalendarDays,
  Wallet,
  Users,
  Megaphone,
  CalendarCheck,
  Clock,
  ShieldCheck,
  UserCog,
  TrendingUp,
  Check,
} from "lucide-react";
import { GatewayMotif, KundaliDiamond } from "./BrandMotifs";

/* ==========================================================================
   EASY UI CONFIGURATION
   ========================================================================== */

const UI = {
  section: {
    paddingY: "py-16 sm:py-20 lg:py-24",
    maxWidth: "max-w-[1240px]",
    background: "var(--gradient-section-bg)",
  },

  eyebrow: {
    text: "FOR ASTROLOGERS",
  },

  heading: {
    size: "text-[34px] sm:text-[42px] lg:text-[48px]",
    lineOne: "Stop juggling.",
    lineTwo: "Start growing.",
    descriptionWidth: "max-w-[420px]",
    descriptionMargin: "mt-4",
    descriptionSize: "text-[14px] sm:text-[15px]",
  },

  columns: {
    gap: "gap-8 lg:gap-10",
    topMargin: "mt-10 lg:mt-12",
  },

  columnHeading: {
    size: "text-[13px]",
    marginBottom: "mb-5",
  },

  row: {
    gap: "gap-4",
    spacing: "space-y-3",
    padding: "p-3.5",
    radius: "rounded-[14px]",
    iconSize: "h-9 w-9",
  },

  phone: {
    width: "w-[260px] sm:w-[280px]",
    radius: "rounded-[36px]",
    border: "border-[6px]",
    padding: "p-4",
  },
} as const;

/* ==========================================================================
   CONTENT
   ========================================================================== */

const problems = [
  {
    icon: MessageCircle,
    title: "Bookings via WhatsApp",
    description: "Missed messages, no proper record.",
  },
  {
    icon: CalendarDays,
    title: "Slot confusion",
    description: "Manual tracking, double bookings.",
  },
  {
    icon: Wallet,
    title: "Unreliable payments",
    description: "UPI requests, cash, tracking issues.",
  },
  {
    icon: Users,
    title: "Client follow-ups",
    description: "Repeated asks, lost clients.",
  },
  {
    icon: Megaphone,
    title: "Low visibility",
    description: "Only word of mouth, limited reach.",
  },
];

const solutions = [
  {
    icon: CalendarCheck,
    title: "Easy online booking",
    description: "Clients book directly, you get notified.",
  },
  {
    icon: Clock,
    title: "Smart availability",
    description: "Set your slots, avoid double bookings.",
  },
  {
    icon: ShieldCheck,
    title: "Secure payments",
    description: "Instant UPI, card or wallet payments.",
  },
  {
    icon: UserCog,
    title: "Client management",
    description: "History, notes, ratings, repeat clients.",
  },
  {
    icon: TrendingUp,
    title: "Grow your practice",
    description:
      "Get discovered by more people, beyond just word of mouth.",
  },
];

const calendarDays = [
  { label: "12", available: false },
  { label: "13", available: true },
  { label: "14", available: true, selected: true },
  { label: "15", available: true },
  { label: "16", available: false },
  { label: "17", available: true },
];

const timeSlots = ["10:00 AM", "1:00 PM", "4:30 PM"];

/* ==========================================================================
   ROW ITEM
   ========================================================================== */

type RowTint = "problem" | "solution";

interface RowItemProps {
  icon: LucideIcon;
  title: string;
  description: string;
  tint: RowTint;
}

function RowItem({
  icon: Icon,
  title,
  description,
  tint,
}: RowItemProps) {
  const isSolution = tint === "solution";

  return (
    <div
      className={`flex items-start ${UI.row.gap} ${UI.row.padding} ${UI.row.radius} border`}
      style={{
        background: isSolution
          ? "var(--color-accent-warm)"
          : "var(--color-surface)",
        borderColor: isSolution
          ? "rgba(232, 137, 69, 0.2)"
          : "var(--color-border)",
      }}
    >
      <span
        className={`flex ${UI.row.iconSize} shrink-0 items-center justify-center rounded-full`}
        style={{
          background: isSolution
            ? "var(--color-gold)"
            : "var(--color-accent-soft)",
          color: isSolution
            ? "#ffffff"
            : "var(--color-brand-blue)",
        }}
      >
        <Icon size={16} strokeWidth={2} />
      </span>

      <div className="min-w-0">
        <p className="font-heading text-[14px] font-semibold leading-tight text-navy">
          {title}
        </p>

        <p className="mt-0.5 text-[12px] leading-snug text-body">
          {description}
        </p>
      </div>
    </div>
  );
}

/* ==========================================================================
   PHONE MOCK
   ========================================================================== */

function PhoneMock() {
  return (
    <div className="relative">
      <div
        className={`${UI.phone.width} ${UI.phone.radius} ${UI.phone.border} ${UI.phone.padding} overflow-hidden shadow-card`}
        style={{
          borderColor: "var(--color-border-strong)",
          background: "var(--color-surface)",
        }}
      >
        <p className="font-heading text-[15px] font-semibold text-navy">
          Book a Session
        </p>

        <p className="mt-0.5 text-[11px] text-body">
          Select Date &amp; Time
        </p>

        {/* Calendar strip */}
        <div className="mt-4 flex justify-between">
          {calendarDays.map((day) => (
            <div
              key={day.label}
              className="flex h-9 w-9 items-center justify-center rounded-full text-[11px] font-medium"
              style={
                day.selected
                  ? {
                      backgroundImage: "var(--gradient-button)",
                      color: "#fff",
                    }
                  : day.available
                  ? {
                      color: "var(--color-navy)",
                    }
                  : {
                      color: "var(--color-border-strong)",
                    }
              }
            >
              {day.label}
            </div>
          ))}
        </div>

        {/* Time slots */}
        <div className="mt-4 grid grid-cols-3 gap-2">
          {timeSlots.map((slot, i) => (
            <div
              key={slot}
              className="rounded-[10px] border py-2 text-center text-[10px] font-medium"
              style={
                i === 0
                  ? {
                      borderColor: "var(--color-brand-blue)",
                      background: "var(--color-sage-bg)",
                      color: "var(--color-brand-blue)",
                    }
                  : {
                      borderColor: "var(--color-border)",
                      color: "var(--color-body-text)",
                    }
              }
            >
              {slot}
            </div>
          ))}
        </div>

        {/* CTA */}
        <button
          type="button"
          className="mt-5 flex h-10 w-full items-center justify-center rounded-btn text-[12px] font-semibold text-white"
          style={{
            backgroundImage: "var(--gradient-button)",
          }}
        >
          Book Now
        </button>
      </div>

      {/* Floating: payment success */}
      <div
        className="absolute -right-6 top-10 flex items-center gap-2 rounded-[14px] p-3 shadow-card sm:-right-10"
        style={{
          background: "var(--color-surface)",
          border: "1px solid var(--color-border)",
        }}
      >
        <span
          className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full"
          style={{
            background: "var(--color-success)",
          }}
        >
          <Check
            size={13}
            color="#fff"
            strokeWidth={3}
          />
        </span>

        <div>
          <p className="text-[9px] text-body">
            Payment Successful
          </p>

          <p className="text-[12px] font-semibold text-navy">
            ₹1,000
          </p>
        </div>
      </div>

      {/* Floating: client card */}
      <div
        className="absolute -bottom-6 -left-6 flex items-center gap-2 rounded-[14px] p-3 shadow-card sm:-left-10"
        style={{
          background: "var(--color-surface)",
          border: "1px solid var(--color-border)",
        }}
      >
        <span
          className="h-8 w-8 shrink-0 rounded-full"
          style={{
            background: "var(--color-card-peach)",
          }}
        />

        <div>
          <p className="text-[11px] font-semibold text-navy">
            Priya Mehta
          </p>

          <p
            className="text-[9px]"
            style={{
              color: "var(--color-gold)",
            }}
          >
            ★★★★★{" "}
            <span className="text-body">
              2 reviews
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

/* ==========================================================================
   MAIN SECTION
   ========================================================================== */

export default function ProblemSolution() {
  return (
    <section
      className={`relative overflow-hidden ${UI.section.paddingY}`}
      style={{
        background: UI.section.background,
      }}
    >
      {/* Background brand geometry */}
      <KundaliDiamond
        className="-right-16 -top-16 h-[380px] w-[380px]"
        opacity={0.04}
      />

      <GatewayMotif
        className="-left-20 bottom-0 h-[340px] w-[340px]"
        opacity={0.04}
      />

      <div
        className={`container-page relative mx-auto ${UI.section.maxWidth}`}
      >
        <div
          className={`grid grid-cols-1 items-center lg:grid-cols-[1fr_1fr_0.7fr] ${UI.columns.gap}`}
        >
          {/* LEFT: Heading + Problem list */}
          <div>
            <p
              className="font-medium text-body"
              style={{
                fontSize: "var(--text-eyebrow)",
                letterSpacing: "var(--tracking-eyebrow)",
              }}
            >
              {UI.eyebrow.text}
            </p>

            <h2
              className={`font-heading font-semibold leading-[1.05] text-navy ${UI.heading.size}`}
            >
              {UI.heading.lineOne}
              <br />
              {UI.heading.lineTwo}
            </h2>

            <p
              className={`${UI.heading.descriptionWidth} ${UI.heading.descriptionMargin} ${UI.heading.descriptionSize} leading-[1.55] text-body`}
            >
              The everyday struggles are real. Our platform takes care of the
              busy work, so you can focus on your clients and your craft.
            </p>

            <p
              className={`font-heading ${UI.columnHeading.size} ${UI.columnHeading.marginBottom} ${UI.columns.topMargin} text-body`}
            >
              The current struggle
            </p>

            <div className={UI.row.spacing}>
              {problems.map((item) => (
                <RowItem
                  key={item.title}
                  {...item}
                  tint="problem"
                />
              ))}
            </div>
          </div>

          {/* MIDDLE: Solution list */}
          <div className={`${UI.columns.topMargin} lg:mt-0`}>
            <p
              className={`font-heading ${UI.columnHeading.size} ${UI.columnHeading.marginBottom} text-body`}
            >
              Built for your peace of mind
            </p>

            <div className={UI.row.spacing}>
              {solutions.map((item) => (
                <RowItem
                  key={item.title}
                  {...item}
                  tint="solution"
                />
              ))}
            </div>
          </div>

          {/* RIGHT: Phone mock */}
          <div
            className={`${UI.columns.topMargin} flex justify-center lg:mt-0 lg:justify-end`}
          >
            <PhoneMock />
          </div>
        </div>
      </div>
    </section>
  );
}
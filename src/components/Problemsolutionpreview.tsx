import type { CSSProperties } from "react";
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

/* ==========================================================================
   THEME VARIABLES
   ========================================================================== */

const themeVars = {
  "--color-background": "#faf9f6",
  "--color-surface": "#ffffff",
  "--color-navy": "#151515",
  "--color-body-text": "#686868",
  "--color-brand-blue": "#4355b9",
  "--color-brand-orange": "#e88945",
  "--color-gold": "#e88945",
  "--color-sage-bg": "#e7e9f5",
  "--color-card-peach": "#fbf1e9",
  "--color-accent-warm": "#fbf1e9",
  "--color-accent-soft": "#f1f0f8",
  "--color-success": "#3fa66b",
  "--color-border": "#e6e3dd",
  "--color-border-strong": "#d8d5cf",
  "--gradient-button":
    "linear-gradient(135deg, #4355b9 0%, #7168c8 55%, #e88945 100%)",
  "--gradient-section-bg":
    "linear-gradient(180deg, #faf9f6 0%, #f1f0f8 100%)",
  "--font-heading":
    '"Geist", "Inter", -apple-system, "Segoe UI", sans-serif',
  "--text-eyebrow": "13px",
  "--tracking-eyebrow": "0.08em",
} as CSSProperties;

/* ==========================================================================
   UI
   ========================================================================== */

const UI = {
  section: {
    paddingY: "py-16 sm:py-20 lg:py-24",
    maxWidth: "max-w-[1240px]",
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
};

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
          ? "rgba(232,137,69,0.2)"
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
            ? "#fff"
            : "var(--color-brand-blue)",
        }}
      >
        <Icon
          size={16}
          strokeWidth={2}
        />
      </span>

      <div className="min-w-0">
        <p
          className="font-heading text-[14px] font-semibold leading-tight"
          style={{
            color: "var(--color-navy)",
          }}
        >
          {title}
        </p>

        <p
          className="mt-0.5 text-[12px] leading-snug"
          style={{
            color: "var(--color-body-text)",
          }}
        >
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
        className={`${UI.phone.width} ${UI.phone.radius} ${UI.phone.border} ${UI.phone.padding} overflow-hidden`}
        style={{
          borderColor: "var(--color-border-strong)",
          background: "var(--color-surface)",
          boxShadow: "0 10px 35px rgba(21,21,21,0.08)",
        }}
      >
        <p
          className="font-heading text-[15px] font-semibold"
          style={{
            color: "var(--color-navy)",
          }}
        >
          Book a Session
        </p>

        <p
          className="mt-0.5 text-[11px]"
          style={{
            color: "var(--color-body-text)",
          }}
        >
          Select Date &amp; Time
        </p>

        {/* Calendar */}
        <div className="mt-4 flex justify-between">
          {calendarDays.map((day) => (
            <div
              key={day.label}
              className="flex h-9 w-9 items-center justify-center rounded-full text-[11px] font-medium"
              style={
                day.selected
                  ? {
                      backgroundImage:
                        "var(--gradient-button)",
                      color: "#fff",
                    }
                  : day.available
                  ? {
                      color: "var(--color-navy)",
                    }
                  : {
                      color:
                        "var(--color-border-strong)",
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
                      borderColor:
                        "var(--color-brand-blue)",
                      background:
                        "var(--color-sage-bg)",
                      color:
                        "var(--color-brand-blue)",
                    }
                  : {
                      borderColor:
                        "var(--color-border)",
                      color:
                        "var(--color-body-text)",
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
          className="mt-5 flex h-10 w-full items-center justify-center rounded-full text-[12px] font-semibold text-white"
          style={{
            backgroundImage:
              "var(--gradient-button)",
          }}
        >
          Book Now
        </button>
      </div>

      {/* Payment Success */}
      <div
        className="absolute -right-6 top-10 flex items-center gap-2 rounded-[14px] p-3 sm:-right-10"
        style={{
          background: "var(--color-surface)",
          border:
            "1px solid var(--color-border)",
          boxShadow:
            "0 10px 35px rgba(21,21,21,0.1)",
        }}
      >
        <span
          className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full"
          style={{
            background:
              "var(--color-success)",
          }}
        >
          <Check
            size={13}
            color="#fff"
            strokeWidth={3}
          />
        </span>

        <div>
          <p
            className="text-[9px]"
            style={{
              color:
                "var(--color-body-text)",
            }}
          >
            Payment Successful
          </p>

          <p
            className="text-[12px] font-semibold"
            style={{
              color: "var(--color-navy)",
            }}
          >
            ₹1,000
          </p>
        </div>
      </div>

      {/* Client Card */}
      <div
        className="absolute -bottom-6 -left-6 flex items-center gap-2 rounded-[14px] p-3 sm:-left-10"
        style={{
          background: "var(--color-surface)",
          border:
            "1px solid var(--color-border)",
          boxShadow:
            "0 10px 35px rgba(21,21,21,0.1)",
        }}
      >
        <span
          className="h-8 w-8 shrink-0 rounded-full"
          style={{
            background:
              "var(--color-card-peach)",
          }}
        />

        <div>
          <p
            className="text-[11px] font-semibold"
            style={{
              color: "var(--color-navy)",
            }}
          >
            Priya Mehta
          </p>

          <p
            className="text-[9px]"
            style={{
              color: "var(--color-gold)",
            }}
          >
            ★★★★★{" "}
            <span
              style={{
                color:
                  "var(--color-body-text)",
              }}
            >
              2 reviews
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

/* ==========================================================================
   MAIN PREVIEW
   ========================================================================== */

export default function ProblemSolutionPreview() {
  return (
    <div style={themeVars}>
      <section
        className="relative overflow-hidden py-16 sm:py-20 lg:py-24"
        style={{
          background:
            "var(--gradient-section-bg)",
        }}
      >
        <div className="relative mx-auto max-w-[1240px] px-6">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[1fr_1fr_0.7fr] lg:gap-10">
            {/* LEFT */}
            <div>
              <p
                className="font-medium"
                style={{
                  color:
                    "var(--color-body-text)",
                  fontSize:
                    "var(--text-eyebrow)",
                  letterSpacing:
                    "var(--tracking-eyebrow)",
                }}
              >
                FOR ASTROLOGERS
              </p>

              <h2
                className="font-heading text-[34px] font-semibold leading-[1.05] sm:text-[42px] lg:text-[48px]"
                style={{
                  color: "var(--color-navy)",
                }}
              >
                Stop juggling.
                <br />
                Start growing.
              </h2>

              <p
                className="mt-4 max-w-[420px] text-[14px] leading-[1.55] sm:text-[15px]"
                style={{
                  color:
                    "var(--color-body-text)",
                }}
              >
                The everyday struggles are real. Our platform takes care of
                the busy work, so you can focus on your clients and your craft.
              </p>

              <p
                className="mt-10 mb-5 font-heading text-[13px] lg:mt-12"
                style={{
                  color:
                    "var(--color-body-text)",
                }}
              >
                The current struggle
              </p>

              <div className="space-y-3">
                {problems.map((item) => (
                  <RowItem
                    key={item.title}
                    {...item}
                    tint="problem"
                  />
                ))}
              </div>
            </div>

            {/* MIDDLE */}
            <div className="mt-10 lg:mt-0">
              <p
                className="mb-5 font-heading text-[13px]"
                style={{
                  color:
                    "var(--color-body-text)",
                }}
              >
                Built for your peace of mind
              </p>

              <div className="space-y-3">
                {solutions.map((item) => (
                  <RowItem
                    key={item.title}
                    {...item}
                    tint="solution"
                  />
                ))}
              </div>
            </div>

            {/* RIGHT */}
            <div className="mt-10 flex justify-center lg:mt-0 lg:justify-end">
              <PhoneMock />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
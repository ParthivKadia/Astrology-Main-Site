import { useEffect } from "react";

type Tint = "lavender" | "sage";

interface DemoPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  tint: Tint;
  name: string;
  title: string;
  url: string;
}

const astrologerPhoto = "/astrology_2.png";

/* ==========================================================================
   EASY UI CONTROLS
   --------------------------------------------------------------------------
   Change these values to control the size / spacing of the preview.
   ========================================================================== */

const PREVIEW_UI = {
  modal: {
    // Maximum width of desktop preview
    maxWidth: "max-w-[430px]",

    // Maximum height
    maxHeight: "max-h-[92vh]",

    // Desktop phone width
    desktopWidth: "w-full sm:w-[430px]",

    // Border radius
    radius: "rounded-[24px] sm:rounded-[28px]",
  },

  browserBar: {
    height: "h-[44px]",
    padding: "px-4",
  },

  site: {
    // Inner site background
    background: "bg-white",

    // Site horizontal padding
    padding: "px-5",

    // Section vertical spacing
    sectionPadding: "py-6",
  },

  hero: {
    imageHeight: "h-[245px] sm:h-[260px]",
  },

  typography: {
    name: "text-[25px] sm:text-[27px]",
    title: "text-[13px] sm:text-[14px]",
    body: "text-[13px] sm:text-[14px]",
    small: "text-[11px] sm:text-[12px]",
  },

  buttons: {
    height: "h-[42px]",
    radius: "rounded-[10px]",
  },

  bottomBooking: {
    height: "h-[66px]",
  },
};

/* ==========================================================================
   HELPERS
   ========================================================================== */

function panelBgClass(tint: Tint) {
  return tint === "lavender"
    ? "bg-[var(--color-card-lavender)]"
    : "bg-[var(--color-card-mint)]";
}

function panelSoftClass(tint: Tint) {
  return tint === "lavender"
    ? "bg-[var(--color-lavender-bg)]"
    : "bg-[var(--color-sage-bg)]";
}

function accentTextClass(tint: Tint) {
  return tint === "lavender"
    ? "text-lavender"
    : "text-sage";
}

function accentButtonClass(tint: Tint) {
  return tint === "lavender"
    ? "bg-lavender"
    : "bg-sage";
}

/* ==========================================================================
   ICONS
   ========================================================================== */

function StarIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M10 1.5l2.6 5.3 5.9.9-4.25 4.15 1 5.85L10 15l-5.25 2.7 1-5.85L1.5 7.7l5.9-.9L10 1.5Z" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="3"
        y="5"
        width="18"
        height="16"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M8 3v4M16 3v4M3 10h18"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

function VideoIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="3"
        y="6"
        width="13"
        height="12"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="m16 10 5-3v10l-5-3v-4Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle
        cx="12"
        cy="12"
        r="8.5"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M12 7v5l3 2"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="m4 10 4 4 8-9"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ==========================================================================
   SERVICE CARD
   ========================================================================== */

function ServiceCard({
  title,
  description,
  price,
  tint,
}: {
  title: string;
  description: string;
  price: string;
  tint: Tint;
}) {
  return (
    <div className="rounded-[14px] border border-border bg-white p-4">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h4 className="text-[13px] font-semibold leading-tight text-navy">
            {title}
          </h4>

          <p className="mt-1 text-[11px] leading-[1.4] text-body">
            {description}
          </p>

          <p className="mt-2 font-heading text-[15px] font-semibold text-navy">
            {price}
          </p>
        </div>

        <button
          type="button"
          className={`shrink-0 rounded-[8px] px-3 py-2 text-[10px] font-semibold text-white ${accentButtonClass(
            tint
          )}`}
        >
          Book
        </button>
      </div>
    </div>
  );
}

/* ==========================================================================
   MAIN MODAL
   ========================================================================== */

export default function DemoPreviewModal({
  isOpen,
  onClose,
  tint,
  name,
  title,
  url,
}: DemoPreviewModalProps) {
  /* ------------------------------------------------------------------------
     Lock the main website behind the modal
     ------------------------------------------------------------------------ */

  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    const originalTouchAction =
      document.body.style.touchAction;

    document.body.style.overflow = "hidden";
    document.body.style.touchAction = "none";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      document.body.style.overflow =
        originalOverflow;

      document.body.style.touchAction =
        originalTouchAction;

      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="
        fixed
        inset-0
        z-[9999]
        flex
        items-center
        justify-center
        bg-navy/70
        p-0
        backdrop-blur-[3px]
        sm:p-4
        md:p-6
      "
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Live preview of ${name}'s website`}
    >
      {/* =================================================================
          MOBILE / DESKTOP PREVIEW FRAME
          ================================================================= */}

      <div
        className={`
          relative
          flex
          ${PREVIEW_UI.modal.desktopWidth}
          ${PREVIEW_UI.modal.maxWidth}
          ${PREVIEW_UI.modal.maxHeight}
          flex-col
          overflow-hidden
          bg-white
          shadow-2xl
          ${PREVIEW_UI.modal.radius}
        `}
        onClick={(event) =>
          event.stopPropagation()
        }
      >
        {/* ================================================================
            BROWSER BAR
            ================================================================ */}

        <div
          className={`
            flex
            ${PREVIEW_UI.browserBar.height}
            shrink-0
            items-center
            gap-1.5
            border-b
            border-border
            bg-white
            ${PREVIEW_UI.browserBar.padding}
          `}
        >
          {/* Traffic lights */}
          <span className="h-[9px] w-[9px] shrink-0 rounded-full bg-[#ff6159]" />
          <span className="h-[9px] w-[9px] shrink-0 rounded-full bg-[#ffbd2e]" />
          <span className="h-[9px] w-[9px] shrink-0 rounded-full bg-[#28c840]" />

          {/* URL */}
          <div className="ml-2 flex min-w-0 flex-1 items-center rounded-md bg-[#f5f6f8] px-2.5 py-1.5">
            <span className="truncate text-[9px] text-body sm:text-[10px]">
              {url}
            </span>
          </div>

          {/* Close */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close preview"
            className="
              ml-1
              flex
              h-7
              w-7
              shrink-0
              items-center
              justify-center
              rounded-full
              text-body
              transition-colors
              hover:bg-[var(--color-peach)]
              hover:text-navy
            "
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M5 5l10 10M15 5 5 15"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        {/* ================================================================
            LIVE SITE
            ----------------------------------------------------------------
            ONLY THIS AREA SCROLLS
            ================================================================ */}

        <div
          className="
            min-h-0
            flex-1
            overflow-y-auto
            overscroll-contain
            bg-white
            [scrollbar-width:thin]
          "
        >
          {/* ============================================================
              HERO
              ============================================================ */}

          <section
            className={`relative overflow-hidden ${panelBgClass(
              tint
            )}`}
          >
            {/* Hero image */}
            <div
              className={`relative w-full overflow-hidden ${PREVIEW_UI.hero.imageHeight}`}
            >
              <img
                src={astrologerPhoto}
                alt={name}
                className="h-full w-full object-cover object-top"
              />

              {/* Image overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-transparent" />

              {/* Online badge */}
              <div className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full bg-white/95 px-2.5 py-1.5 shadow-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-[#36b37e]" />

                <span className="text-[9px] font-semibold text-navy">
                  Available for consultation
                </span>
              </div>

              {/* Hero bottom label */}
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-[10px] font-medium text-white/85">
                  Vedic Astrology • Online Consultation
                </p>
              </div>
            </div>

            {/* Hero information */}
            <div className="px-5 py-5">
              <h1
                className={`font-heading leading-none text-navy ${PREVIEW_UI.typography.name}`}
              >
                {name}
              </h1>

              <p
                className={`mt-2 text-body ${PREVIEW_UI.typography.title}`}
              >
                {title}
              </p>

              {/* Rating / stats */}
              <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2">
                <div className="flex items-center gap-1.5">
                  <span className="text-gold">
                    <StarIcon />
                  </span>

                  <span className="text-[11px] font-semibold text-navy">
                    4.9
                  </span>

                  <span className="text-[10px] text-body">
                    (128 reviews)
                  </span>
                </div>

                <span className="h-3 w-px bg-border" />

                <span className="text-[10px] text-body">
                  10+ years experience
                </span>
              </div>

              {/* Primary CTA */}
              <button
                type="button"
                className={`mt-5 flex w-full items-center justify-center ${PREVIEW_UI.buttons.height} ${PREVIEW_UI.buttons.radius} bg-gold px-4 text-[12px] font-semibold text-white shadow-sm transition-opacity hover:opacity-90`}
              >
                Book Consultation
              </button>
            </div>
          </section>

          {/* ============================================================
              QUICK INFO
              ============================================================ */}

          <section
            className={`${PREVIEW_UI.site.padding} ${PREVIEW_UI.site.sectionPadding}`}
          >
            <div className="grid grid-cols-3 gap-2">
              {/* Experience */}
              <div className="rounded-[12px] bg-[#f7f7f8] px-2 py-3 text-center">
                <p className="font-heading text-[16px] font-semibold text-navy">
                  10+
                </p>

                <p className="mt-1 text-[8px] text-body">
                  Years Experience
                </p>
              </div>

              {/* Consultations */}
              <div className="rounded-[12px] bg-[#f7f7f8] px-2 py-3 text-center">
                <p className="font-heading text-[16px] font-semibold text-navy">
                  1.2K+
                </p>

                <p className="mt-1 text-[8px] text-body">
                  Consultations
                </p>
              </div>

              {/* Rating */}
              <div className="rounded-[12px] bg-[#f7f7f8] px-2 py-3 text-center">
                <p className="font-heading text-[16px] font-semibold text-navy">
                  4.9
                </p>

                <p className="mt-1 text-[8px] text-body">
                  Client Rating
                </p>
              </div>
            </div>
          </section>

          {/* ============================================================
              ABOUT
              ============================================================ */}

          <section
            className={`border-t border-border ${PREVIEW_UI.site.padding} ${PREVIEW_UI.site.sectionPadding}`}
          >
            <p
              className={`text-[10px] font-semibold uppercase tracking-[0.12em] ${accentTextClass(
                tint
              )}`}
            >
              About {name.split(" ")[0]}
            </p>

            <h2 className="mt-2 font-heading text-[20px] leading-tight text-navy">
              Guidance for your next chapter
            </h2>

            <p
              className={`mt-3 leading-[1.65] text-body ${PREVIEW_UI.typography.body}`}
            >
              With over a decade of experience in Vedic astrology,
              {` ${name}`} helps clients find clarity around career,
              relationships, marriage, finances and important life
              decisions.
            </p>

            <p
              className={`mt-3 leading-[1.65] text-body ${PREVIEW_UI.typography.body}`}
            >
              Every consultation is personalised using your birth
              chart and focused on practical guidance you can apply
              in everyday life.
            </p>
          </section>

          {/* ============================================================
              SPECIALITIES
              ============================================================ */}

          <section
            className={`border-t border-border ${PREVIEW_UI.site.padding} ${PREVIEW_UI.site.sectionPadding}`}
          >
            <p
              className={`text-[10px] font-semibold uppercase tracking-[0.12em] ${accentTextClass(
                tint
              )}`}
            >
              Areas of guidance
            </p>

            <div className="mt-4 grid grid-cols-2 gap-2">
              {[
                "Career & Business",
                "Marriage & Relationships",
                "Kundli Reading",
                "Finance & Wealth",
                "Education",
                "Life Guidance",
              ].map((item) => (
                <div
                  key={item}
                  className={`flex items-center gap-2 rounded-[10px] px-3 py-2.5 ${panelSoftClass(
                    tint
                  )}`}
                >
                  <span className={accentTextClass(tint)}>
                    <CheckIcon />
                  </span>

                  <span className="text-[10px] font-medium leading-tight text-navy">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* ============================================================
              SERVICES
              ============================================================ */}

          <section
            className={`border-t border-border ${PREVIEW_UI.site.padding} ${PREVIEW_UI.site.sectionPadding}`}
          >
            <div className="flex items-end justify-between">
              <div>
                <p
                  className={`text-[10px] font-semibold uppercase tracking-[0.12em] ${accentTextClass(
                    tint
                  )}`}
                >
                  Services
                </p>

                <h2 className="mt-1 font-heading text-[21px] text-navy">
                  Choose your consultation
                </h2>
              </div>
            </div>

            <div className="mt-4 space-y-3">
              <ServiceCard
                tint={tint}
                title="Career Consultation"
                description="Career direction, business decisions & growth"
                price="₹999"
              />

              <ServiceCard
                tint={tint}
                title="Marriage Compatibility"
                description="Compatibility, relationships & marriage guidance"
                price="₹1,499"
              />

              <ServiceCard
                tint={tint}
                title="Kundli Reading"
                description="Detailed birth chart & life analysis"
                price="₹1,999"
              />
            </div>
          </section>

          {/* ============================================================
              BOOKING AVAILABILITY
              ============================================================ */}

          <section
            className={`border-t border-border ${panelBgClass(
              tint
            )} ${PREVIEW_UI.site.padding} ${PREVIEW_UI.site.sectionPadding}`}
          >
            <p
              className={`text-[10px] font-semibold uppercase tracking-[0.12em] ${accentTextClass(
                tint
              )}`}
            >
              Book a consultation
            </p>

            <h2 className="mt-1 font-heading text-[21px] text-navy">
              Select your preferred time
            </h2>

            {/* Consultation type */}
            <div className="mt-4 rounded-[12px] border border-white/80 bg-white/70 p-3">
              <div className="flex items-center gap-2">
                <span className={accentTextClass(tint)}>
                  <VideoIcon />
                </span>

                <div>
                  <p className="text-[11px] font-semibold text-navy">
                    Online Video Consultation
                  </p>

                  <p className="mt-0.5 text-[9px] text-body">
                    Private 1-on-1 consultation
                  </p>
                </div>
              </div>
            </div>

            {/* Date */}
            <div className="mt-4 flex items-center gap-2">
              <span className={accentTextClass(tint)}>
                <CalendarIcon />
              </span>

              <div>
                <p className="text-[9px] text-body">
                  Selected date
                </p>

                <p className="text-[11px] font-semibold text-navy">
                  Today
                </p>
              </div>
            </div>

            {/* Time slots */}
            <div className="mt-3 grid grid-cols-3 gap-2">
              {[
                "6:30 PM",
                "7:30 PM",
                "8:30 PM",
              ].map((time, index) => (
                <button
                  type="button"
                  key={time}
                  className={`rounded-[9px] border px-2 py-2 text-[9px] font-medium ${
                    index === 1
                      ? "border-navy bg-navy text-white"
                      : "border-border bg-white text-navy"
                  }`}
                >
                  {time}
                </button>
              ))}
            </div>
          </section>

          {/* ============================================================
              WHY CLIENTS BOOK
              ============================================================ */}

          <section
            className={`border-t border-border ${PREVIEW_UI.site.padding} ${PREVIEW_UI.site.sectionPadding}`}
          >
            <p
              className={`text-[10px] font-semibold uppercase tracking-[0.12em] ${accentTextClass(
                tint
              )}`}
            >
              Why clients choose {name.split(" ")[0]}
            </p>

            <div className="mt-4 space-y-3">
              {[
                "Personalised birth chart analysis",
                "Clear and practical guidance",
                "Private one-on-one consultation",
                "Easy online appointment booking",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2.5"
                >
                  <span
                    className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${panelSoftClass(
                      tint
                    )} ${accentTextClass(tint)}`}
                  >
                    <CheckIcon />
                  </span>

                  <span className="text-[11px] text-navy">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* ============================================================
              TESTIMONIAL
              ============================================================ */}

          <section
            className={`border-t border-border ${panelBgClass(
              tint
            )} ${PREVIEW_UI.site.padding} ${PREVIEW_UI.site.sectionPadding}`}
          >
            <p
              className={`text-[10px] font-semibold uppercase tracking-[0.12em] ${accentTextClass(
                tint
              )}`}
            >
              Client experience
            </p>

            <div className="mt-3 rounded-[14px] bg-white/75 p-4">
              <div className="flex gap-1 text-gold">
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
              </div>

              <p className="mt-3 text-[12px] leading-[1.6] text-navy">
                “The consultation gave me so much clarity. The
                guidance was detailed, practical and easy to
                understand.”
              </p>

              <p className="mt-3 text-[10px] font-semibold text-body">
                — Priya M.
              </p>
            </div>
          </section>

          {/* ============================================================
              FINAL CTA
              ============================================================ */}

          <section
            className={`${PREVIEW_UI.site.padding} py-7 text-center`}
          >
            <p className="font-heading text-[20px] leading-tight text-navy">
              Ready to get clarity?
            </p>

            <p className="mx-auto mt-2 max-w-[290px] text-[11px] leading-[1.5] text-body">
              Book a private consultation and get personalised
              guidance based on your birth chart.
            </p>

            <button
              type="button"
              className={`mt-4 inline-flex ${PREVIEW_UI.buttons.height} ${PREVIEW_UI.buttons.radius} items-center justify-center bg-gold px-6 text-[11px] font-semibold text-white`}
            >
              Book Consultation
            </button>
          </section>

          {/* ============================================================
              FOOTER
              ============================================================ */}

          <footer className="border-t border-border bg-[#fafafa] px-5 py-5 text-center">
            <p className="font-heading text-[13px] text-navy">
              {name}
            </p>

            <p className="mt-1 text-[9px] text-body">
              Vedic Astrology & Life Guidance
            </p>

            <p className="mt-3 text-[8px] text-body">
              © 2026 {name}. All rights reserved.
            </p>
          </footer>
        </div>

        {/* ================================================================
            STICKY BOOKING BAR
            ----------------------------------------------------------------
            Stays inside the preview, not the main website.
            ================================================================ */}

        <div
          className={`flex shrink-0 items-center gap-3 border-t border-border bg-white px-4 ${PREVIEW_UI.bottomBooking.height}`}
        >
          <div className="min-w-0 flex-1">
            <p className="text-[9px] text-body">
              Consultation from
            </p>

            <p className="font-heading text-[17px] font-semibold leading-tight text-navy">
              ₹999
            </p>
          </div>

          <button
            type="button"
            className="flex h-10 shrink-0 items-center justify-center gap-1.5 rounded-[10px] bg-gold px-5 text-[11px] font-semibold text-white shadow-sm transition-opacity hover:opacity-90"
          >
            <CalendarIcon />
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}
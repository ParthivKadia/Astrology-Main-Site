import { useState } from "react";
import DemoPreviewModal from "./Demopreviewmodal";

/* ==========================================================================
   TYPES
   ========================================================================== */

type Tint = "lavender" | "sage";
type BillingPeriod = "monthly" | "annually";
type DemoKey = "starter" | "custom" | null;

/* ==========================================================================
   EASY UI CONFIGURATION
   --------------------------------------------------------------------------
   Change sizes / spacing here instead of searching through the component.
   ========================================================================== */

const UI = {
  section: {
    // Vertical spacing of the complete section
    paddingY: "py-16 sm:py-20 lg:py-24",

    // Maximum content width
    // maxWidth: "max-w-[1180px]",
    maxWidth: "max-w-[1400px]",

    // Gap between heading area and pricing cards
    cardsTopMargin: "mt-9 sm:mt-10 lg:mt-11",

    // Gap between the two pricing cards
    cardsGap: "gap-10 sm:gap-16 lg:gap-22",
  },

  heading: {
    // Main heading size
    size: "text-[38px] sm:text-[46px] lg:text-[50px]",

    // Description width
    descriptionWidth: "max-w-[620px]",

    // Description size
    descriptionSize: "text-[14px] sm:text-[16px]",

    // Heading → description spacing
    descriptionMargin: "mt-4",
  },

  toggle: {
    // Toggle width
    width: "w-[184px]",

    // Toggle height
    height: "h-[40px]",

    // Heading → toggle spacing
    marginTop: "mt-6 sm:mt-7",

    // Toggle text
    textSize: "text-[12px]",

    // Active button
    active:
      "bg-navy text-white shadow-sm",

    // Inactive button
    inactive:
      "bg-white text-navy",
  },

  card: {
    // Card minimum height
    // minHeight: "min-h-[390px] sm:min-h-[410px] lg:min-h-[430px]",
    minHeight: "min-h-[410px] sm:min-h-[430px] lg:min-h-[455px]",

    // Card padding
    padding: "p-5 sm:p-6 lg:p-7",

    // Card border radius
    radius: "rounded-[16px]",

    // Gap between content and preview
    innerGap: "gap-5 sm:gap-6 lg:gap-7",

    // Desktop internal column ratio
    columns:
      "lg:grid-cols-[minmax(180px,0.84fr)_minmax(0,1.16fr)]",
  },

  badge: {
    padding: "px-3 py-1.5",
    text: "text-[10px] sm:text-[11px]",
  },

  title: {
    size: "text-[27px] sm:text-[30px]",
    marginTop: "mt-3",
  },

  subtitle: {
    size: "text-[12px] sm:text-[13px]",
    marginTop: "mt-1.5",
  },

  price: {
    marginTop: "mt-4",
    size: "text-[27px] sm:text-[30px]",
    unitSize: "text-[12px] sm:text-[13px]",
  },

  features: {
    marginTop: "mt-5",
    gap: "space-y-2.5",
    text: "text-[12px] sm:text-[13px]",
    iconSize: "h-[17px] w-[17px]",
  },

  buttons: {
    marginTop: "mt-5",

    // Button height
    height: "min-h-[39px]",

    // Button text
    text: "text-[11px] sm:text-[12px]",

    // Space between buttons
    gap: "gap-2",

    // Primary button width
    primaryWidth: "w-full sm:w-auto",

    // Preview button width
    previewWidth: "w-full sm:w-auto",
  },

  browser: {
    // Browser height
    height: "h-[205px] sm:h-[220px] lg:h-[230px]",

    // Browser header
    headerHeight: "h-[36px]",

    // Browser image width
    imageWidth: "w-[94px] sm:w-[112px] lg:w-[122px]",

    // Browser image height
    imageHeight: "h-[145px] sm:h-[160px] lg:h-[175px]",

    // Browser content padding
    padding: "p-4 sm:p-5",

    // Browser corner radius
    radius: "rounded-[12px]",
  },

  // phone: {
    // Phone width
    // width: "w-[76px] sm:w-[84px] lg:w-[90px]",
    phone: {
  width: "w-[88px] sm:w-[98px] lg:w-[108px]",

    // Phone position
    right: "-right-10 sm:-right-12",
    bottom: "-bottom-12 sm:-bottom-14",

    // Phone border
    border: "border-[3px] sm:border-[4px]",

    // Phone height
    // height: "h-[145px] sm:h-[158px] lg:h-[168px]",
    height: "h-[124px] sm:h-[1126px] lg:h-[130px]",

    // Phone image height
    imageHeight: "h-[58px] sm:h-[65px] lg:h-[70px]",
  },
};

/* ==========================================================================
   IMAGES
   ========================================================================== */

const starterAstrologerPhoto = "/astrologer.png";
const customAstrologerPhoto = "/astrologer.png";

/* ==========================================================================
   PLAN DATA
   --------------------------------------------------------------------------
   Change prices, text, URLs, etc. here.
   ========================================================================== */

const plans = {
  starter: {
    badge: "Most Popular",
    tint: "lavender" as Tint,

    title: "Starter",
    subtitle: "Mini website + Booking",

    monthly: {
      price: "₹999",
      unit: "/month",
    },

    annually: {
      // Change this whenever you decide your annual price
      price: "₹9,999",
      unit: "/year",
    },

    features: [
      "Personal profile & mini website",
      "Services & pricing",
      "Appointment booking",
      "Payment integration",
    ],

    primaryLabel: "Get Started",

    url: "rahulsharma.yourplatform.com",
    photo: starterAstrologerPhoto,
    astrologerName: "Rahul Sharma",
  },

  custom: {
    badge: "Best for Established Astrologers",
    tint: "sage" as Tint,

    title: "Custom",
    subtitle: "Fully personalised site + Software",

    monthly: {
      price: "₹30,000",
      unit: "/one time",
    },

    annually: {
      // Change this whenever you decide your annual price
      price: "₹30,000",
      unit: "/one time",
    },

    features: [
      "Your own domain (e.g. yourname.com)",
      "Custom design & features",
      "CRM, analytics & integrations",
      "Complete business solution",
    ],

    primaryLabel: "Build My Platform",

    url: "www.yourdomain.com",
    photo: customAstrologerPhoto,
    astrologerName: "Jyotish Acharya",
  },
};

/* ==========================================================================
   CHECK ICON
   ========================================================================== */

function CheckItem({
  label,
  tint,
}: {
  label: string;
  tint: Tint;
}) {
  const isLavender = tint === "lavender";

  return (
    <li className="flex items-start gap-2">
      <span
        className={`mt-[1px] flex ${UI.features.iconSize} shrink-0 items-center justify-center rounded-full ${
          isLavender
            ? "bg-[var(--color-lavender-bg)] text-lavender"
            : "bg-[var(--color-sage-bg)] text-sage"
        }`}
      >
        <svg
          width="10"
          height="10"
          viewBox="0 0 12 12"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M2 6L4.5 8.5L10 3"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>

      <span
        className={`min-w-0 leading-[1.4] text-navy ${UI.features.text}`}
      >
        {label}
      </span>
    </li>
  );
}

/* ==========================================================================
   BROWSER PREVIEW
   ========================================================================== */

function BrowserPreview({
  url,
  tint,
  photo,
  name,
}: {
  url: string;
  tint: Tint;
  photo: string;
  name: string;
}) {
  const panelBg =
    tint === "lavender"
      ? "bg-[var(--color-card-lavender)]"
      : "bg-[var(--color-card-mint)]";

  return (
    <div className="relative w-full">
      {/* Browser */}
      <div
        className={`w-full overflow-hidden border border-border bg-white shadow-card ${UI.browser.radius}`}
      >
        {/* Browser header */}
        <div
          className={`flex items-center gap-1.5 border-b border-border px-3 ${UI.browser.headerHeight}`}
        >
          <span className="h-[9px] w-[9px] shrink-0 rounded-full bg-[#ff6159]" />
          <span className="h-[9px] w-[9px] shrink-0 rounded-full bg-[#ffbd2e]" />
          <span className="h-[9px] w-[9px] shrink-0 rounded-full bg-[#28c840]" />

          <span className="ml-1.5 min-w-0 truncate text-[9px] text-body sm:text-[10px]">
            {url}
          </span>
        </div>

        {/* Website */}
        <div
          className={`relative flex ${UI.browser.height} items-center overflow-hidden ${UI.browser.padding} ${panelBg}`}
        >
          {/* Website information */}
          <div className="min-w-0 flex-1 pr-2">
            <p className="font-heading text-[15px] leading-tight text-navy sm:text-[17px] lg:text-[18px]">
              {name}
            </p>

            <p className="mt-1 text-[9px] text-body sm:text-[10px] lg:text-[11px]">
              Vedic Astrologer
            </p>

            <span className="mt-3 inline-flex rounded-btn bg-gold px-3 py-2 text-[9px] font-semibold leading-none text-white sm:px-3.5 sm:text-[10px]">
              Book
              <span className="ml-1 hidden sm:inline">
                Consultation
              </span>
            </span>
          </div>

          {/* Website photo */}
          <div
            className={`shrink-0 overflow-hidden rounded-[7px] bg-[var(--color-peach)] ${UI.browser.imageWidth} ${UI.browser.imageHeight}`}
          >
            <img
              src={photo}
              alt={name}
              className="h-full w-full object-cover object-top"
            />
          </div>
        </div>
      </div>

      {/* Phone */}
      <PhonePreview
        tint={tint}
        photo={photo}
        name={name}
      />
    </div>
  );
}

/* ==========================================================================
   PHONE PREVIEW
   ========================================================================== */

function PhonePreview({
  tint,
  photo,
  name,
}: {
  tint: Tint;
  photo: string;
  name: string;
}) {
  const panelBg =
    tint === "lavender"
      ? "bg-[var(--color-card-lavender)]"
      : "bg-[var(--color-card-mint)]";

  return (
    <div
      className={`absolute z-20 overflow-hidden rounded-[17px] border-navy bg-white shadow-card ${UI.phone.width} ${UI.phone.border} ${UI.phone.right} ${UI.phone.bottom}`}
    >
      <div className={`overflow-hidden rounded-[13px] ${panelBg}`}>

        {/* Phone photo — KEEP AS IT IS */}
        <div
          className={`w-full overflow-hidden ${UI.phone.imageHeight}`}
        >
          <img
            src={photo}
            alt={name}
            className="h-full w-full object-cover object-top"
          />
        </div>

        {/* Phone content */}
        <div
          className={`flex flex-col gap-1.5 px-2 py-2 ${UI.phone.height}`}
        >

          {/* Astrologer name */}
          <div>
            <p className="text-[8px] font-semibold leading-tight text-navy">
              {name}
            </p>

            <p className="text-[6px] leading-tight text-body">
              Vedic Astrologer
            </p>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-1">
            <span className="text-[7px] text-gold">★</span>

            <span className="text-[6px] font-medium text-navy">
              4.9
            </span>

            <span className="text-[6px] text-body">
              • 120+ sessions
            </span>
          </div>

          {/* Availability */}
          <div className="rounded-md bg-white/70 px-1.5 py-1">
            <p className="text-[5.5px] text-body">
              Next available
            </p>

            <p className="text-[6.5px] font-semibold text-navy">
              Today · 7:30 PM
            </p>
          </div>

          {/* Consultation details */}
          <div className="flex items-center justify-between rounded-md bg-white/60 px-1.5 py-1">
            <div>
              <p className="text-[5.5px] text-body">
                Consultation
              </p>

              <p className="text-[6.5px] font-semibold text-navy">
                30 min
              </p>
            </div>

            <p className="text-[7px] font-semibold text-navy">
              ₹999
            </p>
          </div>

          {/* Booking button */}
          <div className="mt-auto flex h-5 w-full items-center justify-center rounded-btn bg-gold sm:h-6">
            <span className="text-[6.5px] font-semibold text-white">
              Book Consultation
            </span>
          </div>

        </div>
      </div>
    </div>
  );
}

/* ==========================================================================
   BILLING TOGGLE
   ========================================================================== */

function BillingToggle({
  value,
  onChange,
}: {
  value: BillingPeriod;
  onChange: (value: BillingPeriod) => void;
}) {
  return (
    <div
      className={`mx-auto flex ${UI.toggle.width} ${UI.toggle.height} rounded-full border border-[#cdd3df] bg-white p-1 shadow-sm`}
    >
      <button
        type="button"
        onClick={() => onChange("monthly")}
        className={`flex flex-1 items-center justify-center rounded-full ${UI.toggle.textSize} font-medium transition-all ${
          value === "monthly"
            ? UI.toggle.active
            : UI.toggle.inactive
        }`}
      >
        Monthly
      </button>

      <button
        type="button"
        onClick={() => onChange("annually")}
        className={`flex flex-1 items-center justify-center rounded-full ${UI.toggle.textSize} font-medium transition-all ${
          value === "annually"
            ? UI.toggle.active
            : UI.toggle.inactive
        }`}
      >
        Annually
      </button>
    </div>
  );
}

/* ==========================================================================
   PLAN CARD
   ========================================================================== */

interface PlanCardProps {
  plan: (typeof plans)["starter"];
  billingPeriod: BillingPeriod;
  onOpenDemo: () => void;
}

function PlanCard({
  plan,
  billingPeriod,
  onOpenDemo,
}: PlanCardProps) {
  const isLavender = plan.tint === "lavender";

  const billing =
    plan[billingPeriod];

  const badgeClass = isLavender
    ? "bg-[var(--color-lavender-bg)] text-lavender"
    : "bg-[var(--color-sage-bg)] text-sage";

  return (
    <article
      className={`relative flex min-w-0 flex-col overflow-visible rounded-[16px] border border-border bg-white ${UI.card.minHeight} ${UI.card.padding}`}
    >
      <div
        className={`grid min-w-0 flex-1 grid-cols-1 ${UI.card.columns} ${UI.card.innerGap}`}
      >
        {/* ================================================================ */}
        {/* LEFT CONTENT                                                      */}
        {/* ================================================================ */}

        <div className="flex min-w-0 flex-col">
          {/* Badge */}
          <div>
            <span
              className={`inline-flex max-w-full rounded-full ${UI.badge.padding} ${UI.badge.text} font-medium leading-none ${badgeClass}`}
            >
              {plan.badge}
            </span>
          </div>

          {/* Title */}
          <h3
            className={`font-heading leading-none text-navy ${UI.title.size} ${UI.title.marginTop}`}
          >
            {plan.title}
          </h3>

          {/* Subtitle */}
          <p
            className={`max-w-[220px] leading-[1.35] text-body ${UI.subtitle.size} ${UI.subtitle.marginTop}`}
          >
            {plan.subtitle}
          </p>

          {/* Price */}
          <div
            className={`flex items-baseline gap-1.5 ${UI.price.marginTop}`}
          >
            <span
              className={`font-heading leading-none text-navy ${UI.price.size}`}
            >
              {billing.price}
            </span>

            <span
              className={`text-body ${UI.price.unitSize}`}
            >
              {billing.unit}
            </span>
          </div>

          {/* Features */}
          <ul
            className={`mt-auto pt-5 ${UI.features.gap}`}
          >
            {plan.features.map((feature) => (
              <CheckItem
                key={feature}
                label={feature}
                tint={plan.tint}
              />
            ))}
          </ul>

          {/* Buttons */}
          <div
            className={`flex flex-col sm:flex-row lg:flex-col xl:flex-row ${UI.buttons.gap} ${UI.buttons.marginTop}`}
          >
            {/* Primary */}
            <button
              type="button"
              className={`inline-flex ${UI.buttons.height} ${UI.buttons.primaryWidth} items-center justify-center whitespace-nowrap rounded-btn px-4 font-semibold text-white transition-opacity hover:opacity-90 ${UI.buttons.text} ${
                isLavender ? "" : "bg-sage"
              }`}
              style={
                isLavender
                  ? {
                      backgroundImage:
                        "var(--gradient-button)",
                    }
                  : undefined
              }
            >
              {plan.primaryLabel} →
            </button>

            {/* Preview */}
            <button
              type="button"
              onClick={onOpenDemo}
              className={`inline-flex ${UI.buttons.height} ${UI.buttons.previewWidth} items-center justify-center gap-1.5 whitespace-nowrap rounded-btn border border-border bg-white px-3 font-medium text-navy transition-colors hover:bg-surface ${UI.buttons.text}`}
            >
              <svg
                width="13"
                height="13"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M1 8s2.5-5 7-5 7 5 7 5-2.5 5-7 5-7-5-7-5Z"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                <circle
                  cx="8"
                  cy="8"
                  r="2"
                  stroke="currentColor"
                  strokeWidth="1.3"
                />
              </svg>

              Preview Live Site
            </button>
          </div>
        </div>

        {/* ================================================================ */}
        {/* RIGHT PREVIEW                                                     */}
        {/* ================================================================ */}

        <div className="flex min-w-0 items-center">
          <div className="w-full">
            <BrowserPreview
              url={plan.url}
              tint={plan.tint}
              photo={plan.photo}
              name={plan.astrologerName}
            />
          </div>
        </div>
      </div>
    </article>
  );
}

/* ==========================================================================
   MAIN SECTION
   ========================================================================== */

export default function TwoWaysToGrow() {
  const [openDemo, setOpenDemo] =
    useState<DemoKey>(null);

  const [billingPeriod, setBillingPeriod] =
    useState<BillingPeriod>("monthly");

  return (
    <section
      className={`relative overflow-hidden ${UI.section.paddingY}`}
      style={{
        background:
          "var(--gradient-section-bg)",
      }}
    >
      {/* ================================================================ */}
      {/* SUBTLE BACKGROUND DECORATION                                     */}
      {/* ================================================================ */}

      <div
        className="pointer-events-none absolute -right-20 top-20 h-[360px] w-[360px] rounded-full opacity-40"
        style={{
          background:
            "radial-gradient(circle, rgba(214,228,226,0.45) 0%, rgba(214,228,226,0) 70%)",
        }}
      />

      <div
        className="pointer-events-none absolute -left-24 bottom-0 h-[300px] w-[300px] rounded-full opacity-30"
        style={{
          background:
            "radial-gradient(circle, rgba(222,213,245,0.5) 0%, rgba(222,213,245,0) 70%)",
        }}
      />

      {/* ================================================================ */}
      {/* CONTENT                                                          */}
      {/* ================================================================ */}

      <div
        className={`container-page relative mx-auto ${UI.section.maxWidth}`}
      >
        {/* ============================================================ */}
        {/* HEADER                                                       */}
        {/* ============================================================ */}

        <div className="flex flex-col items-center text-center">
          <h2
            className={`font-heading leading-[1.05] text-navy ${UI.heading.size}`}
          >
            Two Ways to Grow
          </h2>

          <p
            className={`${UI.heading.descriptionWidth} ${UI.heading.descriptionMargin} ${UI.heading.descriptionSize} leading-[1.55] text-body`}
          >
            Whether you&apos;re just starting or ready for a fully
            customised platform, we have the right solution for
            your astrology business.
          </p>

          {/* Billing toggle */}
          <div className={UI.toggle.marginTop}>
            <BillingToggle
              value={billingPeriod}
              onChange={setBillingPeriod}
            />
          </div>
        </div>

        {/* ============================================================ */}
        {/* PLAN CARDS                                                    */}
        {/* ============================================================ */}

        <div
          className={`grid grid-cols-1 lg:grid-cols-2 ${UI.section.cardsGap} ${UI.section.cardsTopMargin}`}
        >
          <PlanCard
            plan={plans.starter}
            billingPeriod={billingPeriod}
            onOpenDemo={() =>
              setOpenDemo("starter")
            }
          />

          <PlanCard
            plan={plans.custom}
            billingPeriod={billingPeriod}
            onOpenDemo={() =>
              setOpenDemo("custom")
            }
          />
        </div>
      </div>

      {/* ================================================================ */}
      {/* DEMO MODALS                                                      */}
      {/* ================================================================ */}

      <DemoPreviewModal
        isOpen={openDemo === "starter"}
        onClose={() => setOpenDemo(null)}
        tint="lavender"
        name="Rahul Sharma"
        title="Vedic Astrologer"
        url="rahulsharma.yourplatform.com"
      />

      <DemoPreviewModal
        isOpen={openDemo === "custom"}
        onClose={() => setOpenDemo(null)}
        tint="sage"
        name="Jyotish Acharya"
        title="Vedic Astrology & Life Guidance"
        url="www.yourdomain.com"
      />
    </section>
  );
}
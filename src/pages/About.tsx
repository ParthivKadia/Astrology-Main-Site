import { Link } from "react-router-dom";

const values = [
  {
    label: "Grounded, not vague",
    detail: "Every reading ties back to something specific in your chart — no generic horoscope language.",
    tint: "bg-lavender/15 text-lavender",
  },
  {
    label: "Your questions first",
    detail: "You bring what's on your mind. The chart is the tool, not the agenda.",
    tint: "bg-sage/15 text-sage",
  },
  {
    label: "No fear-based framing",
    detail: "Difficult placements are explained as patterns to work with, not omens.",
    tint: "bg-gold/15 text-gold",
  },
];

export default function About() {
  return (
    <div className="container-page py-16 sm:py-24">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
        <div>
          <h1 className="font-heading text-3xl text-navy sm:text-4xl">
            About your astrologer
          </h1>
          <p className="mt-5 text-body">
            I'm Maya Iyer, a practicing astrologer for the last nine years.
            I trained in both Western and Vedic traditions, and I read charts
            the way a good editor reads a manuscript — closely, and with the
            person's own intentions in mind.
          </p>
          <p className="mt-4 text-body">
            Most people come to a reading with a real question: a career
            decision, a relationship, a sense that something is shifting.
            My job is to help you see what your chart actually says about
            it, in plain language you can use.
          </p>
        </div>

        <div className="card bg-surface">
          <div className="aspect-square w-full rounded-card bg-[var(--color-card-lavender)]" />
          <p className="mt-4 font-heading text-lg text-navy">Maya Iyer</p>
          <p className="text-sm text-body">Astrologer · 9 years practicing</p>
        </div>
      </div>

      <div className="mt-20">
        <h2 className="font-heading text-2xl text-navy">How I approach a session</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {values.map((value) => (
            <div key={value.label} className="card">
              <span className={`badge-icon ${value.tint}`}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                  <path
                    d="M9 2l2 4.5 5 .6-3.7 3.4.9 5-4.2-2.4-4.2 2.4.9-5L2 7.1l5-.6L9 2Z"
                    stroke="currentColor"
                    strokeWidth="1.3"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <h3 className="mt-4 font-heading text-base text-navy">{value.label}</h3>
              <p className="mt-2 text-sm text-body">{value.detail}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 flex flex-col items-start gap-4 rounded-card border border-border bg-surface p-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-heading text-xl text-navy">Ready to book your session?</p>
        <Link to="/booking" className="btn-primary shrink-0">
          Book a reading
        </Link>
      </div>
    </div>
  );
}

import { FormEvent, useState } from "react";

const sessionTypes = [
  "Birth chart reading",
  "Relationship compatibility",
  "Year-ahead forecast",
];

interface FormState {
  name: string;
  email: string;
  date: string;
  time: string;
  sessionType: string;
  notes: string;
}

const initialState: FormState = {
  name: "",
  email: "",
  date: "",
  time: "",
  sessionType: sessionTypes[0],
  notes: "",
};

export default function Booking() {
  const [form, setForm] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);

  const handleChange =
    (field: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
    };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // No backend wired up yet — this is a template.
    // Hook this up to your booking API / email service here.
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="container-page flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
        <span className="badge-icon bg-sage/15 text-sage">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M4 10.5l4 4 8-9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <h1 className="mt-5 font-heading text-3xl text-navy">Request sent</h1>
        <p className="mt-3 max-w-md text-body">
          Thanks, {form.name.split(" ")[0] || "there"}. We'll email {form.email || "you"} to
          confirm your {form.sessionType.toLowerCase()} on {form.date || "your chosen date"}.
        </p>
        <button
          type="button"
          onClick={() => {
            setForm(initialState);
            setSubmitted(false);
          }}
          className="btn-secondary mt-8"
        >
          Book another session
        </button>
      </div>
    );
  }

  return (
    <div className="container-page py-16 sm:py-24">
      <div className="max-w-xl">
        <h1 className="font-heading text-3xl text-navy sm:text-4xl">Book a reading</h1>
        <p className="mt-4 text-body">
          Fill in a few details and a preferred time. We'll confirm by email
          within a day.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="card mt-10 max-w-xl">
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label htmlFor="name" className="block text-sm font-medium text-navy">
              Full name
            </label>
            <input
              id="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange("name")}
              className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-navy outline-none focus:border-gold"
              placeholder="Your name"
            />
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-medium text-navy">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange("email")}
              className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-navy outline-none focus:border-gold"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="date" className="block text-sm font-medium text-navy">
              Preferred date
            </label>
            <input
              id="date"
              type="date"
              required
              value={form.date}
              onChange={handleChange("date")}
              className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-navy outline-none focus:border-gold"
            />
          </div>

          <div>
            <label htmlFor="time" className="block text-sm font-medium text-navy">
              Preferred time
            </label>
            <input
              id="time"
              type="time"
              required
              value={form.time}
              onChange={handleChange("time")}
              className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-navy outline-none focus:border-gold"
            />
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="sessionType" className="block text-sm font-medium text-navy">
              Session type
            </label>
            <select
              id="sessionType"
              value={form.sessionType}
              onChange={handleChange("sessionType")}
              className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-navy outline-none focus:border-gold"
            >
              {sessionTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="notes" className="block text-sm font-medium text-navy">
              Anything you'd like to share? (optional)
            </label>
            <textarea
              id="notes"
              rows={4}
              value={form.notes}
              onChange={handleChange("notes")}
              className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-navy outline-none focus:border-gold"
              placeholder="Birth time and place, or the question on your mind"
            />
          </div>
        </div>

        <button type="submit" className="btn-primary mt-7 w-full sm:w-auto">
          Request booking
        </button>
      </form>
    </div>
  );
}

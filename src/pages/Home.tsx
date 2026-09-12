// import { Link } from "react-router-dom";
// import ZodiacMotif from "../components/ZodiacMotif";

// const features = [
//   {
//     title: "Birth chart reading",
//     description:
//       "A full walk-through of your natal chart — placements, houses, and what they mean for how you move through life.",
//     tint: "bg-[var(--color-card-lavender)]",
//     badge: "bg-lavender/15 text-lavender",
//   },
//   {
//     title: "Relationship compatibility",
//     description:
//       "Compare two charts to understand where you naturally align, and where a little patience goes a long way.",
//     tint: "bg-[var(--color-card-mint)]",
//     badge: "bg-sage/15 text-sage",
//   },
//   {
//     title: "Year-ahead forecast",
//     description:
//       "A grounded look at the transits coming up for you over the next twelve months, and how to work with them.",
//     tint: "bg-[var(--color-card-peach)]",
//     badge: "bg-gold/15 text-gold",
//   },
// ];

// export default function Home() {
//   return (
//     <div>
//       {/* Hero */}
//       <section className="relative overflow-hidden border-b border-border">
//         <ZodiacMotif />
//         <div className="container-page relative py-20 sm:py-28">
//           <div className="max-w-2xl">
//             <h1 className="font-heading text-4xl text-navy sm:text-5xl">
//               Astrology readings that feel like a real conversation
//             </h1>
//             <p className="mt-5 max-w-lg font-body text-base text-body sm:text-lg">
//               Book time with an astrologer for a straightforward, one-on-one
//               reading — no jargon, no vague predictions, just a clear look at
//               your chart.
//             </p>
//             <div className="mt-8 flex flex-wrap gap-4">
//               <Link to="/booking" className="btn-primary">
//                 Book a reading
//               </Link>
//               <Link to="/about" className="btn-secondary">
//                 Meet the astrologer
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Features */}
//       <section className="container-page py-16 sm:py-24">
//         <h2 className="font-heading text-2xl text-navy sm:text-3xl">
//           Readings for wherever you are right now
//         </h2>
//         <p className="mt-3 max-w-xl text-body">
//           Every session is one-on-one and built around your own chart, not a
//           generic script.
//         </p>

//         <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//           {features.map((feature) => (
//             <div key={feature.title} className={`card ${feature.tint}`}>
//               <span className={`badge-icon ${feature.badge}`}>
//                 <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
//                   <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.5" />
//                   <circle cx="10" cy="10" r="2" fill="currentColor" />
//                 </svg>
//               </span>
//               <h3 className="mt-4 font-heading text-lg text-navy">{feature.title}</h3>
//               <p className="mt-2 text-sm text-body">{feature.description}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* CTA strip */}
//       <section className="border-t border-border bg-surface">
//         <div className="container-page flex flex-col items-start gap-6 py-14 sm:flex-row sm:items-center sm:justify-between">
//           <div>
//             <h2 className="font-heading text-2xl text-navy">
//               Curious what your chart has to say?
//             </h2>
//             <p className="mt-2 text-body">
//               Sessions run 45 minutes, over video or voice call.
//             </p>
//           </div>
//           <Link to="/booking" className="btn-primary shrink-0">
//             Check available times
//           </Link>
//         </div>
//       </section>
//     </div>
//   );
// }

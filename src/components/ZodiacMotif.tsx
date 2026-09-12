// /**
//  * Purely decorative background motif — a faint zodiac wheel with
//  * dotted stars. Absolutely positioned; pointer-events disabled so
//  * it never interferes with content or accessibility.
//  */
// export default function ZodiacMotif() {
//   return (
//     <svg
//       aria-hidden="true"
//       className="pointer-events-none absolute right-0 top-0 h-full w-full opacity-[0.06]"
//       viewBox="0 0 400 400"
//       fill="none"
//     >
//       <circle cx="320" cy="80" r="120" stroke="#1A2B4C" strokeWidth="1" />
//       <circle cx="320" cy="80" r="90" stroke="#1A2B4C" strokeWidth="1" />
//       <line x1="200" y1="80" x2="440" y2="80" stroke="#1A2B4C" strokeWidth="1" />
//       <line x1="320" y1="-40" x2="320" y2="200" stroke="#1A2B4C" strokeWidth="1" />
//       <line x1="235" y1="-5" x2="405" y2="165" stroke="#1A2B4C" strokeWidth="1" />
//       <line x1="235" y1="165" x2="405" y2="-5" stroke="#1A2B4C" strokeWidth="1" />
//       {[...Array(14)].map((_, i) => (
//         <circle
//           key={i}
//           cx={40 + ((i * 37) % 360)}
//           cy={220 + ((i * 53) % 160)}
//           r="2.5"
//           fill="#1A2B4C"
//         />
//       ))}
//     </svg>
//   );
// }

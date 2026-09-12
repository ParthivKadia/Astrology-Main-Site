import { useState } from "react";
import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/booking", label: "Book a Reading" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `font-body text-sm transition-colors duration-150 ${
      isActive ? "text-gold" : "text-navy hover:text-gold"
    }`;

  return (
    <header className="border-b border-border bg-background/95 backdrop-blur">
      <div className="container-page flex h-20 items-center justify-between">
        <NavLink to="/" className="font-heading text-xl text-navy" onClick={() => setOpen(false)}>
          Stellara
        </NavLink>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} className={linkClass}>
              {link.label}
            </NavLink>
          ))}
          <NavLink to="/booking" className="btn-primary">
            Book Now
          </NavLink>
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
          className="flex h-10 w-10 items-center justify-center rounded-full text-navy md:hidden"
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
            {open ? (
              <path
                d="M4 4L18 18M18 4L4 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            ) : (
              <>
                <path d="M2 5H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M2 11H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M2 17H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile nav panel */}
      {open && (
        <nav className="border-t border-border bg-background md:hidden">
          <div className="container-page flex flex-col gap-4 py-5">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={linkClass}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
            <NavLink to="/booking" className="btn-primary w-fit" onClick={() => setOpen(false)}>
              Book Now
            </NavLink>
          </div>
        </nav>
      )}
    </header>
  );
}

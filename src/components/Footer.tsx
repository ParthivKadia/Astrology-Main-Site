export default function Footer() {
  return (
    <footer className="bg-footer-bg text-footer-text">
      <div className="container-page flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-heading text-lg">Stellara</p>
          <p className="mt-1 text-sm text-footer-text/70">
            Astrology readings, grounded in real conversation.
          </p>
        </div>
        <div className="flex gap-6 text-sm text-footer-text/80">
          <a href="mailto:hello@stellara.example" className="hover:text-gold-light">
            hello@stellara.example
          </a>
          <a href="tel:+10000000000" className="hover:text-gold-light">
            +1 (000) 000-0000
          </a>
        </div>
      </div>
      <div className="border-t border-white/10 py-4">
        <p className="container-page text-xs text-footer-text/60">
          © {new Date().getFullYear()} Stellara. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

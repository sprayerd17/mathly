"use client";

import Link from "next/link";
import { useAuth } from "@/app/providers";
import { useTranslations } from "@/src/i18n/useTranslations";

export default function Footer() {
  const t = useTranslations();
  const { openModal } = useAuth();

  const linkClass = "text-sm transition-colors hover:text-white text-left";
  const linkStyle = { color: "#a8b8d8" };

  return (
    <footer style={{ backgroundColor: "#0f1f3d" }} className="text-white mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Brand */}
          <div>
            <span className="text-2xl font-bold" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
              Mathly
            </span>
            <p className="mt-3 text-sm" style={{ color: "#a8b8d8" }}>
              {t.footer_tagline}
            </p>
          </div>

          {/* Column 2: Support */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              {t.footer_support_heading}
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/contact" className={linkClass} style={linkStyle}>
                  {t.footer_contact_us}
                </Link>
              </li>
              <li>
                <Link href="/contact#faq" className={linkClass} style={linkStyle}>
                  {t.footer_faqs}
                </Link>
              </li>
              <li>
                <Link href="/" className={linkClass} style={linkStyle}>
                  {t.footer_how_it_works}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Account */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              {t.footer_account_heading}
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <button onClick={() => openModal('login')} className={linkClass} style={linkStyle}>
                  {t.footer_login}
                </button>
              </li>
              <li>
                <button onClick={() => openModal('register')} className={linkClass} style={linkStyle}>
                  {t.footer_register}
                </button>
              </li>
              <li>
                <Link href="/pricing" className={linkClass} style={linkStyle}>
                  {t.footer_subscription_plans}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Earn Free Access */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              {t.footer_earn_free_access_heading}
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/refer" className={linkClass} style={linkStyle}>
                  {t.footer_how_to_get_mathly_free}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider + Copyright bar */}
        <div
          className="mt-12 border-t pt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"
          style={{ borderColor: "#1e3560" }}
        >
          <p className="text-sm" style={{ color: "#a8b8d8" }}>
            {t.footer_copyright.replace("{year}", String(new Date().getFullYear()))}
          </p>
          <div className="flex gap-4">
            <Link href="/terms" className={linkClass} style={linkStyle}>
              {t.footer_terms}
            </Link>
            <Link href="/privacy" className={linkClass} style={linkStyle}>
              {t.footer_privacy}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

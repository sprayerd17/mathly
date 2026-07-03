"use client";

import Link from "next/link";
import { useTranslations } from "@/src/i18n/useTranslations";

const grades = [4, 5, 6, 7, 8, 9, 10, 11, 12];

export default function Footer() {
  const t = useTranslations();

  return (
    <footer style={{ backgroundColor: "#0f1f3d" }} className="text-white mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {/* Column 1: Brand */}
          <div>
            <span className="text-2xl font-bold" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
              Mathly
            </span>
            <p className="mt-3 text-sm" style={{ color: "#a8b8d8" }}>
              {t.footer_tagline}
            </p>
          </div>

          {/* Column 2: Learn */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              {t.footer_learn_heading}
            </h3>
            <ul className="mt-4 space-y-2">
              {grades.map((grade) => (
                <li key={grade}>
                  <Link
                    href="#"
                    className="text-sm transition-colors hover:text-white"
                    style={{ color: "#a8b8d8" }}
                  >
                    {t.footer_grade_link.replace('{grade}', String(grade))}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Support */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              {t.footer_support_heading}
            </h3>
            <ul className="mt-4 space-y-2">
              {[t.footer_contact_us, t.footer_faqs, t.footer_how_it_works].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-sm transition-colors hover:text-white"
                    style={{ color: "#a8b8d8" }}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Account */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              {t.footer_account_heading}
            </h3>
            <ul className="mt-4 space-y-2">
              {[t.footer_login, t.footer_register, t.footer_subscription_plans].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-sm transition-colors hover:text-white"
                    style={{ color: "#a8b8d8" }}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Earn Free Access */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              {t.footer_earn_free_access_heading}
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="/refer"
                  className="text-sm transition-colors hover:text-white"
                  style={{ color: "#a8b8d8" }}
                >
                  {t.footer_how_to_get_mathly_free}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider + Copyright bar */}
        <div className="mt-12 border-t pt-6" style={{ borderColor: "#1e3560" }}>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm" style={{ color: "#a8b8d8" }}>
              {t.footer_copyright}
            </p>
            <div className="flex gap-4 text-sm" style={{ color: "#a8b8d8" }}>
              <Link href="#" className="hover:text-white transition-colors">
                {t.footer_terms_of_service}
              </Link>
              <span>|</span>
              <Link href="#" className="hover:text-white transition-colors">
                {t.footer_privacy_policy}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

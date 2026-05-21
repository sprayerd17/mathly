import Link from "next/link";

const grades = [4, 5, 6, 7, 8, 9, 10, 11, 12];

export default function Footer() {
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
              Clear maths education for South African students, Grade 4 to Grade 12.
            </p>
          </div>

          {/* Column 2: Learn */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Learn
            </h3>
            <ul className="mt-4 space-y-2">
              {grades.map((grade) => (
                <li key={grade}>
                  <Link
                    href="#"
                    className="text-sm transition-colors hover:text-white"
                    style={{ color: "#a8b8d8" }}
                  >
                    Grade {grade}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Support */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Support
            </h3>
            <ul className="mt-4 space-y-2">
              {["Contact Us", "FAQs", "How It Works"].map((item) => (
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
              Account
            </h3>
            <ul className="mt-4 space-y-2">
              {["Login", "Register", "Subscription Plans"].map((item) => (
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
        </div>

        {/* Divider + Copyright bar */}
        <div className="mt-12 border-t pt-6" style={{ borderColor: "#1e3560" }}>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm" style={{ color: "#a8b8d8" }}>
              © 2025 Mathly. All rights reserved.
            </p>
            <div className="flex gap-4 text-sm" style={{ color: "#a8b8d8" }}>
              <Link href="#" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <span>|</span>
              <Link href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

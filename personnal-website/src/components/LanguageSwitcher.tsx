"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { locales, localeNames, type Locale } from "@/i18n/config";

export function LanguageSwitcher() {
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: Locale) => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <div className="fixed top-6 right-6 z-50">
      <div className="flex items-center gap-1 p-1 bg-white/80 backdrop-blur-xl border border-white/50 rounded-full shadow-lg">
        {locales.map((loc) => (
          <button
            key={loc}
            onClick={() => switchLocale(loc)}
            className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
              locale === loc
                ? "bg-gradient-to-r from-violet to-pink text-white shadow-md"
                : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
            }`}
            aria-label={`Switch to ${localeNames[loc]}`}
          >
            {loc.toUpperCase()}
          </button>
        ))}
      </div>
    </div>
  );
}

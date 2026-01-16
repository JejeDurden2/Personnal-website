import { useTranslations, useLocale } from "next-intl";

const socials = [
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/jeromedesmares",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: "GitHub",
    href: "https://github.com/JejeDurden2",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
];

export function Contact() {
  const t = useTranslations("contact");
  const locale = useLocale();

  // Construire l'URL mailto avec les traductions
  const emailSubject = encodeURIComponent(t("emailSubject"));
  const emailBody = encodeURIComponent(t("emailBody"));
  const mailtoUrl = `mailto:desmaresjerome@gmail.com?subject=${emailSubject}&body=${emailBody}`;

  return (
    <section
      id="contact"
      className="relative py-24 md:py-32 px-4 md:px-6 overflow-hidden"
      itemScope
      itemType="https://schema.org/ContactPage"
    >
      {/* Background Orbs */}
      <div className="absolute inset-0 -z-10">
        <div className="orb orb-1 opacity-30" />
        <div className="orb orb-2 opacity-30" />
      </div>

      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
          {t("title")}
        </h2>

        <p className="mt-6 text-lg md:text-xl text-slate-600 leading-relaxed">
          {t("subtitle")}
        </p>

        {/* CTA Button */}
        <div className="mt-10">
          <a
            href={mailtoUrl}
            className="inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-violet to-pink text-white text-lg font-semibold rounded-2xl shadow-lg shadow-violet/25 hover:shadow-xl hover:shadow-violet/30 hover:scale-105 transition-all duration-300 ease-out"
            itemProp="email"
            aria-label={
              locale === "fr"
                ? "Envoyer un email à desmaresjerome@gmail.com"
                : "Send email to desmaresjerome@gmail.com"
            }
          >
            <svg
              className="mr-3 w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            desmaresjerome@gmail.com
          </a>
        </div>

        {/* Location */}
        <p
          className="mt-8 text-slate-500 flex items-center justify-center gap-2"
          itemProp="address"
          itemScope
          itemType="https://schema.org/PostalAddress"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <span itemProp="addressLocality">Nice</span>,{" "}
          <span itemProp="addressCountry">France</span> · 100% Remote
        </p>

        {/* Social Links */}
        <nav className="mt-10" aria-label="Réseaux sociaux">
          <ul className="flex justify-center gap-4">
            {socials.map((social) => (
              <li key={social.name}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer me"
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-white border border-slate-200 text-slate-600 hover:text-violet hover:border-violet/30 hover:shadow-lg transition-all duration-300"
                  aria-label={`${social.name} - Jérôme Desmares`}
                  title={social.name}
                >
                  {social.icon}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Footer with SEO-friendly structure */}
      <footer className="mt-24 text-center text-sm text-slate-400">
        <p>
          &copy; {new Date().getFullYear()}{" "}
          <span itemProp="name">Jérôme Desmares</span> -{" "}
          <span>Tech Lead Freelance Nice</span>. {t("copyright")}
        </p>
        <p className="mt-2 text-xs text-slate-300">
          {locale === "fr"
            ? "Développeur MVP • CTO temps partagé • Architecture technique"
            : "MVP Developer • Fractional CTO • Technical Architecture"}
        </p>
      </footer>
    </section>
  );
}

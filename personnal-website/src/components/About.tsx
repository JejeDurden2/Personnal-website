import { useTranslations } from "next-intl";

const icons = {
  ecommerce: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
    </svg>
  ),
  developer: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  ),
  techlead: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  manager: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  ),
};

const timelineKeys = ["ecommerce", "developer", "techlead", "manager"] as const;

export function About() {
  const t = useTranslations("about");

  return (
    <section id="about" className="py-24 md:py-32 px-4 md:px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 text-center">
          {t("title")}
        </h2>

        <p className="mt-6 text-lg md:text-xl text-slate-600 text-center max-w-2xl mx-auto leading-relaxed">
          {t("subtitle")}
        </p>

        {/* Timeline */}
        <div className="mt-16 relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-violet via-pink to-cyan md:-translate-x-1/2" />

          <div className="space-y-12">
            {timelineKeys.map((key, index) => (
              <div
                key={key}
                className={`relative flex items-start gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Icon */}
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-br from-violet to-pink flex items-center justify-center text-white shadow-lg shadow-violet/30 z-10">
                  {icons[key]}
                </div>

                {/* Content */}
                <div
                  className={`ml-12 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"
                  }`}
                >
                  <span className="inline-block px-3 py-1 text-sm font-medium text-violet bg-violet/10 rounded-full">
                    {t(`timeline.${key}.period`)}
                  </span>
                  <h3 className="mt-3 text-xl font-bold text-slate-900">
                    {t(`timeline.${key}.title`)}
                  </h3>
                  <p className="mt-2 text-slate-600 leading-relaxed">
                    {t(`timeline.${key}.description`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Formation */}
        <div className="mt-20 p-8 bg-slate-50 rounded-3xl">
          <h3 className="text-xl font-bold text-slate-900 text-center">
            {t("education.title")}
          </h3>
          <div className="mt-6 flex flex-col md:flex-row gap-6 justify-center">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-slate-900 flex items-center justify-center text-white font-bold">
                42
              </div>
              <div>
                <p className="font-semibold text-slate-900">
                  {t("education.school42.name")}
                </p>
                <p className="text-sm text-slate-600">
                  {t("education.school42.degree")}
                </p>
              </div>
            </div>
            <div className="hidden md:block w-px bg-slate-200" />
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet to-pink flex items-center justify-center text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-slate-900">
                  {t("education.master.name")}
                </p>
                <p className="text-sm text-slate-600">
                  {t("education.master.degree")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

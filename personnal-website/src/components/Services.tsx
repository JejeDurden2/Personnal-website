import { useTranslations } from "next-intl";

const serviceIcons = {
  mvp: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  architecture: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
    </svg>
  ),
  coaching: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  ),
};

const serviceKeys = ["mvp", "architecture", "coaching"] as const;

const techStack = [
  { name: "Node.js", color: "bg-green-500" },
  { name: "TypeScript", color: "bg-blue-500" },
  { name: "NestJS", color: "bg-red-500" },
  { name: "React", color: "bg-cyan" },
  { name: "PostgreSQL", color: "bg-blue-700" },
  { name: "Docker", color: "bg-blue-400" },
];

export function Services() {
  const t = useTranslations("services");

  return (
    <section id="services" className="py-24 md:py-32 px-4 md:px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 text-center">
          {t("title")}
        </h2>

        <p className="mt-6 text-lg md:text-xl text-slate-600 text-center max-w-2xl mx-auto leading-relaxed">
          {t("subtitle")}
        </p>

        {/* Bento Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          {serviceKeys.map((key) => {
            const features = t.raw(`${key}.features`) as string[];
            return (
              <div
                key={key}
                className={`p-8 md:p-10 bg-white/70 backdrop-blur-xl border border-white/50 rounded-3xl shadow-xl shadow-slate-900/5 hover:bg-white/80 hover:shadow-2xl hover:shadow-violet/10 hover:scale-[1.02] transition-all duration-300 ease-out ${
                  key === "mvp" ? "md:col-span-2" : ""
                }`}
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet to-pink flex items-center justify-center text-white shadow-lg shadow-violet/30">
                  {serviceIcons[key]}
                </div>

                <h3 className="mt-6 text-2xl font-bold text-slate-900">
                  {t(`${key}.title`)}
                </h3>

                <p className="mt-4 text-slate-600 leading-relaxed">
                  {t(`${key}.description`)}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {features.map((feature: string) => (
                    <span
                      key={feature}
                      className="px-3 py-1 text-sm font-medium text-violet bg-violet/10 rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Tech Stack */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-bold text-slate-900">{t("stack")}</h3>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {techStack.map((tech) => (
              <span
                key={tech.name}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-slate-100"
              >
                <span className={`w-2 h-2 rounded-full ${tech.color}`} />
                <span className="font-medium text-slate-700">{tech.name}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

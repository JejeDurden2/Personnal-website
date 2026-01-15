import { useTranslations } from "next-intl";

export function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 md:px-6">
      {/* Animated Orbs Background */}
      <div className="absolute inset-0 -z-10">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tight text-slate-900 animate-fade-in-up">
          {t("name")}
        </h1>

        <p className="mt-6 text-xl md:text-2xl lg:text-3xl font-medium animate-fade-in-up animate-delay-100">
          <span className="bg-gradient-to-r from-violet via-pink to-cyan bg-clip-text text-transparent">
            {t("tagline")}
          </span>
        </p>

        <p className="mt-8 text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed animate-fade-in-up animate-delay-200">
          {t("description")}
        </p>

        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animate-delay-300">
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-violet to-pink text-white font-semibold rounded-2xl shadow-lg shadow-violet/25 hover:shadow-xl hover:shadow-violet/30 hover:scale-105 transition-all duration-300 ease-out"
          >
            {t("cta")}
            <svg
              className="ml-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>

          <a
            href="#about"
            className="inline-flex items-center justify-center px-8 py-4 bg-white/80 backdrop-blur-sm border border-slate-200 text-slate-900 font-semibold rounded-2xl hover:bg-white hover:border-violet/30 hover:shadow-lg transition-all duration-300 ease-out"
          >
            {t("learnMore")}
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-slate-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}

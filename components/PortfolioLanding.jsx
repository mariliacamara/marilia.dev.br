"use client"

import { useState } from "react"

export default function PortfolioLanding() {
  const [locale, setLocale] = useState("pt")

  const featuredProjects = [
    {
      name: "Stockgrid",
      type: "Inventory and pricing system",
      summary:
        "A platform to cross-reference data from multiple PDFs, update inventory, manage price approvals and sync with WooCommerce.",
      details: [
        "PDF parsing with inconsistent data",
        "BullMQ batches for processing",
        "Relational database with audit trail",
      ],
      stack: ["NestJS", "Prisma", "PostgreSQL", "BullMQ", "WooCommerce"],
    },
    {
      name: "Wella",
      type: "Corporate project",
      summary:
        "Digital experience focused on clear presentation, smooth navigation and consistent behavior across devices.",
      details: [
        "UX-oriented frontend",
        "Clean and scalable structure",
        "Strong visual organization",
      ],
      stack: ["Frontend", "UI/UX", "Responsive", "Performance"],
    },
    {
      name: "Headless Commerce",
      type: "Modern ecommerce",
      summary:
        "A performant frontend architecture consuming data through API/GraphQL with a modular and fast experience.",
      details: [
        "Decoupled data flow",
        "SEO and performance first",
        "Ready to scale",
      ],
      stack: ["Next.js", "GraphQL", "WordPress", "Tailwind"],
    },
  ]

  const stackItems = [
    "Vue.js",
    "Next.js",
    "React",
    "NestJS",
    "TypeScript",
    "Prisma",
    "PostgreSQL",
    "WordPress Headless",
    "BullMQ",
    "Docker",
    "GraphQL",
    "TailwindCSS",
    "Framer Motion",
  ]

  const process = [
    ["01", "Discovery", "Understand the goal, pain points and business context."],
    ["02", "Architecture", "Define structure, flow and technical priorities."],
    ["03", "Development", "Build with quality and room to evolve."],
    ["04", "Delivery", "Ship, validate and polish everything."],
  ]

  const copy = {
    pt: {
      badge: "Disponível para freelas",
      title: "Construo produtos digitais, sistemas escaláveis e experiências limpas.",
      subtitle:
        "Desenvolvedora frontend e full stack com foco em UX, performance e arquitetura real de produto.",
      primary: "Ver projetos",
      secondary: "Falar comigo",
      currentFocus: "Foco atual",
      aboutTitle: "Gosto de transformar complexidade em algo simples de usar.",
      aboutText1:
        "Trabalho com aplicações que precisam funcionar de verdade: integrações, automações, dashboards, frontend moderno e backend organizado.",
      aboutText2:
        "Meu objetivo em todo projeto é o mesmo: boa experiência para quem usa e base sólida para quem mantém.",
      projectsLabel: "Projetos em destaque",
      projectsTitle: "Cases que mostram o tipo de problema que eu resolvo.",
      stackLabel: "Stack",
      stackTitle: "Ferramentas que uso com frequência.",
      processLabel: "Processo",
      processTitle: "Como eu gosto de trabalhar em freela.",
      contactLabel: "Contato",
      contactTitle: "Vamos construir algo bom juntos.",
      contactText:
        "Aberta para freelas, desenvolvimento frontend e sistemas full stack.",
      sendEmail: "Enviar e-mail",
    },
    en: {
      badge: "Available for freelance work",
      title: "I build digital products, scalable systems and clean experiences.",
      subtitle:
        "Frontend and full stack developer focused on UX, performance and real product architecture.",
      primary: "View projects",
      secondary: "Contact me",
      currentFocus: "Current focus",
      aboutTitle: "I like turning complexity into something simple to use.",
      aboutText1:
        "I work on applications that need to be practical in the real world: integrations, automations, dashboards, modern frontend and organized backend systems.",
      aboutText2:
        "My goal on every project is the same: a great user experience and a solid foundation for the people maintaining it.",
      projectsLabel: "Featured projects",
      projectsTitle: "Cases that show the kind of problems I solve.",
      stackLabel: "Stack",
      stackTitle: "Tools I use regularly.",
      processLabel: "Process",
      processTitle: "How I like to work on freelance projects.",
      contactLabel: "Contact",
      contactTitle: "Let’s build something great together.",
      contactText:
        "Available for freelance work, frontend development and full stack systems.",
      sendEmail: "Send email",
    },
  }

  const t = copy[locale]

  return (
    <main className="min-h-screen overflow-hidden bg-[#060816] text-zinc-100 selection:bg-violet-500/30">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl" />
        <div className="absolute right-0 top-1/4 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-fuchsia-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <header className="sticky top-0 z-40 border-b border-white/5 bg-[#060816]/70 backdrop-blur-xl">
          <div className="flex items-center justify-between py-5">
            <a href="#top" className="text-lg font-semibold tracking-tight">
              Marília Câmara
            </a>

            <nav className="hidden gap-8 text-sm text-zinc-400 md:flex">
              <a href="#about" className="transition hover:text-white">
                About
              </a>
              <a href="#projects" className="transition hover:text-white">
                Projects
              </a>
              <a href="#stack" className="transition hover:text-white">
                Stack
              </a>
              <a href="#process" className="transition hover:text-white">
                Process
              </a>
              <a href="#contact" className="transition hover:text-white">
                Contact
              </a>
            </nav>

            <button
              type="button"
              onClick={() => setLocale((prev) => (prev === "pt" ? "en" : "pt"))}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-zinc-200 transition hover:border-white/20 hover:bg-white/10"
            >
              PT / EN
            </button>
          </div>
        </header>

        <section id="top" className="grid min-h-[92vh] items-center py-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <span className="inline-flex rounded-full border border-violet-500/25 bg-violet-500/10 px-4 py-2 text-sm text-violet-200">
              {t.badge}
            </span>

            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight md:text-7xl">
              {t.title}
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-zinc-400 md:text-xl">
              {t.subtitle}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-violet-600 px-6 py-3 text-sm font-medium transition hover:bg-violet-500">
                {t.primary}
                <span aria-hidden>↗</span>
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium transition hover:border-white/20 hover:bg-white/10">
                {t.secondary}
              </a>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              {[
                ["Frontend", "UX + performance"],
                ["Full Stack", "NestJS + Vue + Next"],
                ["Freela", "Entrega com clareza"],
              ].map(([title, desc]) => (
                <div key={title} className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                  <div className="text-sm font-medium text-violet-200">{title}</div>
                  <div className="mt-2 text-sm text-zinc-400">{desc}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mt-14 lg:mt-0">
            <div className="absolute inset-0 rounded-[34px] bg-violet-500/15 blur-2xl" />
            <div className="relative overflow-hidden rounded-[34px] border border-white/10 bg-white/[0.04] p-8 shadow-2xl backdrop-blur-xl">
              <div className="flex items-start justify-between gap-8 border-b border-white/10 pb-6">
                <div>
                  <p className="text-sm uppercase tracking-[0.25em] text-violet-300">{t.currentFocus}</p>
                  <h2 className="mt-3 text-2xl font-semibold">Mariliacamara.dev</h2>
                </div>
                <div className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">
                  online
                </div>
              </div>

              <div className="mt-8 grid gap-4">
                {[
                  "WooCommerce systems",
                  "PDF automation and queues",
                  "Modern interfaces with strong UX",
                ].map((item, index) => (
                  <div key={item} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-black/20 p-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-violet-500/10 text-sm text-violet-200">
                      0{index + 1}
                    </div>
                    <div className="text-sm text-zinc-200">{item}</div>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-3xl border border-white/10 bg-gradient-to-br from-violet-500/10 to-cyan-500/10 p-5">
                <div className="text-sm text-zinc-300">github.com/mariliacamara</div>
                <div className="mt-2 text-sm text-zinc-400">LinkedIn · mariliacamara.dev@gmail.com</div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="border-t border-white/5 py-24 lg:py-28">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-violet-300">About</p>
              <h2 className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl">
                {t.aboutTitle}
              </h2>
            </div>
            <div className="space-y-6 text-lg leading-relaxed text-zinc-400">
              <p>{t.aboutText1}</p>
              <p>{t.aboutText2}</p>
            </div>
          </div>
        </section>

        <section id="projects" className="border-t border-white/5 py-24 lg:py-28">
          <div className="flex flex-col gap-6">
            <p className="text-sm uppercase tracking-[0.3em] text-violet-300">{t.projectsLabel}</p>
            <h2 className="max-w-3xl text-4xl font-semibold tracking-tight md:text-5xl">
              {t.projectsTitle}
            </h2>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <article
                key={project.name}
                className="group overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] p-7 transition hover:border-violet-500/30 hover:bg-white/[0.05]"
              >
                <div className="overflow-hidden rounded-3xl border border-white/10">
                  <img
                    src="/project-placeholder.svg"
                    alt={project.name}
                    className="h-44 w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="mt-7 flex items-center justify-between gap-4">
                  <h3 className="text-2xl font-semibold tracking-tight">{project.name}</h3>
                  <span className="text-zinc-400 transition group-hover:text-white">↗</span>
                </div>

                <p className="mt-4 leading-relaxed text-zinc-400">{project.summary}</p>

                <ul className="mt-5 space-y-3 text-sm text-zinc-300">
                  {project.details.map((detail) => (
                    <li key={detail} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-violet-300" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span key={tech} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="stack" className="border-t border-white/5 py-24 lg:py-28">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-violet-300">{t.stackLabel}</p>
              <h2 className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl">
                {t.stackTitle}
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4">
              {stackItems.map((item) => (
                <div key={item} className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 text-center text-sm text-zinc-300 transition hover:border-violet-500/30 hover:bg-violet-500/5">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="border-t border-white/5 py-24 lg:py-28">
          <div className="rounded-[36px] border border-white/10 bg-gradient-to-br from-violet-500/10 to-cyan-500/10 p-8 md:p-12 lg:p-14">
            <p className="text-sm uppercase tracking-[0.3em] text-violet-300">{t.processLabel}</p>
            <h2 className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl">
              {t.processTitle}
            </h2>

            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {process.map(([number, title, description]) => (
                <div key={title} className="rounded-3xl border border-white/10 bg-black/20 p-6">
                  <div className="text-sm text-violet-300">{number}</div>
                  <div className="mt-4 text-xl font-semibold">{title}</div>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-400">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="border-t border-white/5 py-24 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.3em] text-violet-300">{t.contactLabel}</p>
            <h2 className="mt-5 text-5xl font-semibold tracking-tight md:text-6xl">
              {t.contactTitle}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-zinc-400">{t.contactText}</p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="mailto:mariliacamara.dev@gmail.com"
                className="inline-flex items-center gap-2 rounded-full bg-violet-600 px-6 py-3 text-sm font-medium transition hover:bg-violet-500"
              >
                {t.sendEmail}
              </a>
              <a
                href="https://github.com/mariliacamara"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium transition hover:border-white/20 hover:bg-white/10"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/mariliacamara/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium transition hover:border-white/20 hover:bg-white/10"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
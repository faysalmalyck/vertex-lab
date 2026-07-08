import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Code2, LinkIcon, Mail, Sparkles } from "lucide-react";
import { getImgPath } from "@/utils/image";

export const metadata: Metadata = {
  title: "Team",
  description:
    "Meet the focused Vertex team building modern digital products for growing businesses.",
};

const teamMembers = [
  {
    name: "Barkat",
    role: "Full Stack Developer",
    description:
      "Leads product strategy, frontend architecture, and full-stack delivery.",
    image: "/images/hero/hero-profile-1.jpg",
  },
  {
    name: "Faisal",
    role: "Software Engineer",
    description:
      "Works on scalable web applications, clean UI, and reliable product features.",
    image: "/images/hero/hero-profile-2.jpg",
  },
  {
    name: "Example Name",
    role: "Software Engineer",
    description: "Supports engineering, integrations, and product development.",
    image: "/images/hero/hero-profile-3.jpg",
  },
];

export default function TeamPage() {
  return (
    <main>
      <section className="premium-shell premium-mesh relative pb-16 pt-32 md:pb-24 md:pt-44">
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent" />
        <div className="container relative z-10 mx-auto max-w-6xl px-4 text-center">
          <div className="premium-badge mx-auto w-fit">
            <Sparkles className="h-4 w-4" />
            Vertex studio
          </div>
          <h1 className="premium-heading mx-auto mt-7 max-w-4xl">
            Meet the Team Behind Vertex
          </h1>
          <p className="premium-copy mx-auto mt-6 max-w-3xl">
            A focused team building modern digital products for growing
            businesses.
          </p>
        </div>
      </section>

      <section className="relative overflow-hidden bg-section dark:bg-darkmode">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(139,92,246,0.12),transparent_30rem),radial-gradient(circle_at_85%_60%,rgba(34,211,238,0.10),transparent_26rem)]" />
        <div className="container relative mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {teamMembers.map((member, index) => (
              <article
                key={member.name}
                className="glass-card group relative h-full overflow-hidden rounded-[2rem] p-4 transition-all duration-500 hover:-translate-y-2 hover:border-Sky-blue-mist/30 hover:shadow-[0_30px_90px_rgba(139,92,246,0.22)]"
                data-aos="fade-up"
                data-aos-delay={index * 120}
              >
                <div className="relative aspect-[4/4.6] overflow-hidden rounded-[1.5rem] bg-[#070A12]">
                  <Image
                    src={getImgPath(member.image)}
                    alt={`${member.name}, ${member.role}`}
                    width={700}
                    height={800}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    quality={100}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070A12]/92 via-[#070A12]/18 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/18 via-transparent to-Sky-blue-mist/14 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="absolute bottom-5 left-5 right-5">
                    <span className="mb-3 inline-flex rounded-full border border-white/15 bg-white/12 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-Sky-blue-mist backdrop-blur-xl">
                      {member.role}
                    </span>
                    <h2 className="text-2xl font-black text-white">
                      {member.name}
                    </h2>
                  </div>
                </div>

                <div className="px-2 pb-2 pt-6">
                  <p className="text-base leading-7 text-secondary dark:text-white/65">
                    {member.description}
                  </p>
                  <div className="mt-6 flex items-center gap-3">
                    {[
                      { label: "LinkedIn", icon: LinkIcon },
                      { label: "GitHub", icon: Code2 },
                      { label: "Email", icon: Mail },
                    ].map(({ label, icon: Icon }) => (
                      <Link
                        key={label}
                        href="#"
                        aria-label={`${member.name} ${label}`}
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-950/10 bg-white/60 text-secondary transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-primary hover:text-white dark:border-white/10 dark:bg-white/[0.06] dark:text-white/65"
                      >
                        <Icon className="h-4 w-4" />
                      </Link>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

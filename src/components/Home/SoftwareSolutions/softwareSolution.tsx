import React from 'react';
import { Globe, Cloud, Brain, GraduationCap, TrendingUp, Users, Sparkles, UserCheck } from 'lucide-react';

export default function SoftwareSolutions() {
  const solutions = [
    {
      title: "Custom Business Websites",
      description: "High performance, SEO friendly websites that strengthen your brand and convert visitors into customers.",
      icon: Globe,
      iconColor: "text-blue-400 bg-blue-500/10 border-blue-500/20",
      lineColor: "bg-blue-500",
      stats: {
        text: "40+ Projects Delivered",
        icon: TrendingUp,
      }
    },
    {
      title: "SaaS Application Development",
      description: "Secure, scalable SaaS platforms with intuitive UX, robust backend and seamless integrations.",
      icon: Cloud,
      iconColor: "text-purple-400 bg-purple-500/10 border-purple-500/20",
      lineColor: "bg-purple-500",
      stats: {
        text: "25+ SaaS Platforms",
        icon: Users,
      }
    },
    {
      title: "AI & Automation Solutions",
      description: "AI powered workflows, LLMs, intelligent assistants and business automation to boost productivity.",
      icon: Brain,
      iconColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
      lineColor: "bg-emerald-500",
      stats: {
        text: "AI Solutions Delivered",
        icon: Sparkles,
      }
    },
    {
      title: "EdTech Solutions",
      description: "Interactive learning platforms, LMS, virtual classrooms and educational apps built for scale.",
      icon: GraduationCap,
      iconColor: "text-amber-500 bg-amber-500/10 border-amber-500/20",
      lineColor: "bg-amber-500",
      stats: {
        text: "15+ EdTech Projects",
        icon: UserCheck,
      }
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 w-full">
      <div className="max-w-6xl mx-auto w-full">
        
        {/* Header Section */}
        <div className="mb-16 max-w-3xl" data-aos="fade-up" data-aos-duration="1000">
          <div className="premium-badge w-fit">
              <span className="h-2 w-2 rounded-full bg-success"></span>
              <span>Software Solution</span>
            </div>
          <h2 className="py-8 text-3xl font-extrabold tracking-tight text-white sm:text-5xl sm:leading-[1.15]">
  Software Solutions built arround your {" "}
  <span className="bg-gradient-to-r from-violet-400 via-cyan-400 to-emerald-400 bg-clip-text font-black text-transparent">
    Business.
  </span>
</h2>
          <p className="text-slate-400 text-lg leading-relaxed max-w-2xl">
            We deliver end-to-end software development services designed to solve complex business challenges and support sustainable growth.
          </p>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((item, index) => {
            const IconComponent = item.icon;
            const StatsIcon = item.stats.icon;

            return (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 150}
                data-aos-duration="1000"
                className="group relative flex flex-col justify-between border border-slate-900 rounded-[2rem] p-8 transition-all duration-500 hover:border-slate-800 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.4)]"
              >
                <div>
                  {/* Top Icon Block */}
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border ${item.iconColor} mb-8 transition-transform duration-500 group-hover:scale-105`}>
                    <IconComponent className="w-7 h-7 stroke-[1.75]" />
                  </div>

                  {/* Card Title */}
                  <h3 className="text-2xl font-black tracking-wide leading-snug mb-3">
                    {item.title}
                  </h3>

                  {/* Accent Highlight Line */}
                  <div className={`w-8 h-[3px] ${item.lineColor} rounded-full mb-6`} />

                  {/* Card Description */}
                  <p className="text-slate-400 text-sm leading-relaxed mb-8 font-medium">
                    {item.description}
                  </p>
                </div>

                {/* Footnote Stats Box */}
                <div className="mt-auto bg-[#111726]/40 border border-slate-900/60 rounded-xl py-3.5 px-4 flex items-center space-x-3 transition-colors duration-350 group-hover:bg-[#151d30]/60">
                  <StatsIcon className={`w-5 h-5 ${item.iconColor.split(' ')[0]}`} />
                  <span className="text-xs font-bold text-slate-300 tracking-wide">
                    {item.stats.text}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
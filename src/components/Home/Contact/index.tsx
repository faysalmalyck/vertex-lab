import React from "react";
import Image from "next/image";
import { getImgPath } from "@/utils/image";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

const inputClass =
  "w-full rounded-2xl border border-border bg-white/70 px-4 py-3 text-base text-midnight_text transition-all duration-300 placeholder:text-grey focus:border-primary focus:ring-4 focus:ring-primary/10 focus-visible:outline-0 dark:border-white/10 dark:bg-white/5 dark:text-white dark:focus:border-primary";

const Contactform = () => {
  return (
    <section className="relative overflow-hidden bg-darkmode dark:bg-darklight">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(139,92,246,0.22),transparent_34rem),radial-gradient(circle_at_85%_80%,rgba(34,211,238,0.12),transparent_28rem)]" />
      <div className="container mx-auto max-w-6xl px-4">
        <div className="relative grid grid-cols-1 gap-10 md:grid-cols-12">
          <div
            className="row-start-1 col-start-1 row-end-2 col-end-12 md:col-end-7"
            data-aos="fade-left"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            <div className="premium-badge border-white/10 bg-white/10 text-white">
              <span className="h-2 w-2 rounded-full bg-success" />
              <span>build everything</span>
            </div>
            <h2 className="py-10 text-4xl font-black leading-tight text-white sm:text-5xl">
              Let&apos;s discuss your project and take it to the next level.
            </h2>

            <div className="grid grid-cols-1 gap-4 border-b border-white/10 pb-12 sm:grid-cols-2">
              <div className="glass-card rounded-2xl p-5">
                <Phone className="mb-4 h-5 w-5 text-primary" />
                <span className="text-lg text-white/50">Phone</span>
                <p className="text-l border-0 bg-transparent text-white">
                  +92-305-5552772
                </p>
              </div>
              <div className="glass-card rounded-2xl p-5">
                <Mail className="mb-4 h-5 w-5 text-primary" />
                <span className="text-lg text-white/50">Email</span>
                <p className="text-l border-0 bg-transparent text-white">
                  faysalmalick11@gmail.com
                </p>
              </div>
              <div className="glass-card rounded-2xl p-5 sm:col-span-2">
                <MapPin className="mb-4 h-5 w-5 text-primary" />
                <span className="text-lg text-white/50">Address</span>
                <p className="text-l border-0 bg-transparent text-white">
                  Office No. 194-A, Street No. 7, Sector I-10/3, Islamabad 44000, Pakistan
                </p>
              </div>
            </div>

            <div className="pt-12">
              <p className="pb-4 text-base text-white/50">Trusted by</p>
              <div className="flex flex-wrap items-center gap-7 md:gap-14">
                {[
                  ["/images/contact/google-pay.png", "Google-pay", "max-w-28 h-5"],
                  ["/images/contact/play-juction.png", "play-juction", "max-w-24 h-6"],
                  ["/images/contact/stripe.png", "stripe", "max-w-14 h-6"],
                  ["/images/contact/wise.png", "wise", "max-w-16 h-4"],
                ].map(([src, alt, className]) => (
                  <Image
                    key={src}
                    src={getImgPath(src)}
                    alt={alt}
                    width={100}
                    height={20}
                    style={{ width: "auto", height: "auto" }}
                    quality={100}
                    className={`w_f w-full opacity-80 transition-opacity duration-300 hover:opacity-100 ${className}`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div
            data-aos="fade-right"
            data-aos-delay="200"
            data-aos-duration="1000"
            className="relative row-start-2 col-start-1 row-end-2 col-end-13 md:row-start-1 md:col-start-8"
          >
            <div className="glass-card relative z-10 m-auto mt-8 max-w-[50rem] rounded-[2rem] px-6 py-8 sm:px-9 lg:mt-0">
              <h2 className="mb-3 text-3xl font-black text-midnight_text dark:text-white">
                Start the project
              </h2>
              <p className="mb-7 text-sm leading-6 text-secondary dark:text-white/55">
                Tell us what you are building. We will shape the fastest path to a polished launch.
              </p>
              <form className="flex w-full flex-wrap justify-between gap-4">
                <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
                  <input className={inputClass} type="text" placeholder="First name" />
                  <input className={inputClass} type="text" placeholder="Last name" />
                </div>
                <input type="email" className={inputClass} placeholder="yourname@email.com" />
                <select className={inputClass}>
                  <option value="">Choose a service</option>
                  <option value="Website Development">Website Development</option>
                  <option value="Mobile Application (IOS & Android)">Mobile Application(IOS & Android)</option>
                  <option value="Saas Application">Saas Application</option>
                  <option value="(POS) System">(POS) System</option>
                  <option value="EdTech">EdTech</option>
                  <option value="Shopify Development">Shopify Development</option>
                  <option value="Search engine optimization">Search engine optimization</option>
                  <option value="Cloud Deployment & DevOps">Cloud Deployment& DevOps</option>
                  <option value="UI/UX Design">UI/UX Design</option>
                  <option value="Database optimization">Database optimization</option>
                  <option value="Other">Other</option>
                </select>
                <textarea
                  className={`${inputClass} h-[9.375rem] resize-none`}
                  placeholder="Let us know about your project"
                />
                <label className="flex items-start gap-3 text-sm leading-6 text-grey dark:text-white/55">
                  <input
                    name="wp-comment-cookies-consent"
                    type="checkbox"
                    value="yes"
                    className="mt-1 h-5 w-5 cursor-pointer rounded border-2 border-primary accent-primary"
                  />
                  <span>
                    I have read and acknowledge the <span className="cursor-pointer text-primary">Terms and Conditions</span>
                  </span>
                </label>
                <button
                  className="premium-gradient-button flex w-full items-center justify-center gap-2 rounded-2xl py-4 font-bold hover:-translate-y-1"
                  type="submit"
                >
                  Submit Inquiry <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contactform;

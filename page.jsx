
"use client";
import { motion } from "framer-motion";
import { Check, Phone, Mail, Sparkles, Home, DoorOpen, Building2, PaintRoller, CalendarCheck, Shield } from "lucide-react";
import Link from "next/link";
import "./globals.css";

const phone = "+1-239-365-9416";
const email = "excellencecleaningcl@gmail.com";

const services = [
  { icon: <Home className="w-6 h-6" />, title: "Standard Residential Cleaning", blurb: "Consistent upkeep for kitchens, bathrooms, living areas and bedrooms.", bullets: ["Dusting & surfaces wiped","Floors vacuumed & mopped","Bathroom refresh & mirrors polished"] },
  { icon: <Sparkles className="w-6 h-6" />, title: "Deep Cleaning", blurb: "Top-to-bottom detailing for a like-new feel.", bullets: ["Baseboards, doors & trim","Inside oven & fridge (upon request)","Grout/edges attention"] },
  { icon: <Building2 className="w-6 h-6" />, title: "Commercial Cleaning", blurb: "Reliable maintenance for offices, retail and common areas.", bullets: ["Desks & high-touch disinfection","Lobbies, bathrooms & break rooms","Flexible after-hours scheduling"] },
  { icon: <Building2 className="w-6 h-6" />, title: "Airbnb / Vacation Turnover", blurb: "Fast, reliable resets with host checklists handled.", bullets: ["Linen change & bed styling","Supplies restock","Photo-ready staging"] },
  { icon: <DoorOpen className="w-6 h-6" />, title: "Move-In / Move-Out", blurb: "Make properties inspection-ready and welcoming.", bullets: ["Cabinets & closets wiped","Appliance exteriors/interiors","Detail floors & corners"] },
  { icon: <PaintRoller className="w-6 h-6" />, title: "Post-Renovation", blurb: "Remove dust safely and leave a flawless finish.", bullets: ["Fine dust removal","Vent covers & fixtures","Window tracks & sills"] },
];

const gallery = ["/gallery/1.jpg","/gallery/2.jpg","/gallery/3.jpg","/gallery/4.jpg","/gallery/5.jpg","/gallery/6.jpg"];

function Button({ className = "", children, href }) {
  const base = "inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm font-semibold transition-colors";
  if (href) return <Link href={href} className={`${base} bg-pink-600 hover:bg-pink-700 text-white ${className}`}>{children}</Link>;
  return <button className={`${base} bg-pink-600 hover:bg-pink-700 text-white ${className}`}>{children}</button>;
}
function ButtonOutline({ className = "", children, href }) {
  const base = "inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm font-semibold transition-colors border";
  const cls = `${base} border-pink-200 text-pink-700 hover:bg-pink-50 ${className}`;
  if (href) return <Link href={href} className={cls}>{children}</Link>;
  return <button className={cls}>{children}</button>;
}
function Card({ children }) { return <div className="rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-neutral-100 bg-white">{children}</div>; }
function CardContent({ children, className = "" }) { return <div className={`p-6 ${className}`}>{children}</div>; }
function Feature({ icon, title, text }) {
  return (<div className="flex items-start gap-3"><div className="p-2 rounded-xl bg-pink-50 text-pink-600">{icon}</div><div><h4 className="font-semibold text-neutral-900">{title}</h4><p className="text-neutral-600 text-sm">{text}</p></div></div>);
}
function ServiceCard({ s }) {
  return (<Card><CardContent><div className="flex items-center gap-3"><div className="p-2 rounded-xl bg-neutral-100 text-neutral-800">{s.icon}</div><h3 className="text-lg font-semibold">{s.title}</h3></div><p className="text-neutral-600 mt-3">{s.blurb}</p><ul className="mt-4 space-y-2">{s.bullets.map((b, i) => (<li key={i} className="flex items-start gap-2 text-sm text-neutral-700"><Check className="w-4 h-4 mt-0.5 text-pink-600" /> {b}</li>))}</ul><div className="mt-5"><a href="#contact" className="block"><Button className="w-full">Get a quote</Button></a></div></CardContent></Card>);
}

export default function Page() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-40 backdrop-blur bg-white/80 border-b border-neutral-100">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-2xl bg-gradient-to-br from-pink-500 to-rose-500" />
            <span className="font-bold tracking-tight">Excellence Cleaning</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#services" className="hover:text-pink-600">Services</a>
            <a href="#about" className="hover:text-pink-600">About</a>
            <a href="#promise" className="hover:text-pink-600">Transparency</a>
            <a href="#portfolio" className="hover:text-pink-600">Portfolio</a>
            <a href="#contact" className="hover:text-pink-600">Contact</a>
            <a href="#contact"><Button>Book Now</Button></a>
          </nav>
        </div>
      </header>

      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-pink-100 rounded-full blur-3xl opacity-70" />
          <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-rose-100 rounded-full blur-3xl opacity-60" />
        </div>
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-xs uppercase tracking-widest text-pink-600">Las Vegas • English & Spanish support</p>
            <h1 className="mt-3 text-4xl md:text-5xl font-extrabold leading-tight">
              Elegant, reliable cleaning <span className="text-pink-600">for busy homes</span>
            </h1>
            <p className="mt-4 text-neutral-700">We help you reclaim your time with spotless results—always respectful of your space, schedule and budget.</p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Button href="#contact">Get Free Quote</Button>
              <a href={`https://wa.me/1${phone.replace(/[^\\d]/g, "")}`} target="_blank" rel="noreferrer"><ButtonOutline>WhatsApp</ButtonOutline></a>
            </div>
            <p className="mt-3 text-xs text-neutral-500">También atendemos en español. Calidad real, sin trucos.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            <div className="aspect-[4/3] rounded-3xl border border-neutral-100 bg-gradient-to-br from-white to-neutral-50 p-6 relative overflow-hidden shadow-sm">
              <div className="absolute inset-0 grid grid-cols-6 grid-rows-5 gap-2 p-6 opacity-90">
                {[...Array(30)].map((_, i) => (<div key={i} className="rounded-lg bg-neutral-100" />))}
              </div>
              <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-white/80 backdrop-blur px-3 py-2 rounded-xl border border-neutral-200">
                <Sparkles className="w-4 h-4 text-pink-600" />
                <span className="text-sm font-medium">Real results • No stock photos</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-neutral-50 border-y border-neutral-100">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-6">
          <div className="flex items-start gap-3"><div className="p-2 rounded-xl bg-pink-50 text-pink-600"><CalendarCheck className="w-5 h-5" /></div><div><h4 className="font-semibold text-neutral-900">On-time, every time</h4><p className="text-neutral-600 text-sm">Punctual arrivals and clear communication.</p></div></div>
          <div className="flex items-start gap-3"><div className="p-2 rounded-xl bg-pink-50 text-pink-600"><Shield className="w-5 h-5" /></div><div><h4 className="font-semibold text-neutral-900">Insured & careful</h4><p className="text-neutral-600 text-sm">Respectful of your home and belongings.</p></div></div>
          <div className="flex items-start gap-3"><div className="p-2 rounded-xl bg-pink-50 text-pink-600"><Sparkles className="w-5 h-5" /></div><div><h4 className="font-semibold text-neutral-900">Hotel-level finish</h4><p className="text-neutral-600 text-sm">Details that make spaces feel new again.</p></div></div>
        </div>
      </section>

      <section id="services" className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-end justify-between gap-6 mb-8">
            <div><h2 className="text-3xl font-bold">Services</h2><p className="text-neutral-600">Choose what fits today, add extras as needed.</p></div>
            <a href="#contact"><Button>Request Pricing</Button></a>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (<motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }}><ServiceCard s={s} /></motion.div>))}
          </div>
        </div>
      </section>

      <section id="about" className="py-16 bg-neutral-50 border-y border-neutral-100">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl font-bold">Who we are</h2>
            <p className="mt-3 text-neutral-700">We’re a small, dedicated team serving Las Vegas with 1.5+ years of hands-on experience. Our focus is simple: consistent quality, clear communication and respect for your home.</p>
            <ul className="mt-5 space-y-2 text-neutral-700">
              <li className="flex gap-2"><Check className="w-4 h-4 text-pink-600 mt-0.5"/> Trained on residential & Airbnb standards</li>
              <li className="flex gap-2"><Check className="w-4 h-4 text-pink-600 mt-0.5"/> Pet-friendly and careful with materials</li>
              <li className="flex gap-2"><Check className="w-4 h-4 text-pink-600 mt-0.5"/> Flexible scheduling—mornings or afternoons</li>
            </ul>
          </div>
          <div id="promise">
            <h3 className="text-xl font-semibold">Transparency Promise</h3>
            <p className="mt-2 text-neutral-700">You’ll always know what’s included before we start. No surprise add-ons. If a task needs extra time, we confirm first.</p>
            <div className="mt-4 grid sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl border border-neutral-200 bg-white">
                <h4 className="font-semibold">Before we arrive</h4>
                <p className="text-sm text-neutral-600 mt-1">We send a checklist and confirm access & parking details.</p>
              </div>
              <div className="p-4 rounded-2xl border border-neutral-200 bg-white">
                <h4 className="font-semibold">After we finish</h4>
                <p className="text-sm text-neutral-600 mt-1">Quick walkthrough + photos (Airbnb) so you can approve results.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-end justify-between gap-6 mb-6">
            <div><h2 className="text-3xl font-bold">Our Work (Real Photos)</h2><p className="text-neutral-600">100% authentic photos from recent jobs. No stock images.</p></div>
            <a href="#contact"><Button>Get a quote</Button></a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {gallery.map((src, i) => (
              <div key={i} className="relative aspect-square overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50">
                <img src={src} alt={`Excellence Cleaning portfolio ${i+1}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
          <p className="text-xs text-neutral-500 mt-3">Tip: Ask for our before/after gallery for specific services.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold">FAQs</h2>
          <div className="mt-6 space-y-4">
            {[
              { q: "Are supplies included?", a: "Yes. We bring professional, safe products. If you prefer we use yours, just let us know before the visit." },
              { q: "Do you offer a satisfaction guarantee?", a: "Absolutely. If something was missed, tell us within 24 hours and we'll make it right." },
              { q: "Are you insured?", a: "Yes. We operate with liability coverage for your peace of mind." },
            ].map((f, i) => (
              <details key={i} className="group border border-neutral-200 rounded-2xl p-4 bg-white">
                <summary className="cursor-pointer font-medium text-neutral-900 flex items-center justify-between">
                  {f.q}
                  <span className="ml-4 text-pink-600 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-2 text-neutral-700">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 bg-neutral-50 border-t border-neutral-100">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold">Request your free quote</h2>
            <p className="mt-2 text-neutral-700">Tell us your address, preferred date/time, and the service you need.</p>
          </div>
          <div className="mt-8 grid sm:grid-cols-2 gap-6">
            <a href={`tel:${phone}`} className="p-5 rounded-2xl border border-neutral-200 bg-white flex items-center gap-3 hover:border-pink-300">
              <div className="p-2 rounded-xl bg-pink-50 text-pink-600"><Phone className="w-5 h-5" /></div>
              <div><div className="text-sm text-neutral-500">Call / WhatsApp</div><div className="font-semibold">{phone}</div></div>
            </a>
            <a href={`mailto:${email}?subject=Quote%20Request%20-%20Excellence%20Cleaning`} className="p-5 rounded-2xl border border-neutral-200 bg-white flex items-center gap-3 hover:border-pink-300">
              <div className="p-2 rounded-xl bg-pink-50 text-pink-600"><Mail className="w-5 h-5" /></div>
              <div><div className="text-sm text-neutral-500">Email</div><div className="font-semibold">{email}</div></div>
            </a>
          </div>
          <div className="text-center mt-8"><p className="text-xs text-neutral-500">Serving Las Vegas and nearby areas • Mon–Sat</p></div>
        </div>
      </section>

      <footer className="py-10">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-neutral-600">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-xl bg-gradient-to-br from-pink-500 to-rose-500" />
            <span>© {new Date().getFullYear()} Excellence Cleaning • All rights reserved.</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#about" className="hover:text-pink-600">About</a>
            <a href="#services" className="hover:text-pink-600">Services</a>
            <a href="#portfolio" className="hover:text-pink-600">Portfolio</a>
            <a href="#contact" className="hover:text-pink-600">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

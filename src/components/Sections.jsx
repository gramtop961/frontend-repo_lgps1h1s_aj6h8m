import { motion } from 'framer-motion';
import { Cpu, Database, Globe, Rocket, Mail, ExternalLink } from 'lucide-react';

const Section = ({ id, title, children }) => (
  <section id={id} className="relative scroll-mt-24 py-24 text-white">
    <div className="pointer-events-none absolute inset-0 opacity-40">
      <div className="absolute left-1/2 top-0 h-40 w-40 -translate-x-1/2 rounded-full bg-sky-500/20 blur-3xl" />
      <div className="absolute right-10 top-10 h-24 w-24 rounded-full bg-fuchsia-500/20 blur-2xl" />
    </div>
    <div className="relative mx-auto max-w-6xl px-6">
      <h2 className="mb-8 bg-gradient-to-r from-sky-300 to-fuchsia-300 bg-clip-text text-2xl font-semibold text-transparent">
        {title}
      </h2>
      {children}
    </div>
  </section>
);

export default function Sections() {
  return (
    <div className="relative z-10 bg-gradient-to-b from-transparent via-slate-950/40 to-slate-950">
      {/* About */}
      <Section id="about" title="About">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl text-slate-300"
        >
          I'm Mohamed Hajbi, a software engineer focused on building reliable, scalable platforms and delightful developer experiences. I specialize in high-performance APIs, data-heavy backends, and immersive web frontends. I enjoy turning complex systems into clean, pragmatic solutions.
        </motion.p>
      </Section>

      {/* Skills */}
      <Section id="skills" title="Skills">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
          {[
            { label: 'Python', icon: Cpu },
            { label: 'FastAPI', icon: Rocket },
            { label: 'PostgreSQL', icon: Database },
            { label: 'PostGIS', icon: Globe },
            { label: 'React', icon: Globe },
            { label: 'Docker', icon: Database },
          ].map(({ label, icon: Icon }) => (
            <motion.div
              key={label}
              whileHover={{ y: -4, scale: 1.03 }}
              className="flex flex-col items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 p-4 text-slate-200"
            >
              <Icon className="h-6 w-6 text-sky-300" />
              <span className="text-sm">{label}</span>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Projects */}
      <Section id="projects" title="Projects">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: 'GeoAPI Platform',
              desc: 'Spatial data pipelines, PostGIS-backed search, and real-time tiles.',
              link: '#',
            },
            {
              title: 'Automation Toolkit',
              desc: 'Event-driven jobs, API orchestration, and monitoring dashboards.',
              link: '#',
            },
            {
              title: 'Immersive Portfolio',
              desc: 'Cinematic 3D interface powered by WebGL + Spline.',
              link: '#',
            },
          ].map((p, i) => (
            <motion.a
              key={p.title}
              href={p.link}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ rotateX: 6, rotateY: -6, scale: 1.02 }}
              style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
              className="group relative block overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-5 shadow-[0_20px_80px_-40px_rgba(139,92,246,0.5)] backdrop-blur-md"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-sky-500/10 to-fuchsia-500/10 opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="relative z-10">
                <h3 className="mb-2 text-lg font-semibold text-white">{p.title}</h3>
                <p className="text-sm text-slate-300">{p.desc}</p>
                <div className="mt-4 inline-flex items-center gap-2 text-sm text-sky-300">
                  <span>Preview</span>
                  <ExternalLink className="h-4 w-4" />
                </div>
              </div>
              {/* 3D panel shine */}
              <div className="pointer-events-none absolute -left-1/3 top-0 h-full w-1/2 -skew-x-12 bg-gradient-to-b from-white/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </motion.a>
          ))}
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" title="Contact">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 p-6 backdrop-blur-md"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.15),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(168,85,247,0.15),transparent_35%)]" />

          <div className="relative z-10">
            <div className="mb-4 font-mono text-sky-300">$ send_message --to "Mohamed Hajbi"</div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const data = new FormData(e.currentTarget);
                const subject = encodeURIComponent(`Portfolio message from ${data.get('name')}`);
                const body = encodeURIComponent(`${data.get('message')}\n\nFrom: ${data.get('name')} <${data.get('email')}>`);
                window.location.href = `mailto:mohamed@example.com?subject=${subject}&body=${body}`;
              }}
              className="grid gap-3 md:grid-cols-2"
            >
              <input name="name" required placeholder="Your name" className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-sky-500/40 md:col-span-1" />
              <input type="email" name="email" required placeholder="Email" className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-sky-500/40 md:col-span-1" />
              <textarea name="message" required rows={4} placeholder="Your message" className="md:col-span-2 rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-sky-500/40" />
              <button type="submit" className="md:col-span-2 inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-sky-500 to-fuchsia-600 px-5 py-3 text-sm font-medium text-white shadow-lg">
                <Mail className="h-4 w-4" />
                Send Message
              </button>
            </form>
          </div>
        </motion.div>
      </Section>
    </div>
  );
}

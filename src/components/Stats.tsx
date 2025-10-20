import { motion } from 'motion/react';

export function Stats() {
  return (
    <section id="stats" className="relative bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-[1fr,1.4fr] gap-12 items-center">
        <div className="space-y-6">
          <div className="text-4xl leading-tight font-medium">
            <p>Some</p>
            <p>key figures</p>
            <p>that you may</p>
            <p>find useful</p>
          </div>
          <div className="text-5xl">👀</div>
        </div>

        <div className="relative rounded-3xl border border-white/15 p-8 lg:p-12">
          <div className="grid grid-cols-2 gap-6">
            <motion.div whileHover={{ scale: 1.03 }} className="relative aspect-[5/4] rounded-2xl bg-white/5 flex items-center justify-center">
              <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-fuchsia-500 text-black text-xs font-semibold">YEARS EXPERIENCE</div>
              <div className="text-5xl font-semibold">5</div>
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 160" fill="none">
                <polygon points="100,10 10,150 190,150" stroke="rgba(255,255,255,.25)" strokeWidth="2" />
              </svg>
            </motion.div>

            <motion.div whileHover={{ rotate: -2, scale: 1.02 }} className="relative aspect-[5/4] rounded-2xl bg-white/5 flex items-center justify-center">
              <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-yellow-400 text-black text-xs font-semibold">PROJECTS FINISHED</div>
              <div className="text-5xl font-semibold">10+</div>
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 160" fill="none">
                <polygon points="60,30 140,30 180,80 140,130 60,130 20,80" stroke="rgba(255,255,255,.25)" strokeWidth="2" />
              </svg>
            </motion.div>

            <motion.div whileHover={{ rotate: 2, scale: 1.02 }} className="relative aspect-[5/4] rounded-2xl bg-white/5 flex items-center justify-center">
              <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-blue-400 text-black text-xs font-semibold">USER INTERVIEWS</div>
              <div className="text-5xl font-semibold">60+</div>
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 160" fill="none">
                <rect x="20" y="30" width="160" height="100" rx="20" stroke="rgba(255,255,255,.25)" strokeWidth="2" />
              </svg>
            </motion.div>

            <motion.div whileHover={{ scale: 1.03 }} className="relative aspect-[5/4] rounded-2xl bg-white/5 flex items-center justify-center">
              <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-orange-400 text-black text-xs font-semibold">USER TESTS</div>
              <div className="text-5xl font-semibold">45+</div>
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 160" fill="none">
                <rect x="35" y="45" width="130" height="70" rx="35" stroke="rgba(255,255,255,.25)" strokeWidth="2" />
              </svg>
            </motion.div>
          </div>

          <motion.div initial={{ y: -8 }} animate={{ y: [ -8, 8, -8 ] }} transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }} className="absolute -top-6 -right-4 bg-lime-300 text-black text-xs font-semibold px-3 py-2 rounded-2xl shadow">AVERAGE SUS
            <span className="ml-2 text-lg font-bold">82</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

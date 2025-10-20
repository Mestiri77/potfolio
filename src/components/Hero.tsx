import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { RotatingText } from './RotatingText';
import heroImage from '../assets/me.png';

export function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.95, 1], [1, 1, 0]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const imageRotate = useTransform(scrollYProgress, [0, 1], [0, 5]);

  return (
    <section ref={sectionRef} id="home" className="relative min-h-screen bg-black overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black z-0" />

      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <style>{`
          @keyframes meteor {
            0% { transform: translate3d(0,0,0) rotate(45deg); opacity: 0; }
            10% { opacity: 1; }
            100% { transform: translate3d(120vw, 120vh, 0) rotate(45deg); opacity: 0; }
          }
          .meteor { position: absolute; width: 2px; height: 2px; background: transparent; box-shadow: 0 0 6px 2px rgba(255,255,255,0.6); }
          .meteor::after { content: ""; position: absolute; top: 0; left: 0; width: 140px; height: 2px; background: linear-gradient(90deg, rgba(255,255,255,0.9), rgba(255,255,255,0)); transform: translateX(-120px); }
          .animate-meteor { animation: meteor 4s linear infinite; }
          .starfield { position: absolute; inset: 0; background-image:
            radial-gradient(1px 1px at 20% 30%, rgba(255,255,255,0.8) 50%, transparent 51%),
            radial-gradient(1px 1px at 40% 70%, rgba(255,255,255,0.7) 50%, transparent 51%),
            radial-gradient(1px 1px at 60% 20%, rgba(255,255,255,0.8) 50%, transparent 51%),
            radial-gradient(1.5px 1.5px at 80% 50%, rgba(255,255,255,0.8) 50%, transparent 51%),
            radial-gradient(1px 1px at 10% 80%, rgba(255,255,255,0.7) 50%, transparent 51%),
            radial-gradient(1px 1px at 90% 15%, rgba(255,255,255,0.8) 50%, transparent 51%),
            radial-gradient(1px 1px at 30% 50%, rgba(255,255,255,0.8) 50%, transparent 51%),
            radial-gradient(1px 1px at 70% 85%, rgba(255,255,255,0.7) 50%, transparent 51%);
            background-repeat: no-repeat; background-color: transparent; opacity: 0.65; }
        `}</style>
        <div className="starfield" />
        <div className="meteor animate-meteor" style={{ top: '-10vh', left: '-10vw', animationDelay: '0s' }} />
        <div className="meteor animate-meteor" style={{ top: '-20vh', left: '10vw', animationDelay: '1.2s' }} />
        <div className="meteor animate-meteor" style={{ top: '-15vh', left: '35vw', animationDelay: '2.4s' }} />
        <div className="meteor animate-meteor" style={{ top: '-25vh', left: '65vw', animationDelay: '3.6s' }} />
      </div>

      {/* Content Container */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 max-w-7xl mx-auto px-6 pt-4 lg:pt-6 pb-8 min-h-screen flex items-center"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
        <div className="max-w-2xl">
          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <motion.h1
              className="text-white mb-4"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Aslema –
            </motion.h1>
            <motion.div
            className="flex items-center gap-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h1 className="text-white">I'M FAROUK</h1>
            <motion.div
              animate={{
                x: [0, 10, 0],
                y: [0, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <ArrowUpRight className="w-12 h-12 text-white" />
            </motion.div>
          </motion.div>
          {/* Active dot row */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-3 flex items-center gap-2"
          >
            <span className="inline-block w-3 h-3 rounded-full bg-lime-400 shadow-[0_0_0_3px_rgba(163,230,53,0.25)]" />
            <span className="text-white/80 text-sm">Open to work</span>
          </motion.div>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-white/70 mb-16 max-w-lg"
          >
            Passionate about building scalable applications and crafting seamless user experiences. 
            I transform ideas into elegant solutions through code and creativity.
          </motion.p>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="relative"
          >
            <motion.div
              className="inline-block"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-white">
                PROBLEM SOLVER &<br />
                <RotatingText 
                  texts={[
                    'FULL-STACK DEVELOPER',
                    'DESIGNER',
                    'CONTENT CREATOR',
                    'NETWORK MARKETER'
                  ]}
                  interval={2500}
                />
              </h2>
              <motion.div
                className="h-1 bg-gradient-to-r from-orange-500 to-transparent mt-2"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 1, delay: 1.2 }}
              />
            </motion.div>
          </motion.div>
        </div>

          {/* Right Column - Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 100 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative block h-[85vh] lg:h-[calc(100vh-2rem)]"
          >
            <motion.div
              style={{ y: imageY, rotate: imageRotate }}
              className="relative h-full"
            >
              {/* Glow Effect */}
              <motion.div
                className="absolute -inset-4 bg-orange-500/20 blur-3xl rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              {/* Main Image */}
              <motion.div
                className="relative overflow-hidden rounded-3xl h-full"
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ duration: 0.4 }}
              >
                <img
                  src={heroImage}
                  alt="Farouk - Full-Stack Developer"
                  className="w-full h-full object-cover object-[center_top] transform scale-x-[-1]"
                  style={{
                    filter: 'brightness(1.1) contrast(1.1)',
                    mixBlendMode: 'lighten',
                  }}
                  loading="lazy"
                />
                {/* Crown icon */}
                <motion.div
                  className="absolute right-6 top-6"
                  animate={{ rotate: [ -6, 6, -6 ], y: [ -4, 0, -4 ] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <svg width="44" height="44" viewBox="0 0 64 64" fill="none" stroke="rgba(255,255,255,.8)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M8 46 L12 22 L24 34 L36 16 L52 30 L56 46 Z" />
                    <path d="M8 46 H56" />
                  </svg>
                </motion.div>
              </motion.div>

              {/* Decorative Elements */}
              <motion.div
                className="absolute -top-8 -right-8 w-32 h-32 border-2 border-orange-500/30 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute -bottom-8 -left-8 w-24 h-24 border-2 border-orange-500/30 rounded-full"
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-white rounded-full"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

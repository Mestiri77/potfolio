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

      {/* Content Container */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 min-h-screen flex items-center"
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
                <RotatingText 
                  texts={[
                    'FULL-STACK DEVELOPER',
                    'DESIGNER',
                    'CONTENT CREATOR',
                    'NETWORK MARKETER'
                  ]}
                  interval={2500}
                /> &<br />
                PROBLEM SOLVER
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
            className="relative block"
          >
            <motion.div
              style={{ y: imageY, rotate: imageRotate }}
              className="relative"
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
                className="relative overflow-hidden rounded-3xl"
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ duration: 0.4 }}
              >
                <img
                  src={heroImage}
                  alt="Farouk - Full-Stack Developer"
                  className="w-full h-auto object-cover transform scale-x-[-1]"
                  style={{
                    maxWidth: '600px',
                    filter: 'brightness(1.1) contrast(1.1)',
                    mixBlendMode: 'lighten',
                  }}
                  loading="lazy"
                />
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

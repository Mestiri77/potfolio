import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Download, Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import logo from '../assets/61d16c52608384e6255bd5d9cc59429cecf01121.png';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(0, 0, 0, 0.6)', 'rgba(0, 0, 0, 0.95)']
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['HOME', 'ABOUT US', 'FEATURES', 'PRICING'];

  return (
    <motion.nav
      style={{ backgroundColor }}
      className={`fixed top-0 left-0 right-0 z-[200] transition-all duration-300 backdrop-blur-lg relative`}
    >
      {/* Animated gradient borders (top & bottom) */}
      <motion.div
        className="absolute left-0 right-0 top-0 h-0.5 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(90deg, #f97316, #ef4444, #f97316)',
          backgroundSize: '200% 100%'
        }}
        animate={{ backgroundPositionX: ['0%', '100%', '0%'] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute left-0 right-0 bottom-0 h-0.5 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(90deg, #f97316, #ef4444, #f97316)',
          backgroundSize: '200% 100%'
        }}
        animate={{ backgroundPositionX: ['100%', '0%', '100%'] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
      />
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#home"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <motion.img
              src={logo}
              alt="Farouk Logo"
              className="h-12 w-auto"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>

          {/* Desktop Navigation (md and up) */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-white/70 hover:text-white transition-colors relative group"
              >
                {item}
                <motion.span
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"
                />
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            aria-label="Toggle menu"
            aria-controls="mobile-menu"
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* md-only compact CTA (icon) */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:flex lg:hidden"
          >
            <Button
              variant="outline"
              className="bg-white text-black border-white/30 hover:bg-white hover:text-black transition-all duration-300 rounded-full cursor-pointer p-2"
              title="Download CV"
            >
              <Download className="w-4 h-4" />
            </Button>
          </motion.div>

          {/* Desktop CTA Button (lg and up) */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden lg:flex"
          >
            <Button
              variant="outline"
              className="bg-white text-black border-white/30 hover:bg-white hover:text-black transition-all duration-300 rounded-full cursor-pointer"
            >
              <motion.span
                className="mr-2 inline-flex"
                animate={{ scale: [1, 1.15, 1], y: [0, -2, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <Download className="w-4 h-4" />
              </motion.span>
              DOWNLOAD CV
            </Button>
          </motion.div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            id="mobile-menu"
            className="md:hidden mt-4 pb-4 flex flex-col gap-4"
          >
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="text-white/70 hover:text-white transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <Button
              variant="outline"
              className="bg-white text-black border-white/30 hover:bg-white hover:text-black w-full transition-all duration-300 rounded-full cursor-pointer"
            >
              <motion.span
                className="mr-2 inline-flex"
                animate={{ scale: [1, 1.15, 1], y: [0, -2, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <Download className="w-4 h-4" />
              </motion.span>
              DOWNLOAD CV
            </Button>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}

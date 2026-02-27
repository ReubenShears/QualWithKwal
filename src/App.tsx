import { motion, AnimatePresence } from 'motion/react';
import { 
  Trophy, 
  ShieldCheck, 
  Zap, 
  ChevronDown, 
  MessageCircle, 
  CheckCircle2, 
  Users, 
  Gamepad2,
  ArrowRight,
  Menu,
  X
} from 'lucide-react';
import { useState } from 'react';

// --- Components ---

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-md border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-cyan-500 rounded-lg flex items-center justify-center">
            <Trophy className="w-5 h-5 text-black" />
          </div>
          <span className="font-display font-bold text-xl tracking-tight text-white">Qual<span className="text-cyan-500">WithKwal</span></span>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
          {['Services', 'Results', 'Live Tracker', 'FAQ'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`} 
              className="hover:text-white transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-500 transition-all group-hover:w-full" />
            </a>
          ))}
        </div>
        
        <div className="hidden md:flex flex-col items-end">
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://discord.gg/bmB4883D" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black px-4 py-2 rounded-lg text-sm font-bold hover:bg-cyan-400 transition-colors flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            Message Kwal
          </motion.a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-zinc-950 border-b border-white/5 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {['Services', 'Results', 'Live Tracker', 'FAQ'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`} 
                  onClick={() => setIsMobileMenuOpen(false)} 
                  className="text-lg font-medium text-zinc-400 hover:text-white"
                >
                  {item}
                </a>
              ))}
              <a 
                href="https://discord.gg/bmB4883D" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-black px-4 py-3 rounded-lg text-center font-bold hover:bg-cyan-400 transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Message Kwal
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

const Hero = () => (
  <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
    {/* Background Effects */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-cyan-500/20 blur-[120px] rounded-full pointer-events-none" />
    
    <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-cyan-400 text-xs font-medium mb-6"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
        </span>
        Accepting New Clients For FNCS
      </motion.div>
      
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="font-display font-bold text-4xl md:text-7xl lg:text-8xl tracking-tighter text-white mb-6"
      >
        Secure Your <br className="hidden md:block" />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">FNCS Qualification</span>
      </motion.h1>
      
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-zinc-400 text-base md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
      >
        We'll qualify you for the next division in FNCS guaranteed. Otherwise, we'll refund you in full or play an extra day of FNCS to compensate.
      </motion.p>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex flex-col items-center gap-4"
      >
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://discord.gg/bmB4883D"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded-xl transition-all flex items-center justify-center gap-2"
          >
            Message to Book <ArrowRight className="w-4 h-4" />
          </motion.a>
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#results"
            className="w-full sm:w-auto px-8 py-4 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-white font-medium rounded-xl transition-all"
          >
            See Results
          </motion.a>
        </div>
        <span className="text-xs text-cyan-400 font-medium flex items-center gap-1.5">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
          </span>
          Avg response: ~10 mins
        </span>
      </motion.div>

      {/* Trust Badges */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mt-16 pt-8 border-t border-white/5 flex flex-wrap justify-center gap-8 md:gap-16"
      >
        {[
          { icon: ShieldCheck, text: "100% Guaranteed" },
          { icon: Users, text: "40k+ PR Network" },
          { icon: Zap, text: "Any Region" }
        ].map((badge, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -5 }}
            className="flex items-center gap-2 text-zinc-500"
          >
            <badge.icon className="w-5 h-5 text-cyan-500" />
            <span className="font-medium">{badge.text}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

const StatCard = ({ label, value, subtext, delay }: { label: string, value: string, subtext: string, delay: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ y: -5, borderColor: 'rgba(6,182,212,0.5)' }}
    className="bg-zinc-900/50 border border-white/5 p-6 rounded-2xl text-center transition-colors"
  >
    <div className="text-zinc-500 text-sm font-medium uppercase tracking-wider mb-2">{label}</div>
    <div className="text-3xl md:text-5xl font-display font-bold text-white mb-2">{value}</div>
    <div className="text-cyan-400 text-sm">{subtext}</div>
  </motion.div>
);

const Results = () => (
  <section id="results" className="py-24 bg-zinc-950 relative">
    <div className="max-w-7xl mx-auto px-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 text-center"
      >
        <h2 className="font-display font-bold text-2xl md:text-5xl text-white mb-4">Proven Results</h2>
        <p className="text-zinc-400">Don't just take our word for it. Check the stats.</p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
        <StatCard label="Active PR" value="13.6k" subtext="Peak 15.4k" delay={0.1} />
        <StatCard label="Lifetime PR" value="45k" subtext="Prior to decay" delay={0.2} />
        <StatCard label="Earnings" value="$2,025" subtext="Tournament Winnings" delay={0.3} />
        <StatCard label="Network" value="40k+" subtext="PR Players Available" delay={0.4} />
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="hidden md:block bg-zinc-900 border border-zinc-800 rounded-2xl p-2 overflow-hidden shadow-2xl"
      >
        <div className="bg-zinc-950 rounded-xl p-6 md:p-12 flex flex-col items-center">
          {/* Mockup of the leaderboard screenshot */}
          <div className="w-full max-w-3xl bg-[#0f172a] rounded-lg border border-zinc-800 overflow-hidden">
            <div className="bg-[#1e293b] px-4 py-3 flex justify-between items-center border-b border-zinc-700">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="text-zinc-400 text-xs font-mono">leaderboard_results.png</div>
            </div>
            <div className="p-4 md:p-8">
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between text-xs text-zinc-500 uppercase font-bold px-4 pb-2 border-b border-zinc-800">
                  <span className="w-12">Rank</span>
                  <span className="flex-1">Player</span>
                  <span className="w-16 text-right">Points</span>
                  <span className="w-16 text-right">Wins</span>
                  <span className="w-16 text-right">Elims</span>
                </div>
                {/* Highlighted Row */}
                <motion.div 
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="flex items-center justify-between bg-cyan-500/10 border border-cyan-500/50 rounded-lg px-4 py-3 text-white"
                >
                  <span className="w-12 font-bold text-cyan-400">#23</span>
                  <span className="flex-1 font-bold flex items-center gap-2">
                    <span className="w-4 h-4 rounded-full bg-green-500/20 flex items-center justify-center text-[10px]">🇮🇪</span>
                    Bhad fv. & 
                    <span className="w-4 h-4 rounded-full bg-blue-500/20 flex items-center justify-center text-[10px]">🇳🇱</span>
                    vanixx!
                  </span>
                  <span className="w-16 text-right font-mono">335</span>
                  <span className="w-16 text-right font-mono">1</span>
                  <span className="w-16 text-right font-mono">90</span>
                </motion.div>
                {/* Other Row */}
                <div className="flex items-center justify-between px-4 py-3 text-zinc-500 opacity-50">
                  <span className="w-12 font-bold">#38</span>
                  <span className="flex-1 flex items-center gap-2">
                    Zebro Reez! & amar junior7
                  </span>
                  <span className="w-16 text-right font-mono">320</span>
                  <span className="w-16 text-right font-mono">1</span>
                  <span className="w-16 text-right font-mono">29</span>
                </div>
              </div>
            </div>
          </div>
          <p className="mt-6 text-zinc-500 text-sm italic">"played for 3 people and qualed 3 of them" - Kwal</p>
        </div>
      </motion.div>
    </div>
  </section>
);

const TrackerEmbed = () => (
  <section id="live-tracker" className="py-16 md:py-24 bg-black border-t border-white/5">
    <div className="max-w-7xl mx-auto px-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12 text-center"
      >
        <h2 className="font-display font-bold text-3xl md:text-5xl text-white mb-4">Live Verification</h2>
        <p className="text-zinc-400 flex items-center justify-center gap-2 text-sm md:text-base">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          Live stats from Fortnite Tracker. Click to verify.
        </p>
      </motion.div>
      
      <motion.a 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
        href="https://fortnitetracker.com/profile/all/kwal%20%E3%83%A3/events" 
        target="_blank" 
        rel="noopener noreferrer"
        className="group relative block w-full max-w-3xl mx-auto rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-900/50 hover:border-cyan-500/50 transition-all duration-300"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10 group-hover:opacity-20 transition-opacity duration-500 mix-blend-luminosity" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
        
        <div className="relative z-10 p-8 md:p-12 flex flex-col items-center text-center">
          {/* Profile Icon */}
          <motion.div 
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.8 }}
            className="w-20 h-20 rounded-full bg-zinc-800 border-2 border-zinc-700 p-1 mb-6 group-hover:border-cyan-500 transition-colors shadow-xl"
          >
            <div className="w-full h-full rounded-full bg-zinc-900 flex items-center justify-center overflow-hidden">
               <Trophy className="w-8 h-8 text-cyan-500" />
            </div>
          </motion.div>

          <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
            Kwal ャ
          </h3>
          
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <span className="px-3 py-1 rounded-full bg-zinc-800/80 border border-zinc-700 text-xs font-medium text-zinc-300">
              EU Region
            </span>
            <span className="px-3 py-1 rounded-full bg-zinc-800/80 border border-zinc-700 text-xs font-medium text-zinc-300">
              PC
            </span>
            <span className="px-3 py-1 rounded-full bg-cyan-950/30 border border-cyan-500/30 text-xs font-medium text-cyan-400 flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3" /> Verified
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-2xl mb-8">
             {[
               { label: "PR", value: "13.6K" },
               { label: "Earnings", value: "$2.0K+" },
               { label: "Events", value: "100+" },
               { label: "Win Rate", value: "High" }
             ].map((stat, i) => (
               <div key={i} className="bg-black/40 rounded-xl p-3 border border-white/5">
                  <div className="text-zinc-500 text-[10px] uppercase tracking-wider mb-1">{stat.label}</div>
                  <div className="text-white font-mono font-bold">{stat.value}</div>
               </div>
             ))}
          </div>

          <div className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 text-black font-bold rounded-xl group-hover:bg-cyan-400 transition-colors">
            View Full Profile <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </motion.a>
    </div>
  </section>
);

const PricingCard = ({ 
  title, 
  price, 
  features, 
  recommended = false,
  delay
}: { 
  title: string, 
  price: string, 
  features: string[], 
  recommended?: boolean,
  delay: number
}) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ y: -10 }}
    className={`relative p-8 rounded-3xl border ${recommended ? 'bg-zinc-900 border-cyan-500/50 shadow-lg shadow-cyan-900/20' : 'bg-zinc-950 border-zinc-800'} flex flex-col h-full`}
  >
    {recommended && (
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-cyan-500 text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
        Most Popular
      </div>
    )}
    <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
    <div className="flex items-baseline gap-1 mb-6">
      <span className="text-3xl md:text-4xl font-display font-bold text-white">{price}</span>
      {price !== 'Custom' && <span className="text-zinc-500">/ event</span>}
    </div>
    <ul className="space-y-4 mb-8 flex-1">
      {features.map((feature, i) => (
        <li key={i} className="flex items-start gap-3 text-zinc-300 text-sm">
          <CheckCircle2 className={`w-5 h-5 shrink-0 ${recommended ? 'text-cyan-400' : 'text-zinc-600'}`} />
          {feature}
        </li>
      ))}
    </ul>
    <motion.a 
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      href="https://discord.gg/bmB4883D"
      target="_blank"
      rel="noopener noreferrer"
      className={`w-full py-3 rounded-xl font-bold transition-all flex items-center justify-center ${recommended ? 'bg-cyan-500 hover:bg-cyan-400 text-black' : 'bg-white hover:bg-zinc-200 text-black'}`}
    >
      Book Now
    </motion.a>
  </motion.div>
);

const Services = () => (
  <section id="services" className="py-24 bg-black">
    <div className="max-w-7xl mx-auto px-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 text-center max-w-2xl mx-auto"
      >
        <h2 className="font-display font-bold text-2xl md:text-5xl text-white mb-4">Simple Pricing</h2>
        <p className="text-zinc-400 text-base md:text-lg mb-6">
          Professional carry services to get you through divisional cups. Increase your PR, unlock better teammates, and play in higher calibre tournaments.
        </p>
        <p className="text-zinc-500 text-sm">Transparent rates for guaranteed results. No hidden fees.</p>
        <div className="mt-4 inline-block bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-2 text-sm text-zinc-400">
          <span className="text-cyan-400 font-bold">Note:</span> You can choose to play WITH Kwal (duo) instead of account sharing, though this may slightly reduce qualification chances.
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <PricingCard 
          title="Div 4 → Div 3"
          price="€40"
          delay={0.1}
          features={[
            "Guaranteed Qualification",
            "Played on your account OR Duo",
            "Played with pro teammate",
            "Refund if not qualified",
            "Any Region Supported"
          ]}
        />
        <PricingCard 
          title="Div 3 → Div 2"
          price="€70"
          recommended={true}
          delay={0.2}
          features={[
            "High Priority Service",
            "Guaranteed Qualification",
            "Played on your account OR Duo",
            "Played with pro teammate",
            "Refund if not qualified",
            "Any Region Supported"
          ]}
        />
        <PricingCard 
          title="Full Tournament"
          price="Custom"
          delay={0.3}
          features={[
            "FNCS Qualification",
            "Full tournament play",
            "Custom schedule",
            "Negotiable rates",
            "Dedicated pro duo"
          ]}
        />
      </div>
    </div>
  </section>
);

const VideoShowcase = () => (
  <section className="py-24 bg-zinc-950 border-y border-white/5">
    <div className="max-w-5xl mx-auto px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h2 className="font-display font-bold text-2xl md:text-5xl text-white mb-4">Dominate The Lobby</h2>
        <p className="text-zinc-400 text-base md:text-lg">Learn exactly how this offer works... (watch on 2X speed to save time).</p>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative w-full max-w-4xl mx-auto"
      >
        {/* Animated Border Container */}
        <div className="absolute -inset-[2px] rounded-3xl bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-500 opacity-75 blur-sm animate-gradient-xy bg-[length:400%_400%]" />
        <div className="relative aspect-video w-full rounded-3xl overflow-hidden border border-white/10 bg-zinc-900 shadow-2xl shadow-cyan-900/20">
          <iframe 
            src="https://drive.google.com/file/d/1BN0ZIHQJK8GmSzvajSnJMstMe3u94hny/preview" 
            className="absolute inset-0 w-full h-full" 
            allow="autoplay; fullscreen"
            title="Kwal Gameplay"
          ></iframe>
        </div>
      </motion.div>
    </div>
  </section>
);

const Step = ({ number, title, desc, delay }: { number: string, title: string, desc: string, delay: number }) => (
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="flex gap-6"
  >
    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center font-display font-bold text-white text-lg md:text-xl">
      {number}
    </div>
    <div>
      <h3 className="text-lg md:text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-zinc-400 leading-relaxed text-sm md:text-base">{desc}</p>
    </div>
  </motion.div>
);

const HowItWorks = () => (
  <section id="how-it-works" className="py-24 bg-zinc-950 border-y border-white/5">
    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <div>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display font-bold text-2xl md:text-5xl text-white mb-6"
        >
          How It Works
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-zinc-400 text-base md:text-lg mb-12"
        >
          The process is simple and secure. We handle the hard work, you get the results and the PR boost.
        </motion.p>
        <div className="space-y-10">
          <Step 
            number="01" 
            title="Book Your Slot" 
            desc="Contact us to confirm availability for the upcoming cup. Slots are limited per event." 
            delay={0.2}
          />
          <Step 
            number="02" 
            title="Secure Payment" 
            desc="Pay upfront to lock in your spot. This guarantees our time is reserved exclusively for your account." 
            delay={0.3}
          />
          <Step 
            number="03" 
            title="We Dominate" 
            desc="We play on your account with our own high-tier duo partner to ensure maximum points and qualification." 
            delay={0.4}
          />
          <Step 
            number="04" 
            title="You Qualify" 
            desc="Log back in to see your new division, increased PR, and qualification for higher tier tournaments." 
            delay={0.5}
          />
        </div>
      </div>
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 blur-[100px] rounded-full" />
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-zinc-900 border border-zinc-800 rounded-3xl p-8 md:p-12"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center">
              <MessageCircle className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-white font-bold">Direct Support</div>
              <div className="text-zinc-500 text-sm">Always available to chat</div>
            </div>
          </div>
          <div className="space-y-4">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-zinc-950 p-4 rounded-xl rounded-tl-none border border-zinc-800 max-w-[90%]"
            >
              <p className="text-zinc-400 text-sm mb-1">Reubs</p>
              <p className="text-white">And what happens if you don't qual - whats the guarantee?</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="bg-cyan-900/20 p-4 rounded-xl rounded-tr-none border border-cyan-500/20 max-w-[90%] ml-auto"
            >
              <p className="text-cyan-400 text-sm mb-1">Kwal</p>
              <p className="text-white">I mean, there isn't a world where we don't qual Div 4, but if that somehow happens, I'll either play an extra day with you or refund.</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const FaqItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border-b border-zinc-800">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left hover:text-cyan-400 transition-colors"
      >
        <span className="text-base md:text-lg font-medium text-white">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="w-5 h-5 text-zinc-500" />
        </motion.div>
      </button>
      <motion.div 
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="text-zinc-400 leading-relaxed text-sm md:text-base pb-6">{answer}</p>
      </motion.div>
    </div>
  );
};

const FAQ = () => (
  <section id="faq" className="py-24 bg-black">
    <div className="max-w-3xl mx-auto px-6">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display font-bold text-2xl md:text-5xl text-white mb-12 text-center"
      >
        Common Questions
      </motion.h2>
      <div className="space-y-2">
        <FaqItem 
          question="Do you play on my account?" 
          answer="Yes, playing on your account is the standard method for maximum qualification chances. However, if you prefer, I can play WITH you (duo), though this may slightly reduce the probability of qualification depending on your skill level." 
        />
        <FaqItem 
          question="What regions do you support?" 
          answer="I can play on ANY region. While I am based in the Netherlands (EU), I have experience qualifying on all major regions with adjusted playstyles for ping differences." 
        />
        <FaqItem 
          question="What if you don't qualify?" 
          answer="In the extremely rare event that we don't qualify, I offer a full refund or I will play an extra day for free to ensure you get the result you paid for." 
        />
        <FaqItem 
          question="When do I pay?" 
          answer="Payment is required upfront to reserve the slot. Since tournament windows are limited, this prevents last-minute cancellations." 
        />
      </div>
    </div>
  </section>
);

const CTA = () => (
  <section className="py-24 bg-zinc-900 border-t border-white/5 relative overflow-hidden">
    <div className="absolute inset-0 bg-cyan-500/5" />
    <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
      <h2 className="font-display font-bold text-3xl md:text-6xl text-white mb-6">Ready to Qualify?</h2>
      <p className="text-zinc-400 text-base md:text-lg mb-10 max-w-2xl mx-auto">
        Slots fill up fast for every cup. Secure your spot now and guarantee your PR boost.
      </p>
      <a 
        href="https://discord.gg/bmB4883D"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded-xl transition-all text-lg"
      >
        <MessageCircle className="w-5 h-5" />
        Message on Discord
      </a>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-12 bg-zinc-950 border-t border-white/5">
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="flex items-center gap-2">
        <Trophy className="w-5 h-5 text-cyan-500" />
        <span className="font-display font-bold text-xl text-white">Qual<span className="text-cyan-500">WithKwal</span></span>
      </div>
      <div className="text-zinc-500 text-sm">
        © {new Date().getFullYear()} Qual With Kwal. All rights reserved.
      </div>
      <div className="flex gap-6">
        <a href="https://discord.gg/bmB4883D" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors"><Gamepad2 className="w-5 h-5" /></a>
        <a href="https://discord.gg/bmB4883D" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors"><MessageCircle className="w-5 h-5" /></a>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="bg-black min-h-screen text-white selection:bg-cyan-500/30">
      <Navbar />
      <Hero />
      <VideoShowcase />
      <HowItWorks />
      <Results />
      <Services />
      <TrackerEmbed />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}

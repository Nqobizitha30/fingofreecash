import { motion } from "framer-motion";
import heroGamer from "@/assets/hero-gamer.gif";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/50" />
      
      <div className="container relative z-10 mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20">
              💰 Start Earning Today
            </span>
            <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight mb-6">
              <span className="text-gradient-primary">Get Paid</span> to Play Games
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-lg mb-8 leading-relaxed">
              Turn your gaming time into real money. Play fun games, complete simple tasks, and cash out instantly via PayPal, Crypto, or Gift Cards.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="https://gloffers.org/aff_c?offer_id=3533&aff_id=148474&source=fingofreecash"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-primary text-primary-foreground font-display font-bold text-lg glow-primary transition-all"
              >
                GET STARTED
              </motion.a>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl border border-border text-foreground font-display font-medium text-lg hover:bg-secondary transition-all"
              >
                How It Works
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative flex justify-center"
          >
            <div className="relative rounded-2xl overflow-hidden glow-primary">
              <img
                src={heroGamer}
                alt="Gamer earning money playing games"
                className="w-full max-w-lg rounded-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

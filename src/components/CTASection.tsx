import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <section id="get-started" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center p-12 rounded-3xl bg-card border border-border relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
          <div className="relative z-10">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Ready to <span className="text-gradient-primary">Earn?</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Join thousands of gamers already making money. It's free to start.
            </p>
            <motion.a
              href="https://gloffers.org/aff_c?offer_id=3533&aff_id=148474&source=fingofreecash"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center px-10 py-4 rounded-xl bg-primary text-primary-foreground font-display font-bold text-xl glow-primary transition-all"
            >
              GET STARTED
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;

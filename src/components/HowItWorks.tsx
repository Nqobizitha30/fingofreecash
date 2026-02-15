import { motion } from "framer-motion";
import { Gamepad2, Coins, Wallet } from "lucide-react";

const steps = [
  {
    icon: Gamepad2,
    title: "Play Games",
    description: "Choose from hundreds of fun games and start playing right away.",
  },
  {
    icon: Coins,
    title: "Earn Coins",
    description: "Complete games and tasks to earn coins that add up fast.",
  },
  {
    icon: Wallet,
    title: "Cash Out",
    description: "Withdraw your earnings via PayPal, Bitcoin, or gift cards instantly.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            How It <span className="text-gradient-primary">Works</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-md mx-auto">
            Three simple steps to start earning money online.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative p-8 rounded-2xl bg-card border border-border hover:border-primary/40 transition-all group text-center"
            >
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:glow-primary transition-all">
                <step.icon className="w-8 h-8 text-primary" />
              </div>
              <span className="absolute top-4 right-4 text-5xl font-display font-bold text-border/50">
                {i + 1}
              </span>
              <h3 className="font-display text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

import { motion } from "framer-motion";
import coinsImg from "@/assets/coins.gif";
import cardsImg from "@/assets/cards.jpg";

const EarningsSection = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img
              src={coinsImg}
              alt="Stack of gold coins"
              className="w-full max-w-md mx-auto rounded-2xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Start <span className="text-gradient-primary">Earning</span> From Your Everyday Apps
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Whether it's playing mobile games, completing surveys, or testing apps — every task earns you real money. Cash out with Visa, PayPal, Bitcoin, and more.
            </p>
            <div className="flex items-center gap-4">
              <img
                src={cardsImg}
                alt="Payment methods - Visa, PayPal, Bitcoin"
                className="w-48 rounded-lg border border-border"
              />
              <div className="text-sm text-muted-foreground">
                <p className="font-medium text-foreground">Multiple Cashout Options</p>
                <p>Visa • PayPal • Bitcoin • Gift Cards</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EarningsSection;

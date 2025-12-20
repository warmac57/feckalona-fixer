import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Check } from "lucide-react";

const rebates = [
  {
    title: "Heat Pump Water Heater",
    amount: "$300",
    description: "Upgrade to an ENERGY STAR certified heat pump water heater",
  },
  {
    title: "Central Air Conditioner",
    amount: "$200",
    description: "High-efficiency central AC units (16 SEER or higher)",
  },
  {
    title: "Ground Source Heat Pump",
    amount: "$500",
    description: "Geothermal heating and cooling systems",
  },
  {
    title: "LED Lighting",
    amount: "$2/bulb",
    description: "ENERGY STAR certified LED bulbs (up to 20 bulbs)",
  },
  {
    title: "Smart Thermostat",
    amount: "$50",
    description: "Wi-Fi enabled programmable thermostats",
  },
  {
    title: "Electric Vehicle Charger",
    amount: "$250",
    description: "Level 2 EV charging station installation",
  },
];

const Rebates = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-primary py-16">
          <div className="container mx-auto px-4 text-center text-primary-foreground">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Energy Efficiency Rebates
            </h1>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Take advantage of rebate programs to make energy-efficient upgrades more
              affordable for your home.
            </p>
          </div>
        </section>

        {/* Rebates Grid */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {rebates.map((rebate, index) => (
                <div
                  key={rebate.title}
                  className="section-card animate-fade-in-up"
                  style={{ animationDelay: `${0.1 * (index + 1)}s` }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="font-display text-xl font-semibold text-foreground">
                      {rebate.title}
                    </h3>
                    <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-bold">
                      {rebate.amount}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm">{rebate.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-16 section-card max-w-2xl mx-auto">
              <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                How to Apply
              </h2>
              <ul className="space-y-3">
                {[
                  "Purchase qualifying equipment from a licensed contractor",
                  "Keep all receipts and proof of purchase",
                  "Complete the rebate application form",
                  "Submit application within 90 days of installation",
                  "Receive your rebate check within 4-6 weeks",
                ].map((step, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-muted-foreground">{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Rebates;

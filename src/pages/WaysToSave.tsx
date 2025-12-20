import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Lightbulb, DollarSign, Leaf, Thermometer } from "lucide-react";
import { Link } from "react-router-dom";

const savingTips = [
  {
    icon: Thermometer,
    title: "Heating & Cooling",
    tips: [
      "Set your thermostat to 68°F in winter and 78°F in summer",
      "Use a programmable thermostat to adjust temperatures when away",
      "Change HVAC filters regularly for optimal efficiency",
      "Seal air leaks around windows and doors",
    ],
  },
  {
    icon: Lightbulb,
    title: "Lighting",
    tips: [
      "Switch to LED bulbs for 75% energy savings",
      "Use natural light during the day",
      "Install motion sensors in less-used areas",
      "Turn off lights when leaving a room",
    ],
  },
  {
    icon: DollarSign,
    title: "Appliances",
    tips: [
      "Look for ENERGY STAR certified products",
      "Wash clothes in cold water when possible",
      "Run dishwashers and washing machines with full loads",
      "Unplug devices when not in use",
    ],
  },
  {
    icon: Leaf,
    title: "Water Heating",
    tips: [
      "Set water heater to 120°F",
      "Insulate your water heater and pipes",
      "Fix leaky faucets promptly",
      "Take shorter showers",
    ],
  },
];

const WaysToSave = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-primary py-16">
          <div className="container mx-auto px-4 text-center text-primary-foreground">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Ways to Save Energy
            </h1>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Simple changes can make a big difference in your energy bills and
              environmental impact.
            </p>
          </div>
        </section>

        {/* Tips Grid */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {savingTips.map((category, index) => (
                <div
                  key={category.title}
                  className="section-card animate-fade-in-up"
                  style={{ animationDelay: `${0.1 * (index + 1)}s` }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <category.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h2 className="font-display text-xl font-semibold text-foreground">
                      {category.title}
                    </h2>
                  </div>
                  <ul className="space-y-2">
                    {category.tips.map((tip) => (
                      <li key={tip} className="flex items-start gap-2 text-muted-foreground">
                        <span className="text-primary mt-1">•</span>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-muted-foreground mb-4">
                Ready to make energy-efficient upgrades?
              </p>
              <Link
                to="/rebates"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                View Available Rebates
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default WaysToSave;

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Lightbulb, Leaf } from "lucide-react";
import { Link } from "react-router-dom";

const SavingEnergy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-primary py-16">
          <div className="container mx-auto px-4 text-center text-primary-foreground">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Saving Energy
            </h1>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Reduce your energy consumption and save money with our programs and tips.
            </p>
          </div>
        </section>

        {/* Programs */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Link
                to="/ways-to-save"
                className="section-card group block animate-fade-in-up"
                style={{ animationDelay: "0.1s" }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Lightbulb className="w-6 h-6 text-primary" />
                </div>
                <h2 className="font-display text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  Ways to Save
                </h2>
                <p className="text-muted-foreground">
                  Practical tips and strategies to reduce your energy consumption at home.
                </p>
              </Link>

              <Link
                to="/rebates"
                className="section-card group block animate-fade-in-up"
                style={{ animationDelay: "0.2s" }}
              >
                <div className="w-12 h-12 rounded-lg bg-secondary/30 flex items-center justify-center mb-4 group-hover:bg-secondary/50 transition-colors">
                  <span className="text-secondary-foreground font-bold">$</span>
                </div>
                <h2 className="font-display text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  Energy Efficiency Rebates
                </h2>
                <p className="text-muted-foreground">
                  Get cash back when you upgrade to energy-efficient appliances.
                </p>
              </Link>

              <Link
                to="/grants"
                className="section-card group block animate-fade-in-up"
                style={{ animationDelay: "0.3s" }}
              >
                <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mb-4 group-hover:bg-accent/30 transition-colors">
                  <span className="text-accent font-bold">🎓</span>
                </div>
                <h2 className="font-display text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  Energy Conservation Grants
                </h2>
                <p className="text-muted-foreground">
                  Funding opportunities for major energy efficiency projects.
                </p>
              </Link>

              <Link
                to="/green-power"
                className="section-card group block animate-fade-in-up"
                style={{ animationDelay: "0.4s" }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Leaf className="w-6 h-6 text-primary" />
                </div>
                <h2 className="font-display text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  Green Power Project
                </h2>
                <p className="text-muted-foreground">
                  Learn about our renewable energy initiatives and how you can participate.
                </p>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SavingEnergy;

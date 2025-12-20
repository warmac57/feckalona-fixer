import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Sun, Battery, Zap, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CustomerGeneration = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-primary py-16">
          <div className="container mx-auto px-4 text-center text-primary-foreground">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Customer Generation
            </h1>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Generate your own power and connect to our grid with distributed generation options.
            </p>
          </div>
        </section>

        {/* Options */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid gap-8">
                <div className="section-card animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-secondary/30 flex items-center justify-center shrink-0">
                      <Sun className="w-6 h-6 text-secondary-foreground" />
                    </div>
                    <div>
                      <h2 className="font-display text-xl font-semibold text-foreground mb-2">
                        Rooftop Solar
                      </h2>
                      <p className="text-muted-foreground mb-4">
                        Install solar panels on your home or business and generate clean energy while
                        reducing your electric bill. Excess power can be sold back to the grid through
                        our net metering program.
                      </p>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-center gap-2">
                          <ArrowRight className="w-4 h-4 text-primary" />
                          Net metering credits for excess generation
                        </li>
                        <li className="flex items-center gap-2">
                          <ArrowRight className="w-4 h-4 text-primary" />
                          Federal tax credits available
                        </li>
                        <li className="flex items-center gap-2">
                          <ArrowRight className="w-4 h-4 text-primary" />
                          Interconnection support from our team
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="section-card animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Battery className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h2 className="font-display text-xl font-semibold text-foreground mb-2">
                        Battery Storage
                      </h2>
                      <p className="text-muted-foreground mb-4">
                        Pair your solar installation with battery storage to maximize self-consumption
                        and provide backup power during outages.
                      </p>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-center gap-2">
                          <ArrowRight className="w-4 h-4 text-primary" />
                          Store excess solar for evening use
                        </li>
                        <li className="flex items-center gap-2">
                          <ArrowRight className="w-4 h-4 text-primary" />
                          Backup power during outages
                        </li>
                        <li className="flex items-center gap-2">
                          <ArrowRight className="w-4 h-4 text-primary" />
                          Reduce peak demand charges
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="section-card animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center shrink-0">
                      <Zap className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h2 className="font-display text-xl font-semibold text-foreground mb-2">
                        Small Wind Systems
                      </h2>
                      <p className="text-muted-foreground mb-4">
                        Rural properties with consistent wind resources may benefit from small wind
                        turbines to supplement their power supply.
                      </p>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-center gap-2">
                          <ArrowRight className="w-4 h-4 text-primary" />
                          Ideal for rural properties with open land
                        </li>
                        <li className="flex items-center gap-2">
                          <ArrowRight className="w-4 h-4 text-primary" />
                          Wind assessment services available
                        </li>
                        <li className="flex items-center gap-2">
                          <ArrowRight className="w-4 h-4 text-primary" />
                          Interconnection and permitting guidance
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center mt-12">
                <p className="text-muted-foreground mb-4">
                  Ready to start generating your own power?
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                >
                  Request a Consultation
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CustomerGeneration;

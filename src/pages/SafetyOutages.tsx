import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AlertTriangle, Phone, Shield, Zap } from "lucide-react";

const safetyTips = [
  {
    icon: Zap,
    title: "Stay Away from Downed Lines",
    description:
      "Always assume downed power lines are energized. Stay at least 35 feet away and call us immediately.",
  },
  {
    icon: Shield,
    title: "Use GFCIs Near Water",
    description:
      "Ground Fault Circuit Interrupters protect against electrical shock in wet areas like kitchens and bathrooms.",
  },
  {
    icon: AlertTriangle,
    title: "Call 811 Before Digging",
    description:
      "Underground power lines can be dangerous. Always call before you dig to have lines marked.",
  },
];

const SafetyOutages = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-accent py-16">
          <div className="container mx-auto px-4 text-center text-accent-foreground">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Safety & Outages
            </h1>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Your safety is our priority. Report outages and learn how to stay safe around
              electricity.
            </p>
          </div>
        </section>

        {/* Report Outage */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <div className="section-card max-w-2xl mx-auto text-center">
              <Phone className="w-12 h-12 text-primary mx-auto mb-4" />
              <h2 className="font-display text-2xl font-semibold text-foreground mb-2">
                Report an Outage
              </h2>
              <p className="text-muted-foreground mb-6">
                Experiencing a power outage? Contact us immediately and we'll work to restore
                your service as quickly as possible.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13196831234"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  Call (319) 683-1234
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-colors"
                >
                  Iowa Utility Outage Map
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Safety Tips */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-3xl font-bold text-foreground text-center mb-12">
              Electrical Safety Tips
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {safetyTips.map((tip, index) => (
                <div
                  key={tip.title}
                  className="section-card animate-fade-in-up"
                  style={{ animationDelay: `${0.1 * (index + 1)}s` }}
                >
                  <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center mb-4">
                    <tip.icon className="w-6 h-6 text-destructive" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                    {tip.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{tip.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SafetyOutages;

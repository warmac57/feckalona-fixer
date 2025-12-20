import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FileText, CreditCard, Wrench, HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: FileText,
    title: "Billing & Payments",
    description:
      "Pay your bill online, set up automatic payments, or view your billing history.",
    features: ["Online bill pay", "Automatic payments", "Billing history", "Budget billing"],
  },
  {
    icon: CreditCard,
    title: "New Service",
    description:
      "Starting new service or transferring your account? We make it simple.",
    features: ["Start service", "Transfer service", "Disconnect service", "Temporary service"],
  },
  {
    icon: Wrench,
    title: "Maintenance & Repairs",
    description:
      "We maintain our infrastructure to ensure reliable power delivery.",
    features: ["Line maintenance", "Transformer service", "Meter service", "Tree trimming"],
  },
  {
    icon: HelpCircle,
    title: "Member Support",
    description:
      "Have questions? Our team is here to help with all your electric needs.",
    features: ["Account questions", "Rate information", "Energy audits", "General inquiries"],
  },
];

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-primary py-16">
          <div className="container mx-auto px-4 text-center text-primary-foreground">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Our Services
            </h1>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Everything you need as a member of Farmers Electric Cooperative.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div
                  key={service.title}
                  className="section-card animate-fade-in-up"
                  style={{ animationDelay: `${0.1 * (index + 1)}s` }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h2 className="font-display text-xl font-semibold text-foreground">
                      {service.title}
                    </h2>
                  </div>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <ul className="grid grid-cols-2 gap-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="text-sm text-muted-foreground flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-muted-foreground mb-4">
                Need assistance with any of our services?
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;

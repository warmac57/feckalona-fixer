import { Lightbulb, Sun, Zap, Shield, FileText, Users } from "lucide-react";
import { ServiceCard } from "./ServiceCard";

export function ServicesSection() {
  const services = [
    {
      icon: Lightbulb,
      title: "Ways to Save",
      description: "Discover practical tips and tools to reduce your energy consumption and lower your bills.",
      href: "/ways-to-save",
    },
    {
      icon: Sun,
      title: "Green Power Project",
      description: "Learn about our commitment to renewable energy and how you can participate.",
      href: "/green-power",
    },
    {
      icon: Zap,
      title: "Customer Generation",
      description: "Explore options for generating your own power and connecting to our grid.",
      href: "/customer-generation",
    },
    {
      icon: Shield,
      title: "Safety & Outages",
      description: "Stay informed about outages and learn important electrical safety tips.",
      href: "/safety-outages",
    },
    {
      icon: FileText,
      title: "Energy Rebates",
      description: "Take advantage of rebate programs for energy-efficient appliances and upgrades.",
      href: "/rebates",
    },
    {
      icon: Users,
      title: "About Our Co-op",
      description: "Discover our history, mission, and commitment to serving rural Iowa since 1916.",
      href: "/about",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            It's All About the Service
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            As a member-owned cooperative, we're committed to providing reliable power
            and exceptional service to our community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              {...service}
              delay={`${0.1 * (index + 1)}s`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

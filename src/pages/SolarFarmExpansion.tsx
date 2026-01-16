import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Sun, Calendar, MapPin, Users, Zap, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-solar-farm.jpg";

const SolarFarmExpansion = () => {
  const milestones = [
    {
      date: "Q1 2025",
      title: "Planning & Permitting",
      description: "Environmental assessments completed and permits secured.",
      completed: true,
    },
    {
      date: "Q2 2025",
      title: "Site Preparation",
      description: "Land clearing and infrastructure groundwork begins.",
      completed: true,
    },
    {
      date: "Q3 2025",
      title: "Panel Installation",
      description: "Installation of 5,000 additional solar panels.",
      completed: false,
    },
    {
      date: "Q4 2025",
      title: "Grid Connection",
      description: "Final testing and connection to the power grid.",
      completed: false,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative h-[400px] overflow-hidden">
          <img
            src={heroImage}
            alt="Solar farm at sunrise"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40" />
          <div className="relative container mx-auto px-4 h-full flex items-center">
            <div className="text-primary-foreground max-w-2xl">
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
                Solar Farm Expansion Project
              </h1>
              <p className="text-lg opacity-90">
                Doubling our clean energy capacity to power more homes and reduce our carbon footprint.
              </p>
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {[
                  {
                    icon: Zap,
                    label: "Additional Capacity",
                    value: "2.5 MW",
                  },
                  {
                    icon: Users,
                    label: "Homes Powered",
                    value: "500+",
                  },
                  {
                    icon: MapPin,
                    label: "Location",
                    value: "South of Kalona",
                  },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="section-card text-center"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3">
                      <stat.icon className="w-6 h-6 text-primary" />
                    </div>
                    <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>

              <div className="prose prose-lg max-w-none mb-12">
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                  About the Project
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Farmers Electric Cooperative is excited to announce the expansion of our community 
                  solar farm. This project will add 2.5 megawatts of clean, renewable energy capacity 
                  to our grid—enough to power over 500 additional homes in our service territory.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Located on 15 acres south of Kalona, the expansion will feature state-of-the-art 
                  bifacial solar panels that capture sunlight from both sides, maximizing energy 
                  production throughout the day. The project represents a $3.5 million investment 
                  in our community's sustainable energy future.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Member-owners will have the opportunity to subscribe to solar energy blocks, 
                  receiving credits on their electric bills for the clean energy produced. This 
                  allows members without suitable rooftops to participate in solar energy generation.
                </p>
              </div>

              {/* Timeline */}
              <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
                Project Timeline
              </h2>
              <div className="space-y-4 mb-12">
                {milestones.map((milestone, index) => (
                  <div
                    key={milestone.date}
                    className="section-card flex items-start gap-4 animate-fade-in-up"
                    style={{ animationDelay: `${0.1 * (index + 1)}s` }}
                  >
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                        milestone.completed
                          ? "bg-green-100 text-green-600"
                          : "bg-primary/10 text-primary"
                      }`}
                    >
                      <Calendar className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-semibold text-foreground">{milestone.title}</span>
                        <span className="text-sm text-muted-foreground">• {milestone.date}</span>
                        {milestone.completed && (
                          <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
                            Completed
                          </span>
                        )}
                      </div>
                      <p className="text-muted-foreground text-sm">{milestone.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="section-card bg-primary/5 text-center">
                <Sun className="w-12 h-12 text-primary mx-auto mb-4" />
                <h2 className="font-display text-2xl font-semibold text-foreground mb-3">
                  Interested in Subscribing?
                </h2>
                <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
                  Reserve your solar energy blocks today and start saving on your electric bill 
                  while supporting clean energy in our community.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                >
                  Contact Us to Learn More
                  <ArrowRight className="w-4 h-4" />
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

export default SolarFarmExpansion;

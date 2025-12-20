import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Users, Leaf, Award, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-primary py-16">
          <div className="container mx-auto px-4 text-center text-primary-foreground">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              About Farmers Electric
            </h1>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Serving rural eastern Iowa with reliable electric service since 1916.
            </p>
          </div>
        </section>

        {/* Mission */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-display text-3xl font-bold text-foreground mb-6 text-center">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground text-center leading-relaxed">
                Farmers Electric Cooperative is a member-owned utility dedicated to providing
                safe, reliable, and affordable electric service to our rural community while
                being good stewards of the environment and investing in our future through
                renewable energy initiatives.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-3xl font-bold text-foreground mb-12 text-center">
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Users,
                  title: "Member-Owned",
                  description: "Every customer is a member and owner of the cooperative.",
                },
                {
                  icon: Leaf,
                  title: "Sustainability",
                  description: "Committed to renewable energy and environmental stewardship.",
                },
                {
                  icon: Award,
                  title: "Reliability",
                  description: "Dependable power delivery with quick outage response.",
                },
                {
                  icon: Heart,
                  title: "Community",
                  description: "Deeply invested in the communities we serve.",
                },
              ].map((value, index) => (
                <div
                  key={value.title}
                  className="section-card text-center animate-fade-in-up"
                  style={{ animationDelay: `${0.1 * (index + 1)}s` }}
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Links */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-display text-2xl font-bold text-foreground mb-8">
              Learn More About Us
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/history"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                Our 100+ Year History
              </Link>
              <Link
                to="/frytown"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-colors"
              >
                About Frytown
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;

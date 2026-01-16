import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Sun, Wind, Leaf, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const GreenPower = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-primary py-16">
          <div className="container mx-auto px-4 text-center text-primary-foreground">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Green Power Project
            </h1>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Our commitment to renewable energy and a sustainable future for rural Iowa.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="prose prose-lg">
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Farmers Electric Cooperative is proud to be a leader in renewable energy
                  adoption among rural electric cooperatives. Our Green Power Project represents
                  our ongoing commitment to sustainability and environmental stewardship.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
                {[
                  {
                    icon: Sun,
                    title: "Solar Farm",
                    description:
                      "Our community solar installation provides clean energy to hundreds of member-owners.",
                  },
                  {
                    icon: Wind,
                    title: "Wind Power",
                    description:
                      "We purchase wind energy credits to offset traditional power generation.",
                  },
                  {
                    icon: Leaf,
                    title: "Carbon Reduction",
                    description:
                      "Our renewable portfolio helps reduce our collective carbon footprint.",
                  },
                  {
                    icon: TrendingUp,
                    title: "Growing Capacity",
                    description:
                      "We're continuously expanding our renewable energy generation capabilities.",
                  },
                ].map((item, index) => (
                  <div
                    key={item.title}
                    className="section-card animate-fade-in-up"
                    style={{ animationDelay: `${0.1 * (index + 1)}s` }}
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                ))}
              </div>

              <div className="section-card text-center">
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                  Follow Our Solar Farm Expansion
                </h2>
                <p className="text-muted-foreground mb-6">
                  Stay updated on the progress of our latest solar farm expansion project,
                  bringing even more clean energy to our community.
                </p>
                <Link
                  to="/solar-farm-expansion"
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                >
                  Learn More About the Expansion
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

export default GreenPower;

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const grants = [
  {
    title: "Home Weatherization Grant",
    amount: "Up to $5,000",
    description: "Comprehensive home weatherization including insulation, air sealing, and window upgrades.",
    eligibility: ["Income-qualified households", "Primary residence", "Home energy audit required"],
  },
  {
    title: "Agricultural Energy Grant",
    amount: "Up to $10,000",
    description: "Funding for farm energy efficiency projects including grain drying, irrigation, and lighting.",
    eligibility: ["Active farm operation", "FEC member for 1+ years", "Project must reduce energy by 25%+"],
  },
  {
    title: "Small Business Energy Grant",
    amount: "Up to $7,500",
    description: "Support for local businesses to upgrade HVAC, lighting, and equipment efficiency.",
    eligibility: ["Local business in service area", "Under 50 employees", "Energy audit required"],
  },
];

const Grants = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-primary py-16">
          <div className="container mx-auto px-4 text-center text-primary-foreground">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Energy Conservation Grants
            </h1>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Funding opportunities to help members make significant energy efficiency improvements.
            </p>
          </div>
        </section>

        {/* Grants */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-8">
              {grants.map((grant, index) => (
                <div
                  key={grant.title}
                  className="section-card animate-fade-in-up"
                  style={{ animationDelay: `${0.1 * (index + 1)}s` }}
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div>
                      <h2 className="font-display text-2xl font-semibold text-foreground">
                        {grant.title}
                      </h2>
                      <p className="text-muted-foreground mt-2">{grant.description}</p>
                    </div>
                    <span className="bg-primary text-primary-foreground px-4 py-2 rounded-lg font-bold text-lg whitespace-nowrap">
                      {grant.amount}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Eligibility:</h3>
                    <ul className="space-y-1">
                      {grant.eligibility.map((req) => (
                        <li key={req} className="flex items-center gap-2 text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-muted-foreground mb-4">
                Interested in applying for a grant?
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                Contact Us to Learn More
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Grants;

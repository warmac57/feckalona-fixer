import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const timelineEvents = [
  {
    year: "1916",
    title: "Farmers Electric Founded",
    description:
      "A group of rural farmers came together to bring electricity to their community, forming one of Iowa's first rural electric cooperatives.",
  },
  {
    year: "1930s",
    title: "Rural Electrification",
    description:
      "With support from the Rural Electrification Act, we expanded service to hundreds of farms and homes across eastern Iowa.",
  },
  {
    year: "1950s",
    title: "Growing the Grid",
    description:
      "Post-war growth led to significant infrastructure expansion, bringing reliable power to even the most remote areas.",
  },
  {
    year: "1970s",
    title: "Energy Crisis Response",
    description:
      "We launched our first energy conservation programs to help members reduce consumption during the energy crisis.",
  },
  {
    year: "2000s",
    title: "Digital Transformation",
    description:
      "Modernized our systems with smart meters and online services to better serve our members.",
  },
  {
    year: "2016",
    title: "100 Years of Service",
    description:
      "Celebrated a century of serving rural Iowa with a community celebration and publication of our history book.",
  },
  {
    year: "2020s",
    title: "Renewable Future",
    description:
      "Launched our Green Power Project with community solar and continue to expand renewable energy generation.",
  },
];

const History = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-primary py-16">
          <div className="container mx-auto px-4 text-center text-primary-foreground">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Our History
            </h1>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Over 100 years of powering rural Iowa communities.
            </p>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border" />

                <div className="space-y-12">
                  {timelineEvents.map((event, index) => (
                    <div
                      key={event.year}
                      className="relative pl-20 animate-fade-in-up"
                      style={{ animationDelay: `${0.1 * (index + 1)}s` }}
                    >
                      {/* Year circle */}
                      <div className="absolute left-0 w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                        <span className="text-primary-foreground font-bold text-sm">
                          {event.year}
                        </span>
                      </div>

                      <div className="section-card">
                        <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                          {event.title}
                        </h3>
                        <p className="text-muted-foreground">{event.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default History;

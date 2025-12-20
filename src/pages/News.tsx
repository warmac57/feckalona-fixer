import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Calendar } from "lucide-react";

const newsItems = [
  {
    date: "December 15, 2024",
    title: "Holiday Office Hours",
    excerpt:
      "Our office will be closed December 24-25 and January 1 for the holidays. Emergency services remain available 24/7.",
  },
  {
    date: "November 28, 2024",
    title: "Solar Farm Expansion Update",
    excerpt:
      "Construction is progressing on schedule for our new solar installation. Expect completion by spring 2025.",
  },
  {
    date: "November 15, 2024",
    title: "Winter Storm Preparation Tips",
    excerpt:
      "As winter approaches, here are some tips to keep your home warm and your power running during storms.",
  },
  {
    date: "October 20, 2024",
    title: "New EV Charger Rebate Program",
    excerpt:
      "We're excited to announce a new rebate program for Level 2 electric vehicle charger installations.",
  },
  {
    date: "September 30, 2024",
    title: "Annual Meeting Recap",
    excerpt:
      "Thank you to all members who attended our annual meeting. Here's a summary of the key updates.",
  },
];

const News = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-primary py-16">
          <div className="container mx-auto px-4 text-center text-primary-foreground">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              News & Updates
            </h1>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Stay informed about the latest from Farmers Electric Cooperative.
            </p>
          </div>
        </section>

        {/* News List */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto space-y-6">
              {newsItems.map((item, index) => (
                <article
                  key={item.title}
                  className="section-card animate-fade-in-up"
                  style={{ animationDelay: `${0.1 * (index + 1)}s` }}
                >
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Calendar className="w-4 h-4" />
                    {item.date}
                  </div>
                  <h2 className="font-display text-xl font-semibold text-foreground mb-2">
                    {item.title}
                  </h2>
                  <p className="text-muted-foreground">{item.excerpt}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default News;

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    date: "December 18, 2024",
    title: "Portable Electric Heater Safety Tips",
    excerpt:
      "As winter sets in, many of us rely on portable electric heaters for extra warmth. Learn essential safety tips to keep your home cozy and hazard-free this season.",
    slug: "heater-safety",
  },
  {
    date: "December 10, 2024",
    title: "Winter Energy Saving Tips for Iowa Homes",
    excerpt:
      "As temperatures drop, here are practical ways to keep your home warm while managing energy costs this winter season.",
    slug: "winter-energy-tips",
  },
  {
    date: "November 25, 2024",
    title: "Meet Our Lineworkers: The Unsung Heroes",
    excerpt:
      "Get to know the dedicated team that works around the clock to keep your power on, rain or shine.",
    slug: "meet-our-lineworkers",
  },
  {
    date: "November 5, 2024",
    title: "The Future of Rural Energy: Solar and Beyond",
    excerpt:
      "Exploring how renewable energy is transforming power generation in rural communities like ours.",
    slug: "future-rural-energy",
  },
  {
    date: "October 15, 2024",
    title: "Preparing Your Home for Fall",
    excerpt:
      "A checklist of electrical and energy efficiency tasks to complete before winter arrives.",
    slug: "fall-preparation",
  },
  {
    date: "September 28, 2024",
    title: "Understanding Your Electric Bill",
    excerpt:
      "A breakdown of what each line item means and tips for managing your monthly energy costs.",
    slug: "understanding-bill",
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-primary py-16">
          <div className="container mx-auto px-4 text-center text-primary-foreground">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              FEC Blog
            </h1>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Stories, tips, and updates from your electric cooperative.
            </p>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid gap-8">
                {blogPosts.map((post, index) => (
                  <article
                    key={post.slug}
                    className="section-card group animate-fade-in-up"
                    style={{ animationDelay: `${0.1 * (index + 1)}s` }}
                  >
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </div>
                    <h2 className="font-display text-2xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                    <button className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all">
                      Read More <ArrowRight className="w-4 h-4" />
                    </button>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;

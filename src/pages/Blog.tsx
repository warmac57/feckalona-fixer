import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Calendar, ArrowRight, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import overloadedPowerstrip from "@/assets/overloaded-powerstrip.jpg";

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
  const [heaterSafetyOpen, setHeaterSafetyOpen] = useState(false);

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
                    <button 
                      onClick={() => {
                        if (post.slug === "heater-safety") {
                          setHeaterSafetyOpen(true);
                        }
                      }}
                      className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
                    >
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

      {/* Heater Safety Warning Dialog */}
      <Dialog open={heaterSafetyOpen} onOpenChange={setHeaterSafetyOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-destructive text-xl">
              <AlertTriangle className="w-6 h-6" />
              Portable Electric Heater Safety Warning
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-4">
              <p className="text-foreground leading-relaxed">
                <strong>You should never plug a portable electric heater into an extension cord, power strip, or adapter</strong> because they aren't built to handle the high electrical current, leading to overheating and a serious fire risk.
              </p>
            </div>
            
            <div className="rounded-lg overflow-hidden border">
              <img 
                src={overloadedPowerstrip} 
                alt="Example of a dangerous overloaded power strip with heater - fire hazard" 
                className="w-full h-auto"
              />
              <p className="text-xs text-muted-foreground p-2 bg-muted text-center">
                Example of a dangerous setup - never do this!
              </p>
            </div>

            <div className="bg-primary/10 border border-primary/30 rounded-lg p-4">
              <h4 className="font-semibold text-primary mb-2">Safety Tips:</h4>
              <ul className="list-disc list-inside space-y-1 text-foreground">
                <li>Always plug space heaters directly into a wall outlet</li>
                <li>Keep them at least three feet from flammable items</li>
                <li>Turn them off when unattended or when leaving the room</li>
              </ul>
              <p className="mt-3 text-sm text-muted-foreground italic">
                Portable heaters are a leading cause of home fires. Stay safe this winter!
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Blog;

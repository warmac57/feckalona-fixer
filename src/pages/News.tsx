import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Calendar, ArrowRight, AlertTriangle, Thermometer, Facebook, Car } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import overloadedPowerstrip from "@/assets/overloaded-powerstrip.jpg";
import winterTipsInfographic from "@/assets/winter-tips-infographic.jpg";
import winterDrivingImage from "@/assets/winter-driving.jpg";

const blogPosts = [
  {
    date: "January 15, 2026",
    title: "Winter Driving Safety: Stay Safe on Iowa's Roads",
    excerpt:
      "With icy roads and winter storms, safe driving is essential. Learn key tips for navigating winter weather and what to do if you encounter a downed power line.",
    slug: "winter-driving",
  },
  {
    date: "January 14, 2026",
    title: "Follow Us on Facebook!",
    excerpt:
      "Stay connected with Farmers Electric Cooperative! Follow us on Facebook for the latest updates, energy tips, community news, and more.",
    slug: "follow-facebook",
    link: "https://www.facebook.com/FarmersElectricCoop.Kalona",
  },
  {
    date: "December 21, 2025",
    title: "Welcome to Our New Website!",
    excerpt:
      "We're excited to launch our brand new website, designed to better serve our members with easier access to account information, outage updates, energy-saving tips, and more. Explore the new features and let us know what you think!",
    slug: "new-website",
  },
  {
    date: "December 18, 2025",
    title: "Portable Electric Heater Safety Tips",
    excerpt:
      "As winter sets in, many of us rely on portable electric heaters for extra warmth. Learn essential safety tips to keep your home cozy and hazard-free this season.",
    slug: "heater-safety",
  },
  {
    date: "December 15, 2025",
    title: "Holiday Office Hours",
    excerpt:
      "Our office will be closed December 24-25 and January 1 for the holidays. Emergency services remain available 24/7.",
    slug: "holiday-hours",
  },
  {
    date: "December 10, 2024",
    title: "Winter Energy Saving Tips for Iowa Homes",
    excerpt:
      "As temperatures drop, here are practical ways to keep your home warm while managing energy costs this winter season.",
    slug: "winter-energy-tips",
  },
  {
    date: "November 28, 2024",
    title: "Solar Farm Expansion Update",
    excerpt:
      "Construction is progressing on schedule for our new solar installation. Expect completion by spring 2025.",
    slug: "solar-farm-update",
  },
  {
    date: "November 25, 2024",
    title: "Meet Our Lineworkers: The Unsung Heroes",
    excerpt:
      "Get to know the dedicated team that works around the clock to keep your power on, rain or shine.",
    slug: "meet-our-lineworkers",
  },
  {
    date: "November 15, 2024",
    title: "Winter Storm Preparation Tips",
    excerpt:
      "As winter approaches, here are some tips to keep your home warm and your power running during storms.",
    slug: "winter-storm-prep",
  },
  {
    date: "November 5, 2024",
    title: "The Future of Rural Energy: Solar and Beyond",
    excerpt:
      "Exploring how renewable energy is transforming power generation in rural communities like ours.",
    slug: "future-rural-energy",
  },
  {
    date: "October 20, 2024",
    title: "New EV Charger Rebate Program",
    excerpt:
      "We're excited to announce a new rebate program for Level 2 electric vehicle charger installations.",
    slug: "ev-charger-rebate",
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

const News = () => {
  const [heaterSafetyOpen, setHeaterSafetyOpen] = useState(false);
  const [winterTipsOpen, setWinterTipsOpen] = useState(false);
  const [winterDrivingOpen, setWinterDrivingOpen] = useState(false);

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

        {/* Blog Section */}
        <section className="py-16 bg-muted/30">
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
                    <h3 className="font-display text-2xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground">{post.excerpt}</p>
                    {post.slug === "winter-driving" && (
                      <button 
                        onClick={() => setWinterDrivingOpen(true)}
                        className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all mt-4"
                      >
                        Read More <ArrowRight className="w-4 h-4" />
                      </button>
                    )}
                    {post.slug === "heater-safety" && (
                      <button 
                        onClick={() => setHeaterSafetyOpen(true)}
                        className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all mt-4"
                      >
                        Read More <ArrowRight className="w-4 h-4" />
                      </button>
                    )}
                    {post.slug === "winter-energy-tips" && (
                      <button 
                        onClick={() => setWinterTipsOpen(true)}
                        className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all mt-4"
                      >
                        Read More <ArrowRight className="w-4 h-4" />
                      </button>
                    )}
                    {post.slug === "follow-facebook" && post.link && (
                      <a 
                        href={post.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all mt-4"
                      >
                        <Facebook className="w-4 h-4" />
                        Visit Our Facebook Page <ArrowRight className="w-4 h-4" />
                      </a>
                    )}
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

      {/* Winter Energy Tips Dialog */}
      <Dialog open={winterTipsOpen} onOpenChange={setWinterTipsOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh]">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-primary text-xl">
              <Thermometer className="w-6 h-6" />
              10 Simple Tips to Keep Your Home Warm
            </DialogTitle>
          </DialogHeader>
          <ScrollArea className="max-h-[70vh]">
            <div className="pr-4">
              <img 
                src={winterTipsInfographic} 
                alt="10 Simple Tips to Keep Your Home Warm - Infographic with energy saving tips for winter" 
                className="w-full h-auto rounded-lg"
              />
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>

      {/* Winter Driving Safety Dialog */}
      <Dialog open={winterDrivingOpen} onOpenChange={setWinterDrivingOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh]">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-primary text-xl">
              <Car className="w-6 h-6" />
              Winter Driving Safety Tips
            </DialogTitle>
          </DialogHeader>
          <ScrollArea className="max-h-[70vh]">
            <div className="pr-4 space-y-4">
              <div className="rounded-lg overflow-hidden border">
                <img 
                  src={winterDrivingImage} 
                  alt="Safe winter driving on an Iowa road" 
                  className="w-full h-auto"
                />
              </div>
              
              <div className="bg-primary/10 border border-primary/30 rounded-lg p-4">
                <h4 className="font-semibold text-primary mb-2">Before You Drive:</h4>
                <ul className="list-disc list-inside space-y-1 text-foreground text-sm">
                  <li>Clear all snow and ice from windows, mirrors, lights, and roof</li>
                  <li>Check that your headlights and taillights are working</li>
                  <li>Keep your gas tank at least half full</li>
                  <li>Pack an emergency kit: blankets, flashlight, phone charger, snacks</li>
                </ul>
              </div>

              <div className="bg-secondary/50 border border-secondary rounded-lg p-4">
                <h4 className="font-semibold text-foreground mb-2">On the Road:</h4>
                <ul className="list-disc list-inside space-y-1 text-foreground text-sm">
                  <li>Reduce speed and increase following distance on icy roads</li>
                  <li>Brake gently to avoid skidding</li>
                  <li>Avoid using cruise control on slippery surfaces</li>
                  <li>Stay in your lane and avoid sudden movements</li>
                  <li>Use headlights even during the day for visibility</li>
                </ul>
              </div>

              <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-4">
                <h4 className="font-semibold text-destructive mb-2 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4" />
                  If You See a Downed Power Line:
                </h4>
                <ul className="list-disc list-inside space-y-1 text-foreground text-sm">
                  <li><strong>Stay in your vehicle</strong> — it's the safest place</li>
                  <li>Call 911 and Farmers Electric Cooperative immediately</li>
                  <li>Assume all downed lines are energized and dangerous</li>
                  <li>If you must exit (fire), jump clear without touching the car and ground at the same time, then shuffle away with small steps</li>
                  <li>Keep others at least 35 feet away from the line</li>
                </ul>
              </div>

              <p className="text-sm text-muted-foreground italic text-center">
                Stay safe this winter! Report outages or downed lines to us 24/7.
              </p>
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default News;

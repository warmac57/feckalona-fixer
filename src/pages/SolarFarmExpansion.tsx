import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MapPin, Zap } from "lucide-react";
import heroImage from "@/assets/hwy1-solar.jpg";

const SolarFarmExpansion = () => {
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
                Expanding our clean energy capacity with pollinator-friendly solar.
              </p>
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-2xl mx-auto">
                {[
                  {
                    icon: Zap,
                    label: "Additional Capacity",
                    value: "1 MW",
                  },
                  {
                    icon: MapPin,
                    label: "Location",
                    value: "North of Kalona, HWY 1",
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
                <p className="text-muted-foreground leading-relaxed">
                  Farmers Electric Cooperative in Kalona, Iowa, has been expanding its solar presence, 
                  with recent news focusing on a new ~1 MW solar array near Highway 1 in late 2023/early 
                  2024 that uses pollinator habitat, adding to their existing solar farms, including the 
                  one supporting Farmers Hen House, showcasing their leadership in local renewable energy 
                  generation for their members.
                </p>
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

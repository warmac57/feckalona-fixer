import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-solar-farm.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-hero-overlay/85 to-hero-overlay/70" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
        <h1 
          className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up"
          style={{ animationDelay: "0.1s" }}
        >
          A Small Town Cooperative
        </h1>
        <p 
          className="max-w-2xl mx-auto text-lg md:text-xl opacity-90 mb-8 animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          Farmers Electric Cooperative, formed in 1916, provides reliable electric service
          to a rural region in eastern Iowa. Based out of Frytown, we're committed to
          supplementing our power with renewable sources.
        </p>
        <div 
          className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up"
          style={{ animationDelay: "0.3s" }}
        >
          <Link to="/green-power" className="hero-button hero-button-primary">
            Our Renewable Energy Story
          </Link>
          <Link to="/history" className="hero-button hero-button-outline">
            100 Years of History
          </Link>
        </div>
      </div>

      {/* Decorative bottom curve */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-16 md:h-20"
        >
          <path
            d="M0 80L60 74.7C120 69 240 59 360 53.3C480 48 600 48 720 50.7C840 53 960 59 1080 58.7C1200 59 1320 53 1380 50.7L1440 48V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
}

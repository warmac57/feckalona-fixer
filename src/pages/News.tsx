import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

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

        {/* Coming Soon Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-muted-foreground text-lg">
                Check back soon for the latest news and updates from Farmers Electric Cooperative.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default News;

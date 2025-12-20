import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Frytown = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-primary py-16">
          <div className="container mx-auto px-4 text-center text-primary-foreground">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Frytown
            </h1>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              A hidden gem in the heart of Iowa
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <article className="max-w-3xl mx-auto prose prose-lg">
              <div className="section-card mb-8">
                <h2 className="font-display text-2xl font-semibold text-foreground mb-2">
                  Thoughts of a Woodchopper
                </h2>
                <p className="text-sm text-muted-foreground italic">By Chuck Hotle</p>
              </div>

              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  This is the time of year that people travel to see all kinds of places to see
                  all kinds of things. Sometimes you don't have to travel far to see things
                  beautiful and unique. The other day I visited such a place within 20 miles of
                  home.
                </p>

                <p>
                  I have gone through this little town many times but never stopped to look
                  around. When I did finally leave the road and take a better look I found a tiny
                  little town of 30 houses among trees and flowers that equals many little New
                  England villages that we call beautiful and extremely interesting.
                </p>

                <p>
                  The place is called <strong className="text-foreground">Frytown</strong>, six
                  miles beyond a larger and more famous place called Kalona, itself one of the
                  best known little burgs in Iowa.
                </p>

                <p>
                  Frytown has a church back at the end of a grassy lane with a cemetery right
                  behind it on a gentle hillside. The sign tells the visitor that it is a Church
                  of Christ place of worship and that it dates back to 1863, still quite active.
                </p>

                <p>
                  There was no one around when I walked that in a slight drizzle the other day,
                  which I liked because there was time to read the stones in the cemetery and soak
                  in a little history. On one of the stones I read the name William Fry born in
                  1813 died 1905. His wife Harriett was buried beside him. I would guess that the
                  town was named after him though there are many people of that name buried there.
                </p>

                <p>
                  I had always thought it to be a Mennonite community but the names of the early
                  settlers buried there more or less denies that. There are Oldakers, Boones,
                  Huffs, Dunlaps, Wagners, Pattersond, Boyers, McGumphreys and Lafaeyette De
                  France born in 1825. None of these seem like Mennonite names to me. The oldest
                  name according to birth date was of a Mr. Zager born in 1808.
                </p>

                <p>
                  After enjoying my church and cemetery browsing I went back to main road and
                  stopped at the antique store there. It has atmosphere. Lady there told me it had
                  been a general store for many years with rooms on the side for the storekeepers
                  family to live.
                </p>

                <p>
                  I learned more about Frytown, once called Williamstown, on the old angling stage
                  coach road that went from Iowa City to Oskaloosa. Other stops on the road were
                  at Sharon Center, Joetown, Wassonville, Garibaldi, Lancaster and Sigourney.
                </p>

                <p>
                  The first post office, established in 1853, was called Frank Pierce Post Office
                  after the man who was president then. The usual blacksmiths, carpenters,
                  weavers, doctors, and storekeepers are a part of history of Frytown. It is all
                  in a book available at the antique store.
                </p>

                <p>
                  The next time you travel up Highway No. 1 and notice the big grain elevator
                  about a mile west and 10 miles south of Iowa City, if you have a few minutes,
                  turn off and visit Frytown. You will be pleasantly surprised. There are about 30
                  nice houses making up the little town which is center of one of this state's
                  most active agricultural areas.
                </p>
              </div>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Frytown;

import { Link } from "react-router-dom";

export function CallBeforeDigSection() {
  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-20 h-20 bg-secondary rounded-xl flex items-center justify-center shadow-md">
                <span className="text-3xl font-bold text-secondary-foreground">811</span>
              </div>
              <div>
                <p className="font-medium text-foreground">Know what's below.</p>
                <p className="font-bold text-primary text-lg">Call before you dig.</p>
              </div>
            </div>
          </div>
          
          <div className="flex-1 lg:flex-[2]">
            <p className="text-muted-foreground leading-relaxed mb-4">
              Pick up the phone before you pick up a shovel. In many areas, homes are served
              by underground electric lines. If you're digging near an underground cable and
              cut into a line, not only will you probably interrupt service to your home, but
              you could also receive a serious shock!
            </p>
            <p className="text-muted-foreground leading-relaxed">
              One call can start the process to ensure your project will be safely completed.
              Contact Iowa One Call toll-free, dial{" "}
              <a href="tel:811" className="text-primary font-semibold hover:underline">
                811
              </a>{" "}
              for information to help you dig safely.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

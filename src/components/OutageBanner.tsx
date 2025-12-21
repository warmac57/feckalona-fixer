import { Link } from "react-router-dom";
import { AlertTriangle, Phone } from "lucide-react";

export function OutageBanner() {
  return (
    <div className="bg-accent text-accent-foreground py-3">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-5 h-5" />
            <span className="font-medium">Report an outage or check status</span>
          </div>
          <div className="flex items-center gap-4">
            <Link
              to="/safety-outages"
              className="underline underline-offset-2 hover:no-underline font-medium"
            >
              Iowa REC Outage Map
            </Link>
            <a
              href="tel:+13196832510"
              className="flex items-center gap-1 underline underline-offset-2 hover:no-underline"
            >
              <Phone className="w-4 h-4" />
              (319) 683-2510
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

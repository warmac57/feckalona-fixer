import { Link } from "react-router-dom";
import { Zap, Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-footer text-footer-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold">
                  Farmers Electric
                </h3>
                <p className="text-xs opacity-70">Cooperative</p>
              </div>
            </Link>
            <p className="text-sm opacity-80 leading-relaxed">
              Serving rural eastern Iowa since 1916 with reliable electric service
              and commitment to renewable energy.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/saving-energy" className="footer-link text-sm">
                  Saving Energy
                </Link>
              </li>
              <li>
                <Link to="/rebates" className="footer-link text-sm">
                  Energy Rebates
                </Link>
              </li>
              <li>
                <Link to="/safety-outages" className="footer-link text-sm">
                  Report an Outage
                </Link>
              </li>
              <li>
                <Link to="/services" className="footer-link text-sm">
                  Our Services
                </Link>
              </li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">About Us</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="footer-link text-sm">
                  About FEC
                </Link>
              </li>
              <li>
                <Link to="/history" className="footer-link text-sm">
                  Our History
                </Link>
              </li>
              <li>
                <Link to="/frytown" className="footer-link text-sm">
                  Frytown
                </Link>
              </li>
              <li>
                <Link to="/blog" className="footer-link text-sm">
                  FEC Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 opacity-70 shrink-0" />
                <span className="text-sm opacity-80">
                  104 Main St, Frytown, IA 52324
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 opacity-70" />
                <a href="tel:+13196831234" className="footer-link text-sm">
                  (319) 683-1234
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 opacity-70" />
                <a href="mailto:info@feckalona.net" className="footer-link text-sm">
                  info@feckalona.net
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-footer-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm opacity-70">
            © {new Date().getFullYear()} Farmers Electric Cooperative. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { ChevronDown, Menu, X, Zap } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Saving Energy",
    href: "/saving-energy",
    children: [
      { label: "Ways to Save", href: "/ways-to-save" },
      { label: "Energy Efficiency Rebates", href: "/rebates" },
      { label: "Energy Conservation Grants", href: "/grants" },
      { label: "Green Power Project", href: "/green-power" },
    ],
  },
  { label: "Customer Generation", href: "/customer-generation" },
  { label: "Safety & Outages", href: "/safety-outages" },
  { label: "Services", href: "/services" },
  { label: "News", href: "/news" },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Contact", href: "/contact" },
      { label: "History", href: "/history" },
      { label: "Frytown", href: "/frytown" },
    ],
  },
];

export function Header() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 bg-nav-bg/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Zap className="w-6 h-6 text-primary-foreground" />
            </div>
            <div className="hidden sm:block">
              <h1 className="font-display text-lg font-semibold text-foreground leading-tight">
                Farmers Electric
              </h1>
              <p className="text-xs text-muted-foreground">Cooperative</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div key={item.label} className="relative dropdown-trigger">
                <Link
                  to={item.href}
                  className={`nav-link flex items-center gap-1 ${
                    isActive(item.href) ? "active" : ""
                  }`}
                >
                  {item.label}
                  {item.children && <ChevronDown className="w-3 h-3" />}
                </Link>
                {item.children && (
                  <div className="dropdown-menu">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        to={child.href}
                        className="dropdown-item"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-nav-bg border-t border-border animate-slide-down">
          <nav className="container mx-auto px-4 py-4">
            {navItems.map((item) => (
              <div key={item.label} className="border-b border-border last:border-0">
                <Link
                  to={item.href}
                  className={`block py-3 font-medium ${
                    isActive(item.href) ? "text-primary" : "text-foreground"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="pl-4 pb-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        to={child.href}
                        className="block py-2 text-sm text-muted-foreground hover:text-primary"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

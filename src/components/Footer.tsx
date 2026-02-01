import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 bg-charcoal border-t border-charcoal-light">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Logo */}
          <a href="#home" className="font-display text-xl font-bold text-primary-foreground">
            Faiza<span className="text-primary">.</span>
          </a>

          {/* Copyright */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>© {new Date().getFullYear()} Faiza Web Solutions. Made with</span>
            <Heart className="w-4 h-4 text-primary fill-primary" />
          </div>

          {/* Navigation */}
          <nav className="flex gap-6">
            {["Home", "About", "Services", "Portfolio", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

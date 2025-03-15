import { ArrowDown } from "lucide-react";

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  quote?: string;
  quoteAuthor?: string;
  backgroundImage?: string;
}

const HeroSection = ({
  title,
  subtitle,
  quote,
  quoteAuthor,
  backgroundImage = "/images/image-3.png",
}: HeroSectionProps) => {
  return (
    <div
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(10, 25, 47, 0.9) 0%, rgba(10, 25, 47, 0.7) 100%), url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-ocean-deep/50 to-ocean-deep/80"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white">
            {title}
          </h1>

          {subtitle && (
            <p className="text-xl md:text-2xl text-sea-100 mb-8">{subtitle}</p>
          )}

          {quote && (
            <div className="mt-12 bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 shadow-lg">
              <p className="text-xl md:text-2xl italic text-white">"{quote}"</p>
              {quoteAuthor && (
                <p className="mt-4 text-sea-200 text-lg">— {quoteAuthor}</p>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a
          href="#content"
          className="flex flex-col items-center text-white hover:text-sea-400 transition-colors"
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <ArrowDown className="h-6 w-6" />
        </a>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-ocean-deep to-transparent"></div>
    </div>
  );
};

export default HeroSection;

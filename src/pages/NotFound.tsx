import { HiHome } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

/**
 * 404 Not Found page component
 * Features modern design matching the portfolio theme with navigation options
 */
export const NotFound = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-fade-in">
          {/* 404 Animation */}
            <div className="text-9xl md:text-[12rem] font-bold text-primary/40 mb-4">
              404
            </div>

          {/* Error Message */}
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-foreground mb-6">
            Oops! <span className="text-primary">Page Not Found</span>
          </h1>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button
              onClick={goHome}
              className="flex items-center justify-center font-semibold px-8 py-3 bg-primary text-primary-foreground hover:bg-primary/90 rounded-md hero-glow hover-lift transition-smooth"
            >
              <HiHome className="mr-2 h-5 w-5" />
              Return Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

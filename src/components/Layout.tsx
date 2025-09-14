import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

/**
 * Main layout component wrapping all pages
 * Provides consistent navigation and footer across the application
 */
interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
};

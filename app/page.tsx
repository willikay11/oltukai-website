import HeroSection from "@/app/ui/heroSection";
import Interests from "@/app/ui/interests";
import Features from "@/app/ui/features";
import Footer from "@/app/ui/footer";

export default function Home() {
  return (
    <main className="min-h-full">
      <HeroSection />
      <Interests />
      <Features />
      <Footer />
    </main>
  );
}

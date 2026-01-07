import { Hero } from "./components/Hero";
import { FeaturedProjects } from "./components/FeaturedProjects";
import { Footer } from "./components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | AI Product Designer",
  description: "Portfolio of Leonardo De Murtas, a Product Designer focused on AI-ready Design Systems and decision support tools for enterprise risk and credit.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <Footer />
    </>
  );
}

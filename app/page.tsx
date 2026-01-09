import { Hero } from "./components/Hero";
import { UseCases } from "./components/UseCases";
import { ProofChips } from "./components/ProofChips";
import { Footer } from "./components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Product Designer",
  description: "Portfolio of Leonardo De Murtas, a Product Designer focused on AI-ready Design Systems and decision support tools for enterprise risk and credit.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <ProofChips />
      <UseCases />
      <Footer />
    </>
  );
}

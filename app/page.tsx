import { Hero } from "./components/Hero";
import { SectionAbout } from "./components/SectionAbout";
import { FeaturedProjects } from "./components/FeaturedProjects";
import { SectionArchive } from "./components/SectionArchive";
import { SectionTraining } from "./components/SectionTraining";

export default function Home() {
  return (
    <>
      <Hero />
      <SectionAbout />
      <FeaturedProjects />
      <SectionArchive />
      <SectionTraining />
    </>
  );
}

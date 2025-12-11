import { Hero } from "./components/Hero";
import { Clients } from "./components/Clients";
import { RecentWorks } from "./components/RecentWorks";

export default function Home() {
  return (
    <>
      <Hero />
      <Clients />
      <RecentWorks />
    </>
  );
}

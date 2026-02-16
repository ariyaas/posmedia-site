import ProjectGrid from "../components/projects/ProjectGrid";
import CoreServices from "../components/sections/CoreServices";
import Hero from "../components/sections/Hero";
import Partners from "../components/sections/Partners";
import Testimonials from "../components/sections/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <CoreServices />
      <Partners />
      <ProjectGrid title="Our Core Services" />
      <Testimonials />
    </>
  );
}
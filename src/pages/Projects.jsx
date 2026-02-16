import ProjectGrid from "../components/projects/ProjectGrid";
import PageBanner from "../components/layout/PageBanner";

function Projects() {
  return (
    <>
      <PageBanner title="Our Projects" subtitle="All Services" />

      <ProjectGrid showTitle={false} />
    </>
  );
}

export default Projects;
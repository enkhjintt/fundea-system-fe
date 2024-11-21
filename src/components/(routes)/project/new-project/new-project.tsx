"use client";

import Button from "@/components/button";
import CustomCard from "@/components/custom-card";
import PageTitle from "@/components/page-title";
import { usePublicProject } from "@/hooks/use-public-projects";

type IProps = {};

const NewProjects: React.FC<IProps> = () => {
  const { data, isLoading } = usePublicProject();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data || data.items.length === 0) {
    return <div>No projects found.</div>;
  }

  // Destructure the projects from API response
  const projects = data.items;

  return (
    <>
      <PageTitle
        title={"Шинэ төслүүд"}
        button={
          <Button
            variant="gradient"
            placeholder="Бүгдийг үзэх"
            className="w-full"
          />
        }
      />
      <div className="grid grid-cols-3 grid-flow-row space-between">
        {projects.map((project, index) => (
          <div key={project.id} className={index === 0 ? "row-span-2" : ""}>
            <CustomCard
              author={`Төсөл санаачлагч: ${project.Hereglegch.ner}`}
              sizeVariant="medium"
              title={project.garchig}
              description={project.ded_garchig}
              imageSrc={project.zurag}
              subtitle={`# ${project.TusulAngilal?.ner}`}
              progress={project.sanhuujiltiin_dun}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default NewProjects;

"use client";

import ProjectCategory from "@/components/(routes)/project/project-category";
import Button from "@/components/button";
import CustomCard from "@/components/custom-card";
import ProjectTypeItem from "@/components/items/project-type-item";
import PageTitle from "@/components/page-title";
import { usePublicProject } from "@/hooks/use-public-projects";
import { useRouter } from "next/navigation";


type IProps = {};

const NewProjects: React.FC<IProps> = () => {
  const { data, isLoading } = usePublicProject();
  const router = useRouter();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data || data.items.length === 0) {
    return <div>No projects found.</div>;
  }

  const projects = data.items;

  const handleCardClick = (id: number) => {
    router.push(`/project/view-project/${id}`);
  };

  return (
    <>
      <ProjectTypeItem />
      <ProjectCategory />
      <PageTitle
        title={"styleVariant"}
        button={
          <Button
            variant="gradient"
            placeholder="Бүгдийг үзэх"
            className="w-full"
          />
        }
      />
      <div className="grid grid-cols-3 grid-flow-row gap-y-8 space-between xl:grid-cols-4">
        {projects.map((project) => (
          <div key={project.id} onClick={() => handleCardClick(project.id)}>
            <CustomCard
              author={`Төсөл санаачлагч: ${project.Hereglegch.ner}`}
              sizeVariant="medium"
              title={project.garchig}
              description={project.ded_garchig}
              imageSrc={project.zurag}
              subtitle={`# ${project.TusulAngilal?.ner}`}
              progress={project.sanhuujiltiin_dun}
              className="cursor-pointer" 
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default NewProjects;

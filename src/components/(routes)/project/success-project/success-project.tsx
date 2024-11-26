"use client";

import Button from "@/components/button";
import CustomCard from "@/components/custom-card";
import PageTitle from "@/components/page-title";
import { usePublicProject } from "@/hooks/use-public-projects";
import { useRouter } from "next/navigation";

type IProps = {};

const SuccessProjects: React.FC<IProps> = () => {
  const { data, isLoading } = usePublicProject();
  const router = useRouter();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data || data.items.length === 0) {
    return <div>Одоогоор төсөл байхгүй байна</div>;
  }

  const projects = data.items;

  const handleCardClick = (id: number) => {
    router.push(`/project/view-project/${id}`);
  };

  return (
    <>
      <PageTitle
        title={"Амжилттай төслүүд"}
        button={
          <Button
            variant="gradient"
            placeholder="Бүгдийг үзэх"
            className="w-full"
          />
        }
      />
      <div className="grid md:grid-cols-3 grid-flow-row gap-y-8 space-between 2xl:grid-cols-5">
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

export default SuccessProjects;

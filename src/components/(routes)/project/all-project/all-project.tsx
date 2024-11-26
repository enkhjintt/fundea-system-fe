"use client";

import CustomCard from "@/components/custom-card";
import PageTitle from "@/components/page-title";
import Wrapper from "@/components/wrapper";
import SideMenu from "../side-menu-types";
import ProjectTypeItem from "@/components/items/project-type-item";
import { usePublicProject } from "@/hooks/use-public-projects";
import { useRouter } from "next/navigation";

type IProps = {};

const AllProjects: React.FC<IProps> = ({}) => {
  const { data, isLoading } = usePublicProject();
  const router = useRouter();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data || data.items.length === 0) {
    return <div>Одоогоор төсөл байхгүй байна.</div>;
  }

  const projects = data.items;

  const handleCardClick = (id: number) => {
    router.push(`/project/view-project/${id}`);
  };
  return (
    <>
      <div className="flex justify-between items-baseline">
        <PageTitle title={"Бүх төсөл"} />
        <ProjectTypeItem />
      </div>
      <div className="flex gap-10">
        <Wrapper className="w-1/4 px-4">
          <SideMenu />
        </Wrapper>

        <div className="w-3/4">
          <div className="grid md:grid-cols-3 grid-flow-row gap-y-8 space-between xl:grid-cols-4">
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
                  className="cursor-pointer" // Хулганаар дээр дарах боломжтойг илтгэх
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AllProjects;

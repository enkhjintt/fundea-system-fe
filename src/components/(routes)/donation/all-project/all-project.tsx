"use client";

import CustomCard from "@/components/custom-card";
import PageTitle from "@/components/page-title";
import Wrapper from "@/components/wrapper";
import SideMenu from "../side-menu-types";
import ProjectTypeItem from "@/components/items/project-type-item";

type IProps = {};

const AllProjects: React.FC<IProps> = ({}) => {
  const projects = [
    {
      title: "ЦЭВЭР АГААРТАЙ ӨВӨЛ",
      description: "airee 2024",
      imageSrc:
        "https://www.celoxis.com/cassets/img/pmc/project-management.png", // Placeholder image URL
      progress: 50,
      size: "small",
    },
    {
      title: "Үндэсний бахархлаараа Гиннесийн амжилтыг хамтдаа шинэчилцгээе",
      description: "Мину Монголын далбаа үүрд мандан бадраг!",
      imageSrc:
        "https://www.celoxis.com/cassets/img/pmc/project-management.png",
      progress: 70,
    },
    {
      title: "Дэлхийн инженерийн соёлыг Монголдоо нутагшуулъя",
      description: "Nasha Tech",
      imageSrc:
        "https://www.celoxis.com/cassets/img/pmc/project-management.png",
      progress: 30,
    },
    {
      title: "ГЭРЭЛД СЭТГЭЛ",
      description: "Project description 3",
      imageSrc:
        "https://www.celoxis.com/cassets/img/pmc/project-management.png",
      progress: 80,
    },
    {
      title: "Гажууд ертөнц",
      description: "Project description 4",
      imageSrc:
        "https://www.celoxis.com/cassets/img/pmc/project-management.png",
      progress: 60,
    },
  ];
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
          <div className="grid grid-cols-2 2xl:grid-cols-3 gap-6">
            {projects.slice(0).map((project, index) => (
              <CustomCard
                // size={project.size}
                title={project.title}
                description={project.description}
                imageSrc={project.imageSrc}
                progress={project.progress}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AllProjects;

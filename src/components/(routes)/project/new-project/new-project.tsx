"use client";

import Button from "@/components/button";
import CustomCard from "@/components/custom-card";
import PageTitle from "@/components/page-title";

type IProps = {};

const NewProjects: React.FC<IProps> = () => {
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
      <div className="grid grid-rows-2 grid-flow-col gap-4">
        <div className="row-span-2 ">
          <CustomCard
            size="small"
            title={projects[0].title}
            description={projects[0].description}
            imageSrc={projects[0].imageSrc}
            progress={projects[0].progress}
          />
        </div>
        {projects.slice(1).map((project, index) => (
          <div className="col-span-1" key={index}>
            <CustomCard
              // size={project.size}
              title={project.title}
              description={project.description}
              imageSrc={project.imageSrc}
              progress={project.progress}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default NewProjects;

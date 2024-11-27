"use client";

import Button from "@/components/button";
import CustomCard from "@/components/custom-card";
import PageTitle from "@/components/page-title";
import { usePublicProject } from "@/hooks/use-public-projects";
import { useRouter } from "next/navigation";
import ProjectCategory from "../project-category";
import ProjectTypeItem from "@/components/items/project-type-item";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useDebouncedState } from "@/hooks/use-debounced-state";

type IProps = {};
const DEFAULT_SEARCH_VALUE = "" as const;
const NewProjects: React.FC<IProps> = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [typeSearch, setTypeSearch] = useDebouncedState<string>(
    DEFAULT_SEARCH_VALUE,
    500
  );

  const { data, isLoading } = usePublicProject(undefined, {
    tusul_tuluv_ner: "Зөвшөөрсөн.",
    tusul_turul_ner: typeSearch,
  });
  const router = useRouter();

  useEffect(() => {
    setLoading(isLoading);
  }, [isLoading]);

  if (!data || data.items.length === 0) {
    return <div>Одоогоор төсөл байхгүй байна.</div>;
  }

  const projects = data.items;
  const handleTypeSearch = (newSearch: string) => {
    setTypeSearch(newSearch);
  };
  const handleCardClick = (id: number) => {
    router.push(`/project/view-project/${id}`);
  };

  return (
    <>
      <Link href="/donation">
        <ProjectTypeItem onTypeChange={handleTypeSearch} />
      </Link>
      <ProjectCategory />
      <PageTitle
        title={"Шинэ төслүүд"}
        button={
          <Button
            variant="gradient"
            placeholder="Бүгдийг үзэх"
            className="w-full"
            onClick={() => router.push("donation")}
          />
        }
      />
      <div className="grid md:grid-cols-3 grid-flow-row gap-y-8 space-x-between 2xl:grid-cols-5">
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
    </>
  );
};

export default NewProjects;

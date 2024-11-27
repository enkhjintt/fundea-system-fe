"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import CustomCard from "@/components/custom-card";
import PageTitle from "@/components/page-title";
import Wrapper from "@/components/wrapper";
import SideMenu from "../side-menu-types";
import ProjectTypeItem from "@/components/items/project-type-item";
import { usePublicProject } from "@/hooks/use-public-projects";
import { DefaultPagination, defaultPagination } from "@/constants";
import { useDebouncedState } from "@/hooks/use-debounced-state";

type IProps = {
  initialTypeSearch?: string;
};

const DEFAULT_SEARCH_VALUE = "" as const;

const AllProjects: React.FC<IProps> = () => {
  const [typeSearch, setTypeSearch] = useDebouncedState<string>(
    DEFAULT_SEARCH_VALUE,
    500
  );
  const [classSearch, setClassSearch] = useDebouncedState<string>(
    DEFAULT_SEARCH_VALUE,
    500
  );
  const [statusSearch, setStatusSearch] = useDebouncedState<string>(
    DEFAULT_SEARCH_VALUE,
    500
  );

  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);

  const handleTypeSearch = (newSearch: string) => {
    setTypeSearch(newSearch);
  };
  const handleClassSearch = (newSearch: string) => {
    setClassSearch(newSearch);
  };
  const handleStatusSearch = (newSearch: string) => {
    setStatusSearch(newSearch);
  };

  const [pagination, setPagination] =
    useState<DefaultPagination>(defaultPagination);

  const { data, mutate, isLoading } = usePublicProject(pagination, {
    tusul_turul_ner: typeSearch,
    tusul_angilal_ner: classSearch,
    tusul_tuluv_ner: statusSearch,
  });

  const handleCardClick = (id: number) => {
    router.push(`/project/view-project/${id}`);
  };

  useEffect(() => {
    setLoading(isLoading);
  }, [isLoading]);

  return (
    <>
      {/* Always displayed */}
      <div className="flex justify-between items-baseline">
        <PageTitle title={"Бүх төсөл"} />
        <ProjectTypeItem onTypeChange={handleTypeSearch} />
      </div>
      <div className="flex gap-10">
        <Wrapper className="w-1/4 px-4">
          <SideMenu
            onClassChange={handleClassSearch}
            onStatusChange={handleStatusSearch}
          />
        </Wrapper>
        {/* Search results or empty state */}
        <div className="w-3/4">
          {!data || data.items.length === 0 ? (
            <div>Одоогоор төсөл байхгүй байна.</div>
          ) : (
            <div className="grid md:grid-cols-2 grid-flow-row gap-y-8 space-between 2xl:grid-cols-4">
              {data.items.map((project) => (
                <div
                  key={project.id}
                  onClick={() => handleCardClick(project.id)}
                >
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
          )}
        </div>
      </div>
    </>
  );
};

export default AllProjects;

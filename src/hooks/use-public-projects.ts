import { fetcher } from "../api/fetcher";

import { DefaultPagination, PaginationResponse } from "@/constants";
import useSWRImmutable from "swr/immutable";
import { generateParams } from "@/utils/pagination-search";
import { ProjectResponse } from "@/api/projects";

export function usePublicProject(
  pagination?: DefaultPagination,
  search?: {
    garchig?: string;
    tusul_turul_id?: number;
    tusul_tuluv_id?: number;
    sort_by: string;
    sort_type: string;
    begin_date?: string;
    end_date?: string;
  }
) {
  const params = generateParams(pagination, search);

  const { data, isLoading, error, mutate } = useSWRImmutable(
    `/public/?${params}`,
    (url) => fetcher<PaginationResponse<ProjectResponse>>(url)
  );

  if (data?.success && !error) {
    return { data: data.data, isLoading, mutate };
  }

  return {
    data: undefined,
    isLoading,
    mutate,
  };
}

export function usePublicProjectById(id: number) {
  const { data, isLoading, mutate, error } = useSWRImmutable(
    getPublicProjectById(id),
    (url) => fetcher<ProjectResponse>(url)
  );

  if (data?.success && !error) {
    return { data: data.data, isLoading, mutate };
  }

  return { data: undefined, isLoading, mutate };
}

export function getPublicProjectById(id: number | undefined) {
  return `/public/get/${id}`;
}

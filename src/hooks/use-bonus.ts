import { fetcher } from "../api/fetcher";

import { DefaultPagination, PaginationResponse } from "@/constants";
import useSWRImmutable from "swr/immutable";
import { generateParams } from "@/utils/pagination-search";
import { ProjectDetailResponse, ProjectResponse } from "@/api/projects";
import { BonusListResponse, BonusResponse } from "@/api/projects/bonus";

export function useBonus(
  pagination?: DefaultPagination,
  search?: {
    tusul_id?: number;
    sort_by: string;
    sort_type: string;
    begin_date?: string;
    end_date?: string;
  }
) {
  const params = generateParams(pagination, search);

  const { data, isLoading, error, mutate } = useSWRImmutable(
    `/uramshuulal/?${params}`,
    (url) => fetcher<PaginationResponse<BonusListResponse>>(url)
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

export function useBonusById(id: number) {
  const { data, isLoading, mutate, error } = useSWRImmutable(
    getBonusById(id),
    (url) => fetcher<ProjectDetailResponse>(url)
  );

  if (data?.success && !error) {
    return { data: data.data, isLoading, mutate };
  }

  return { data: undefined, isLoading, mutate };
}

export function getBonusById(id: number | undefined) {
  return `/uramshuulal/get/${id}`;
}

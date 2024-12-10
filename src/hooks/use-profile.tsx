import { fetcher } from '@/api/fetcher';
import { UserResponse } from '@/api/user';
import useSWRImmutable from 'swr/immutable';

export function useProfile() {
  const { data, isLoading, mutate, error } = useSWRImmutable(
    `/auth/me`,
    (url) => fetcher<UserResponse>(url),
  );

  if (data?.success && !error) {
    return { data: data.data, isLoading, mutate };
  }

  return { data: undefined, isLoading, mutate };
}

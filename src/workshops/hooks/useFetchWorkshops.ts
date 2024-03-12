import { useMemo } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';

import { Workshop } from '../types/Workshop';
import { workShopApi } from '../workshopApi';

const PAGE_SIZE = 5;
const emptyWorkshops: Workshop[] = [];

export const useFetchWorkshops = () => {
  const {
    data,
    refetch,
    fetchNextPage,
    isLoading,
    isFetching,
    isFetchingNextPage,
    isError,
    hasNextPage,
  } = useInfiniteQuery({
    queryKey: ['workshops'],
    initialPageParam: 1,
    queryFn: async (context) => {
      const { pageParam } = context;

      const response = await workShopApi.fetchWorkshops({
        page: pageParam,
        pageSize: PAGE_SIZE,
      });

      return {
        data: response,
        pageParam,
      };
    },
    getNextPageParam: (lastPage) => {
      if (lastPage.data.length < PAGE_SIZE) return undefined;
      return lastPage.pageParam + 1;
    },
  });

  const workshops = useMemo<Workshop[]>(() => {
    if (!Array.isArray(data?.pages)) return emptyWorkshops;
    return data.pages.flatMap((page) => page.data);
  }, [data?.pages]);

  return {
    workshops,
    isFetchingInitial: isLoading,
    isFetching,
    isFetchingMore: isFetchingNextPage,
    isError,
    hasNextPage,
    refetch,
    fetchNextPage,
  };
};

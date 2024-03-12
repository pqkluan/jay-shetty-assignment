import { useQuery } from '@tanstack/react-query';

import { workShopApi } from '../workshopApi';

export const useFetchWorkshop = (params: { workshopId: string }) => {
  const { workshopId } = params;

  const {
    data: workshop,
    isLoading,
    isRefetching,
    isError,
  } = useQuery({
    queryKey: ['workshop', workshopId],
    queryFn: () => workShopApi.fetchWorkshop({ workshopId }),
  });

  return {
    workshop,
    isLoading,
    isRefetching,
    isError,
  };
};

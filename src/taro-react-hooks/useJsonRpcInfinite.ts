import { useSWRInfinite } from 'swr';
import JsonRpc from '@/taro-shared/JsonRpc';

// 分页场景下的 hooks 请求

const PAGE_SIZE = 10;

function useJsonRpcInfinite(apiName, params = {}, pageSize = PAGE_SIZE) {
  const { data, size, setSize, error, isValidating, mutate } = useSWRInfinite((pageIndex, previousPageData) => {
    if (!apiName) {
      return null;
    }
    if (previousPageData && !previousPageData.length) {
      return null;
    }
    return [
      pageIndex,
    ];
  }, async (page) => {
    const res = await JsonRpc.request(apiName, { ...params, page: page + 1, size: pageSize });
    return res.items;
  });

  const isLoadingInitialData = !data && !error;
  const isLoadingMore = isValidating && (isLoadingInitialData || (size > 0 && data && typeof data[size - 1] === 'undefined'));
  const isEmpty = data?.[0]?.length === 0;
  const isReachingEnd =
    isEmpty || (data && data[data.length - 1]?.length < pageSize);
  const isRefreshing = isValidating && data && data.length === size;

  return {
    data,
    size,
    setSize,
    mutate,
    isLoadingInitialData,
    isLoadingMore,
    isEmpty,
    isReachingEnd,
    isRefreshing,
  };
}

export default useJsonRpcInfinite;

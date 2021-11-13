import useSWR from 'swr';
import JsonRpc from '@/taro-shared/JsonRpc';

const useJsonRpcRequest = (apiName, params = {}) => {
  const {
    data,
    error,
    mutate,
    revalidate,
    isValidating,
  } = useSWR(apiName ? [apiName, JSON.stringify(params)] : null, async () => {
    return await JsonRpc.request(apiName, params);
  });

  return {
    data,
    error,
    isLoading: !error && !data,
    isError: !!error,
    mutate,
    revalidate,
    isValidating,
  };
};

export default useJsonRpcRequest;

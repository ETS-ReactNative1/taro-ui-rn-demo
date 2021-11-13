// 用来判断用户登录态的 hooks
import {useState, useEffect, useCallback} from 'react';

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState(null);
  const [userInfo, setUserInfo] = useState({}); // TODO 这个改用swr来拉取

  return {
    loading, // 是否正在登录中
    token, // 当前登录token
    isLogin: token === null, // 是否已登录，判断是否有token就好了
    userInfo,
  };
};

export default useLogin;

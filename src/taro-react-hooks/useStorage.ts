/* leny/react-use-storage
 *
 * /src/index.js - React Hook to handle local and session storage
 *
 * coded by leny@flatLand!
 * started at 03/03/2019
 */
// 好好想一下使用redux的理由，最大理由就是希望View/Data同步
// 既然如此，使用react-hooks封装Storage操作应该是更加合理的方案才对？

import {useState, useEffect, useCallback} from 'react';
import Taro from '@tarojs/taro';

const EVENT_KEY = 'storage_change';

// 刷新存储值
const refresh = (key) => {
  Taro.eventCenter.trigger(EVENT_KEY, {key});
};

// 设置值
// 有些情形下，我们可能不在hooks上下文中对存储的值进行了修改，但是又希望界面做出相应，那么可以使用这个方法
const set = async (key: string, data) => {
  const res = await Taro.setStorage({ key, data });
  refresh(key);
  return res;
};

const remove = async (key: string) => {
  const res = await Taro.removeStorage({ key });
  refresh(key);
  return res;
};

const useStorage = (key: string, defaultValue = null) => {
  const [data, setData] = useState(defaultValue);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 第一次进入先尝试读取
  useEffect(() => {
    Taro.getStorage({key})
      .then((res) => {
        setData(res.data);
        setLoading(false);
        return setError(null);
      })
      .catch((err) => {
        setData(defaultValue);
        setLoading(false);
        setError(err);
      });
  }, [defaultValue, key]);

  // 监听其他来源的变化
  useEffect(() => {
    const listener = async (v) => {
      if (v.key === key) {
        // 因为一般说，更新速度都是很快的，所以就没必要这里再setLoading
        try {
          const res = await Taro.getStorage({
            key: v.key,
          });
          return setData(res.data);
        } catch (e) {
          setData(defaultValue);
          console.warn('同步Storage错误', e);
        }
      }
    };

    Taro.eventCenter.on(EVENT_KEY, listener);
    return () => {
      Taro.eventCenter.off(EVENT_KEY, listener);
    };
  }, [defaultValue, key]);

  // 更新
  const update = useCallback(
    async (updatedValue) => {
      setData(updatedValue);
      try {
        await Taro.setStorage({
          key,
          data: updatedValue,
        });
      } catch (e) {
        console.warn('useStorage更新失败', e);
        return;
      }
      refresh(key);
    },
    [key],
  );

  // 删除
  const remove = useCallback(async () => {
    setData(defaultValue);
    try {
      await Taro.removeStorage({key});
    } catch (e) {
      console.warn('useStorage删除失败', e);
      return;
    }
    refresh(key);
  }, [defaultValue, key]);

  return {
    data, // 当前的最新值
    loading, // 是否加载中
    error, // 错误
    update, // 更新值使用这个方法
    remove, // 删除值使用这个方法
  };
};

export default useStorage;
export {refresh, set, remove};

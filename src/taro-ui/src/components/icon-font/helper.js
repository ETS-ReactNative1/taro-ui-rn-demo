/* eslint-disable */
const useGlobalIconFont = () => {
  return {
    iconfont: `taro-ui/src/components/icon-font/${process.env.TARO_ENV}/${process.env.TARO_ENV}`,
  };
};

// es modules is unavaiable.
module.exports.useGlobalIconFont = useGlobalIconFont;

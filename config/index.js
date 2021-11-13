const path = require("path");

const projectRoot = path.resolve(__dirname, '..'); // 本项目目录

// const aliasList = {
//   '@/main': path.resolve(projectRoot, `src/${process.env.APP_NAME}`),
//   '@/taro-ui': path.resolve(projectRoot, 'src/taro-ui/src'),
//   '@/taro-shared': path.resolve(projectRoot, 'src/taro-shared'),
//   '@/taro-react-hooks': path.resolve(projectRoot, 'src/taro-react-hooks'),
//   '@/taro-ui-demo': path.resolve(projectRoot, 'src/taro-ui-demo'),
// };
// console.log(aliasList);

// TODO 配置化
process.env.APP_NAME = 'taro-ui-demo';

const config = {
  projectName: 'TaroOne',
  date: '2021-11-12',
  designWidth: 750,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2
  },
  sourceRoot: `src/${process.env.APP_NAME}`,
  outputRoot: 'dist',
  // alias: aliasList,
  plugins: [],
  defineConstants: {
  },
  copy: {
    patterns: [
    ],
    options: {
    }
  },
  framework: 'react',
  sass: {
    resource: [
      `${projectRoot}/src/taro-ui/src/style/variables/default.scss`,
      `${projectRoot}/src/taro-ui/src/style/mixins/index.scss`,
    ],
  },
  mini: {
    postcss: {
      pxtransform: {
        enable: true,
        config: {

        }
      },
      url: {
        enable: true,
        config: {
          limit: 1024 // 设定转换尺寸上限
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  },
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    postcss: {
      autoprefixer: {
        enable: true,
        config: {
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  },
  rn: {
    appName: 'taroDemo',
    output: {
      ios: './ios/main.jsbundle',
      iosAssetsDest: './ios',
      android: './android/app/src/main/assets/index.android.bundle',
      androidAssetsDest: './android/app/src/main/res',
      // iosSourceMapUrl: '',
      iosSourcemapOutput: './ios/main.map',
      // iosSourcemapSourcesRoot: '',
      // androidSourceMapUrl: '',
      androidSourcemapOutput: './android/app/src/main/assets/index.android.map',
      // androidSourcemapSourcesRoot: '',
    },
    postcss: {
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
      }
    }
  },
  alias: {
    '@/taro-ui': path.resolve(__dirname, '..', 'src/taro-ui/src'),
  }
}

module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'))
  }
  return merge({}, config, require('./prod'))
}

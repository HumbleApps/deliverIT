module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@components/*': ['./src/components/*'],
          '@utils/*': ['./src/utils/*'],
          '@views/*': ['./src/views'],
          '@images/*': ['./src/images'],
          '@apis/*': ['./src/apis'],
          '@actions/*': ['./src/actions'],
          '@reducers/*': ['./src/reducers'],
          '@sagas/*': ['./src/sagas'],
          '@store/*': ['./src/store'],
          '@selectors/*': ['./src/selectors'],
          '@hooks/*': ['./src/hooks'],
          '@styles/*': ['./src/styles'],
          '@modals/*': ['./src/modals'],
        },
      },
    ],
  ],
};

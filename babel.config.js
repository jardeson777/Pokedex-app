module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extension: ['.js', '.ts', '.tsx', '.jsx'],
        alias: {
          '@': './src',
        },
      },
    ],
  ],
};

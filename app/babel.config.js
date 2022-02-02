module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: './src',
        extensions: ['.ios.js', '.android.js', '.js', '.jsx', '.json', '.tsx', '.ts', '.native.js'],
        alias: {
          '@': './src',
          '@shared': './src/components/shared',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};

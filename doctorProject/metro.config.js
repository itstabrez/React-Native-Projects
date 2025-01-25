const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

const defaultConfig = getDefaultConfig(__dirname);

// Remove `.svg` from the list of asset extensions
defaultConfig.resolver.assetExts = defaultConfig.resolver.assetExts.filter(ext => ext !== 'svg');

// Add `.svg` to the list of source extensions
defaultConfig.resolver.sourceExts = [...defaultConfig.resolver.sourceExts, 'svg'];

module.exports = mergeConfig(defaultConfig, {
  transformer: {
    babelTransformerPath: require.resolve('react-native-svg-transformer'),
  },
});
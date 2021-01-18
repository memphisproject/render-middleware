module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      }
    ],
    '@babel/preset-typescript'
  ],
  plugins: [
    ['module-resolver', {
      alias: {
        '@useCases': './src/useCases',
        '@shared': './src/_shared/',
        '@repositories': './src/repositories/',
        '@entities': './src/entities/'
      }
    }]
  ],
  ignore: [
    '**/*.spec.ts'
  ]
};

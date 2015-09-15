Package.describe({
  name: 'msx-compiler',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'MSX compiler for Mithril',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});


Package.registerBuildPlugin({
  name: 'compile-jsx',
  sources: [
    'msx-plugin.js'
  ],
  npmDependencies: { "msx": "0.4.1"}
});

Package.onUse(function(api) {
  api.versionsFrom('1.2-rc.12');
  api.use('isobuild:compiler-plugin@1.0.0');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('msx-compiler');
  api.addFiles('msx-compiler-tests.js');
});

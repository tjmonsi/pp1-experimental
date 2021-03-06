Package.describe({
  name: 'tjmonsi:littleq-core',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'LittleQ Projects core system',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  
  var packages = [
    "tjmonsi:litteq-lib"
  ]
  
  api.use(packages)
  api.imply(packages)
  
  api.addFiles([
    "lib/flow-router/config.js",
    'lib/config.js',
  ])
  
  
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('tjmonsi:vm-core');
  api.addFiles('vm-core-tests.js');
});

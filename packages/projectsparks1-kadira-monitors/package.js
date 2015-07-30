Package.describe({
  name: 'projectsparks1:projectsparks1-kadira-monitors',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'All Kadira Monitors goes here',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  // api.addFiles('projectsparks1-kadira-monitors.js');
  
  var packages = [
      // projectsparks1
      "meteorhacks:kadira@2.22.1",
      "kadira:debug@2.1.0",
      "meteorhacks:kadira-profiler@1.2.0"
    ]
  
  api.use(packages, ['client', 'server']);
  
  // api.imply(packages);
  
  // api.addFiles([
  //   'server/kadira-settings.js'
  // ], ['server'])
});

Package.onTest(function(api) {
  api.use('tinytest');
  // api.use('projectsparks1:projectsparks1-kadira-monitors');
  // api.addFiles('projectsparks1-kadira-monitors-tests.js');
});

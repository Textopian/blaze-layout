Package.describe({
  summary: 'Layout Manager for Blaze (works well with FlowRouter)',
  version: '0.0.1',
  git: 'https://github.com/Textopian/blaze-layout',
  name: "carlosalvidrez:blaze-layout"
});

Package.onUse(function (api) {
  configure(api);
  api.export(['BlazeLayout']);
});

Package.onTest(function(api) {
  configure(api);
  api.use('tinytest');
  api.addFiles('tests/client/init.templates.html', 'client');
  api.addFiles('tests/client/init.templates.js', 'client');
  api.addFiles('tests/client/unit.js', 'client');
  api.addFiles('tests/client/integration.js', 'client');
});

function configure(api) {
  //api.versionsFrom('1.0');
  api.versionsFrom('2.16');
  api.use('blaze');
  api.use('templating');
  api.use('reactive-dict');
  api.use('underscore');
  api.use('jquery');
  api.use('tracker');

  api.addFiles('lib/client/namespace.js', 'client');
  api.addFiles('lib/client/layout.js', 'client');
}
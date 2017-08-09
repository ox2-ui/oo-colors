Package.describe({
  name: 'ox2:colors',
  summary: 'DO NOT USE',
  version: '2.0.0',
  git: ' /* Fill me in! */ '
});

var S = 'server';
var C = 'client';
var CS = [C, S];

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.2');
  // Core
  api.use([
    'less'
    ]);
  api.addFiles('lib/oo-color-variables.import.less', C);
  api.addFiles('lib/oo-colors.less', C);
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('ox2:colors');
  api.addFiles('tests/oo-colors-tests.js');
});

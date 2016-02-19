Package.describe({
  name: 'ox2:colors',
  summary: 'DO NOT USE',
  version: '1.7.0',
  git: ' /* Fill me in! */ '
});

var S = 'server';
var C = 'client';
var CS = [C, S];

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.2');
  // Core
  api.use([
    'ecmascript',
    'session'
    ]);
  // 3rd party
  api.use([
    'lauricio:less-autoprefixer@2.5.0_3',
    'ox2:inject-style@1.0.0'
    ]);
  api.addFiles('lib/oo-color-variables.import.less', C);
  api.addFiles('lib/oo-colors.less', C);
  api.addFiles('lib/oo-colors-theming.js', C);
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('ox2:colors');
  api.addFiles('tests/oo-colors-tests.js');
});

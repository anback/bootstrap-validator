Package.describe({
  name: 'anback:bootstrap-validator',
  version: 'v0.9.0',
  summary: "Packaged for Meteor, A user-friendly HTML5 form validation jQuery plugin for Bootstrap 3 http://1000hz.github.io/bootstrap-validator",
  git: 'https://github.com/anback/bootstrap-validator.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.addFiles('validator.min.js', 'client');
});
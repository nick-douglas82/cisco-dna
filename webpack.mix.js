const mix = require('laravel-mix');
require('laravel-mix-purgecss');

mix.browserSync({
  host: "https://cisco-dna.test:3000",
  proxy: "https://cisco-dna.test",
  https: {
    key: "/Users/nick/.config/valet/Certificates/cisco-dna.test.key",
    cert: "/Users/nick/.config/valet/Certificates/cisco-dna.test.crt"
  },
  files: ["**/*.html", "assets/dist/css/**/*.css", "assets/dist/js/**/*.js"],
  injectChanges: true,
  open: false
});

mix.js("assets/src/js/main.js", "./assets/dist/js/main.js");
mix.sass("assets/src/sass/main.scss", "./assets/dist/css/main.css").options({
  processCssUrls: false
});

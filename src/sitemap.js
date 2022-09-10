//Babel allows us to convert modern js code into backwards compatible versions
//This includes converting jsx into browser-readable code

const es2015 = require('babel-preset-es2015');
const presetReact = require('babel-preset-react');
require('babel-register')({
  presets: [es2015, presetReact],
});
//Import our routes
const router = require('./Routes').default;
const Sitemap = require('react-router-sitemap').default;

function generate() {
  return (
    new Sitemap(router)
      .build('https://mcd.adapttive.com')
      //Save it wherever you want
      .save('./public/sitemap.xml')
  );
}

generate();

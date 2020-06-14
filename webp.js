//convert images from img/ to webp format

const imagemin = require('imagemin');
const imageminWebp = require('imagemin-webp');

imagemin(['./src/img/*'], {
  destination: './src/img/webp',
  plugins: [imageminWebp({ quality: 50 })]
}).then(() => {
  console.log('Done!');
});
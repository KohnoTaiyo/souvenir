import imagemin from 'imagemin'
import imageminJpegtran from 'imagemin-jpegtran'
import imageminPngquant from 'imagemin-pngquant'
imagemin(['images/*.{jpg,png}'], {
  destination: 'public',
  plugins: [
    imageminJpegtran(),
    imageminPngquant({
      quality: [0.6, 0.8],
    }),
  ],
}).then(() => {
  console.log('succes')
})

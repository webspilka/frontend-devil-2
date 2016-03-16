/**
 * Project path
 */
let srcDir = 'app',
    publicDir = 'dist';

export default {
    entries: {
        style: [`./${ srcDir }/style/app.sass`],
        js: [`./${ srcDir }/js/app.js`]
    },
    vendor: {
        js: [
            './node_modules/jquery/dist/jquery.js',
            './node_modules/lodash/lodash.js'
        ]
    },
    all: {
        html: `${ srcDir }/*.jade`,
        template: `${ srcDir }/**/*.jade`,
        js: `${ srcDir }/js/**/*.js`,
        style: `${ srcDir }/style/**/*.sass`,
        fonts: [`${ srcDir }/fonts/**/*.*`],
        images: `${ srcDir }/images/**/*.{gif,jpg,png,svg}`
    },
    dest: {
        js: `${ publicDir }/js`,
        style: `${ publicDir }/css`,
        html: `${ publicDir }/`,
        fonts: `${ publicDir }/fonts`,
        images: `${ publicDir }/images`
    },
    publicDir: publicDir
}

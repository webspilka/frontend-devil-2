import { errorHandler } from './helpers';
import babel from 'rollup-plugin-babel';

/**
 * Plugins settings
 */
export default {

    // https://www.npmjs.com/package/rollup
    rollup: {
        format: 'es6',
        sourceMap: true,
        onwarn: (error) => {
            throw new Error(error);
        },
        plugins: [
            // https://github.com/rollup/rollup-plugin-babel
            babel({
                presets: ['es2015-rollup'],
                babelrc: false,
                exclude: 'node_modules/**'
            })
        ]
    },

    //  https://www.npmjs.com/package/gulp-sass
    sass: {},

    //  https://www.npmjs.com/package/gulp-autoprefixer
    autoprefixer: { browsers: ['last 2 versions'] },

    //  https://www.npmjs.com/package/gulp-minify-css
    minifyCss: {},

    //  https://www.npmjs.com/package/gulp-sourcemaps
    sourceMap: {
        init: {
            loadMaps: true
        },
        write: {}
    },

    // https://www.npmjs.com/package/gulp-jshint
    jshint: { esnext: true },

    // https://www.npmjs.com/package/gulp-uglify
    uglify: {},

    // https://www.npmjs.com/package/gulp-jade
    jade: {},

    // https://www.npmjs.com/package/gulp-imagemin
    imagemin: {},

    //  https://www.npmjs.com/package/gulp-plumber
    plumber: { errorHandler: errorHandler }
}

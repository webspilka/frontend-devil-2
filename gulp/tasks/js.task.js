import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';

import config from '../config';
import path from '../path';

import { errorHandler } from '../helpers';

const $ = gulpLoadPlugins();

/**
 * Javascript task
 * @class Js
 */
class Js {

    /**
     * Lint your script
     * @returns {*}
     */
    static lint() {
        return  gulp.src(path.all.js)
            .pipe($.jshint(config.jshint))
            .pipe($.jshint.reporter('jshint-stylish'))
    }

    /**
     * Bundle your script
     * @returns {*}
     */
    static build() {
        return gulp.src(path.entries.js)
            .pipe($.plumber(config.plumber))
            .pipe($.rollup({
                format: 'es6',
                sourceMap: true,
                onwarn: (error) => {
                    throw new Error(error);
                }
            }))
            .pipe($.babel())
            .on('error', errorHandler)
            .pipe($.uglify(config.uglify))
            .pipe($.sourcemaps.write('./', config.sourceMap.write))
            .pipe(gulp.dest(path.dest.js));
    }
}

export default Js;
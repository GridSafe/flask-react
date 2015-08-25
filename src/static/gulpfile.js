var gulp = require('gulp');
var uglify = require('gulp-uglify');
var gutil = require('gulp-util');
var watchPath = require('gulp-watch-path');
var jshint = require('gulp-jshint');
var soucemaps = require('gulp-sourcemaps');
var combiner = require('stream-combiner2');
var rename = require('gulp-rename');

/*捕捉错误*/
var handleError = function(error){
    var colors = gutil.colors;
    console.log('\n')
    gutil.log(colors.red('Error'))
    gutil.log('fileName: ' + colors.red(error.fileName))
    gutil.log('lineNumber: ' + colors.red(error.lineNumber))
    gutil.log('message: ' + colors.yellow(error.message))
    gutil.log('plugin: ' + colors.yellow(error.plugin))
};


gulp.task('watchjs',function(){
    gulp.watch('lib/js/**/*.js',function(event){
        var paths = watchPath(event, 'lib/','build/')

        gutil.log(gutil.colors.green(event.type) + " " + paths.srcPath)
        gutil.log('Dist '+ paths.distPath)
        
        var combined = combiner.obj([        
            gulp.src(paths.srcPath),
                soucemaps.init(),
                jshint(),
                uglify(),
                soucemaps.write(),
                gulp.dest(paths.distDir)
        ])

        combined.on('error',handleError)
    })
});

gulp.task('default',['watchjs']);




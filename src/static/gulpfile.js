var gulp = require('gulp');
var uglify = require('gulp-uglify');
var gutil = require('gulp-util');
var watchPath = require('gulp-watch-path');

gulp.task('watchjs',function(){
    gulp.watch('lib/js/**/*.js',function(event){
        var paths = watchPath(event, 'lib/','build/')

        gutil.log(gutil.colors.green(event.type) + " " + paths.srcPath)
        gutil.log('Dist '+ paths.distPath)
        
        gulp.src(paths.srcPath)
            .pipe(uglify())
            .pipe(gulp.dest(paths.distDir))
    })
});

gulp.task('default',['watchjs']);

var gulp = require('gulp');
var concat = require('gulp-concat');  
var rename = require('gulp-rename');  
var uglify = require('gulp-uglify'); 

//script paths
var jsFiles = [
	'source/vendor/jquery/dist/jquery.min.js',
	'source/vendor/bootstrap-sass/assets/javascripts/bootstrap.min.js',
	'source/vendor/portfilter/bootstrap-portfilter.min.js',
	'source/javascripts/pages/**/*.js'
],  
    jsDest = 'source/javascripts';

gulp.task('scripts', function() {  
    return gulp.src(jsFiles)
        .pipe(concat('site.js'))
        .pipe(gulp.dest(jsDest))
        .pipe(rename('site.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(jsDest));
});
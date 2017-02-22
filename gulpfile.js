var gulp = require('gulp');

var sass = require('gulp-sass');

var browserSync = require('browser-sync');

gulp.task('sass', function(){
    return gulp.src('app/scss/**/*.scss')
        .pipe(sass()) // Конвертируем Sass в CSS с помощью gulp-sass
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({
            stream:true
        }))
});

gulp.task('watch', ['browserSync', 'sass'], function(){
    gulp.watch('app/scss/**/*.scss', ['sass']);
    // Обновляем браузер при любых изменениях в HTML или JS
    gulp.watch('app/*.html', browserSync.reload);
    gulp.watch('app/js/**/*.js', browserSync.reload);
});

gulp.task('browserSync', function() {
    browserSync({
        server: {
        baseDir: 'app'
        },
    })
});

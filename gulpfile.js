const gulp = require('gulp');
const gulpBabel = require('gulp-babel');
const gulpCopy = require('gulp-copy');

const jsFiles = 'src/**/*.js';
const otherFiles = ['src/**/*.wpy'];

gulp.task('build-js', () => {
	return gulp.src(jsFiles)
		.pipe(gulpBabel({
			presets: ['@babel/env']
		}))
		.pipe(gulp.dest('dist'));
});

gulp.task('copy-others', () => {
	return gulp.src(otherFiles)
		.pipe(gulp.dest('dist'));
});

gulp.task(
	'watch',
	gulp.parallel('build-js', 'copy-others', () => {
		gulp.watch(jsFiles, ['build-js']);
		gulp.watch(otherFiles, ['copy-others']);
	})
);

gulp.task(
	'default',
	gulp.parallel('build-js', 'copy-others')
);
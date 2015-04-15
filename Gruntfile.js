module.exports = function(grunt) {

	grunt.initConfig({
		build_dir: 'build',

		pkg: grunt.file.readJSON('package.json'),

		concat: {
			options: {
				separator: ';'
			},

			dist: {
				src: ['src/*.js'],
				dest: '<%=build_dir%>/<%=pkg.name%>.js'
			}
		},

		uglify: {
			options: {
			},

			dist: {
				files: {
					'<%=build_dir%>/<%=pkg.name%>.min.js': ['<%=concat.dist.dest%>']
				}
			}
		},

	});

	grunt.task.loadNpmTasks('grunt-contrib-uglify');
	grunt.task.loadNpmTasks('grunt-contrib-concat');

	grunt.registerTask('default', ['concat', 'uglify']);

}

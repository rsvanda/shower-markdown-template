module.exports = function(grunt) {
	grunt.initConfig({
		shower: {
			index: {
				title: 'Shower presentation template',
				src: 'src/index.md',
                template: 'src/shower-template.html',
				theme: 'shower-ribbon',
				styles: [
					'node_modules/highlightjs/styles/default.css',
					'src/style.css'
				],
				scripts: [
					'node_modules/highlightjs/highlight.pack.min.js',
					'src/script.js'
				]
			}
		},
		watch: {
			shower: {
				files: 'src/*',
				tasks: 'shower'
			}
		}
	});
	
	grunt.loadNpmTasks('grunt-shower-markdown');
	grunt.loadNpmTasks('grunt-contrib-watch');
	
	grunt.registerTask('default', ['shower']);
};
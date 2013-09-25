"use strict";

module.exports = function (grunt) {
	grunt.initConfig({
		"jshint": {
			"all": [
				"Gruntfile.js",
				"tasks/*.js"
			],
			"options": {
				"jshintrc": ".jshintrc"
			}
		},

		"git-desc": {
		}

	});

	grunt.loadTasks("tasks");
	grunt.loadNpmTasks("grunt-contrib-jshint");
	grunt.registerTask("default", [ "jshint", "git-desc" ]);
};
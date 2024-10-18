module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            development: {
                files: {
                    'dev/styles/main.css': 'src/styles/main.less'
                }
            }
        },
        replace: {
            dev: {
                options: {
                    patterns: [
                        {
                            match: 'CSS_ADDRESS',
                            replacement: './styles/main.css'
                        },
                        {
                            match: 'JS_ADDRESS',
                            replacement: '../src/scripts/main.js'
                        }
                    ]
                },
                files: [
                    {
                        expand: true,
                        flatten: true,
                        src: ['src/index.html'],
                        dest: 'dev/'
                    }
                ]
            }
        },
        uglify: {
            target: {
                files: {
                    'dev/scripts/main.min.js': 'src/scripts/main.js'
                }
            }
        }
    })

    grunt.loadNpmTasks('grunt-contrib-less')
    grunt.loadNpmTasks('grunt-replace')
    grunt.loadNpmTasks('grunt-contrib-uglify')

    grunt.registerTask('default', ['less:development', 'replace:dev', 'uglify'])
}

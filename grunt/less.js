
module.exports = {

    options: {
        sourceMap: true,
        compress: true,
    },


    hp: {
        expand: true,
        cwd: 'css/',
        src: '**/*.less',
        dest: 'css/',
        ext: '.css',

    },


};
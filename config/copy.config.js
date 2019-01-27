// New copy task for font files
module.exports = {
  copyFontAwesome: {
    src: ['{{ROOT}}/node_modules/font-awesome/fonts/**/*'],
    dest: '{{WWW}}/assets/fonts'
  },
  copySimpleLineIcons: {
    src: ['{{ROOT}}/node_modules/simple-line-icons/fonts/**/*'],
    dest: '{{WWW}}/assets/fonts'
  }
};

const brandai = require('./brandai.json').lookup;

const color = brandai.colors;

module.exports = {
  theme: {
    maxWidth: '100%',
    color: {
      link: color.linkOverlay.value,
      linkHover: color.link.value,
      sidebarBackground: color.messnerDarken20.value,
    },
  },
  styles: {
    ComponentsList: {
      item: {
        '& a': {
          '&:hover': {
            textDecoration: 'underline',
            color: color.link.value,
          },
        },
      },
    },
  },
};

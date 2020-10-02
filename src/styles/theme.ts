const size = {
  base: 16,
  mobile: 425,
  tablet: 991,
  laptop: 1440,
  desktop: 2560,
};

export const theme = {
  color: {
    primary: '#00A9BB',
    secondary: '#00BB84',
    dark: '#292C2B',
    light: '#FFFFFF',
  },
  font: {
    family: 'Nobel',
    h1: 54,
    h2: 42,
    h3: 36,
    h4: 24,
    h5: 18,
    body: 16,
  },
  device: {
    mobile: `(max-width: ${size.mobile}px)`,
    tablet: `(max-width: ${size.tablet}px)`,
    laptop: `(max-width: ${size.laptop}px)`,
    desktop: `(max-width: ${size.desktop}px)`,
  },
  size: {
    base: size.base,
    mobile: size.mobile,
    tablet: size.tablet,
    laptop: size.laptop,
    desktop: size.desktop,
  },
};

export const lightTheme = {
  colors: {
    primary: 'hsl(17,77%,48%)',
    secondary:'hsl(17,77%,40%)',
    tertiary:'hsl(17,77%,65%)',
    success:'#4BB543',
    alert:'#bb2124',
    warning:'#f0ad4e',
    link: '#5bc0de',
  },
  shades:{
    _1000:'#000000',
    _900:'#28333E',
    _800:'#424D57',
    _700:'#5D6974',
    _600:'#74808B',
    _500:'#8B96A2',
    _400:'#A2ADB9',
    _300:'#B9C2CA',
    _200:'#CBD1D7',
    _100:'#E5E8EB',
    _50: '#F6F7F8'
  },
  gradients:{
    
  },
  sizes:{
    x_small: '.5rem',
    small: '1rem',
    medium: '1.5rem',
    large: '2rem',
    x_large: '2.5rem',
    xx_large: '3rem',
    xxx_large: '3.5rem',
    xxxx_large: '4rem'
  },
  fonts:{
    main:'Libre Franklin, sans-serif',
  },
  font_size:{
    /* Display */
    display_large: '4.625rem',  // 74px - Desktop
    display_medium: '4.125rem', // 66px - Tablet
    display_small: '3.625rem',  // 58px - Mobile

    /* Heading - H1 */
    heading_h1_large: '3.250rem',  // 52px - Desktop
    heading_h1_medium: '2.875rem', // 46px - Tablet
    heading_h1_small: '2.562rem',  // 41px - Mobile

    /* Heading - H2 */
    heading_h2_large: '2.562rem',  // 41px - Desktop
    heading_h2_medium: '2.250rem', // 36px - Tablet
    heading_h2_small: '2.000rem',  // 32px - Mobile

    /* Heading - H3 */
    heading_h3_large: '2.250rem',  // 36px - Desktop
    heading_h3_medium: '2.000rem', // 32px - Tablet
    heading_h3_small: '1.812rem',  // 29px - Mobile

    /* Heading - H4 */
    heading_h4_large: '2.000rem',  // 32px - Desktop
    heading_h4_medium: '1.812rem', // 29px - Tablet
    heading_h4_small: '1.625rem',  // 26px - Mobile

    /* Heading - H5 */
    heading_h5_large: '1.812rem',  // 29px - Desktop
    heading_h5_medium: '1.625rem', // 26px - Tablet
    heading_h5_small: '1.438rem',  // 23px - Mobile

    /* Heading - H6 */
    heading_h6_large: '1.625rem',  // 26px - Desktop
    heading_h6_medium: '1.438rem', // 23px - Tablet
    heading_h6_small: '1.250rem',  // 20px - Mobile

    /* Body */
    body_large: '1.250rem',  // 18px - Desktop
    body_medium: '1.000rem', // 16px - Tablet
    body_small: '0.875rem',  // 14px - Mobile

    /* Caption */
    caption_large: '1.000rem',  // 16px - Desktop
    caption_medium: '0.875rem', // 14px - Tablet
    caption_small: '0.812rem',  // 13px - Mobile

    /* Label */
    label_large: '0.875rem',  // 14px - Desktop
    label_medium: '0.812rem', // 13px - Tablet
    label_small: '0.750rem',  // 12px - Mobile
  },
  font_weight:{
    light: '300',
    regular:'400',
    medium: '500',
    semibold:'600',
    bold:'700'
  },
  line_height:{
    display:'120.81%',
    heading:'132.36%',
    body:'150%',
    label:'141.76%'
  },
  letter_spacing: {
    display:'-2.5%',
    heading:'-1.5%',
    body:'1%',
    label:'2.5%'
  },
  breakpoints:{
    desktop:'screen and (min-width: 1024px)',
    tablet:'screen and (max-width: 1023px)',
    mobile:'screen and (max-width: 767px)',
    hover:'(hover:hover)',
    noHover:'(hover:none)'
  },
  layouts:{
    desktop:'minmax(2em,1fr) repeat(12,minmax(auto,10em)) minmax(2em,1fr)',
    tablet:'2em repeat(6,minmax(auto,1fr)) 2em',
    mobile:'1em repeat(4,minmax(auto,1fr)) 1em',
  }
}
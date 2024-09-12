import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*, *::before, *::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body{
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  -webkit-text-size-adjust: 100%;
  font-weight: normal;
  width: 100%;
  font-family: ${({theme}) => theme.fonts.main};
  margin: 0;
  word-wrap: break-word;
  background-color: ${({theme}) => theme.shades._50};
  box-sizing: border-box;
  overflow: auto;
}
h1{
  font-size: clamp(
    ${({theme}) => theme.font_size.heading_h3_small},
    2.5vw,
    ${({theme}) => theme.font_size.heading_h3_large}
  );
  line-height: ${({theme}) => theme.line_height.heading};
  font-weight: 700;
}
h2{
  font-size: clamp(
    ${({theme}) => theme.font_size.heading_h4_small},
    2.5vw,
    ${({theme}) => theme.font_size.heading_h4_large}
  );
  line-height: ${({theme}) => theme.line_height.heading};
  font-weight: 500;
}
h3{
  font-size: clamp(
    ${({theme}) => theme.font_size.body_small},
    2.5vw,
    ${({theme}) => theme.font_size.body_large}
  );
  line-height: ${({theme}) => theme.line_height.heading};
  font-weight: 400;
}

p,li{
  font-size: clamp(
    ${({theme}) => theme.font_size.body_small},
    2.5vw,
    ${({theme}) => theme.font_size.body_large}
  );
}
`
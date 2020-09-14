import { css } from "styled-components";

export const setColor = {
  primaryColor: "#0080FF",
  secondaryColor: "#0000FE",
  accentColor: "#01FFFF",
  mainWhite: "#fff",
  mainBlack: "#222",
  mainGrey: "#ececec",
  lightGrey: "#f7f7f7",
};

export const setFont = {
  main: "font-family: 'Lato', sans-serif;",
  slanted: "font-family: 'Courgette', cursive;",
};

export const setFlex = ({ x = "center", y = "center" } = {}) => {
  return `display:flex; align-items:${y};justify-content:${x}`;
};

export const setBackground = ({
  img = "https://images.pexels.com/photos/1628086/pexels-photo-1628086.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  color = "rgba(0, 0, 0, 0)",
}) => {
  return `background: linear-gradient(${color}, ${color}),
  url(${img}) center / cover
  fixed no-repeat `;
};

export const setRem = (number = 16) => {
  return `${number / 16}rem`;
};

export const setLetterSpacing = (number = 2) => {
  return `letter-spacing: ${number}px`;
};

export const setShadow = {
  light: "box-shadow: 5px 5px 7px 0px rgba(97,86,67,1)",
  dark: "box-shadow: 8px 8px 7px 0px rgba(97,86,67,1)",
  darkest: "box-shadow: 12px 12px 7px 0px rgba(97,86,67,1);",
};

export const setBorder = ({
  width = "2px",
  style = "solid",
  color = "#af9a7d",
  radius = "4px",
} = {}) => {
  return `border: ${width} ${style} ${color};
    border-radius: ${radius}`;
};

const sizes = {
  large: 1200,
  desktop: 992,
  tablet: 768,
  phone: 576,
};
// Iterate though the sizes and create a media template
export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `;

  return acc;
}, {});

export const setTransition = ({
  property = "all",
  time = "0.3s",
  timing = "ease-in-out",
} = {}) => {
  return `transition:${property} ${time} ${timing}`;
};

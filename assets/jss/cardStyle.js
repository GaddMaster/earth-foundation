import {
    blackColor,
    whiteColor,
    hexToRgb
  } from "./next-style";
  
  const cardStyle = {
    card: {
      border: "0",
      marginBottom: "30px",
      marginTop: "30px",
      color: "rgba(" + hexToRgb(blackColor) + ", 0.87)",
      background: whiteColor,
      width: "400px",
      boxShadow:
        "0 2px 2px 0 rgba(" +
        hexToRgb(blackColor) +
        ", 0.14), 0 3px 1px -2px rgba(" +
        hexToRgb(blackColor) +
        ", 0.2), 0 1px 5px 0 rgba(" +
        hexToRgb(blackColor) +
        ", 0.12)",
      position: "relative",
      display: "flex",
      flexDirection: "column",
      minWidth: "0",
      wordWrap: "break-word",
      fontSize: ".875rem",
      // some jss/css to make the cards look a bit better on Internet Explorer
      "@media all and (-ms-high-contrast: none), (-ms-high-contrast: active)": {
        display: "inline-block !important"
      }
    },
    cardPlain: {
      background: "transparent",
      boxShadow: "none"
    },
    cardProfile: {
      marginTop: "30px",
      textAlign: "center"
    },
    
   
    cardBackground: {
      backgroundPosition: "50%",
      backgroundSize: "cover",
      textAlign: "center",
      color: whiteColor,
      "& h3": {
        color: whiteColor + " !important"
      },
      "& p": {
        color: "rgba(" + hexToRgb(whiteColor) + ",0.7)!important"
      },
      "&:after": {
        position: "absolute",
        zIndex: "1",
        width: "100%",
        height: "100%",
        display: "block",
        left: "0",
        top: "0",
        content: '""',
        backgroundColor: "rgba(" + hexToRgb(blackColor) + ", 0.56)",
        borderRadius: "6px"
      },
      "& small": {
        color: "rgba(" + hexToRgb(whiteColor) + ", 0.7) !important"
      }
    },
   
  };
  
  export default cardStyle;
  
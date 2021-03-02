import { whiteColor, hexToRgb, facebookColor } from "./next-style";

const cardBodyStyle = {
  cardBody: {
    width: '400px',
    flex: "1 1 auto",
    WebkitBoxFlex: "1",
    color: facebookColor,
    marginBottom: '20px'
    

  },
  cardBodyBackground: {
    position: "relative",
    zIndex: "2",
    minHeight: "280px",
    paddingTop: "40px",
    paddingBottom: "40px",
    maxWidth: "440px",
    margin: "0 auto",
    color: facebookColor
  },
  cardBodyPlain: {
    paddingLeft: "5px",
    paddingRight: "5px"
  },
 
};

export default cardBodyStyle;

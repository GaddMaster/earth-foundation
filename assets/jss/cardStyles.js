import {
    container,
    title,
    cardTitle,
    description,
    mlAuto,
    mrAuto,
    section,
    sectionDark,
    coloredShadow,
    blackColor,
    whiteColor,
    hexToRgb
  } from "./next-style";
  
  const teamsSection = {
    container,
    title,
    mlAuto,
    mrAuto,
    cardTitle,
    coloredShadow,
    description,
    descriptionWhite: {
      ...description
    },
    textCenter: {
      textAlign: "center"
    },
   
    secondCard: {
      marginTop: "-60px"
    },
    cardCategory: {
      color: whiteColor,
      textDecoration: "none",
      marginBottom: "25px",
      marginRight: '270px',
      fontFamily: `"Roboto Slab", "Times New Roman", serif`
    },
    
   
  };
  
  export default teamsSection;
  
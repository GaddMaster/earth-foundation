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
   
   
    cardCategory: {
      color: whiteColor,
      textDecoration: "none",
      marginBottom: "25px",
     
     marginRight: '250px',
      fontFamily: `"Roboto Slab", "Times New Roman", serif`
    },
    
   
  };
  
  export default teamsSection;
  
import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from './Card/GridContainer'
import GridItem from "./Card/GridItem";
import Card from "./Card/CardAdvisers";
import CardAvatar from "./Card/CardAvatar";
import CardBody from "./Card/CardBody";
import cardStyles from "../assets/jss/cardStyles";

import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles(cardStyles);

export default function TempCard () {
    const classes = useStyles();
    return (
      <GridContainer>
      <GridItem xs={10} sm={4} md={6}>
       
        
              <Card profile style={{backgroundColor: "#040136"}}>
                <CardAvatar profile  >
                  <a  onClick={e => e.preventDefault()}>
                    <img src='/images/william.jpg' alt="..." />
                  </a>
                </CardAvatar>
                <CardBody style={{backgroundColor: "#040136"}}>
                  <h4 className={classes.cardTitle}>Mario Salomone</h4>
                 
                    <h6 className={classes.cardCategory}>Position Here</h6>
                  
                  <p className={classes.description}>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                   Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                   "
                  </p>
                </CardBody>
               

              </Card>
              </GridItem>
              <GridItem xs={10} sm={4} md={2}>
              <Card profile style={{backgroundColor: "#124720", marginTop: "180px"}}>
              <CardAvatar profile  >
                <a  onClick={e => e.preventDefault()}>
                  <img src='images/bjane.jpg' alt="..." />
                </a>
              </CardAvatar>
              <CardBody style={{backgroundColor: "#124720"}}>
                <h4 className={classes.cardTitle}>Phillipe Gillet</h4>
               
                  <h6 className={classes.cardCategory}>Position Here</h6>
                
                <p className={classes.description}>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                 Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                 "
                </p>
              </CardBody>
             
            </Card>
            </GridItem>
            </GridContainer>
            
          
            
        
          
      
     
    )

}
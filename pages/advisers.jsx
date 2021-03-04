
import Head from "next/head";
import Layout from "../components/Layout";
import TitleDesc from "components/TitleDesc";

import styles from "../styles/advisers.module.scss";
import GridItem from '../components/Card/GridItem'
import Subscribe from "../components/Subscribe";


import CardAdvisers from "../components/CardAdvisers";

const Advisers = props => {
    return (
       
            
            <Layout title = "The Earth Foundation Advisers"
                    background = "whitesmoke"
                    header
                    footer>
                    <TitleDesc
                    title = "The Earth Foundation Advisors"
                    desc = "The Earth Foundation's mission is to inspire, educate, mentor, and empower youth to accelerate positive change towards environmental sustainability. In achieving this mission, The Earth Foundation has surrounded itself with renowned experts i the field of environmental sustainability, to help guide its strategic development."
                    color = {{
                        title: "#17152B",
                        desc: "#17152B"
                    }} />
            
                
              <div className = {styles.cards}>
                <GridItem  >
                    <CardAdvisers />
                    </GridItem>
             </div>           
            
                   
            <Subscribe />
            </Layout>
      
    );
};

export default Advisers;

export const getStaticProps = async () => {
  return {
    props: {
      
    }
  };
};

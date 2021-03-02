
import Head from "next/head";
import Layout from "../components/Layout";

import { motion } from "framer-motion";
import styles from "../styles/advisers.module.scss";
import GridItem from '../components/Card/GridItem'
import Subscribe from "../components/Subscribe";


import CardAdvisers from "../components/CardAdvisers";

const Advisers = props => {
    return (
        <motion.div
            initial = {{ opacity: 0 }}
            animate = {{ opacity: 1 }}
            exit = {{ opacity: 0 }}>
            <Layout title = "The Earth Foundation Advisers">
                <div className = {styles.advisers}>
                    <div className = {styles.top}>
                        <div className = {styles.header}>
                            <div className = {styles.label}>
                                <h1>The Earth Foundation Advisors</h1>
                            </div>
                            <div className = {styles.line}></div>
                        </div>
                        <div className = {styles.summary}>
                            <span>The Earth Foundation's mission is to inspire, educate, mentor, and empower youth to accelerate positive change towards environmental sustainability. In achieving this mission, The Earth Foundation has surrounded itself with renowned experts i the field of environmental sustainability, to help guide its strategic development.</span>
                        </div>
                        <div>
                      </div>
                   </div>
              <div>
                <GridItem xs={12} sm={4} md={12} >
                    <CardAdvisers />
                    </GridItem>
             </div>           
             </div>   
                   
            <Subscribe />
            </Layout>
        </motion.div>
    );
};

export default Advisers;

export const getStaticProps = async () => {
  return {
    props: {
      
    }
  };
};

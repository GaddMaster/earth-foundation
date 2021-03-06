
import Layout from "components/Layout";
import Cover from "components/Cover";
import PersonViewer from "components/PersonViewer";
import PointBlurp from "components/PointBlurp";
import PersonViewerCarousel from "components/PersonViewerCarousel";
import Subscribe from "components/Subscribe";

import { motion } from "framer-motion";

import styles from "styles/about.module.scss";

import content from "assets/content";
import {useMediaQuery} from 'react-responsive';
import Head from 'next/head';

const About = () => {
    const isMobile = useMediaQuery({
      query: `(max-width: 600px)`,
    });

    return (
      <>
        <Head>
          <title>The Earth Foundation Background</title>
        </Head>
        <motion.div
            initial = {{ opacity: 0 }}
            animate = {{ opacity: 1 }}
            exit = {{ opacity: 0 }}>

            <Layout 
                title = "The Earth Foundation Background"
                footer = {{
                    background: {
                        outer: "white",
                        inner: "white"
                    }
                }}
                header>

                <Cover cover = {isMobile ? content.about.coverMobile : content.about.cover} />

                <div className = {styles.container}>
                    <div className = {styles.padding}>
                        <PointBlurp
                          isAlwaysOpened
                            image = "/images/about/slide1.jpg"
                            title = "Awakening"
                            desc = "For The Earth Foundation founder, seeing thousands of students outside his office window taking to the streets of Geneva, Switzerland, to protest the lack of progress towards environmental sustainability was an awakening."
                            lean = "left" />
                        <br />
                        <PointBlurp
                          isAlwaysOpened
                            image = "/images/about/slide2.jpg"
                            title = "Vision and Mission"
                            desc = "The Earth Foundation was founded as a Swiss nonprofit with the goal of taking this passion, enthusiasm and concern for the environment seen in the youth of today and help galvanize it."
                            lean = "right" />
                        <br />
                        <PointBlurp
                          isAlwaysOpened
                            image = "/images/about/slide3.jpg"
                            title = "Empowering the youth"
                            desc = "The Earth Foundation will take this enthused youth and inspire, educate, mentor, and empower it to effect real change and hopefully, in turn, embolden the following generation."
                            lean = "left" />
                    </div>
                </div>

                <PersonViewer 
                    title = "The Earth Foundation Board" 
                    items = {content.about.board}
                    striped
                    theme = {{
                        title : "#17182D",
                        header : "#D4AC75",
                        position: "#AA9487",
                        paragraph: "#FEFEFE",
                        background: "#17182D"
                    }} />
                    <br /><br />

                <PersonViewerCarousel 
                    title = "The Earth Foundation Team"
                    items = {content.about.team}
                    striped
                    theme = {{
                        title : "#CFAB79",
                        header : "#FDFEFE",
                        position: "#FDFEFE",
                        paragraph: "#FDFEFE",
                        background: "#064D3F"
                    }} />

                <br />

                <Subscribe 
                    background = {{
                        outer: "white",
                        inner: "whitesmoke"
                    }} />

            </Layout>
        
        </motion.div>
      </>
    );
};

export default About;

{/* <div className = {styles.boards}>

<div className = {styles.board}>
    <div className = {styles.image}>
        <img src = "/images/about/slide1.jpg" />
    </div>
    <div className = {styles.summary}>
        <span>For The Earth Foundation founder, seeing thousands of students outside his office window taking to the streets of Geneva, Switzerland, to protest the lack of progress towards environmental sustainability was an awakening</span>
    </div>
</div>

<div className = {styles.board}>
    <div className = {styles.image}>
        <img src = "/images/about/slide2.jpg" />
    </div>
    <div className = {styles.summary}>
        <span>The Earth Foundation was founded with the goal of taking this passion, enthusiasm and concern for the environment seen in the youth of today and help galvanize it</span>
    </div>
</div>

<div className = {styles.board}>
    <div className = {styles.image}>
        <img src = "/images/about/slide3.jpg" />
    </div>
    <div className = {styles.summary}>
        <span>The Earth Foundation will take this enthused youth and inspire, educate, mentor, and empower it to effect real change and hopefully, in turn, embolden the following generation</span>
    </div>
</div>

</div> */}
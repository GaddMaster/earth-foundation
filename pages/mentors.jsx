
import Layout from "components/Layout";
import TitleDesc from "components/TitleDesc";
import Subscribe from "components/Subscribe";
import MentorshipCircles from "components/MentorshipCircles";
import PointBlurp from "components/PointBlurp";
import CircleTextLink from "components/CircleTextLink";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import styles from "styles/earth.prize.mentor.module.scss";
import SlideSection from 'components/SlideSection';
import SlideSocials from 'components/SlideSocials';
import React, {useState} from 'react';
import {useMediaQuery} from 'react-responsive';

const Mentors = () => {
    const isMobile = useMediaQuery({
        query: `(max-width: 600px)`,
    });
    return (
        <Layout 
            title = "The Earth Prize Mentors"
            background = "whitesmoke"
            header
            footer
        >
            <SlideSection height={35} name="The Earth Prize Mentors" color="#CEAA7A" />
            <SlideSocials color="#CEAA7A" style={{ top: '220px' }} />
            <div className = {styles.container}>

                <TitleDesc
                    paragraphs = {[
                        "Becoming an Earth Prize Mentor is  a unique opportunity for university students to share and expand their knowledge on environmental sustainability and entrepreneurship, by advising participants in The Earth Prize, a $200,000 global youth environmental sustainability competition for students worldwide between the ages of 13 and 19.",
                        "Mentors will contribute to the development of students’ innovative project proposals by offering them guidance on their ideas and answering their questions. Mentors who will have demonstrated the highest levels of engagement will be given the chance to work individually with one of the ten The Earth Prize Finalists."
                    ]}
                    color = {{
                        title: "#CEAA7A",
                        desc: "#17152B"
                    }}  
                >
                    {isMobile
                      ? <h1 style={{ color: '#CEAA7A' }}>The Earth Prize Mentors</h1>
                      : <h1 style={{ color: '#CEAA7A' }}>The Earth Prize<br /> Mentors</h1>
                    }
                </TitleDesc>

                <MentorshipCircles />

                <div className = {styles.what}>
                    <div className = {styles.label}>
                        <div className = {styles.line}>What is</div>
                        <div className = {styles.line}>in it for you?</div>
                    </div>
                    <div className = {styles.divider}></div>
                </div>

                <PointBlurp
                    title = "Opportunity to grow your network."
                    desc = "All mentors will become part of The Earth Prize Alumni Association, a community of inspiring individuals and organizations offering mentorship, networking, internships, and professional placement opportunities."
                    lean = "left" />

                <PointBlurp
                    title = "Discover promising start-ups."
                    desc = "By becoming a mentor you will be able to connect with The Earth Foundation Incubator’s top entrepreneurs and have access to inspiring new start-ups leading the way towards environmental sustainability."
                    lean = "right" />

                <PointBlurp
                    title = "Boost your CV."
                    desc = "Mentoring for the The Earth Prize offers an excellent opportunity to develop and showcase transferable skills such as project management, problem-solving, and consulting. Each mentor will receive a certificate upon completion."
                    lean = "left" />

                <PointBlurp
                    title = "Expand your knowledge."
                    desc = "All mentors will have access to The Earth Prize learning platform featuring bespoke online materials on environmental issues, interviews with activists and social entrepreneurs, and real-world practical skill training on how to effect change."
                    lean = "right" />

                <PointBlurp
                    title = "Make an impact."
                    desc = "Joining The Earth Prize as a mentor will allow you to actively contribute to projects striving to make a positive impact on the environment and to serve as a role model for younger children, inspiring them to become future changemakers."
                    lean = "left" />

                <br />

                <CircleTextLink
                    text = "The Earth Prize Mentors"
                    link = "Coming soon"
                    disabled
                    radius = {60}
                    onClick = {() => console.log("CLICKED")}
                    justify = "flex-end" />

                <br />

                <div className = {styles.become}>
                    <div className = {styles.image} />
                    <div className = {styles.details}>
                        <div className = {styles.link}>
                            <Link href="https://theearthfoundation.typeform.com/to/trELQBzU">
                                  <div className = {styles.label}>
                                    <div className = {styles.line}>Become</div>
                                    <div className = {styles.line}>A Mentor</div>
                                  </div>
                            </Link>
                            <FontAwesomeIcon icon = {faArrowRight} />
                        </div>
                        <div className = {styles.desc}>
                            <span>The Earth Foundation will select a limited number of mentors with different areas of expertise from all over the world.</span>
                        </div>
                    </div>
                </div>

            </div>
         
            <Subscribe
                background = {{
                    outer: "whitesmoke",
                    inner: "white"
                }} />

        </Layout>
    );
};

export default Mentors;


import Layout from "../components/Layout";
import TitleDesc from "components/TitleDesc";
import Subscribe from "../components/Subscribe";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import styles from "styles/prize.mentor.module.scss";


const EarthPrize = () => {
    return (
        <Layout 
            title = "The Earth Prize"
            background = "whitesmoke"
            header
            footer>
            <TitleDesc
                title = "The Earth Prize Mentorship Program"
                desc = "The Earth Prize Mentorship Program offers a unique opportunity for university students to share and
                        expand their knowledge on environmental sustainability and entrepreneurship, by mentoring participants
                        in the Earth Prize. Mentors will contribute to the development of students' innovative project proposals by
                        offering them guidance on on their ideas and answering their questions. Mentors who will have demonstrated the
                        highest levels of engagement will be given the chance to work individually with one of the ten The Earth Prize Finalists."
                color = {{
                    title: "#CEAA7A",
                    desc: "#17152B"
                }} />
            <div className = {styles.circles}>
                <div className = {`${styles.circle} ${styles.image} ${styles.giraffe}`}>
                    <img src = "/images/giraffe-temp.jpg" alt = "giraffe" />
                </div>
                <div className = {`${styles.circle} ${styles.when}`}>
                    <div className = {styles.wrapper}>
                        <div className = {styles.index}>
                            <span>When?</span>
                        </div>
                        
                        <div className = {styles.divider}></div>
                        <div className = {styles.desc}>
                        <span>The Earth Prize Mentorship Program will take place between September 1st, 2021 and January 31st, 2022.</span>
                        </div>
                    </div>
                </div>
             </div>
               
          <div className = {styles.body}>
                    <div className = {styles.title}>
                <span>What is in it for you?</span>
                     </div>
                     <div className = {styles.opportunity}>
                        <div className = {styles.title}>
                            <span>Opportunity to grow your network.</span>
                        </div>
                        <div className = {styles.body}>
                      <span>All mentors will become part of The Earth Prize Alumni Association, a community of inspiring
                            individuals and organizations offering mentorship, networking, internships, and professional placement opportunities.
                      </span>
                      </div>
                     </div>

                     <div className = {styles.discover}>
                      <div className = {styles.title}>
                        <span>Discover promising start-ups.</span>
                      </div>
                      <div className = {styles.body}>
                            <span>By becoming a mentor you will be able to connect with The Earth Foundation Incubator Initiative's top
                                entrepreneurs and have access to inspiring new start-ups leading the way in environmental sustainability.
                            </span>
                         </div>
                    </div>

                    <div className = {styles.boost}>
                        <div className = {styles.title}>
                            <span>Boost your CV.</span>
                        </div>
                    <div className = {styles.body}>
                        <span>The Earth Prize Mentorship Program offers an excellent opportunity to develop and showcase transferable skills such as project
                                management, problem-solving, and consulting. Each mentor will also receive a certificate upon completion.</span>
                        </div>                    
                    </div>

                    <div className = {styles.expand}>
                        <div className = {styles.title}>
                            <span>Expand your expertise.</span>
                        </div>
                        <div className = {styles.body}>
                            <span>All mentors will have access to The Earth Prize learning platform featuring bespoke online materials on environmental issues, interviews
                                with activists and social entrepreneurs, and real-world practical skill training on how to effect change.
                            </span>
                        </div>
                    </div>

                    <div className = {styles.impact}>
                        <div className = {styles.title}>
                            <span>Make an impact.</span>
                        </div>
                        <div className = {styles.body}>
                            <span>Joining The Earth Prize as a mentor will allow you to actively contribute to projects striving to make a positive impact on the environment and 
                                to serve as a role model for younger students, inspiring them to become future changemakers.</span>
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

export default EarthPrize;

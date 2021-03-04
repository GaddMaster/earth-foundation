
import Layout from "../components/Layout";
import TitleDesc from "components/TitleDesc";
import Subscribe from "../components/Subscribe";
import MentorshipCircles from '../components/MentorshipCircles'



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
           <MentorshipCircles />
           </div>
               
          <div className = {styles.body}>
                    <div className = {styles.title}>
                <span>What is</span><br /><span> in it for you?</span>
                     </div>
                     <div className = {styles.line}></div>
                     <div className = {styles.opportunity}>
                     <div className = {styles.lineandcircle}></div>
                        <div className = {styles.opptitle}>
                            <span>Opportunity to grow your network.</span>
                        </div>
                        <div className = {styles.oppbody}>
                      <span>All mentors will become part of The Earth Prize Alumni Association, a community of inspiring
                            individuals and organizations offering mentorship, networking, internships, and professional placement opportunities.
                      </span>
                      </div>
                     </div>

                     <div className = {styles.discover}>
                      <div className = {styles.distitle}>
                        <span>Discover promising start-ups.</span>
                      </div>
                      <div className = {styles.disbody}>
                            <span>By becoming a mentor you will be able to connect with The Earth Foundation Incubator Initiative's top
                                entrepreneurs and have access to inspiring new start-ups leading the way in environmental sustainability.
                            </span>
                         </div>
                    </div>

                    <div className = {styles.boost}>
                        <div className = {styles.boosttitle}>
                            <span>Boost your CV.</span>
                        </div>
                    <div className = {styles.boostbody}>
                        <span>The Earth Prize Mentorship Program offers an excellent opportunity to develop and showcase transferable skills such as project
                                management, problem-solving, and consulting. Each mentor will also receive a certificate upon completion.</span>
                        </div>                    
                    </div>

                    <div className = {styles.expand}>
                        <div className = {styles.expandtitle}>
                            <span>Expand your expertise.</span>
                        </div>
                        <div className = {styles.expandbody}>
                            <span>All mentors will have access to The Earth Prize learning platform featuring bespoke online materials on environmental issues, interviews
                                with activists and social entrepreneurs, and real-world practical skill training on how to effect change.
                            </span>
                        </div>
                    </div>

                    <div className = {styles.impact}>
                        <div className = {styles.impacttitle}>
                            <span>Make an impact.</span>
                        </div>
                        <div className = {styles.impactbody}>
                            <span>Joining The Earth Prize as a mentor will allow you to actively contribute to projects striving to make a positive impact on the environment and 
                                to serve as a role model for younger students, inspiring them to become future changemakers.</span>
                        </div>
                    </div>
          </div>
         
                <div className = {styles.img}>
                    <img src = '/images/bird.png' />
                   
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

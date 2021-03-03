
import Layout from "../components/Layout";
import TitleDesc from "components/TitleDesc";
import Subscribe from "../components/Subscribe";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import styles from "styles/prize.module.scss";

const EarthPrize = () => {
    return (
        <Layout 
            title = "The Earth Prize"
            background = "whitesmoke"
            header
            footer>
            <TitleDesc
                title = "The Earth Prize"
                desc = "A $200,000 global youth environmental sustainability competition open to all students worldwide between the ages of 13 and 19, with rewards in the form of university scholarships for students and grants for schools. Through The Earth Prize, students are challenged, mentored, and inspired to effect real change by designing their own environmental sustainability projects, products, organizations or enterprises"
                color = {{
                    title: "#17152B",
                    desc: "#17152B"
                }} />
            <div className = {styles.circles}>
                <div className = {`${styles.circle} ${styles.image} ${styles.tree}`}>
                    <img src = "/images/trees.jpg" alt = "trees" />
                </div>
                <div className = {`${styles.circle} ${styles.register}`}>
                    <div className = {styles.wrapper}>
                        <div className = {styles.index}>
                            <span>1.</span>
                        </div>
                        <div className = {styles.header}>
                            <span>Registration Phase</span>
                        </div>
                        <div className = {styles.timeline}>
                            <span>1st Sept. 2021 - 31st Oct. 2021</span>
                        </div>
                        <div className = {styles.divider}></div>
                        <div className = {styles.desc}>
                            <span>Individuals or teams of up to 5 students can register with their supervisor to access bespoke environmental sustainability online learning materials, mentoring, entrepreneurial training, and a global forum to exchange with students and experts from around the world</span>
                        </div>
                    </div>
                </div>
                <div className = {`${styles.circle} ${styles.submit}`}>
                    <div className = {styles.wrapper}>
                        <div className = {styles.index}>
                            <span>2.</span>
                        </div>
                        <div className = {styles.header}>
                            <span>Submissions Phase</span>
                        </div>
                        <div className = {styles.timeline}>
                            <span>1st Nov. 2021 - 31st Jan 2022</span>
                        </div>
                        <div className = {styles.divider}></div>
                        <div className = {styles.desc}>
                            <span>Registered teams will continue to work on their environmental sustainability ideas with the guidance of The Earth Prize mentors. They will then submit their Project Proposal describing their chosen solution, which could be a new idea with implementation potential or an already existing project, with local, national or global reach</span>
                        </div>
                    </div>
                </div>
                <div className = {`${styles.circle} ${styles.final}`}>
                    <div className = {styles.wrapper}>
                        <div className = {styles.index}>
                            <span>3.</span>
                        </div>
                        <div className = {styles.header}>
                            <span>Fellows Distinction Announcement</span>
                        </div>
                        <div className = {styles.timeline}>
                            <span>1st Feb. 2022 - 6th Feb. 2022</span>
                        </div>
                        <div className = {styles.divider}></div>
                        <div className = {styles.desc}>
                            <span>Each team’s submission will be reviewed by the Adjudicating Panel, a group of highly renowned experts, based upon the official scoring rubric. The strongest Project Proposals will be awarded with The Earth Prize Fellow distinction, which recognizes submissions of outstanding quality</span>
                        </div>
                    </div>
                </div>
                <div className = {`${styles.circle} ${styles.image} ${styles.deer}`}>
                    <img src = "/images/deer.jpg" alt = "deer" />
                </div>
                <div className = {`${styles.circle} ${styles.adjudicating}`}>
                    <div className = {styles.wrapper}>
                        <div className = {styles.index}>
                            <span>4.</span>
                        </div>
                        <div className = {styles.header}>
                            <span>Finalists Phase</span>
                        </div>
                        <div className = {styles.timeline}>
                            <span>7th Feb. 2022 - 4th Mar. 2022</span>
                        </div>
                        <div className = {styles.divider}></div>
                        <div className = {styles.desc}>
                            <span>The top 10 teams will be selected from The Earth Prize Fellows and invited onto the Finalists Phase, where they will receive the support of an assigned Earth Prize mentor and one of The Earth Prize Ambassadors to complete their Project Proposals</span>
                        </div>
                    </div>
                </div>
                <div className = {`${styles.circle} ${styles.ceremony}`}>
                    <div className = {styles.wrapper}>
                        <div className = {styles.index}>
                            <span>5.</span>
                        </div>
                        <div className = {styles.header}>
                            <span>The Earth Prize Ceremony</span>
                        </div>
                        <div className = {styles.timeline}>
                            <span>End of March, 2022</span>
                        </div>
                        <div className = {styles.desc}>
                            <span>The top 3 teams will be selected and invited to The Earth Prize Ceremony, where each team will present their Final Project Proposal and The Earth Prize Winner will be announced. The winning team will receive a prize of $100,000, to be distributed equally between the team and their school. Two runner-up teams will be awarded $50,000 each to be distributed in the same fashion</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className = {styles.ready}>
                <div className = {styles.header}>
                    <div className = {styles.line}>Ready for the</div>
                    <div className = {styles.line}>challenge?</div>
                </div>
                <div className = {styles.link}>
                    <div className = {styles.label}>
                        <div className = {styles.line}>Discover</div>
                        <div className = {styles.line}>the earth prize</div>
                    </div>
                    <div className = {styles.icon}>
                        <FontAwesomeIcon icon = {faArrowRight} />
                    </div>
                </div>
            </div>
            <div className = {styles.become}>
                <div className = {styles.header}>
                    <div>Become part of</div>
                    <div>our network</div>
                </div>
                <div className = {styles.desc}>
                    <span>All participants recognized with The Earth Prize Fellow distinction will be automatically enrolled in The Earth Foundation Alumni Association. This is a community of passionate individuals and organizations offering mentorship, networking, internships, and professional placement opportunities</span>
                </div>
            </div>
            <div className = {styles.bass}>
                <div className = {styles.details}>
                    <div className = {styles.header}>
                        <span>Our Ambassadors</span>
                    </div>
                    <div className = {styles.desc}>
                        <span>The Earth Prize Ambassadors are inspiring individuals with a strong passion for environmental sustainability who will accompany The Earth Prize Finalists throughout their social media engagement campaign, helping them raise awareness about their project and increasing their potential for impact</span>
                    </div>
                    <div className = {styles.meet}>
                        <span>Meet The Ambassadors</span>
                        <FontAwesomeIcon icon = {faArrowRight} />
                    </div>
                </div>
                <div className = {styles.clues}>
                    <div className = {`${styles.clue} ${styles.baby}`}>
                        <span>?</span>
                    </div>
                    <div className = {`${styles.clue} ${styles.mother}`}>
                        <span>?</span>
                    </div>
                    <div className = {`${styles.clue} ${styles.father}`}>
                        <span>?</span>
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

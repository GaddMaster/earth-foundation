
import styles from "styles/mentorship.circles.module.scss";

const MentorshipCircles = props => {
    return (
        <div className = {styles.container}>
            <div className = {`${styles.circle} ${styles.giraffe}`}>
                <img src = "/images/giraffe.jpg" alt = "giraffe" />
            </div>
            <div className = {`${styles.circle} ${styles.boabab}`}>
                <img src = "/images/boabab.jpg" alt = "boabab" />
            </div>
            <div className = {`${styles.circle} ${styles.when}`}>
                <div className = {styles.padding}>
                    <div className = {styles.header}>
                        <span>When?</span>
                    </div>
                    <div className = {styles.divider}></div>
                    <div className = {styles.desc}>
                        <spa>The mentoring will take place between September 1st, 2021 and January 31st, 2022</spa>
                    </div>
                </div>
            </div>
            <div className = {`${styles.circle} ${styles.how}`}>
                <div className = {styles.padding}>
                    <div className = {styles.header}>
                        <span>How?</span>
                    </div>
                    <div className = {styles.divider}></div>
                    <div className = {styles.desc}>
                        <span>The mentoring will take place virtually, through The Earth Prize platform</span>
                    </div>
                </div>
            </div>
            <div className = {`${styles.circle} ${styles.role}`}>
                <div className = {styles.padding}>
                    <div className = {styles.header}>
                        <span>Your role</span>
                    </div>
                    <div className = {styles.divider}></div>
                    <div className = {styles.desc}>
                        <span>Mentors will spend about an hour a week on The Earth Prize platform, answering questions from participants relating to mentors’ fields of expertise and interest, and providing advice on student project proposals</span>
                    </div>
                </div>
            </div>
            <div className = {`${styles.circle} ${styles.profile}`}>
                <div className = {styles.padding}>
                    <div className = {styles.header}>
                        <div className = {styles.line}>Your</div>
                        <div className = {styles.line}>Profile</div>
                    </div>
                    <div className = {styles.divider}></div>
                    <div className = {styles.desc}>
                        <span>The Earth Prize mentoring is open to all university students who are passionate about sustainability, entrepreneurship and looking for an opportunity to share their knowledge</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MentorshipCircles;
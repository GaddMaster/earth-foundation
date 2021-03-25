
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
                        <div>The mentoring will</div>
                        <div>take place between</div>
                        <div>September 1st, 2021 and</div>
                        <div>January 31st, 2022.</div>
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
                        <span>The mentoring will take place virtually, through The Earth Prize platform.</span>
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
                        <div>Mentors will spend about an hour a week</div>
                        <div>on The Earth Prize platform, answering</div>
                        <div>questions from participants relating</div>
                        <div>to mentors’ fields of expertise and interest,</div>
                        <div>and providing advice on student</div>
                        <div>project proposals.</div>
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
                        <div>The Earth Prize mentoring</div>
                        <div>is open to all university students</div>
                        <div>who are passionate about</div>
                        <div>sustainability and entrepreneurship</div>
                        <div>and looking for an opportunity to</div>
                        <div>share their knowledge.</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MentorshipCircles;
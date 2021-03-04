
import { useState } from "react";

import Layout from "components/Layout";
import Subscribe from "components/Subscribe";

import ButtonBase from "@material-ui/core/ButtonBase";

import http from "utils/http";

import styles from "styles/mentor.application.module.scss";

import topics from "assets/topics";

const MentorApplication = () => {

    let [first, onFirst] = useState("Daniel");
    let [last, onLast] = useState("Gadd");
    let [dob, onDOB] = useState("08/07/1987");
    let [email, onEmail] = useState("danielgadd@outlook.com");
    let [institution, onInstitution] = useState("Limerick Institute of Technology");
    let [degree, onDegree] = useState("Computer Science");
    let [expect, onExpect] = useState("2018");
    let [selected, onTopics] = useState([]);
    let [other, onOther] = useState("");
    let [why, onWhy] = useState([]);
    let [success, onSuccess] = useState("");

    const onTopic = topic => {
        if (selected.find(t => t === topic)) onTopics(selected.filter(t => t !== topic));
        else onTopics(selected.concat([topic]));
    };

    const onSubmit = () => {
        http.request("PUT", "/api/apply", { first, last, dob, email, institution, degree, expect, selected, other, why }, data => {
            if (data.error) alert(data.message);
            else {
                onFirst("");
                onLast("");
                onDOB("");
                onEmail("");
                onInstitution("");
                onDegree("");
                onExpect("");
                onTopics([]);
                onOther("");
                onWhy("");
                onSuccess(data.message);
            }
        });
    };
    
    return (
        <Layout 
            title = "The Earth Prize"
            background = "whitesmoke"
            header
            footer>

            <div className = {styles.container}>
                <div className = {styles.sub}>
                    <span>become a mentor to the next generation</span>
                </div>
                <div className = {styles.title}>
                    <span>the earth prize program mentorship application form</span>
                </div>
                <div className = {styles.divider}></div>

                <div className = {`${styles.box} ${styles.wrap}`}>
                    <div className = {styles.label}>
                        <span>First Name</span>
                    </div>
                    <input
                        value = {first}
                        placeholder = "Your first name here"
                        onChange = {e => onFirst(e.target.value)} />
                </div>

                <div className = {`${styles.box} ${styles.wrap}`}>
                    <div className = {styles.label}>
                        <span>Last Name</span>
                    </div>
                    <input
                        value = {last}
                        placeholder = "Your last name here"
                        onChange = {e => onLast(e.target.value)} />
                </div>

                <div className = {`${styles.box} ${styles.wrap}`}>
                    <div className = {styles.label}>
                        <span>Date of Birth</span>
                    </div>
                    <input
                        value = {dob}
                        placeholder = "Select your birth date"
                        onChange = {e => onDOB(e.target.value)} />
                </div>

                <div className = {`${styles.box} ${styles.wrap}`}>
                    <div className = {styles.label}>
                        <span>Email Address</span>
                    </div>
                    <input
                        value = {email}
                        placeholder = "Your email here"
                        onChange = {e => onEmail(e.target.value)} />
                </div>

                <div className = {styles.box}>
                    <div className = {styles.label}>
                        <span>Academic Institution</span>
                    </div>
                    <input
                        value = {institution}
                        placeholder = "Academic Institution"
                        onChange = {e => onInstitution(e.target.value)} />
                </div>

                <div className = {`${styles.box} ${styles.wrap}`}>
                    <div className = {styles.label}>
                        <span>Title of degree you are pursuing</span>
                    </div>
                    <input
                        value = {degree}
                        placeholder = "Degree title here"
                        onChange = {e => onDegree(e.target.value)} />
                </div>

                <div className = {`${styles.box} ${styles.wrap}`}>
                    <div className = {styles.label}>
                        <span>Expected graduation date</span>
                    </div>
                    <input
                        value = {expect}
                        placeholder = "Choose date"
                        onChange = {e => onExpect(e.target.value)} />
                </div>

                <div className = {styles.box}>
                    <div className = {styles.label} style = {{marginBottom:40}}>
                        <span>Which environmental topics are you most knowledgeable about?</span>
                    </div>
                    <div className = {styles.topics}>
                        {topics.map(topic => (
                            <ButtonBase
                                className = {`${styles.button} ${styles[Boolean(selected.find(t => t === topic))]}`}
                                onClick = {onTopic.bind(this, topic)}
                                key = {topic.replace(/ /g, '-')}>
                                <span>{topic}</span>
                            </ButtonBase>
                        ))}
                    </div>
                </div>

                <div className = {styles.box} style = {{marginTop:-40}}>
                    <textarea
                        value = {other}
                        placeholder = "Other..."
                        onChange = {e => onOther(e.target.value)} />
                </div>

                <div className = {styles.box}>
                    <div className = {styles.label}>
                        <span>Please tell us why you want to become part of The Earth Prize Mentorship Program</span>
                    </div>
                    <textarea
                        value = {why}
                        placeholder = "..."
                        onChange = {e => onWhy(e.target.value)} />
                    <span>250 - 500 words</span>
                </div>

                <ButtonBase
                    className = {styles.submit}
                    onClick = {onSubmit}>
                        <span>Submit Application</span>
                </ButtonBase>

                {success && 
                    <div className = {styles.success}>
                        <span>{success}</span>
                    </div> 
                }
            
            </div>

            <Subscribe />

        </Layout>
    );
};

export default MentorApplication;

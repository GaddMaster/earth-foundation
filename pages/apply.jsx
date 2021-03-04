
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

            {/* My Header COmponent */}

            {/* My Circles component */}

            {/* Your rows which float left and right */}

            {/* My circle text component */}
            
            </div>

            <Subscribe />

        </Layout>
    );
};

export default MentorApplication;

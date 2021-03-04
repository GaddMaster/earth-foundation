
import Link from "next/link";

import Layout from "components/Layout";
import TitleDesc from "components/TitleDesc";
import Subscribe from "components/Subscribe";

import ButtonBase from "@material-ui/core/ButtonBase";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import styles from "styles/test.module.scss";

const Test = () => {
  return (
    <Layout 
        title = "The Earth Prize Mentor"
        header
        footer>
        <div className = {styles.container}>
             <TitleDesc
                title = "The Earth Prize Mentors"
                desc = "Becoming an Earth Prize Mentor is  a unique opportunity for university students to share and expand their knowledge on environmental sustainability and entrepreneurship, by advising participants in The Earth Prize, a $200,000 global youth environmental sustainability competition for students worldwide between the ages of 13 and 19 years. Mentors will contribute to the development of students’ innovative project proposals by offering them guidance on their ideas and answering their questions. Mentors who will have demonstrated the highest levels of engagement will be given the chance to work individually with one of the ten The Earth Prize Finalists"
                color = {{
                    title: "#CEAB79",
                    desc: "#000210" 
                }} />   
        </div>
        <Subscribe />
    </Layout>
  );
};

export default Test;
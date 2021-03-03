
import Layout from "../components/Layout";
import Cover from "components/Cover";
import Board from "components/Board";
import Latest from "../components/Latest";
import Subscribe from "../components/Subscribe";

import content from "../assets/content";

const Home = () => {
    return (
        <Layout 
            title = "The Earth Foundation | Home | Landing"
            header
            footer = {{
                show: true,
                background: "white"
            }}>
            <Cover cover = {content.home.cover} />
            {content.home.blocks.map((item, index) =>
                <Board
                    item = {item}
                    index = {index}
                    key = {index} />
            )}
            <Latest />
            <Subscribe
                background = {{
                    outer: "whitesmoke",
                    inner: "white"
                }} />
        </Layout>
    );
};

export default Home;


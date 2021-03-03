
import Layout from "../components/Layout";
import Cover from "components/Cover";
import Board from "components/Board";
import Latest from "../components/Latest";
import Subscribe from "../components/Subscribe";

import content from "../assets/content";

const Home = () => {
    return (
        <Layout title = "The Earth Foundation | Home | Landing">
            <Cover cover = {content.home.cover} />
            {content.home.blocks.map((item, index) =>
                <Board
                    item = {item}
                    index = {index}
                    key = {index} />
            )}
            <Latest />
            <Subscribe />
        </Layout>
    );
};

export default Home;


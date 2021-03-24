
import Layout from "components/Layout";
import Cover from "components/Cover";
import Board from "components/Board";
import Latest from "../components/Latest";
import Subscribe from "../components/Subscribe";

import content from "../assets/content";
import SlideSection from 'components/SlideSection';
import Head from 'next/head';

const Home = () => {
    return (
      <>
        <Head>
          <title>The Earth Foundation</title>
        </Head>
        <Layout
            title = "The Earth Foundation | Home | Landing"
            header
            footer>
            <Cover cover = {content.home.cover} />
            {content.home.boards.map((board, index) =>
                <Board
                    board = {board}
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
      </>
    );
};

export default Home;


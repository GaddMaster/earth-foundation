
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
            <meta property = "og:title" content="The Earth Foundation" key="title" />
            <meta property = "og:description" content = "The Earth Foundation empowers youth to accelerate positive change towards environmental sustainability" key="description" />
            <meta property = "og:image" content = "/images/nasa-Q1p7bh3SHj8-unsplash.jpg">
            <link rel = "icon" type = "image/png" href = "/images/logo.png">
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


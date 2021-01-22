
import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
import { GetStaticProps } from "next";
import { config, library } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
config.autoAddCss = false;
library.add(
  faSearch
);

export default function Home({ allPostsData }: { allPostsData: { date: string, title: string, id: string } [] }) {
  return (
    <Layout home>

      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section>
        <div>My Image</div>
      </section>

    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData
    }
  };
};

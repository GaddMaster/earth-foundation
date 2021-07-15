
import Layout from "../components/Layout";

import styles from "styles/schools.module.scss";
import SlideSection from 'components/SlideSection';
import SlideSocials from 'components/SlideSocials';
import React, {useEffect} from 'react';
import content from "assets/content";
import Subscribe from 'components/Subscribe';
import Head from 'next/head';
import Link from 'next/link';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';

const Schools = () => {

  useEffect(() => {
    AmCharts.makeChart("mapdiv", {
      type: "map",
      theme: "dark",
      projection: "mercator",
      panEventsEnabled : true,
      backgroundColor : "#FFFFFF",
      backgroundAlpha : 1,
      zoomControl: {
        zoomControlEnabled : true
      },
      dataProvider : {
        map : "worldHigh",
        getAreasFromMap : true,
        areas :
          [
            {
		"id": "AT",
  "showAsSelected": true
  },
    {
    "id": "IE",
    "showAsSelected": true
    },
    {
    "id": "IT",
    "showAsSelected": true
    },
    {
    "id": "NL",
    "showAsSelected": true
    },
    {
    "id": "NO",
    "showAsSelected": true
    },
    {
    "id": "PL",
    "showAsSelected": true
    },
    {
    "id": "ES",
    "showAsSelected": true
    },
    {
    "id": "CH",
    "showAsSelected": true
    },
    {
    "id": "TR",
    "showAsSelected": true
    },
    {
    "id": "GB",
    "showAsSelected": true
    },
    {
    "id": "CR",
    "showAsSelected": true
    },
    {
    "id": "DO",
    "showAsSelected": true
    },
    {
    "id": "US",
    "showAsSelected": true
    },
    {
    "id": "AR",
    "showAsSelected": true
    },
    {
    "id": "GF",
    "showAsSelected": true
    },
    {
    "id": "PE",
    "showAsSelected": true
    },
    {
    "id": "ET",
    "showAsSelected": true
    },
    {
    "id": "KE",
    "showAsSelected": true
    },
    {
    "id": "ZA",
    "showAsSelected": true
    },
    {
    "id": "BT",
    "showAsSelected": true
    },
    {
    "id": "IN",
    "showAsSelected": true
    },
    {
    "id": "ID",
    "showAsSelected": true
    },
    {
    "id": "JO",
    "showAsSelected": true
    },
    {
    "id": "LB",
    "showAsSelected": true
    },
    {
    "id": "NP",
    "showAsSelected": true
    },
    {
    "id": "AE",
    "showAsSelected": true
    },
    {
    "id": "VN",
    "showAsSelected": true
    },
    {
    "id": "AU",
    "showAsSelected": true
    },
    {
      "id": "SG",
      "showAsSelected": true
    },
    {
      "id": "UG",
      "showAsSelected": true
    },
    {
      "id": "IT",
      "showAsSelected": true
    },
    {
      "id": "NZ",
      "showAsSelected": true
    }
          ]
      },
      areasSettings : {
        autoZoom : true,
        color : "#AFE0D7",
        colorSolid : "#00B7BD",
        selectedColor : "#00B7BD",
        outlineColor : "#FFFFFF",
        rollOverColor : "#9EC2F7",
        rollOverOutlineColor : "#000000"
      }
    });
  }, []);

  return (
      <>
        <Head>
          <title>The Earth Prize Participating Schools</title>
          <meta name="og:title" property="og:title" content="The Earth Prize Participating Schools" />
          <meta name="og:image" content="/images/logo.png" />
          <script type="text/javascript" src="/static/map.js" />
        </Head>
        <Layout
            title = "The Earth <br/> Prize Participating Schools"
            background = "whitesmoke"
            header
            footer
        >
            <SlideSection height={35} name="The Earth Prize Participating Schools" color="#CEAA7A" />
            <SlideSocials color="#CEAA7A" style={{ top: '220px' }} />
            <div className = {styles.wrapper}>
                <div className = {styles.container}>
                    <h1 className={styles.title}>The Earth Prize <br />Participating Schools
                    </h1>
                  <div className={styles.seperator} />
                    <p className={styles.text}>Education is a key aspect in enabling our societies to become sustainable. Indeed, it is in schools that the young generation finds inspiration and develops important values to become fruitful members of society. The Earth Prize offers students a unique opportunity to learn about environmental sustainability and to access a platform for their innovative ideas. In keeping with this goal, The Earth Prize is honored to be supported by schools all over the world.</p>
                  <p className={styles.subtitle}>Below are some of the schools which have confirmed their participation in The Earth Prize.</p>
                  <div className={styles.seperatorLong} />
                  <div className = {styles.link}>
                    <Link href="https://www.theearthprize.org">
                      <div className = {styles.label}>
                        Find out how to get involved
                      </div>
                    </Link>
                    <FontAwesomeIcon icon = {faArrowRight} />
                  </div>
                  <div className={styles.logosWrapper}>
                    {content.schools.map(school => (
                      <a href={school.url} key={school.url} target="_blank"><div style={{ backgroundImage: `url(${school.image})` }} /></a>
                    ))}
                  </div>
                </div>
            </div>
          <p className={styles.subtitle2}>Countries where schools have already pre-registered for The Earth Prize</p>
          <div id="mapdiv" className={styles.map} />
          <div className={styles.countries}>
            {content.schoolsCountries.sort().map(country => (
              <p>{country}</p>
            ))}
          </div>
          <Subscribe
            background = {{
                outer: "whitesmoke",
                inner: "white"
            }} />
        </Layout>
      </>
    );
};

export default Schools;

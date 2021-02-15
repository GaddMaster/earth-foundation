import React, { PureComponent } from "react";
import { motion } from "framer-motion";
import Head from "next/head";

import TouchControl from "../components/TouchControl";
import Slide from "../components/Slide";
import Section from "../components/Section";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";
import Team from "../components/Team";

class AboutUs extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      touch: false,
      posX: 0,
      posY: 0,
      current: 0,
      percentage: 0,
      direction: "",
      threshold: 20,
      push: false,
      pull: true,
      gesture: "",
      lock: false
    };
  };

  onTouch = (touch, posX, posY, gesture) => {
    if (this.state.lock) return;
    let current = this.state.current;
    if (gesture === "push" || this.state.percentage < 0) {
      if (gesture || this.state.percentage < (this.state.threshold * -1)) {
        if (this.state.push) {
          if (this.state.current === 1) {
            current = 0;
            this.setState({
              push: false,
              pull: true
            });
          }
          else if (this.state.current === 2) current = 1;
        }
        this.setState({ gesture: "push" });
        setTimeout(() => this.setState({ gesture: "" }), 500);
      }
    } else if (gesture === "pull" || this.state.percentage > 0) {
      if (gesture || this.state.percentage > this.state.threshold) {
        if (this.state.pull) {
          if (this.state.current === 0) current = 1;
          else if (this.state.current === 1) {
            current = 2;
            this.setState({
              push: true,
              pull: false
            });
          }
        }
        this.setState({ gesture: "pull" });
        setTimeout(() => this.setState({ gesture: "" }), 500);
      }
    }
    this.setState({
      touch,
      posX,
      posY,
      current,
      percentage: 0,
      direction: ""
    });
  };

  onCurrent = direction => {
    if (this.state.lock) return;
    let current = this.state.current;
    let gesture = this.state.gesture;
    if (direction === "up") {
      gesture = "push";
      if (this.state.push && this.state.current === 1) current--;
      else gesture = "push";
    } else if (direction === "down") {
      gesture = "pull";
      if (this.state.pull && this.state.current === 1) current++;
      else if (this.state.current < 2) current++;
      else gesture = "pull";
    }
    this.onTouch(false, 0, 0, gesture);
  };

  onDragging = (direction, percentage) => {
    this.setState({
      direction,
      percentage
    });
  };

  onLock = (name, value) => this.setState({ [name]: value });

  render = () => {

    console.clear();
    console.log("");
    console.log("LOCK : ", this.state.lock);
    console.log(`PUSH : %c${this.state.push}`, `color:${this.state.push ? "green" : "red"}`);
    console.log(`PULL : %c${this.state.pull}`, `color:${this.state.pull ? "green" : "red"}`);
    console.log("CURRENT : ", this.state.current);
    console.log("GESTURE : ", this.state.gesture);

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}>
        <Head>
          <title>The Earth Foundation | About Us | Landing</title>
        </Head>

        <Slide
          index={0}
          current={this.state.current}
          touch={this.state.touch}
          percentage={this.state.percentage}
          pull={false}
          push={false}
          background="yellow">
          <Section
            cover="/images/jeremy-bishop-dR_q93lfaTw-unsplash.jpg"
            title="The Earth Foundation Background"
            paragraphs={[
              "The passion and concern that young people have about environmental sustainability became very",
              "evident during the series of global school strikes which spread across the world in 2019, inspired",
              "by the actions of environmental activist Greta Thunberg."
            ]} />
        </Slide>

        <Slide
          index={1}
          current={this.state.current}
          touch={this.state.touch}
          percentage={this.state.percentage}
          pull={this.state.pull && this.state.current === 0}
          push={this.state.push && this.state.current === 1}>

          <Team
            current={this.state.current}
            touch={this.state.touch}
            percentage={this.state.percentage}
            posX={this.state.posX}
            posY={this.state.posY}
            gesture={this.state.gesture} />

          {/* <Subscribe />
          <Footer /> */}
        </Slide>

        <TouchControl
          onTouch={this.onTouch}
          onDragging={this.onDragging}
          onGesture={this.onGesture}
          onCurrent={this.onCurrent} />
      </motion.div>
    )
  }
}


export default AboutUs;
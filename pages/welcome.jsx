import Layout from "../components/Layout";
import Link from "next/link";
import WelcomeHomeIconsList from "../components/WelcomeHomeIconsList";

import welcomeStyle from "../styles/welcome.module.css";

export default function welcome() {
  return (
    <Layout header>
      <div className={welcomeStyle.wrapper}>
        <div className={welcomeStyle.container}>
          <div className={welcomeStyle.leftAside}>
            <img
              className={welcomeStyle.welcomeImage}
              src="images/welcome-left-side.png"
              alt=""
            />
          </div>
          <div className={welcomeStyle.main}>
            <h1 className={welcomeStyle.title}>
              Welcome to <br /> our community
            </h1>
            <div className={welcomeStyle.imageSpliter}>
              <img src="images/welcome-page-line-spliter.png" alt="" />
            </div>
            <h2 className={welcomeStyle.textBody}>
              We are exited to have you on board. <br />
              How would you like to get involved?
            </h2>
            <Link href="/">
              <div className={welcomeStyle.takeSurveyBtn}>
                TAKE A SHORT SURVEY
              </div>
            </Link>
            <Link href="/">
              <div className={welcomeStyle.backHomeBtn}>
                BACK TO THE HOME PAGE
              </div>
            </Link>
          </div>
          <div className={welcomeStyle.rightAside}>
            <WelcomeHomeIconsList />
          </div>
        </div>
      </div>
    </Layout>
  );
}

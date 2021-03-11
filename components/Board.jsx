
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle as solid, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faCircle as hollow } from "@fortawesome/free-regular-svg-icons";

import styles from "styles/board.module.scss";
import SlideSection from 'components/SlideSection';
import SlideSocials from 'components/SlideSocials';

const Board = props => {
    let { board, index } = props;
    return (
        <div
            className = {styles.board}
            key = {index}>
            <SlideSection height={board.section_height} name={board.section} color={board.section_color} />
            <SlideSocials color={board.socials_color} />
            <div className = {styles.wrapper}>
                <div className = {styles.banner} style = {{background:`url(${board.image})`}}></div>
                <div className = {styles.block} style = {{background:board.background||"white"}}>
                    <div className = {styles.padding}>
                        <div className = {styles.pagination}>
                            <div className = {styles.index}>
                                <span>0{index+1}</span>
                            </div>
                            <div className = {styles.count}>
                                <span>04</span>
                            </div>
                            <div className = {styles.dots}>
                                <FontAwesomeIcon icon = {index===0?solid:hollow} className = {styles.dot} />
                                <FontAwesomeIcon icon = {index===1?solid:hollow} className = {styles.dot} />
                                <FontAwesomeIcon icon = {index===2?solid:hollow} className = {styles.dot} />
                                <FontAwesomeIcon icon = {index===3?solid:hollow} className = {styles.dot} />
                            </div>
                        </div>
                        <div className = {styles.header}>
                            <h1>
                                {board.label}
                                {board.label_2 && (
                                  <>
                                      <br/>
                                      {board.label_2}
                                  </>
                                )}
                                {board.label_3 && (
                                  <>
                                      <br/>
                                      {board.label_3}
                                  </>
                                )}
                            </h1>
                        </div>
                        <div className = {styles.summary}>
                            <p>{board.summary}</p>
                        </div>
                        {board.links.map((link, i) => (
                          <Link href = {link.link} key = {i}>
                              <div className = {styles.link} style = {{color:link.color,marginBottom:20}}>
                                  <div className = {styles.label}>
                                      <span>{link.label}</span>
                                  </div>
                                  <div className = {styles.icon}>
                                      <FontAwesomeIcon icon = {faArrowRight} />
                                  </div>
                              </div>
                          </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Board;
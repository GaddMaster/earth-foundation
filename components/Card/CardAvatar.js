import React from "react";

import classNames from "classnames";

import PropTypes from "prop-types";

import { makeStyles } from "@material-ui/core/styles";


import styles from "../../assets/jss/cardAvatarStyle";

const useStyles = makeStyles(styles);

export default function CardAvatar(props) {
  const {
    children,
    className,
    plain,
    profile,
    ...rest
  } = props;
  const classes = useStyles();
  const cardAvatarClasses = classNames({
    [classes.cardAvatar]: true,
    [classes.cardAvatarProfile]: profile,
    [classes.cardAvatarPlain]: plain,
    [className]: className !== undefined
  });
  return (
    <div className={cardAvatarClasses} {...rest}>
      {children}
    </div>
  );
}


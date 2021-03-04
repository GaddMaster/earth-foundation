import React from "react";

import classNames from "classnames";

import PropTypes from "prop-types";

import { makeStyles } from "@material-ui/core/styles";

import styles from "../../assets/jss/cardBodyStyle.js";

const useStyles = makeStyles(styles);

export default function CardBody(props) {
  const {
    className,
    children,
    background,
    plain,
    color,
    ...rest
  } = props;
  const classes = useStyles();
  const cardBodyClasses = classNames({
    [classes.cardBody]: true,
    [classes.cardBodyBackground]: background,
    [classes.cardBodyPlain]: plain,

    [classes.cardBodyColor]: color,
    [className]: className !== undefined
  });
  return (
    <div className={cardBodyClasses} {...rest}>
      {children}
    </div>
  );
}

CardBody.propTypes = {
  className: PropTypes.string,
  background: PropTypes.bool,
  plain: PropTypes.bool,
  formHorizontal: PropTypes.bool,
  color: PropTypes.bool,
  children: PropTypes.node
};

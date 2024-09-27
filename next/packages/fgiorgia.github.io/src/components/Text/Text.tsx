import React from "react";

import styles from './Text.module.scss'
import { classNames } from "@/utils/style/classNames";

interface Props {
  variant?: "h1" | "h2" | "body1";
  nested?: boolean;
  gutter?: boolean,
  className?: string;
  style?: React.CSSProperties;
}

const Text: React.FC<React.PropsWithChildren<Props>> = ({
  children,
  variant = 'body1',
  nested,
  gutter,
  className: classNameProp,
  style
}) => {
  const className = classNames(styles[variant], gutter === true ? styles[`${variant}Gutter`] : undefined, classNameProp)
  if (nested) {
    return <span className={className} style={style}>{children} </span>;
  }

  return (<p className={className}>{children} </p>);
}

export default Text
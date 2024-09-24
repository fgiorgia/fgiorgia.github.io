import { ComponentProps } from "react";
import { classNames } from "../../utils/style/classNames";

type DivProps = ComponentProps<'div'>

interface Props extends DivProps {
  direction?: 'row' | "column"
}

const Stack: React.FC<Props> = ({ direction, className, children, ...otherProps }) => {
  const classFlexDirection = direction === 'row' ? 'flex-row' : 'flex-col';
  const classes = classNames('flex box-border', classFlexDirection, className);

  return (<div className={classes} {...otherProps}>{children}</div>)
};

export default Stack;
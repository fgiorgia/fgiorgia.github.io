import { CSSProperties } from 'react'
import { classNames } from '../../utils/style/classNames'

import styles from './Stack.module.scss'
import { CoreProps } from '../types'
import { getUtilityClasses } from '@/utils/style/getUtilityClasses'

interface Props extends CoreProps {
  direction?: 'row' | 'column'
  justifyContent?:
    | 'flexStart'
    | 'flexEnd'
    | 'center'
    | 'spaceBetween'
    | 'spaceAround'
    | 'spaceEvenly'
    | 'initial'
    | 'inherit'
  alignItems?:
    | 'normal'
    | 'stretch'
    | 'center'
    | 'flexStart'
    | 'flexEnd'
    | 'baseline'
    | 'initial'
    | 'inherit'
  spacing?: number
}

const Stack: React.FC<React.PropsWithChildren<Props>> = ({
  direction = 'column',
  justifyContent,
  alignItems,
  spacing,
  children,
  className,
  style: styleProp,
}) => {
  const classes = classNames(
    styles.stack,
    ...getUtilityClasses(styles, {
      direction,
      justifyContent,
      alignItems,
    }),
    className
  )

  const style: CSSProperties = {
    ...(spacing && { gap: `${spacing}rem` }),
    ...styleProp,
  }

  return (
    <div className={classes} style={style}>
      {children}
    </div>
  )
}

export default Stack

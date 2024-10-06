import React, { type CSSProperties } from 'react'

import styles from './Text.module.scss'
import { classNames } from '@/utils/style/classNames'
import { type CoreProps } from '../types'
import { getUtilityClasses } from '@/utils/style/getUtilityClasses'

interface Props extends CoreProps {
  variant?: 'h1' | 'h2' | 'body1'
  nested?: boolean
  gutter?: boolean
  align?: 'left' | 'center' | 'right'
  fontSize?: number
  color?: CSSProperties['color']
}

const Text: React.FC<React.PropsWithChildren<Props>> = ({
  children,
  variant = 'body1',
  nested,
  gutter,
  align,
  fontSize,
  color,
  className: classNameProp,
  style: styleProp,
}) => {
  const className = classNames(
    styles.base,
    styles[variant],
    ...getUtilityClasses(
      styles,
      {
        gutter,
      },
      { prefix: variant }
    ),
    ...getUtilityClasses(styles, {
      align,
    }),
    classNameProp
  )

  const style = {
    color,
    ...(fontSize != null && { fontSize: `${fontSize}rem` }),
    ...styleProp,
  }

  if (nested != null) {
    return (
      <span className={className} style={style}>
        {children}{' '}
      </span>
    )
  }

  return (
    <p className={className} style={style}>
      {children}{' '}
    </p>
  )
}

export default Text

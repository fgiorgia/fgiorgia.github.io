type UtilityClassValue = string | boolean

const getClassName = (
  prefix: string | undefined,
  key: string,
  value: string | true
): string => {
  const keyValueString = value === true ? key : `${key}-${value}`

  if (prefix == null) {
    return keyValueString
  }
  return `${prefix}-${keyValueString}`
}

/** Extracts utility classes from (S)CSS modules. */
export const getUtilityClasses = (
  styles: Readonly<Record<string, string | undefined>>,
  utilityProps: Record<string, UtilityClassValue | undefined>,
  options: { prefix?: string } = {}
): string[] => {
  const utilityClasses = Object.entries(utilityProps).reduce<string[]>(
    (classNames, [key, value]) => {
      if (value == null || value === false) {
        return classNames
      }

      const currentClassName = getClassName(options.prefix, key, value)
      const styledClassName = styles[currentClassName]
      if (styledClassName == null) {
        console.error(
          `Utility class not found in 'styles': ${currentClassName}.` +
            '\n' +
            `Avaliable: ${Object.keys(styles)
              .filter((k) => !k.startsWith('__'))
              .join(', ')}`
        )
        return classNames
      }

      return [...classNames, styledClassName]
    },
    []
  )
  return utilityClasses
}

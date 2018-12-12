import React from 'react'
import PropTypes from 'prop-types'
import { compose } from 'recompose'
import injectSheet from 'react-jss'
import withTheme from 'ui/withTheme'
import classNames from 'classnames'
import { green } from '../../logger/index';

const variants = [
  'h1',
  'h2',
  'h3',
  'h4',
  'subtitle1',
  'subtitle2',
  'subtitle3',
  'body1'
]

const variantMap = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  subtitle1: 'p',
  subtitle2: 'p',
  subtitle3: 'p',
  body1: 'p'
}

const getElementForVarient = (variant) => {
  return variantMap[variant]
}

const unknown = {
  color: 'red',
  fontWeight: 'bold',
}

const Text = ({
  align,
  children,
  classes,
  className: classNameProp,
  marginBottom=true,
  theme,
  variant
   /*, align */
  }) => {
  // console.log('Text: variant', variant)
  // console.log('Text: children', children)

  const clsNames = classNames([
    classes.imgFluid,
    classNameProp,
    classes[variant],
    {
      [classes.marginBottom]: marginBottom,
      [classes.left]: align === 'left',
      [classes.center]: align === 'center',
    },

  ])
  // green('Text: clsNames', clsNames)
  const Component = getElementForVarient(variant)

  if (!variants.includes(variant)) {
    return <p style={unknown}>unknow variant {variant}</p>
  }
  // let alignClassName = ''
  // if (align === 'center') {
  //   alignClassName = 'center'
  // } else {
  //   alignClassName = 'left'
  // }

  return (
    <Component
      // align={align ? classes[align] : classes.left}
      // className={classNames(classes[variant], classes[alignClassName])}
      className={clsNames}
    >
      {children}
    </Component>
  )
}

const styles = theme => {

  const xs = theme.typography.headings.xs
  const md = theme.typography.headings.md

  return ({
    marginBottom: {
      marginBottom: '1em !important',
    },
    h1: xs.h1,
    h2: xs.h2,
    h3: xs.h3,
    h4: xs.h4,
    subtitle1: xs.subtitle1,
    subtitle2: xs.subtitle2,
    subtitle3: xs.subtitle3,
    [theme.breakpoints.up('md')]: {
      h1: md.h1,
      h2: md.h2,
      h3: md.h3,
      h4: md.h4,
      subtitle1: md.subtitle1,
      subtitle2: md.subtitle2,
      subtitle3: md.subtitle3,
    },
    left: {
      textAlign: 'left',
    },
    center: {
      textAlign: 'center',
    },
  })
}

export default compose(
  withTheme,
  injectSheet(styles)
)(Text)

Text.propTypes = {
  variant: PropTypes.oneOf([
    'h1',
    'h2',
    'h3',
    'h4',
    'subtitle1',
    'subtitle2',
    'subtitle3',
    'body1'
  ]),
}
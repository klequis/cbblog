import React from 'react'
import injectSheet from 'react-jss'
import ReactDOM from 'react-dom'
import keycode from 'keycode'
import createRippleHandler from 'elements/utils/createRippleHandler'
import { listenForFocusKeys, detectFocusVisible } from 'elements/utils/focusVisible'
import ownerWindow from 'elements/utils/ownerWindow'
// import TouchRipple from 'elements/utils/TouchRipple'

class Button extends React.Component {
  state = {}

  keyDown = false

  focusVisibleCheckTime = 50

  focusVisibleMaxCheckTimes = 5

  handleMouseDown = createRippleHandler(this, 'MouseDown', 'start', () => {
    console.log('handleMouseDown')

    clearTimeout(this.focusVisibleTimeout)
    if (this.state.focusVisible) {
      this.setState({ focusVisible: false })
    }
  })

  handleMouseUp = createRippleHandler(this, 'MouseUp', 'stop')

  handleMouseLeave = createRippleHandler(this, 'MouseLeave', 'stop', event => {
    console.log('handleMouseLeave')

    if (this.state.focusVisible) {
      event.preventDefault()
    }
  })

  handleTouchStart = createRippleHandler(this, 'TouchStart', 'start')

  handleTouchEnd = createRippleHandler(this, 'TouchEnd', 'stop')

  handleTouchMove = createRippleHandler(this, 'TouchMove', 'stop')

  handleContextMenu = createRippleHandler(this, 'ContextMenu', 'stop')

  handleBlur = createRippleHandler(this, 'Blur', 'stop', () => {
    clearTimeout(this.focusVisibleTimeout)
    if (this.state.focusVisible) {
      this.setState({ focusVisible: false })
    }
  })

  componentDidMount() {
    this.button = ReactDOM.findDOMNode(this)
    listenForFocusKeys(ownerWindow(this.button))

    if (this.props.action) {
      this.props.action({
        focusVisible: () => {
          this.setState({ focusVisible: true })
          this.button.focus()
        },
      })
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      this.props.focusRipple &&
      !this.props.disableRipple &&
      !prevState.focusVisible &&
      this.state.focusVisible
    ) {
      this.ripple.pulsate()
    }
  }

  componentWillUnmount() {
    clearTimeout(this.focusVisibleTimeout)
  }

  onRippleRef = node => {
    this.ripple = node
  }

  render() {
    const {
      children,
      classes,
      centerRipple,
      TouchRippleProps,
    } = this.props
    return (
      <button
        className={classes.root}
        onBlur={this.handleBlur}
        onFocus={this.handleFocus}
        onKeyDown={this.handleKeyDown}
        onKeyUp={this.handleKeyUp}
        onMouseDown={this.handleMouseDown}
        onMouseLeave={this.handleMouseLeave}
        onMouseUp={this.handleMouseUp}
        onTouchEnd={this.handleTouchEnd}
        onTouchMove={this.handleTouchMove}
        onTouchStart={this.handleTouchStart}
        onContextMenu={this.handleContextMenu}
      >
        {children}
        {/* <TouchRipple
          innerRef={this.onRippleRef}
          center={centerRipple}
          {...TouchRippleProps}
        /> */}
      </button>
    )
  }

}

export const styles = {
  /* Styles applied to the root element. */
  root: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    // Remove grey highlight
    WebkitTapHighlightColor: 'transparent',
    backgroundColor: 'transparent', // Reset default value
    // We disable the focus ring for mouse, touch and keyboard users.
    outline: 'none',
    border: 0,
    margin: 0, // Remove the margin in Safari
    borderRadius: 0,
    padding: 0, // Remove the padding in Firefox
    cursor: 'pointer',
    userSelect: 'none',
    verticalAlign: 'middle',
    '-moz-appearance': 'none', // Reset
    '-webkit-appearance': 'none', // Reset
    textDecoration: 'none',
    // So we take precedent over the style of a native <a /> element.
    color: 'inherit',
    '&::-moz-focus-inner': {
      borderStyle: 'none', // Remove Firefox dotted outline.
    },
    '&$disabled': {
      pointerEvents: 'none', // Disable link interactions
      cursor: 'default',
    },
  },
  /* Styles applied to the root element if `disabled={true}`. */
  disabled: {},
  /* Styles applied to the root element if keyboard focused. */
  focusVisible: {},
}

export default injectSheet(styles)(Button)
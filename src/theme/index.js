import createBreakpoints from 'ui/createBreakpoints'
// const breakpoints = createBreakpoints(breakpointsInput)
const breakpoints = createBreakpoints({})
const theme = {
  breakpoints: {
    keys: breakpoints.keys,
    values: breakpoints.values,
    up: breakpoints.up,
    down: breakpoints.down,
    between: breakpoints.between,
    only: breakpoints.only,
  },
  section: {
    colors: {
      background: {
        light: 'white',
        dark: '#005ca8'
      }
    },
    shadow: {
      light: 'inset 0 1px 0 0 rgba(0, 0, 0, 0.15)',
      dark: 'inset 0 1px 0 0 rgba(255, 255, 255, 0.075)',
    },
    xs: {
      boxShadow: 'inset 0 1px 0 0 rgba(0, 0, 0, 0.15)',
      paddingTop: '4rem',
      paddingBottom: '4rem',
    },
    md: {
      boxShadow: 'inset 0 1px 0 0 rgba(0, 0, 0, 0.5)',
      paddingTop: '4rem',
      paddingBottom: '4rem',
      // backgroundColor: 'red',
    }

  },
  typography: {
    headings: {
      common: {

      },
      xs: {
        body: {

        },
        h1: {
          fontSize: '4.0rem',
          // fontSize: '4.4rem',
          lineHeight: 1.2,
          fontWeight: 300,
          textAlign: 'center',
          margin: '0 0 20px 0',
        },
        h2: {
          fontSize: '2.0rem',
          // fontSize: '2.2rem',
          lineHeight: 1.375,
          fontWeight: 300,
          // letterSpacing: '-0.05em',
          textAlign: 'center',
          margin: '0 1rem 20px 1rem',
        },
        h3: {
          fontSize: '1.25rem',
          // fontSize: '1.375rem',
          lineHeight: 1.375,
          fontWeight: 300,
          // letterSpacing: '-0.05em',
          textAlign: 'center',
        },
        h4: {
          fontSize: '1.0rem',
          // fontSize: '1.1rem',
          lineHeight: 1.375,
          fontWeight: 300,
          // letterSpacing: '-0.05em',
          textAlign: 'center',
        },
        subtitle1: {
          fontSize: '1.775rem',
          // fontSize: '1.9525rem',
          lineHeight: 'inherit',
          fontStyle: 'italic',
          marginTop: '-0.65rem',
          marginBottom: '1.5rem',
          textAlign: 'center',
        },
        subtitle2: {
          fontSize: '1.25rem',
          // fontSize: '1.375rem',
          lineHeight: 1.65,
          fontStyle: 'italic',
          marginTop: '-0.65rem',
          marginBottom: '1.5rem',
          textAlign: 'center',
        },
        subtitle3: {
          fontSize: '1.1rem',
          // fontSize: '2.1rem',
          lineHeight: 1.65,
          fontStyle: 'italic',
          marginTop: '-0.65rem',
          marginBottom: '1.5rem',
          textAlign: 'center',
        },
      },
      md: {
        h1: {
          fontSize: '3.5rem',
          // fontSize: '3.85rem',
          lineHeight: 1.2,
          fontWeight: 300,
          letterSpacing: '-0.05em',
          textAlign: 'left',
        },
        h2: {
          fontSize: '2.25rem',
          // fontSize: '2.475rem',
          lineHeight: 1.375,
          fontWeight: 300,
          // letterSpacing: '-0.05em',
          textAlign: 'left',
        },
        h3: {
          fontSize: '1.5rem',
          // fontSize: '1.65rem',
          lineHeight: 1.375,
          fontWeight: 300,
          // letterSpacing: '-0.05em',
          textAlign: 'left',
        },
        h4: {
          fontSize: '1.1rem',
          // fontSize: '1.21rem',
          lineHeight: 1.375,
          fontWeight: 300,
          // letterSpacing: '-0.05em',
          textAlign: 'left',
        },
        subtitle1: {
          fontSize: '1.375rem',
          // fontSize: '1.5125rem',
          lineHeight: 'inherit',
          fontStyle: 'italic',
          marginTop: '-0.65rem',
          marginBottom: '1.5rem',
          textAlign: 'left',
        },
        subtitle2: {
          fontSize: '1.375rem',
          lineHeight: 1.65,
          fontStyle: 'italic',
          marginTop: '-0.65rem',
          marginBottom: '1.5rem',
          textAlign: 'left',
        },
        subtitle3: {
          fontSize: '1.21rem',
          lineHeight: 1.65,
          fontStyle: 'italic',
          marginTop: '-0.65rem',
          marginBottom: '1.5rem',
          textAlign: 'left',
        },
      },
    }


  },
  spacing: {
    unit: 8,
  }
}

export default theme
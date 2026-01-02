import { extendTheme } from '@chakra-ui/react';

const breakpoints = {
  sm: "16em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  "2xl": "96em",
};

const customTheme = extendTheme({
  breakpoints,
  styles: {
    global: props => ({
      html: {
        scrollBehavior: "smooth",
      },
      body: {
        overflowX: "hidden",
        color: props.colorMode === "light" ? "default.dark" : "default.light",
        // Updated colors - navy for dark, light for light mode
        bg: props.colorMode === "light" ? "#F5F7FA" : "#1a2332",
        fontFamily: "body",
        transitionProperty: "all",
        transitionDuration: "normal",
      },
    }),
  },
  config: {
    initialColorMode: 'system', // ✅ AUTO-DETECT SYSTEM PREFERENCE
    useSystemColorMode: true,    // ✅ RESPECT BROWSER/OS PREFERENCE
    disableTransitionOnChange: false,
  },
  colors: {
    default: {
      light: "#FCFCFC",
      dark: "#1a2332",  // Navy dark background
    },
    neutral: {
      50: "#f2f2f2",
      100: "#d9d9d9",
      200: "#bfbfbf",
      300: "#a6a6a6",
      400: "#8c8c8c",
      500: "#737373",
      600: "#5a5959",
      700: "#2a3f5f",  // Darker navy
      800: "#1a2332",  // Main navy
      900: "#0f1620",  // Deepest navy
    },
    brand: {
      primary: {
        50: "#e0f2f7",
        100: "#b3dde8",
        200: "#80c7d8",
        300: "#4db1c8",
        400: "#26a0bc",
        500: "#008fb0",  // Teal accent
      },
      secondary: {
        50: "#defef6",
        100: "#b8f5e2",
        200: "#90edcc",
        300: "#65e4b5",
        400: "#3cdd9a",  // Bright teal/cyan
        500: "#22c38c",
        600: "#169875",
        700: "#0a6c5a",
        800: "#00423b",
        900: "#001812",
      },
    },
  },
  fonts: {
    heading: `'Poppins', sans-serif`,
    body: `'Roboto Mono', sans-serif`,
  },
});

export default customTheme;

// const customTheme = extendTheme ({
//   breakpoints,
//   styles: {
//     global: props => ({
//       html: {
//         scrollBehavior: "smooth",
//       },
//       body: {
//         overflowX: "hidden",
//         color: props.colorMode === "light" ? "default.dark" : "default.light",
//         bg: props.colorMode === "light" ? "#F3F8FF" : "#232323",
//         fontFamily: "body",
//         transitionProperty: "all",
//         transitionDuration: "normal",
//       },
//     }),
//   },
//   config: {
//     disableTransitionOnChange: false,
//   },
//   colors: {
//     default: {
//       light: "#FCFCFC",
//       dark: "#232323",
//     },
//     neutral: {
//       50: "#f2f2f2",
//       100: "#d9d9d9",
//       200: "#bfbfbf",
//       300: "#a6a6a6",
//       400: "#8c8c8c",
//       500: "#737373",
//       600: "#5a5959",
//       700: "#423f3f",
//       800: "#2a2525",
//       900: "#17080d",
//     },
//     brand: {
//       primary: {
//       50: "#e8f0f8",
//       100: "#c6d9f2",
//       200: "#a4c1eb",
//       300: "#82aae5",
//       400: "#6092de",
//       500: "#3e7bd8",
//       },
//       secondary: {
//         50: "#defef6",
//         100: "#b8f5e2",
//         200: "#90edcc",
//         300: "#65e4b5",
//         400: "#3cdd9a",
//         500: "#22c38c",
//         600: "#169875",
//         700: "#0a6c5a",
//         800: "#00423b",
//         900: "#001812",
//       },
//     },
//   },
//   fonts: {
//     heading: `'Poppins', sans-serif`,
//     body: `'Roboto Mono', sans-serif`,
//   },
// });

// export default customTheme;

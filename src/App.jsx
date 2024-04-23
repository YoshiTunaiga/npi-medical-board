// import PropTypes from "prop-types";
// import Divider from "@mui/material/Divider";
// import { ThemeProvider, createTheme } from "@mui/material/styles";
// import getLPTheme from "./getLPTheme";
// import NavigationBar from "./components/NavigationBar/NavigationBar";
import Home from "./components/Home/Home";

function App() {
  // eslint-disable-next-line no-unused-vars
  // const LPtheme = createTheme(getLPTheme(mode));
  // const defaultTheme = createTheme({ palette: { mode } });

  return (
    <div>
      {/* <NavigationBar /> */}
      <Home />
    </div>
  );
}

export default App;

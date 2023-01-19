import "./App.css";
import RouterComponent from "./components/Router";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function App() {
  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <RouterComponent />
    </ThemeProvider>
  );
}

export default App;

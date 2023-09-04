import { ThemeProvider } from "styled-components";
import { theme } from "../common/theme";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <></>
    </ThemeProvider>
  );
}

export default App;

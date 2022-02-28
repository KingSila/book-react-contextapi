import { Header } from "./components/Header";
import { Container } from "./components/styles/Container.styled";
import { ThemeProvider } from "styled-components";

import { BookList } from "./components/BookList";
import { BookTopSellers } from "./components/BookTopSellers";

const theme = {
  colors: {
    header: "#fff",
    body: "#FFF",
    footer: "#528B8B",
  },
  mobile: "768px",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Header />

        <Container>
          <BookList />
          <BookTopSellers />
        </Container>
      </>
    </ThemeProvider>
  );
}

export default App;

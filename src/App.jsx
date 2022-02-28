import styled from "styled-components";
import { MainApp, NotificationBar, Sidebar } from "./components";
import p5 from "./assets/tinified/p6.jpg";
function App() {
  return (
    <Container className="">
      {/* <SideMenu> */}
      <Sidebar />
      {/* </SideMenu> */}
      <Main>
        <MainApp />
        <NotificationBar />
      </Main>
    </Container>
  );
}
const Container = styled.div`
  margin: 0;

  background: url(${p5}) no-repeat fixed center, var(--theme-gradient);
  background-size: cover;
  overflow: hidden;
  min-height: 100vh;
  color: #eee;
  display: flex;
  max-width: 1440px;
`;

const Main = styled.div`
   {
    display: flex;

    width: 100%;
  }
`;

export default App;

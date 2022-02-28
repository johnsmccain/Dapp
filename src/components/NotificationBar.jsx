import React from "react";
import styled from "styled-components";
import { NotificationAddOutlined } from "@mui/icons-material";
function NotificationBar() {
  return (
    <Container>
      <div className="nav">Notifications</div>
    </Container>
  );
}
const Container = styled.div`
   {
    flex: 1;
    background: rgba(0, 0, 0, 0.7);
    @media (max-width: 425px) {
      display: none;
    }
  }
`;
export default NotificationBar;

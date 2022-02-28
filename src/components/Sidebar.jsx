import React, { useState } from "react";
import styled from "styled-components";
import {
  HomeOutlined,
  AccountBalanceWalletOutlined,
  WidgetsOutlined,
  Layers,
  AccountBalance,
  ArrowForward,
  ArrowBack,
  AssuredWorkload,
  Logout,
} from "@mui/icons-material";
function Navbar() {
  const [show, setShow] = useState(false);
  return (
    <Sidebar id={`${!show && "unmount"}`}>
      <div
        onClick={() => setShow(!show)}
        className={`dont ${!show && "fixed"} `}
      >
        {!show ? (
          <li>
            <ArrowForward className="navigator-icon" />
          </li>
        ) : (
          <li>
            <ArrowBack className="navigator-icon" />
          </li>
        )}
      </div>

      <div className={`container ${!show && "hidden"} `}>
        <Logo>
          <Layers className="logo" />
          <span>U</span>nity
        </Logo>
        <List>
          <li>
            <HomeOutlined className="icon" />
            <span>Home</span>
          </li>
          <li>
            <AccountBalanceWalletOutlined className="icon" />
            <span>Tranfer</span>
          </li>
          <li>
            <AccountBalance className="icon" />
            <span>Transactions</span>
          </li>

          <li>
            <AssuredWorkload />
          </li>
        </List>
        <Logout className="exit-icon" />
      </div>
    </Sidebar>
  );
}
const Sidebar = styled.nav`
   {
    padding: 0.6rem 0;
    background: rgba(0, 0, 0, 0.7);
    min-height: 100vh;
    // overflow: hidden;
    list-style: none;
    flex: 1;
    top: 0;
    .navigator-icon {
      position: sticky;
      right: 0;
      cursor: pointer;
    }
  }
  .exit-icon {
    float: right;
  }
  .dont {
    display: inline-block;
    float: right;
    z-index: 99;
  }
  .fixed {
    position: fixed;
  }
`;
const Logo = styled.h1`
  padding: 0.6rem;
  display: flex;
  align-items: center;
  font-weight: 500;
  transition: all 2s;
  font-size: 1.3rem;

  span {
    font-size: 1.6rem;
    font-weight: bold;
    color: var(--green);
  }
  .logo {
    color: var(--green);

    font-size: 2rem;
    margin-right: 0.1rem;
  }
  // .container {
  //   position: fixed;
  // }
`;
const List = styled.ul`
   {
    // display: flex;
    // flex-direction: column;
    padding: 0.6rem;
  }
  li {
    display: flex;
    align-items: center;

    margin: 0.31rem 3px;
    padding: 0.7rem 1rem;
    text-align: left;
    text-transform: capitalize;
    border-radius: 0.591rem;
    font-weight: 500;
    cursor: pointer;
    @media (max-width: 425px) {
      margin: 3rem 3px;
      font-size: 1.2rem;
    }
    span {
      padding: 0 0.5rem;
    }
  }
  li:hover {
    opacity: 0.7;
    background: var(--green);
  }
  .hide {
    visibility: hidden;
  }
  .sm-width {
    width: 10%;
  }
`;
export default Navbar;

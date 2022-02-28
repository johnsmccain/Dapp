import React from "react";
import styled from "styled-components";
import p15 from "../assets/tinified/p15.jpg";
import card from "../assets/tinified/card.jpg";
import e1 from "../assets/e2.svg";
function MainApp() {
  return (
    <Container>
      <TitleText>
        <h3>hi john danlami,</h3>
        <h2>Welcome back</h2>
      </TitleText>
      <Banner>
        <img src={p15} alt="banner" className="banner" />
        <div className="bannerText">
          <p className="lead"></p>
        </div>
      </Banner>
      <FormContainer>
        <div className="card">
          <img src={card} alt="" />
          <div className="card-icon">
            <img src={e1} alt="" />
          </div>
          <div className="card-i">i</div>
          <div className="card-info">
            <p className="card-lead">0X02...3b32</p>
          </div>
        </div>
        <form>
          <input
            type="text"
            className="form-control"
            placeholder="Address To "
          />
          <input
            type="text"
            className="form-control"
            placeholder="Amount (ETH)"
          />
          <input type="text" className="form-control" placeholder="Keyword" />
          <input type="submit" className="form-control btn" value="Send" />
        </form>
      </FormContainer>
    </Container>
  );
}
const Container = styled.div`
   {
    flex: 4;
    overflow-y: scroll;
    padding: 1rem 2rem;
    @media (max-width: 425px) {
      padding: 2rem 0.8rem;
    }
    // &::-webkit-scrollbar {
    //   display: none;
    // }
  }
`;
const TitleText = styled.div`
   {
    h3 {
      text-transform: capitalize;
      font-size: 1.5rem;
      font-weight: 500;
    }
    h2 {
      font-size: 3rem;
      font-weight: 700;
    }
  }
`;
const Banner = styled.div`
   {
    max-width: 100%;
    position: relative;
    img {
      width: 100%;
      height: 200px;
      object-fit: cover;
      border-radius: 5px;
    }
  }
`;
const FormContainer = styled.div`
   {
    display: flex;
    margin: 1rem 0;
    width: 100%;

    background: rgba(0, 0, 0, 0.6);
    border-radius: 5px;
    @media (max-width: 425px) {
      display: block;
    }
    .card {
      // width: 300px;
      padding: 1.9%;
      flex: 1;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      .card-i {
        position: absolute;
        right: 2rem;
        text-align: center;
        top: 3rem;
        width: 1.6rem;
        height: 1.6rem;
        border: 1px solid #fff;
        border-radius: 50%;
      }
      .card-info {
        position: absolute;
        bottom: 1rem;
        left: 1rem;
        background: rgba(0, 0, 0, 0.3);
        color: rgba(255, 255, 255, 0.79);
        padding: 0.5rem;
        margin: 1rem 0.5rem;
        border-radius: 5px;
      }
      img {
        width: 100%;
        border-radius: 5px;
      }
    }
    .card-icon {
      position: absolute;
      top: 2.5rem;
      left: 1.9rem;
      img {
        width: 40px;
        height: 40px;
        color: white;
      }
    }
    form {
      padding: 1.9%;
      flex: 1;
      background: rgba(0, 0, 0, 0.3);
      border-radius: 5px;
      .form-control {
        display: block;
        width: 100%;
        padding: 3%;
        margin: 3.9% 0;
        border-radius: 5px;
        border: none;
        outline: none;
        color: rgba(0, 0, 0, 1);
        font-size: 1.17rem;
        font-size: bold;
        &:focus {
          border-bottom: 5px solid var(--green);
        }
      }

      .btn {
        background: var(--green);
        cursor: pointer;
        font-weight: 500;
        color: white;
        &:hover {
          opacity: 0.9;
        }
      }
    }
  }
`;
export default MainApp;

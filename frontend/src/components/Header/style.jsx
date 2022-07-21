import styled from "styled-components";

export default styled.section`
  background-color: #ffffffc1;
  height: 8vh;
  width: 100vw;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    margin-left: 3rem;
    font-size: 4rem;
    text-decoration: none;
    color: black;
  }
  .navbar {
    margin: 0 3rem;
    margin-right: -30rem;
    a {
      margin: 0 2rem;
      text-decoration: none;
      color: black;
      cursor: pointer;
      font-size: 1.8rem;
    }
  }
  .mobile {
    display: none;
  }

  @media screen and (max-width: 760px) {
    .mobile {
      display: block;
    }

    h1 {
      font-size: 2rem;
    }
    .navbar {
      a {
        display: none;
      }
    }

    .burger {
      margin: 2rem 2rem;
      width: 42px;
      height: 24px;
      cursor: pointer;
      position: relative;

      ul {
        transition: background-color 2s linear, margin-left 1.5s 0.5s linear;
        margin-left: 15rem;
        width: 10rem;
        height: 15rem;
        margin-top: 5.3vh;

        li {
          margin: 0rem 1rem;
        }
        a {
          text-decoration: none;
          font-size: 1.2rem;
          color: black;
        }
      }
    }

    span {
      width: 100%;
      height: 4px;
      background-color: black;
      display: block;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      transition: background-color 2s linear, margin-left 1.5s 0.5s;
      margin-left: 0;
    }
    span::before,
    span::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 4px;
      background-color: black;
      transition: transform 0.5s linear;
    }
    span::before {
      transform: translateY(-10px);
    }
    span::after {
      transform: translateY(10px);
    }
  }
  .burger.active {
    margin: 2rem 2rem;

    ul {
      background-color: #ffffffc8;
      display: block;
      width: 10rem;
      height: 15rem;
      margin-top: 5.3vh;
      margin-left: -6rem;
      transition: margin-left 1s linear;
      li {
        margin: 0rem 1rem;
      }
      a {
        text-decoration: none;
        font-size: 1.2rem;
        color: black;
      }
    }

    span {
      /* margin-top: 0.5rem;
      margin-left: 8.2rem; */
      background-color: transparent;
      transition: background-color 0s linear, margin-left 1s 1s,
        margin-top 1s 1s;
    }
    span::before {
      transform: translate3d(-8px, 0, 0) rotate(-45deg) scale(1, 1);
    }
    span::after {
      transform: translate3d(-8px, 0, 0) rotate(45deg) scale(1, 1);
    }
  }
`;

import styled from "styled-components";

export default styled.section`
  color: white;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h2 {
    font-size: 5rem;
    margin-top: 10vh;
    text-align: center;
  }
  .input {
    display: flex;
    justify-content: center;
    margin: 2rem 0;
    input {
      width: 70vw;
      height: 3rem;
      border-radius: 2rem 0 0 2rem;
      font-size: 1.5rem;
      border: #000000 1px solid;
      padding-left: 1.5rem;
    }
    button {
      background-color: #482c04;
      color: white;
      width: 8vw;
      border-radius: 0 2rem 2rem 0;
      font-size: 1.5rem;
      border: #000000 1px solid;
    }
  }
  .containerSeaman {
    display: flex;
    justify-content: space-evenly;
    padding-top: 0;
    flex-wrap: wrap;
    .containerAvatar {
      display: flex;
      flex-direction: column;
      align-items: center;
      .detailSeaman {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #ffffffc8;
        border-radius: 10px;
        color: black;
        width: 15rem;
        height: 6rem;
        font-size: 1.3rem;
        margin: 0 0 2rem 0;
      }
      .avatarseaman {
        margin: 0rem 5vw 2rem 5vw;
        width: 13rem;
        height: 13rem;
        border-radius: 100%;
      }
    }
  }
  @media screen and (max-width: 760px) {
    .input {
      display: flex;
      justify-content: center;
      margin: 1rem 0;
      input {
        width: 65vw;
        height: 3rem;
        border-radius: 2rem 0 0 2rem;
        font-size: 1.2rem;
        border: #000000 1px solid;
        padding-left: 1.5rem;
      }
      button {
        background-color: #482c04;
        color: white;
        width: 15vw;
        border-radius: 0 2rem 2rem 0;
        font-size: 1.5rem;
        border: #000000 1px solid;
      }
    }
    .containerSeaman {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-top: 0;
      .containerAvatar {
        display: flex;
        width: 80vw;
        border-radius: 55px;
        height: 6rem;
        margin: 1rem 0;
        background-color: #ffffffc8;
        .detailSeaman {
          background-color: transparent;
          color: black;
          font-size: 1.3rem;
          width: 60vw;
          margin: 0;
        }
        .avatarseaman {
          padding: 0rem;
          margin: 0;
          width: 8rem;
          height: 8rem;
          border-radius: 50%;
        }
      }
      .containerAvatar:nth-child(2n-1) {
        flex-direction: row;
      }
      .containerAvatar:nth-child(2n) {
        flex-direction: row-reverse;
      }
    }
  }
`;

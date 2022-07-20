import styled from "styled-components";

export default styled.section`
  padding-top: 10vh;
  color: white;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h2 {
    font-size: 5rem;
    text-align: center;
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

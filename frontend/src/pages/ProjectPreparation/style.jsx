import styled from "styled-components";

export default styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h2 {
    margin-top: 10vh;
    margin-bottom: 3vh;
    font-size: 5rem;
    text-align: center;
    color: white;
  }
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      width: 50vw;
      margin: 3vh 0;
      border-radius: 10px;
    }
    h3 {
      font-size: 3rem;
      background-color: #ffffffa8;
      padding: 1rem;
      border-radius: 10px;
    }
  }
  @media screen and (max-width: 760px) {
    h2 {
      margin-top: 10vh;
      margin-bottom: 3vh;
      font-size: 3rem;
      text-align: center;
    }
    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
      img {
        width: 80vw;
        margin: 3vh 0;
      }
      h3 {
        color: white;
        font-size: 2rem;
        background-color: #333333b1;
        padding: 1rem;
      }
    }
  }
`;

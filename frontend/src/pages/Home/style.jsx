import styled from "styled-components";

export default styled.section`
  color: white;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  h2 {
    margin-top: 10vh;
    font-size: 5rem;
    text-align: center;
    margin-bottom: 3rem;
  }
  article {
    background-color: #ffffffbc;
    width: 60vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    p {
      font-size: 1.3rem;
      font-weight: bold;
      color: #333;
      text-align: center;
      margin: 2rem 0;
      padding: 1rem 0;
      width: 50vw;
    }
  }
  @media screen and (max-width: 760px) {
    h2 {
      margin-top: 10vh;
      font-size: 3rem;
      text-align: center;
      margin-bottom: 2rem;
    }
    article {
      background-color: #ffffffbc;
      width: 90vw;
      display: flex;
      flex-direction: column;
      align-items: center;
      p {
        font-size: 1.3rem;
        font-weight: bold;
        color: #333;
        text-align: center;
        margin: 1rem 0;
        padding: 0.5rem 0;
        width: 80vw;
      }
    }
  }
`;

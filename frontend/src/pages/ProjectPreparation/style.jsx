import styled from "styled-components";

export default styled.section`
  color: white;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h2 {
    margin-top: 10vh;
    margin-bottom: 3vh;
    font-size: 5rem;
    text-align: center;
  }
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      width: 50vw;
      margin: 3vh 0;
    }
    h3 {
      font-size: 3rem;
    }
  }
  @media screen and (max-width: 760px) {
  }
`;

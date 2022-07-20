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
  input {
    width: 40vw;
    height: 2rem;
    margin: -5rem auto;
  }
  @media screen and (max-width: 760px) {
  }
`;

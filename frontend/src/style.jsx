import styled from "styled-components";
import fond from "@assets/fondBois.jpg";

export default styled.div`
  background: url(${fond});
  background-repeat: repeat-y;
  background-size: 100vw;
  min-height: 100vh;

  @media screen and (max-width: 760px) {
    background-size: 100vw;
    background-repeat: repeat-y;
  }
`;

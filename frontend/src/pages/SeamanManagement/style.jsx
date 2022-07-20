import styled from "styled-components";

export default styled.section`
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;

  h2 {
    font-size: 5rem;
    margin-top: 10vh;
    text-align: center;
  }
  .containerTable {
    height: 10rem;
    overflow: scroll;
    table {
      width: 80vw;
      margin: auto;
      thead {
        background-color: #333;

        color: #fff;
        th {
          height: 2rem;
          width: 25rem;
          font-size: 1.5rem;
        }
      }
    }
    .seamanList {
      margin: 0;
      width: 80vw;
      margin: auto;
      tbody {
        background-color: #333;
        color: #fff;
      }
      td {
        height: 2rem;
        width: 25rem;
        text-align: center;
        font-size: 1.5rem;
      }

      td {
        border: 1px solid #333;
      }
    }
  }
  .containInput {
    height: 20rem;

    input {
      width: 40vw;
      height: 5rem;
      margin: auto;
    }
  }

  @media screen and (max-width: 760px) {
  }
`;

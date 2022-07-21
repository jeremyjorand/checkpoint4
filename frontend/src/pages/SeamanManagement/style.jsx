import styled from "styled-components";

export default styled.section`
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: 100vh;

  h2 {
    font-size: 5rem;
    margin-top: 10vh;
    text-align: center;
  }
  .containerTable {
    height: 12rem;
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
          border: #ffffff solid 1px;
        }
      }
    }
    .seamanList {
      margin: 0;
      width: 80vw;
      margin: auto;
      tbody {
        background-color: #ffffffd5;
        border: #333 solid 1px;
        color: #333;
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
    display: flex;
    flex-direction: column;
    height: 22rem;
    background-color: #333333c4;
    border-radius: 10px;
    width: 42vw;

    input {
      width: 40vw;
      height: 3rem;
      margin: auto;
      border-radius: 10px;
    }
    select {
      width: 40vw;
      height: 3rem;
      margin: auto;
      border-radius: 10px;
      background-color: #fff;
    }
  }

  @media screen and (max-width: 760px) {
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    min-height: 100vh;

    h2 {
      font-size: 3rem;
      margin-top: 10vh;
      text-align: center;
    }
    .containerTable {
      margin-top: -5rem;
      height: 12rem;
      overflow: scroll;
      table {
        width: 90vw;
        margin: auto;
        thead {
          background-color: #333;
          color: #fff;
          th {
            height: 2rem;
            font-size: 1.5rem;
            border: #ffffff solid 1px;
          }
          .t1 {
            width: 20vw;
          }
          .t2 {
            width: 20vw;
          }
          .t3 {
            width: 40vw;
          }
        }
      }
      .seamanList {
        margin: 0;
        width: 90vw;
        margin: auto;
        tbody {
          background-color: #ffffffd5;
          border: #333 solid 1px;
          color: #333;
        }
        td {
          height: 2rem;
          text-align: center;
          font-size: 1.2rem;
          border: 1px solid #333;
        }
        .t1 {
          width: 20vw;
        }
        .t2 {
          width: 20vw;
        }
        .t3 {
          width: 40vw;
        }
      }
    }
    .containInput {
      display: flex;
      flex-direction: column;
      height: 18rem;
      background-color: #333333c5;
      width: 85vw;

      input {
        width: 80vw;
        height: 2rem;
        margin: auto;
      }
      select {
        width: 80vw;
        height: 2rem;
        margin: auto;
      }
    }
  }
`;

import styled from "styled-components";

export const FooterContainer = styled.div`
  width: 100%;
  background-color: #0d174a;
  height: 100px;
  margin-top: 500px;

  @media screen and (max-width: 768px) {
    height: 100%;
  }
`;

export const ColumnWrapper = styled.div`
  max-width: 1350px;
  margin: 0 auto;
  padding: 20px 30px;
  color: #0d174a;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  h2{
    padding: 30px 40px;
    text-align:center;
  }

  h3{
    padding: 40px 0 20px 0;
  }
  .detail {
    display: flex;
    align-items: center;
    .text {
      display: flex;
      align-items: center;
    
      padding: 5px 10px;
        border-right: 5px solid #0d174a;
       svg{
         font-size: 24px;
         margin-right: 10px;
       }
      }
    }
  }

  .icons {
    display: flex;
    justify-content: center;
    align-items: center;

    a{
      width: 100%;
      height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 28px;
    margin-left: 10px;
    color: #0d174a;
    text-decoration: none;
    transition: all 0.3s ease;

    &:hover{
      transform: translateY(-5px);
    }
    }
  }

  @media screen and (max-width: 768px) {
    .detail {
      flex-direction: column;
      
      .text{
        padding: 10px 0;
        border-right: none;
     
      }
      .icons {
        margin-left: 0;
      }
    }
  }
`;

import styled from "styled-components";

export const StyleLogin = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    height: 100vh;
    width: 100%;
  
    flex-wrap: wrap;

   .link{
     
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    font-size:16px;
    font-weight: 500;

    padding: 0px 22px;
    width: 100%;
    height: 46px;


    background: var(--Color-Grey-1);
    border: 1.2176px solid var(--Color-Grey-1);
    border-radius: 4.0608px;

    color:var(--Color-Grey-4);

    :hover{
        background-color:var(--Color-Grey-2);
        border: 1.2176px solid var(--Color-Grey-2);
    }
   }


   .logo{
    width: 350px;
   }

   .cardLogin{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        background-color: var(--Color-Grey-3);

        margin-top: 40px;
        padding: 5px;

        border-radius: 7px;

        width: clamp(150px, 90%, 400px);

        h2{
            margin-top: 10px;
        }

        form{
            height: 300px;
            gap: 10px;

            label{
                padding: 0px;
            }
        }

        div{
            margin-bottom: 10px;

            p{
                padding: 10px;
            }
        }
   }
   .containerImg{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;

        height: 430px;
        margin-right: 20px;

        background-color: var(--Color-Grey-1);

        margin-top: 40px;

        width: clamp(150px, 90%, 400px);

        h4{
            font-size: 26px;
            color: var(--Color-Focus);
        }
   }

`;

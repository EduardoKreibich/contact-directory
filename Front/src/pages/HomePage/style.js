import styled from "styled-components";

export const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;

    width: 100%;


    .container__home{
        display: flex;
        flex-direction: column;
        justify-content:space-between;
        align-items:center;

        width: 100%

    }
    
    .list_contact{
        color:var(--Color-Grey-3);

    }

    .user__information{
        display: flex;
        flex-direction: row;
        justify-content:space-between;
        align-items: center;

        margin: 5px;
        border-top: 1px solid black;
        flex-wrap: wrap;

        padding: 50px 10px 0px;
        width: clamp(300px, 80%, 1610px);
        gap: 10px;

                
    }

    .notice{
        display: flex;
        flex-direction: column;
        justify-content:space-between;

        padding: 40px 20px;
        width: 80%;

        gap: 30px;

    }

    .container__contact{
        display: flex;
        flex-direction: column ;
        justify-content:center;
        align-items: center;
        width: clamp(300px, 100%, 2000px);

        padding: 10px 20px;
        
    }

    .add__contact{
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        width: 80%;

        margin: 10px 0px;
        
    }

    .card__list{

        display: flex;
        flex-direction: column;

        width: clamp(300px, 80%, 2000px);
        height: max-content;
        padding: 10px 20px;
        gap: 10px;

        background-color: var(--Color-Grey-2);
        border-radius: 4px;
    }

    @media( max-width: 750px){

        .notice{
            display: none;
        }
    }

    
`
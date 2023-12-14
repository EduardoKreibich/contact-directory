import styled from "styled-components";

export const StyleSectionRegister = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;

    margin-bottom: 20px;
    

    .container{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        background-color: var(--Color-Grey-3);

        width: clamp(150px, 90%, 400px);
        padding: 10px 0px 0px 0px;

        p{
            margin-top:20px;
        }
    }

    
`
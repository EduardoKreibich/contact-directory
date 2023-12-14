import styled from "styled-components";

export const StyleHeader = styled.header`

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;


    padding: 1.25rem;
    padding-bottom: 0;
    width: clamp(300px, 80%, 1610px);

    
    .logout{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        font-size:.75rem;
        font-weight: 600;

        padding: 0rem 1.375rem;
        width: max-content;
        height: 1.875rem;


        background: var(--Color-Grey-3);
        border-radius: .2538rem;

        color:var(--Color-Grey-0);

        :hover{
            background-color:var(--Color-Grey-2);
        }
    }
`
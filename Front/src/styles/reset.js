import { createGlobalStyle } from "styled-components";

export const Reset = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;

        font-family: var(--Font-Primary);
    
    }

    body{
        width: 100%;
        background-color: var(--Color-Grey-1);
    }

    #root{
        width: 100%;
        height: 100%;
    }

    button{
        cursor: pointer;
        background-color: transparent;
        border: none;
    }

    a{
        text-decoration: none;
    }

    ul, ol{
        list-style: none;
    }

    input{
        background-color: transparent;
        border: 0;
    }
`
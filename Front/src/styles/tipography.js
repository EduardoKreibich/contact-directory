import styled, {css} from "styled-components"

export const HeadlineOneStyle = css`
    font-weight: 700;
    font-size: 22px;

    
    color: var(--Color-Grey-4);
`

export const HeadlineTwoStyle = css`
    font-weight: 600;
    font-size: 12px;

    color: var(--Color-Grey-1);

    
`

export const HeadlineThreeCardStyle = css`
    font-weight: 400;
    font-size: 12px;

    color: var(--Color-Grey-3);

   
`

export const HeadlineFourCardStyle = css`
    font-weight: 400;
    font-size: 16px;

    color: var(--Color-Grey-0);
    
`

export const HeadlineFiveCardStyle = css`
    font-weight: 400;
    font-size: 10px;

    color: var(--Color-Negativ);
    
`
export const HeadlineSixCardStyle = css`
    font-size: 14px;
    font-weight: 700;
    color: var(--Color-Grey-3);
`


export const TittleForm = styled.h2`
    ${HeadlineOneStyle}
`

export const ParagraphFormLogin = styled.p`
    ${HeadlineTwoStyle}
`

export const ParagraphFormRegister = styled.p`
    ${HeadlineThreeCardStyle}
`

export const ParagraphFormSpan = styled.p`
    ${HeadlineFourCardStyle}
`

export const ParagraphFormError = styled.p`
    ${HeadlineFiveCardStyle}
`

export const TittleModal = styled.h2`
    ${HeadlineSixCardStyle}
`
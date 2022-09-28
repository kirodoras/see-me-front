import Styled from 'styled-components';

export default function Date() {
    return (
        <DateStyled>
            1:00 PM | Sun, Jun 6
        </DateStyled>
    );
}

const DateStyled = Styled.main`
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 36px;

    @media(max-width: 68.75rem) {
        display: none;
    }
`;
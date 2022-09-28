import Styled from 'styled-components';

export default function Main() {
    return (
        <MainStyled>
            Main
        </MainStyled>
    );
}

const MainStyled = Styled.main`
    width: 100%;
    max-width: 100%;
    color: white;
    margin-top: 3rem;
    border: 1px solid red;
`;
import Header from '../components/Header/Header';
import Main from '../components/Main';
import Styled from 'styled-components';

export default function Home() {
    return (
        <HomeStyled>
            <Header />
            <Main />
        </HomeStyled>
    );
}

const HomeStyled = Styled.div`
    width: 100%;
    max-width: 100%;
    color: white;
`;
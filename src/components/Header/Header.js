import Styled from 'styled-components';
import Login from './Login';
import Date from './Date';
import logo from '../../assets/logo.png';
export default function Header() {
    return (
        <HeaderStyled>
            <LogoStyled>
                <img src={logo} alt="Logo See me" />
                <h1>See me</h1>
            </LogoStyled>
            <div>
                <Date />
                <Login />
            </div>
        </HeaderStyled>
    );
}

const HeaderStyled = Styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 100%;
    height: 5rem;
    color: white;
    &>div {
        display: flex;
        align-items: center;
        width: 24rem;
        max-width: 100%;
    }
    @media(max-width: 68.75rem) {
        &>div {
            width: 8rem;
        }
    }
`;

const LogoStyled = Styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    img {
        width: 4rem;
        height: 4rem;
    }
    h1 {
        font-size: 2rem;
        font-style: normal;
        font-weight: 300;
        line-height: 3.375rem;
    }
    @media(max-width: 68.75rem) {
        img {
            width: 3rem;
            height: 3rem;
        }
        h1 {
            font-size: 1.5rem;
        }
    }
    @media(max-width: 20rem) {
        img {
            width: 2rem;
            height: 2rem;
        }
        h1 {
            font-size: 1rem;
        }
    }
`;
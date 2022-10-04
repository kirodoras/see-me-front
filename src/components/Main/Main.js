import Styled from 'styled-components';

export default function Main() {
    return (
        <MainStyled>
            <div>
            </div>
            <span>
            </span>
        </MainStyled>
    );
}

const MainStyled = Styled.main`
    width: 100%;
    max-width: 100%;
    height: 80%;
    color: #f7f0f5;
    padding-top: 3rem;
    display: flex;
    gap: 2rem;

    &>div {
        width: 60%;
        max-width: 100%;
        height: 100%;
        background: rgba( 183, 184, 191, 0.45 );
        box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
        backdrop-filter: blur( 10px );
        -webkit-backdrop-filter: blur( 10px );
        border-radius: 10px;
        border: 1px solid rgba( 255, 255, 255, 0.18 );
    }
    &>span {
        width: 40%;
        max-width: 100%;
        height: 100%;
        background: rgba( 183, 184, 191, 0.45 );
        box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
        backdrop-filter: blur( 10px );
        -webkit-backdrop-filter: blur( 10px );
        border-radius: 10px;
        border: 1px solid rgba( 255, 255, 255, 0.18 );
    }

    @media(max-width: 68.75rem) {
        flex-direction: column;
        padding-top: 2rem;
        &>div {
            width: 100%;
        }
        &>span {
            width: 100%;
        }
    }
`;
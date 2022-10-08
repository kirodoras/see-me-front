import Styled from 'styled-components';
import MeetingForm from '../MeetingForm/MeetingForm';
import Schedule from '../Schedule/Schedule';

export default function Main() {
    return (
        <MainStyled>
            <MeetingForm />
            <Schedule />
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
    gap: 1rem;

    @media(max-width: 68.75rem) {
        flex-direction: column;
        padding-top: 2rem;
        gap: 0.5rem;
        &>div {
            width: 100%;
        }
        &>span {
            width: 100%;
        }
    }
`;
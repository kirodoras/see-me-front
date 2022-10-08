import Styled from 'styled-components';
import CreateSchedule from './CreateSchedule';
export default function Schedule() {
    return (
        <ScheduleStyled>
            <CreateSchedule />
        </ScheduleStyled>
    );
}

const ScheduleStyled = Styled.span`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1.2rem;
    border-radius: 10%;
    width: 40%;
    max-width: 100%;
    height: 100%;
    background: rgba( 183, 184, 191, 0.45 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 10px );
    -webkit-backdrop-filter: blur( 10px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
`;
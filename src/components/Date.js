import { useState } from 'react';
import dayjs from 'dayjs';
import Styled from 'styled-components';

export default function Date() {
    const [date, setDate] = useState(dateFormat());
    setInterval(() => {
        setDate(dateFormat());
    }, 1000);
    return (
        <DateStyled>
            {date}
        </DateStyled>
    );
}

function dateFormat() {
    const date = dayjs().format('h:mm A | MMM DD');
    return date;
}

const DateStyled = Styled.main`
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 36px;

    @media(max-width: 68.75rem) {
        display: none;
    }
`;
import { useState } from 'react';
import axios from 'axios';
import Styled from 'styled-components';
import { backEndUrl } from "../../env/env";

import { useContext } from "react";
import UserContext from "../../contexts/UserContext";
import Loading from '../Loading/Loading';
export default function CreateSchedule() {
    const { user } = useContext(UserContext);
    const [title, setTitle] = useState('');
    const [time, setTime] = useState('');
    const [buttonContent, setButtonContent] = useState('+');
    const [disabled, setDisabled] = useState(false);

    function submitData(event) {
        event.preventDefault();
        setDisabled(true);
        setButtonContent(<Loading size="40" />);
        const URL = `${backEndUrl}/schedules/create`;
        const AUT = { headers: { Authorization: `Bearer ${user.token}` } };
        const BODY = { title, hours: time };
        const promise = axios.post(URL, BODY, AUT);
        promise.then((response) => {
            console.log(response);
            setDisabled(false);
            setTitle("");
            setTime("");
            setButtonContent('+');
        }).catch((err) => {
            console.log({
                err,
            });
            alert("Make sure you are logged in, error in create schedule");
            setDisabled(false);
            setButtonContent('+');
        });
    }
    return (
        <CreateScheduleStyled>
            <FormStyled onSubmit={submitData}>
                <input
                    required
                    disabled={disabled}
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)} />
                <input
                    required
                    disabled={disabled}
                    type="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)} />
                <button
                    disabled={disabled}
                    type="submit">
                    {buttonContent}
                </button>
            </FormStyled>
        </CreateScheduleStyled>
    );
}

const CreateScheduleStyled = Styled.span`
    width: 100%;
    max-width: 100%;
    height: 3.75rem;
`;

const FormStyled = Styled.form`
    display: flex;
    gap: 0.5rem;
    width: 100%;
    max-width: 100%;
    height: 100%;
    input {
        padding: 0.4rem;
        font-size: 1.25rem;
        width: 50%;
        max-width: 100%;
        height: 100%;
        border: 1px solid black;
        border-radius: 0.625rem; 
    }
    input:nth-child(2) {
        width: 30%;
    }
    button {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 2.25rem;
        width: 20%;
        max-width: 100%;
        height: 3.75rem;
        border-radius: 0.625rem;
        background: #f03a47;
        color: #f7f0f5;
    }
    @media(max-width: 29.4rem) {
        gap: 0.2rem;
        input:nth-child(2) {
            width: 8rem;
            max-width: 8rem;
        }
    }
`;
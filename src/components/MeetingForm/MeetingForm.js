import { useState } from "react";
import axios from "axios";
import Styled from 'styled-components';
import { backEndUrl } from "../../env/env";
import { useNavigate } from "react-router-dom";

import { useContext } from "react";
import ChannelContext from "../../contexts/ChannelContext";
import Loading from "../Loading/Loading";

export default function MeetingForm() {
    const navigate = useNavigate();
    const { setChannel } = useContext(ChannelContext);
    const [channelName, setChannelName] = useState('');
    const [disabled, setDisabled] = useState(false);
    const [buttonContent, setButtonContent] = useState('New Meeting');

    function submitData(event) {
        event.preventDefault();
        setDisabled(true);
        setButtonContent(<Loading size="50" />);
        const URL = `${backEndUrl}/token?channelName=${channelName}`;
        const promise = axios.get(URL);
        promise.then((response) => {
            const token = response.data.token;
            setDisabled(false);
            setButtonContent('New Meeting');
            setChannel({
                channelName,
                token,
            });
            navigate('/room');
        }).catch((err) => {
            console.log({
                err,
            });
            alert("Error in create/join channel");
            setDisabled(false);
            setButtonContent('New Meeting');
        });
    }
    return (
        <MeetingFormStyled>
            <h3>Create or Join a Meeting</h3>
            <FormStyled onSubmit={submitData}>
                <button
                    disabled={disabled}
                    type="submit">
                    {buttonContent}
                </button>
                <input
                    required
                    disabled={disabled}
                    type="text"
                    placeholder="Channel Name"
                    maxLength="8"
                    value={channelName}
                    onChange={(e) => setChannelName(e.target.value)} />
            </FormStyled>
        </MeetingFormStyled>
    );
}

const MeetingFormStyled = Styled.div`
    width: 60%;
    max-width: 100%;
    height: 25%;
    padding: 1rem 1.2rem 1rem 1.2rem;

    background: rgba( 183, 184, 191, 0.45 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 10px );
    -webkit-backdrop-filter: blur( 10px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    z-index: 3;
    h3 {
        font-weight: 400;
        font-size: 24px;
        line-height: 30px;
        margin: 0.5rem 0 1rem 0;
    }
    @media(max-height: 42rem) {
        height: 35%;
        h3 {
            margin: 0.3rem 0 0.3rem 0;
            font-size: 18px;
        }
    }
    @media(max-width: 23rem) {
        h3 {
            font-size: 16px;
        }
    }
    @media(max-width: 42rem) {
        height: 35%;
    }
`;

const FormStyled = Styled.form`
    display: flex;
    gap: 0.5rem;
    input {
        padding: 0.4rem;
        font-size: 1.25rem;
        width: 22.5rem;
        max-width: 100%;
        height: 3.75rem;
        border: 1px solid black;
        border-radius: 0.625rem; 
    }
    button {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.25rem;
        width: 15rem;
        max-width: 100%;
        height: 3.75rem;
        border-radius: 0.625rem;
        background: #5179fd;
        color: #f7f0f5;
        cursor: pointer;
    }
    @media(max-width: 37rem) {
        flex-direction: column-reverse;
        input {
            width: 100%;
            height: 3.2rem;
        } 
        button {
            width: 100%;
            height: 3.2rem;
        }  
    }
    @media(max-height: 41rem) {
        input {
            width: 100%;
            height: 2.5rem;
        } 
        button {
            width: 100%;
            height: 2.5rem;
        }  
    }
    @media(max-height: 36.25rem) {
         flex-direction: row-reverse;
    }
`;



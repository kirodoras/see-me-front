import { useState, useEffect } from 'react';
import axios from "axios";
import { backEndUrl } from "../../env/env";
import Styled from 'styled-components';
import { IoCopyOutline } from "react-icons/io5";
import { IoTrashOutline } from "react-icons/io5";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext";
import { CopyToClipboard } from 'react-copy-to-clipboard';

export default function ShowSchedule({ update, setUpdate }) {
    const [schedules, setSchedules] = useState([]);
    const { user } = useContext(UserContext);
    useEffect(() => {
        if (user.token?.length > 0) {
            const URL = `${backEndUrl}/schedules/findByUserId`;
            const AUT = { headers: { Authorization: `Bearer ${user.token}` } };
            const promise = axios.get(URL, AUT);
            promise.then((response) => {
                setSchedules(response.data);
            }).catch((err) => {
                console.log({
                    err,
                });
                if (err.response.data === "Token expired") {
                    alert("Your session has expired, please log in again");
                } else {
                    alert("Make sure you are logged in, error in show schedule");
                }
            });
        }
    }, [user.token, update]);
    return (
        <ShowScheduleStyled>
            {schedules.length === 0 ?
                <NoItens /> :
                schedules.map((value) =>
                    <Item key={value.id} id={value.id} title={value.title} hours={value.hours} token={user.token} update={update} setUpdate={setUpdate} />
                )}
        </ShowScheduleStyled>
    );
}

function Item({ id, title, hours, token, update, setUpdate }) {
    const [copied, setCopied] = useState(false);
    function deleteSchedule() {
        const URL = `${backEndUrl}/schedules/delete/${id}`;
        const AUT = { headers: { Authorization: `Bearer ${token}` } };
        const promise = axios.delete(URL, AUT);
        promise.then((response) => {
            console.log(response);
            setUpdate(!update);
        }).catch((err) => {
            console.log({
                err,
            });
            alert("Make sure you are logged in, error in delete schedule");
        });
    }
    return (
        <ItemStyled>
            <span>
                {title}
            </span>
            <time>
                {hours}
            </time>
            <CopyStyled>
                <CopyToClipboard text={title} onCopy={() => setCopied(true)} style={{ width: "100%", height: "100%" }}>
                    <IoCopyOutline />
                </CopyToClipboard>
            </CopyStyled>
            <TrashStyled onClick={deleteSchedule}>
                <IoTrashOutline />
            </TrashStyled>
        </ItemStyled>
    );
}

function NoItens() {
    return (
        <NoItensStyled>
            There are no schedules yet...
        </NoItensStyled>
    );
}

const ShowScheduleStyled = Styled.span`
    width: 100%;
    max-width: 100%;
    height: 100%;
    padding-top: 0.5rem;
    overflow: hidden;
    overflow-y: scroll;
    scrollbar-width: none;
    -ms-overflow-style: none;
    ::-webkit-scrollbar {
        width: 0;
    }
    @media(max-width: 29.4rem) {
        padding-top: 0.2rem;
    }
`;

const ItemStyled = Styled.span`
    width: 100%;
    max-width: 100%;
    height: 2.2rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border-bottom: 1px solid rgba( 255, 255, 255, 0.18 );
    span {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 33%;
        font-weight: 400;
        font-size: 24px;
        line-height: 30px;
    }
    time {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 20%;
        font-weight: 400;
        font-size: 22px;
        line-height: 30px;
    }
    button {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 3rem;
        width: 10%;
        height: 2rem;
        border-radius: 0.625rem;
        cursor: pointer;
        svg {
            font-size: 28px;
        }
    }
    &::before {
        content: "";
        width: 1rem;
        height: 1rem;
        border-radius: 50%;
        background: #0f152b;
    }
    @media(max-width: 23.5rem) {
        span {
            font-size: 20px;
        }
        time {
            font-size: 18px;
        }
    }
    @media(max-width: 20rem) {
        span {
            font-size: 18px;
        }
        time {
            font-size: 16px;
        }
    }
`;

const CopyStyled = Styled.button`
    background: #0f152b;
    color: #f7f0f5;
`;

const TrashStyled = Styled.button`
    background: #f7f0f5;
    color: #f03a47;
`;

const NoItensStyled = Styled.span`
    width: 100%;
    max-width: 100%;
    display: flex;
    justify-content: center;
`;
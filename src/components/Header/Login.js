import { useRef } from "react";
import { useScript } from "../../hooks/useScript";
import jwt_decode from 'jwt-decode';
import axios from "axios";
import { backEndUrl } from "../../env/env";

import { useContext } from "react";
import UserContext from "../../contexts/UserContext";

import Styled from 'styled-components';
import { googleApiUrl, googleClientId } from "../../env/env";

import guest from '../../assets/guest.jpg';

export default function Login() {
    const googlebuttonref = useRef();
    const { user, setUser } = useContext(UserContext);

    const onGoogleSignIn = async (user) => {
        try {
            let userCred = user.credential;
            let payload = await jwt_decode(userCred);
            const { email, name, picture } = payload;
            const BODY = { email, name, picture };
            const URL = `${backEndUrl}/users/login`;
            const promise = await axios.post(URL, BODY);
            const userInfo = promise.data;
            localStorage.setItem('user', JSON.stringify(userInfo));
            setUser(userInfo);
        } catch {
            alert('Signature error');
        }
    };

    useScript(googleApiUrl, () => {
        window.google.accounts.id.initialize({
            client_id: googleClientId,
            callback: onGoogleSignIn,
            auto_select: false,
        });

        window.google.accounts.id.renderButton(googlebuttonref.current, {
            type: "icon",
        });
    });

    return (
        <LoginStyled>
            <div ref={googlebuttonref}></div>
            <img src={user ? user.picture : guest} onError={({ currentTarget }) => {
                currentTarget.onerror = null;
                currentTarget.src = guest;
            }} alt="Avatar" />
        </LoginStyled>
    );
}

const LoginStyled = Styled.div`
    display: flex;
    align-items: center;
    gap: 1.1rem;
    margin-left: 1.2rem;

    img {
        color: #f7f0f5;
        width: 3.3rem;
        border-radius: 50%;
    }
`;
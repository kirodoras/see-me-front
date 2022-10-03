import { useRef } from "react";
import { useScript } from "../../hooks/useScript";
import jwt_decode from 'jwt-decode';

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
            console.log({payload});
            setUser(payload);
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
            <img src={user ? user.picture : guest} alt="Avatar" />
        </LoginStyled>
    );
}

const LoginStyled = Styled.div`
    display: flex;
    align-items: center;
    gap: 1.1rem;
    margin-left: 1.2rem;

    img {
        color: white;
        width: 3.3rem;
        border-radius: 50%;
    }
`;
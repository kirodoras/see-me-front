import Styled from 'styled-components';
import { useState } from "react";
import VideoCall from '../components/Video/VideoCall';
import { useNavigate } from 'react-router-dom';
import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";
import { useContext } from "react";
import ChannelContext from "../contexts/ChannelContext";
import { appId } from "../env/env";

export default function VideoRoom() {
    const [inCall, setInCall] = useState(true);
    const { channel } = useContext(ChannelContext);
    const navigate = useNavigate();
    if (!channel.channelName && !channel.token) {
        navigate("/");
    }
    const { channelName, token } = channel;
    const config = { mode: "rtc", codec: "vp8", appId: appId, token: token };
    const useClient = createClient(config);
    const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
    const { error } = useMicrophoneAndCameraTracks;
    if (error) {
        navigate("/");
        alert("Devices not found");
    }
    return (
        <VideoRoomStyled>
            {inCall ? <VideoCall
                setInCall={setInCall}
                config={config}
                channelName={channelName}
                useClient={useClient}
                useMicrophoneAndCameraTracks={useMicrophoneAndCameraTracks}
            /> : null}
        </VideoRoomStyled>
    );
}

const VideoRoomStyled = Styled.div`
    width: 100%;
    height: 100%;
`;
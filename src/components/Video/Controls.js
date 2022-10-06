import { useState } from "react";
import { Grid, Button } from "@material-ui/core";
import MicIcon from "@material-ui/icons/Mic";
import MicOffIcon from "@material-ui/icons/MicOff";
import VideocamIcon from "@material-ui/icons/Videocam";
import VideocamOffIcon from "@material-ui/icons/VideocamOff";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { useNavigate } from "react-router-dom";

export default function Controls(props) {
    const { tracks, setStart, setInCall, useClient } = props;
    const client = useClient();
    const [trackState, setTrackState] = useState({ video: true, audio: true });
    const navigate = useNavigate();

    const mute = async (type) => {
        if (type === "audio") {
            await tracks[0].setEnabled(!trackState.audio);
            setTrackState((ps) => {
                return { ...ps, audio: !ps.audio };
            });
        } else if (type === "video") {
            await tracks[1].setEnabled(!trackState.video);
            setTrackState((ps) => {
                return { ...ps, video: !ps.video };
            });
        }
    };

    const leaveChannel = async () => {
        await client.leave();
        client.removeAllListeners();
        tracks[0].close();
        tracks[1].close();
        setStart(false);
        setInCall(false);
        navigate("/");
    };

    const audioColors = () => {
        if(trackState.audio) {
            return { background: "#5179fd", color: "#f7f0f5" };
        } else {
            return { background: "#f03a47", color: "#f7f0f5" };
        }
    }
    const videoColors = () => {
        if(trackState.video) {
            return { background: "#5179fd", color: "#f7f0f5" };
        } else {
            return { background: "#f03a47", color: "#f7f0f5" };
        }
    }

    return (
        <Grid container spacing={2} alignItems="center" >
            <Grid item>
                <Button
                    variant="contained"
                    style={audioColors()}
                    onClick={() => mute("audio")}
                >
                    {trackState.audio ? <MicIcon /> : <MicOffIcon />}
                </Button>
            </Grid>
            <Grid item>
                <Button
                    variant="contained"
                    style={videoColors()}
                    onClick={() => mute("video")}
                >
                    {trackState.video ? <VideocamIcon /> : <VideocamOffIcon />}
                </Button>
            </Grid>
            <Grid item>
                <Button
                    variant="contained"
                    onClick={() => leaveChannel()}
                    style={{ background: "#b7b8bf" }}
                >
                    Leave
                    <ExitToAppIcon />
                </Button>
            </Grid>
        </Grid>
    );
}
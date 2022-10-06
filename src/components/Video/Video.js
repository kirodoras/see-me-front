import { AgoraVideoPlayer } from "agora-rtc-react";
import { Grid, useMediaQuery } from "@material-ui/core";
import { useState, useEffect } from "react";

export default function Video(props) {
    const { users, tracks } = props;
    const [gridSpacing, setGridSpacing] = useState(12);

    useEffect(() => {
        setGridSpacing(Math.max(Math.floor(12 / (users.length + 1)), 4));
    }, [users, tracks]);

    return (
        <Grid container style={{ height: "100%" }}>
            <VideoResposive gridSpacing={gridSpacing}>
                <AgoraVideoPlayer
                    videoTrack={tracks[1]}
                    style={{ height: "100%", width: "100%" }}
                />
            </VideoResposive>
            {users.length > 0 &&
                users.map((user) => {
                    if (user.videoTrack) {
                        return (
                            <VideoResposive gridSpacing={gridSpacing}>
                                <AgoraVideoPlayer
                                    videoTrack={user.videoTrack}
                                    key={user.uid}
                                    style={{ height: "100%", width: "100%" }}
                                />
                            </VideoResposive>
                        );
                    } else return null;
                })}
        </Grid>
    );
}

function VideoResposive(props) {
    const matches = useMediaQuery('(min-width:60rem)');

    function Horizontal() {
        return (
            <Grid item xs={props.gridSpacing}>
                {props.children}
            </Grid >
        );
    }
    function Vertical() {
        return (
            <Grid style={{ width: "100%" }}>
                {props.children}
            </Grid>
        );
    }
    return (
        <>
            {matches ? Horizontal() : Vertical()}
        </>
    );
}

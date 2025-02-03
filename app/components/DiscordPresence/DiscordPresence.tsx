import React, { useEffect, useState } from "react";
import "./DiscordPresence.css";
import { IoGameControllerSharp } from "react-icons/io5";
import { FaDiscord, FaSpotify } from "react-icons/fa";
import { MdGames } from "react-icons/md";
import { VscVscode } from "react-icons/vsc";
import { BorderBeam } from "@stianlarsen/border-beam";

const DiscordPresence = () => {
    interface Activity {
        name: string;
        details?: string;
        state?: string;
        type: number;
        assets?: {
            large_image?: string;
        };
        timestamps?: {
            start?: number;
        };
    }

    const [activities, setActivities] = useState<Activity[]>([]);
    const [status, setStatus] = useState("offline");
    const [isCardOpen, setIsCardOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const userId = "588300195901734929";
        const ws = new WebSocket("wss://api.lanyard.rest/socket");

        ws.onopen = () => {
            ws.send(JSON.stringify({
                op: 2,
                d: { subscribe_to_id: userId }
            }));
        };

        ws.onmessage = (event) => {
            const data = JSON.parse(event.data);
            if (data.t === "INIT_STATE" || data.t === "PRESENCE_UPDATE") {
                setStatus(data.d.discord_status);
                const filteredActivities = data.d.activities?.filter((activity: any) => {
                    return (
                        activity.name === "Spotify" ||
                        activity.name === "Code" ||
                        activity.type === 0
                    );
                });
                setActivities(filteredActivities || []);
            }
        };

        return () => ws.close();
    }, []);

    const toggleCard = () => {
        setIsCardOpen(!isCardOpen);
    };

    return (
        <div className="discord-wrapper">
            <div
                className={`discord-icon ${status} ${isHovered ? 'hovered' : ''} ${isCardOpen ? 'hovered' : ''}`}
                onMouseEnter={() => { setIsHovered(true); toggleCard(); }}
                onMouseLeave={() => { setIsHovered(false); toggleCard(); }}
            >
                <div className={`status-indicator ${status}`}></div>
                <FaDiscord className="discord-svg" />
            </div>

            <div className={`discord-presence-card ${isCardOpen ? "open" : ""}`}>
                    <BorderBeam size={150} duration={5} />

                <div className="card-header">
                    <span className={`status-dot ${status}`}></span>
                    <span className="status-text">{status}</span>
                </div>

                {activities.map((activity, index) => (
                    <div key={index} className="activity">
                        {activity.name === "Spotify" && (
                            <div className="spotify-activity">
                                <FaSpotify className="activity-icon spotify-icon" />
                                <div className="spotify-details">
                                    <p>Listening <b>Spotify</b></p>
                                    <p className="spotify-song">{activity.details}</p>
                                </div>
                            </div>
                        )}

                        {activity.type === 0 && activity.name === "Code" && (
                            <div className="vscode-activity">
                                <VscVscode className="activity-icon vscode-icon" />
                                <div className="vscode-details">
                                    <p className="vscode-name">Using <b>Visual Studio Code</b></p>
                                    <LiveTimer startTime={activity.timestamps?.start} />
                                </div>
                            </div>
                        )}

                        {activity.type === 0 && activity.name !== "Spotify" && activity.name !== "Code" && (
                            <div className="game-activity">
                                <MdGames className="game-icon" />
                                <div className="game-details">
                                    <p className="game-name">{activity.name}</p>
                                    <p className="game-state">{activity.details}</p>
                                </div>
                            </div>
                        )}
                    </div>
                ))}

                {status === "offline" && (
                    <div className="offline-message">Currently Sleeping</div>
                )}
            </div>
        </div>
    );
};

const LiveTimer = ({ startTime }: { startTime: number | undefined }) => {
    const [time, setTime] = useState(0);

    useEffect(() => {
        if (!startTime) return;

        const interval = setInterval(() => {
            const now = Date.now();
            const diff = Math.floor((now - startTime) / 1000); // Difference in seconds
            setTime(diff);
        }, 1000);

        return () => clearInterval(interval);
    }, [startTime]);

    const formatTime = (seconds: number) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds}`;
    };

    return <p className="vscode-time"><IoGameControllerSharp/> <b>{formatTime(time)}</b></p>;
};

export default DiscordPresence;
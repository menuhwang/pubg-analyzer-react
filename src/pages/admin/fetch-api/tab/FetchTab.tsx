import React from "react";
import PlayerPane from "./pane/PlayerPane";
import MatchPane from "./pane/MatchPane";

function FetchTab() {
    return (
        <div>
            <ul className="nav nav-tabs" id="fetchTab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="player-tab" data-bs-toggle="tab"
                            data-bs-target="#player-tab-pane" type="button" role="tab" aria-controls="player-tab-pane"
                            aria-selected="true">Player
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="match-tab" data-bs-toggle="tab" data-bs-target="#match-tab-pane"
                            type="button" role="tab" aria-controls="match-tab-pane" aria-selected="false">Match
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="telemetry-tab" data-bs-toggle="tab"
                            data-bs-target="#telemetry-tab-pane" type="button" role="tab"
                            aria-controls="telemetry-tab-pane" aria-selected="false" disabled>Telemetry
                    </button>
                </li>
            </ul>
            <div className="tab-content border border-top-0 rounded-bottom p-3" id="fetchTabContent">
                <PlayerPane />
                <MatchPane />
            </div>
        </div>
    )
}

export default FetchTab;
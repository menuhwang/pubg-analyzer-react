import React from "react";

function PlayerPane() {
    return (
        <div className="tab-pane fade show active" id="player-tab-pane" role="tabpanel" aria-labelledby="player-tab"
             tabIndex={0}>
            <h2>Request</h2>
            <div className="row mb-3">
                <label className="col-2 col-form-label" htmlFor="player-shard-select">플랫폼</label>
                <div className="col-2">
                    <select className="form-select" id="player-shard-select">
                        <option>STEAM</option>
                        <option>KAKAO</option>
                    </select>
                </div>
                <label className="col-2 col-form-label" htmlFor="nickname-input">닉네임</label>
                <div className="col">
                    <input className="form-control" type="text" id="nickname-input"/>
                </div>
                <div className="col-2">
                    <button className="btn btn-primary" id="player-fetch-btn">Execute</button>
                </div>
            </div>
            <h3>Response</h3>
            <pre className="form-control overflow-scroll" style={{height: "500px"}}><code
                id="player-response"></code></pre>
        </div>
    )
}

export default PlayerPane;
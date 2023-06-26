import React from "react";

function MatchPane() {
    return (
        <div className="tab-pane fade" id="match-tab-pane" role="tabpanel" aria-labelledby="match-tab" tabIndex={0}>
            <h2>Request</h2>
            <div className="row mb-3">
                <label className="col-2 col-form-label" htmlFor="match-shard-select">플랫폼</label>
                <div className="col-2">
                    <select className="form-select" id="match-shard-select">
                        <option>STEAM</option>
                        <option>KAKAO</option>
                    </select>
                </div>
                <label className="col-2 col-form-label" htmlFor="match-input">매치 ID</label>
                <div className="col">
                    <input className="form-control" type="text" id="match-input"/>
                </div>
                <div className="col-2">
                    <button className="btn btn-primary" id="match-fetch-btn">Execute</button>
                </div>
            </div>
            <h3>Response</h3>
            <pre className="form-control overflow-scroll" style={{height: "500px"}}><code id="match-response"></code></pre>
        </div>
    )
}

export default MatchPane;
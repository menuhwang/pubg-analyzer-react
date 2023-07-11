import React from "react";

function MatchItemPlaceHolder() {
    return (
        <div className="card mt-3 position-relative pa-stat">
            <div className="card-body">
                <div className="row align-items-center placeholder-glow">
                    <div className="col-12 col-md">
                        <div className="row">
                            <div className="col-10 col-md-12">
                                <span className="col-3 col-md-8 placeholder"></span>
                            </div>
                            <div className="col-2 ms-auto col-md-12 ms-md-0">
                                <span className="col-12 col-md-10 placeholder"></span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md">
                        <div className="row mb-3 mb-md-0">
                            <div className="col-9 col-md-12">
                                <span className="col-2 col-md-8 placeholder"></span>
                            </div>
                            <div className="col-3 ms-auto col-md-12 ms-md-0">
                                <span className="col-12 col-md-10 placeholder"></span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md">
                        <div className="row mb-1 mb-md-0">
                            <div className="col col-md-12">
                                <span className="col-2 col-md-4 placeholder"></span>
                            </div>
                            <div className="col col-md-12">
                                <span className="col-3 col-md-5 placeholder"></span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md">
                        <div className="row mb-1 mb-md-0">
                            <div className="col col-md-12">
                                <span className="col-6 col-md-12 placeholder"></span>
                            </div>
                            <div className="col col-md-12">
                                <span className="col-3 col-md-5 placeholder"></span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md">
                        <div className="row mb-1 mb-md-0">
                            <div className="col col-md-12">
                                <span className="col-5 col-md-8 placeholder"></span>
                            </div>
                            <div className="col col-md-12">
                                <span className="col-3 col-md-5 placeholder"></span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md">
                        <div className="row mb-1 mb-md-0">
                            <div className="col col-md-12">
                                <span className="col-4 col-md-5 placeholder"></span>
                            </div>
                            <div className="col col-md-12">
                                <span className="col-3 col-md-5 placeholder"></span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md col-2 ms-auto">
                        <a tabIndex={-1} className="btn btn-primary disabled col-12 col-md-6 placeholder" type="button"></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MatchItemPlaceHolder;
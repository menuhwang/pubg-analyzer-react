import React, {useEffect} from "react";
import {Spinner} from "react-bootstrap";
import {redirectShareLink} from "../api/share";
import {useParams} from "react-router-dom";

function RedirectPage() {
    const {id} = useParams<string>();

    useEffect(() => {
        if (!id) {
            window.history.back();
            return;
        }
        redirectShareLink(id)
            .then(data => {
                window.location.href = `${data.path}`
            }).catch(err => {
                console.error(err);
                alert("잘못된 접근입니다.")
                window.history.back();
                return;
        })
    }, [id])
    return (
        <div className="pa-player-page min-vh-100 container-fluid py-md-5">
            <div className="row justify-content-center">
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>
        </div>
    )
}

export default RedirectPage;

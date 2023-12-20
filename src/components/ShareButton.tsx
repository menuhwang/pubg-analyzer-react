import React, {useEffect, useRef, useState} from "react";
import {useLocation} from "react-router-dom";
import {fetchPostLinkShare} from "../api/share";
import {CopyToClipboard} from "react-copy-to-clipboard";
import {Button, OverlayTrigger, Popover, Spinner, Stack} from "react-bootstrap";

function ShareButton() {
    const location = useLocation();
    const path = location.pathname;
    const [disable, setDisable] = useState<boolean>(false);
    const [showPop, setShowPop] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [shortLink, setShortLink] = useState<string | null>(null);
    const target = useRef(null);

    useEffect(() => {
        setShortLink(null);
        setDisable(false);
        setShowPop(false);
        setLoading(false);
    }, [path])

    const onClickHandler = () => {
        setShowPop(!showPop);
        if (shortLink) {
            return;
        }
        setDisable(true);

        fetchShareLink();
    }

    const fetchShareLink = () => {
        setLoading(true);
        fetchPostLinkShare(path)
            .then(result => {
                setShortLink(window.location.host + result.path);
                setDisable(false);
                setLoading(false);
            })
            .catch(e => {
                setDisable(false);
                setLoading(false);
                console.error(e);
            })
    }

    const popover = (
        <Popover id="popover-basic">
            <Popover.Header as="div">
                <Stack direction="horizontal">
                    <div>공유하기</div>
                    <div className="ms-auto" role="button" onClick={() => setShowPop(false)}>
                        <i className="fa-solid fa-xmark"></i>
                    </div>
                </Stack>
            </Popover.Header>
            <Popover.Body>
                        {
                            loading ?
                                <Spinner animation="border" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </Spinner>
                                :
                                shortLink ?
                                <Stack direction="horizontal" gap={3}>
                                    <div>{shortLink}</div>
                                    <CopyToClipboard text={shortLink} onCopy={() => alert("복사 완료")}>
                                        <div role="button">
                                            <i className="fa-regular fa-copy"></i>
                                        </div>
                                    </CopyToClipboard>
                                </Stack>
                                :
                                <div>
                                    잠시 후 다시 시도해 주세요.
                                </div>
                        }
            </Popover.Body>
        </Popover>
    );

    return (
        <>
            <OverlayTrigger trigger="click" placement="bottom-end" overlay={popover} show={showPop}>
                <Button className="btn btn-primary my-auto px-sm-1" ref={target} disabled={disable} onClick={() => onClickHandler()}>
                    공유
                </Button>
            </OverlayTrigger>
        </>

    )
}

export default ShareButton;

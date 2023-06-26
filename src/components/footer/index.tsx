import React from "react";

function Footer() {
    return (
        <footer className="container-fluid py-4 bg-light">
            <div className="container">
                <div className="fw-bold mb-2">PUBG Report</div>
                <div className="text-muted">배틀그라운드 매치 조회 및 킬, 데미지 분석 사이트입니다.</div>
                <div className="text-muted">Made By <a href="https://github.com/menuhwang">@menuhwang</a></div>
            </div>
        </footer>
    )
}

export default Footer;

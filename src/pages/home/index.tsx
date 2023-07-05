import React, {useState} from 'react';
import NavbarProvider from "../../components/navbar/NavbarProvider";
import BookmarkTable from "./BookmarkTable";

function HomePage() {
    const [nickname, setNickname] = useState('');

    const searchBtnOnClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        window.location.href = `/matches/${nickname}`;
    }

    const nicknameInputOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNickname(event.target.value);
    }

    return (
        <>
            <NavbarProvider isAdmin={false} />
            <div className="container vh-100 d-flex">
                <div className="vstack gap-3 my-auto">
                    <h1 className="text-center pa-logo">PUBG Analyzer</h1>
                    <div id="pa-search-player-form" className="row justify-content-center">
                        <div className="col">
                            <input type="text" name="nickname" className="form-control" id="input-nickname"
                                   placeholder="닉네임을 입력해주세요." onChange={nicknameInputOnChange}/>
                        </div>
                        <div className="col-auto">
                            <button className="btn btn-outline-dark h-100 align-middle" onClick={searchBtnOnClick}>
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </button>
                        </div>
                    </div>
                    <BookmarkTable />
                </div>
            </div>
        </>
    );
}

export default HomePage;

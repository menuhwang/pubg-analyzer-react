import React, {useEffect, useState} from 'react';
import BookmarkContainer from "../containers/BookmarkContainer";
import {useNavigate} from "react-router-dom";
import {Application} from "../constants/application";

function HomePage() {
    const navigator = useNavigate();
    const [nickname, setNickname] = useState('');

    useEffect(() => {
        document.title = `${Application.brand} - HOME`;
    }, [])

    const searchBtnOnClick = () => {
        if (nickname === undefined || nickname.trim().length === 0) {
            alert('닉네임을 입력해주세요.');
            return;
        }
        navigator(`/player/${nickname}`);
    }

    const handleOnKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void = (e) => {
        if (e.key === 'Enter') {
            searchBtnOnClick();
        }
    }

    const nicknameInputOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNickname(event.target.value);
    }

    return (
        <div className="container vh-100 d-flex">
            <div className="vstack gap-3 my-auto">
                <h1 className="text-center pa-logo">{Application.brand}</h1>
                <div id="pa-search-player-form" className="row justify-content-center">
                    <div className="col">
                        <input type="text" name="nickname" className="form-control" id="input-nickname"
                               placeholder="닉네임을 입력해주세요." onChange={nicknameInputOnChange} onKeyDown={handleOnKeyDown}/>
                    </div>
                    <div className="col-auto">
                        <button className="btn btn-outline-dark h-100 align-middle" onClick={searchBtnOnClick}>
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </button>
                    </div>
                </div>
                <BookmarkContainer/>
            </div>
        </div>
    );
}

export default HomePage;

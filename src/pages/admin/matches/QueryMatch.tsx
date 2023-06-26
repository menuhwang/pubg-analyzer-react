import React from "react";
import {Match} from "../../../types/Match";

export type QueryMatchProps = {
    matches: Match[]
};

function QueryMatch({matches}: QueryMatchProps) {
    const tbodyItem = matches.map((match: any, index: number) =>
        <tr>
            <th scope="row">{index + 1}</th>
            <td>{match.id}</td>
            <td>{match.createdAt}</td>
            <td>
                <input className="form-check-input" type="checkbox"/>
            </td>
        </tr>
    );
    return (
        <>
            <div className="row g-3">
                <div className="col">
                    <input type="text" className="form-control" name="matchId" placeholder="match id" />
                </div>
                <div className="col-md-2">
                    <div className="col-form-label text-md-end">Created At</div>
                </div>
                <div className="col-md-3 col-lg-2">
                    <select name="sort" className="form-select">
                        <option value="createdAt,desc" selected>내림차순</option>
                        <option value="createdAt,asc">오름차순</option>
                    </select>
                </div>
                <div className="col-md-2">
                    <div className="d-grid">
                        <button className="btn btn-primary" type="submit">검색</button>
                    </div>
                </div>
            </div>
            <div className="table-responsive">
                <table className="table table-hover">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Match Id</th>
                        <th scope="col">Created</th>
                        <th scope="col">
                            <input className="form-check-input" type="checkbox" value=""/>
                        </th>
                    </tr>
                    </thead>
                    <tbody>{tbodyItem}</tbody>
                </table>
            </div>
            <div className="row g-3">
                <div className="col"></div>
                <div className="col-md-2">
                    <div className="d-grid">
                        <button className="btn btn-danger delete-selected-btn">선택 삭제</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default QueryMatch;
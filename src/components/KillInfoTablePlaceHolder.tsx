import React from "react";

function KillInfoTablePlaceHolder() {
    return (
        <div className="table-responsive placeholder-glow">
            <table className="table align-middle">
                <thead>
                <tr>
                    <th>
                        <span className="col-2 placeholder"></span>
                    </th>
                    <th>
                        <span className="col-4 placeholder"></span>
                    </th>
                    <th>
                        <span className="col-1 placeholder"></span>
                    </th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>
                        <span className="col-1 placeholder"></span>
                    </td>
                    <td>
                        <span className="col-1 placeholder"></span>
                    </td>
                    <td>
                        <span className="col-1 placeholder"></span>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}

export default KillInfoTablePlaceHolder;
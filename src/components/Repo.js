import React from "react";

const Repo = ({ repo }) => {
    return (
        <li className="list-group-item">{repo.name}</li>
    );
    };

export default Repo;
import React from "react";

const MemberComponent = ({ member }) => {
    const { firstname, lastname, position, age, gender } = member;

    return (
        <div>
            <p><strong>First Name:</strong> {firstname}</p>
            <p><strong>Last Name:</strong> {lastname}</p>
            <p><strong>Position:</strong> {position}</p>
            <p><strong>Age:</strong> {age}</p>
            <p><strong>Gender:</strong> {gender}</p>
        </div>
    );
};

export default MemberComponent;
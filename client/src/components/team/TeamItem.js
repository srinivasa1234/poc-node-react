import React from "react";
import PropTypes from "prop-types";

const TeamItem = ({ user: { name, username } }) => {
  return (
    <div className="profile bg-light">
      <div>
        <h4>{name}</h4>
        <p>{username}</p>
      </div>
    </div>
  );
};

TeamItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default TeamItem;

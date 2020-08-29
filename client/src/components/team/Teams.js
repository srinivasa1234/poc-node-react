import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import { getUsers } from "../../actions/user";
import TeamItem from "./TeamItem";

const Teams = ({ getUsers, users, loading = false }) => {
  useEffect(() => {
    getUsers();
  }, [getUsers]);

  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <div class="main">
          <h1 className="large text-primary">Team</h1>
          <p className="lead">
            <i className="fab fa-connectdevelop" /> Meet the Team
          </p>
          <div className="profiles">
            {users.length > 0 ? (
              users.map((user) => <TeamItem key={user._id} user={user} />)
            ) : (
              <h4>No team found...</h4>
            )}
          </div>
        </div>
      )}
    </Fragment>
  );
};

Teams.propTypes = {
  getUsers: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  users: state.user.users,
});

export default connect(mapStateToProps, { getUsers })(Teams);

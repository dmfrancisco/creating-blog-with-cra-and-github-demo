import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";

export default ({ nav }) => (
  <Fragment>
    <Helmet>
      <title>404</title>
    </Helmet>
    The page you are looking for was moved, removed, renamed or might never existed. <br />
    <NavLink to="/">Back to blog</NavLink>
  </Fragment>
);

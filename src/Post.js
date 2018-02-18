import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";

export default ({ date, title }) => (
  <Fragment>
    <Helmet>
      <title>{title}</title>
    </Helmet>

    <h1>
      <NavLink to="/">Blog</NavLink>
    </h1>
    <h2>{title}</h2>
    <em>{date}</em>
  </Fragment>
);

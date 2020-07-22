import React from "react";
import Profile from "./Profile";
import { NavLink, Route } from "react-router-dom";
import WithRouterSample from "./WithRouterSample";
import RouterHookSample from "./RouterHookSample";

function Profiles() {
  return (
    <div>
      <h3>사용자 목록</h3>
      <ul>
        <li>
          <NavLink
            to="/profiles/haedong"
            activeStyle={{ background: "black", color: "white" }}
          >
            haedong
          </NavLink>
        </li>

        <li>
          <NavLink to="/profiles/homer">homer</NavLink>
        </li>
      </ul>
      <Route
        path="/profiles"
        exact
        renfer={() => <div>사용자를 선택해주세요</div>}
      />
      <Route path="/profiles/:username" component={Profile} />
      <RouterHookSample />
    </div>
  );
}

export default Profiles;

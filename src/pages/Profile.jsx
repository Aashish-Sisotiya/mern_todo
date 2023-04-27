// import React from 'react'

import { useContext } from "react";
import { Context } from "../main";
import Loader from "../components/Loader";

const Profile = () => {
  const {   loading, user } = useContext(Context);

  // console.log(user);
  return loading === true ? (
    <Loader />
  ) : (
    <div>
      <h2>{user?.name}</h2>
      <h4>{user?.email}</h4>
    </div>
  );
};

export default Profile;

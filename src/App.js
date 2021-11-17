import React from "react";
import Profilephoto from "./component/profile/ProfilePhoto";
import Fullname from "./component/profile/FullName.js";
import Address from "./component/profile/Address.js";
import "./App.css";

const App = () => {
  return (
    <>
    <div className="class1">
      <Profilephoto/>
      <div className="class2">
        <Fullname/>
        <Address/>
      </div>
    </div>
    </>
  );
};
export default App;
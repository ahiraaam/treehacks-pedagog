import React, { useContext, useState, useEffect } from "react";
import "./edupoints.css";
import HeaderEduPoints from "./header-edupoints.js";
import BodyEduPoints from "./body-edupoints.js";
import { AuthContext } from "../components/Auth";
import firebase from "../components/Firebase";

const EduPoints = () => {
  // TODO: Hook Firebase to request user name
  let balance = 17500;
  let savings = 20000;
  const [acc_balance, setBalance] = useState("");
  const [acc_savings, setSavings] = useState("");
  const [actualUser, setActualUser] = useState({ fullname: "", sessions: [] });
  const { currentUser } = useContext(AuthContext);
  async function getUser() {
    const coll = await firebase.firestore().collection("users");
    const tempUser = await coll.where("email", "==", currentUser.email).get();
    tempUser.forEach((doc) => {
      setActualUser(doc.data());
      console.log("User", doc.data());
    });
  }
  function formatMoney(number, decPlaces, decSep, thouSep) {
    decPlaces = isNaN((decPlaces = Math.abs(decPlaces))) ? 2 : decPlaces;
    decSep = typeof decSep === "undefined" ? "." : decSep;
    thouSep = typeof thouSep === "undefined" ? "," : thouSep;
    var sign = number < 0 ? "-" : "";
    var i = String(
      parseInt((number = Math.abs(Number(number) || 0).toFixed(decPlaces)))
    );
    var j = (j = i.length) > 3 ? j % 3 : 0;

    return (
      sign +
      (j ? i.substr(0, j) + thouSep : "") +
      i.substr(j).replace(/(\decSep{3})(?=\decSep)/g, "$1" + thouSep) +
      (decPlaces
        ? decSep +
          Math.abs(number - i)
            .toFixed(decPlaces)
            .slice(2)
        : "")
    );
  }

  useEffect(() => {
    getUser();
    setBalance(formatMoney(actualUser.edupoints, 0));
    setSavings(formatMoney(savings, 0));
  }, []);
  return (
    <div className="root">
      <HeaderEduPoints
        name={actualUser.fullname.toUpperCase()}
        balance={acc_balance}
      ></HeaderEduPoints>
      <BodyEduPoints
        balance={acc_balance}
        savings={"$" + acc_savings}
      ></BodyEduPoints>
    </div>
  );
};

export default EduPoints;

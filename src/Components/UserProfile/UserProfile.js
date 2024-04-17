import { async } from "@firebase/util";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

import "./UserProfile.css";
import { toast } from "react-toastify";
import { TiEdit } from "react-icons/ti";

const UserProfile = () => {

  const [birthDay, setBirthDay] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [textType, setTextType] = useState("text");
  const [selectType, setSelectType] = useState(true);
  const [disabled, setDisabled] = useState(true);

  const getData = (email) => {
    const url = `https://meditro-server-production.up.railway.app/profile/${email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const { birthDay, bloodGroup, city, country, state, zipCode } = data;
        setBirthDay(birthDay);
        setBloodGroup(bloodGroup);
        setCity(city);
        setCountry(country);
        setState(state);
        setZipCode(zipCode);
      });
  };
  

  return (
    <div className="appointment-body profile-body  ">
      <div className="p-photo d-flex justify-content-between align-items-center">
        <figure>
          
        </figure>
        <div
          title="Edit Info"
          className="edit-btn"
          onClick={() => setDisabled(!disabled)}
          style={{ cursor: "pointer" }}
        >
          <TiEdit size={"2rem"} color="#b12ef7" />
        </div>
      </div>
      {/* user info */}
      <div>
        <form className="user-info">
          <div className="info-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              autoComplete="off"
              disabled
              readOnly
            />
          </div>
          <div className="info-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              autoComplete="off"
              disabled
              readOnly
            />
          </div>
          <div className="info-group">
            <label htmlFor="birth">Date of Birth</label>
            <input
              type={textType}
              name="birth"
              autoComplete="off"
              className="date-type"
              onFocus={() => setTextType("date")}
              onBlur={() => setTextType("text")}
              value={birthDay && birthDay}
              onChange={(e) => setBirthDay(e.target.value)}
              disabled={disabled}
            />
          </div>
          <div
            className="info-group"
            onFocus={() => setSelectType(false)}
            onBlur={() => setSelectType(true)}
          >
            <label htmlFor="bGroup">Blood Group </label>
            {selectType ? (
              <input
                type={"text"}
                name="bGroup"
                value={bloodGroup && bloodGroup}
                onChange={(e) => setBloodGroup(e.target.value)}
                autoComplete="off"
                disabled={disabled}
              />
            ) : (
              <select
                name="bGroup"
                type="text"
                onChange={(e) => setBloodGroup(e.target.value)}
                disabled={disabled}
              >
                <option value="a-">a-</option>
                <option value="a+">a+</option>
                <option value="b+">b+</option>
                <option value="b-">b-</option>
                <option value="ab+">ab+</option>
                <option value="ab-">ab-</option>
                <option value="o+">o+</option>
                <option value="o-">o-</option>
              </select>
            )}
          </div>
          <div className="info-group">
            <label htmlFor="city">city</label>
            <input
              type="text"
              name="city"
              autoComplete="off"
              value={city && city}
              disabled={disabled}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div className="info-group">
            <label htmlFor="state">state</label>
            <input
              type="text"
              name="state"
              autoComplete="off"
              value={state && state}
              disabled={disabled}
              onChange={(e) => setState(e.target.value)}
            />
          </div>
          <div className="info-group">
            <label htmlFor="country">country</label>
            <input
              type="text"
              name="country"
              autoComplete="off"
              value={country && country}
              disabled={disabled}
              onChange={(e) => setCountry(e.target.value)}
            />
          </div>
          <div className="info-group">
            <label htmlFor="zip">Zip Code</label>
            <input
              type="text"
              name="zip"
              value={zipCode && zipCode}
              disabled={disabled}
              onChange={(e) => setZipCode(e.target.value)}
            />
          </div>
          <div className="info-group">
            <input
              disabled={disabled}
              type="submit"
              value={"SAVE"}
              className={`submit ${disabled && "bg-transparent text-dark"}`}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserProfile;

import React from "react";
import PropTypes from "prop-types";
import classes from "./InputField.module.css";
import SearchIcon from "../assets/icons/SearchIcon";
import ArrowDown from "../assets/icons/ArrowDown";
import Warning from "../assets/icons/Warning";
InputField.propTypes = {
  setValue: PropTypes.func,
  status: PropTypes.oneOf(["active", "inactive", "error", "success"]),
  type: PropTypes.oneOf(["search", "dropdown", "dropdownsearch", ""]),
};

export default function InputField({ setValue, status, type }) {
  console.log(status);
  return (
    <div className={classes.inputwrapper}>
      <label className={`${status}`}>First</label>
      <div className={`${classes.inputcontainer} ${classes[status]}`}>
        {(type === "search" || type === "dropdownsearch") && (
          <div className={classes.icon}>
            <SearchIcon height={18} width={18} />
          </div>
        )}

        <input
          type="text"
          className={`${
            type === "search" && type === "dropdownsearch"
              ? classes.inputnopadding
              : classes.inputaddpadding
          }`}
          placeholder={"Input"}
        />
        {(type === "search" || type === "dropdown") && status !== "error" && (
          <div className={classes.icon}>
            <ArrowDown height={18} width={18} />
          </div>
        )}
        {status === "error" && (
          <div className={classes.icon}>
            <Warning />
          </div>
        )}
      </div>
      <span>Supporting text</span>
    </div>
  );
}

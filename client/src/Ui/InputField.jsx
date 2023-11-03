import React from "react";
import PropTypes from "prop-types";
import classes from "./InputField.module.css";
import SearchIcon from "../assets/icons/SearchIcon";
import ArrowDown from "../assets/icons/ArrowDown";
import Warning from "../assets/icons/Warning";

InputField.propTypes = {
  setValue: PropTypes.func,
  status: PropTypes.oneOf(["active", "inactive", "error", "success", ""]),
  type: PropTypes.oneOf(["search", "dropdown", "dropdownsearch", ""]),
  label: PropTypes.string,
  subtext: PropTypes.string,
  placeholder: PropTypes.string,
  width: PropTypes.string,
};

//set value if the function that has to be passsed as props for setting the value
export default function InputField({
  setValue,
  status,
  type,
  label = "Label",
  subtext = "subtext",
  placeholder = "placeholder",
  width = 210,
}) {
  const inputwrapper = {
    position: "relative",
    width: `${width}px`,
  };
  return (
    <div style={inputwrapper}>
      {label && (
        <label className={`${classes[status]}  ${classes.noborder}`}>
          {label}
        </label>
      )}
      <div className={`${classes.inputcontainer} ${classes[status]}`}>
        {(type === "search" || type === "dropdownsearch") && (
          <div className={classes.icon}>
            <SearchIcon height={18} width={18} status={status} />
          </div>
        )}
        <input
          type="text"
          className={`${
            type === "search" && type === "dropdownsearch"
              ? classes.inputaddpadding
              : classes.inputnopadding
          } ${status === "inactive" ?? classes.inactive}`}
          placeholder={placeholder}
        />
        {(type === "dropdown" || type === "dropdownsearch") &&
          status !== "error" && (
            <div className={classes.icon}>
              <ArrowDown height={18} width={18} status={status} />
            </div>
          )}
        {status === "error" && (
          <div className={classes.icon}>
            <Warning />
          </div>
        )}
      </div>
      {subtext && (
        <span
          className={`${classes[status]}  ${classes.subtext} ${classes.noborder}`}
        >
          {subtext}
        </span>
      )}
    </div>
  );
}

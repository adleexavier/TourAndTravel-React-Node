import React from "react";
import InputField from "../Ui/InputField";
import classes from "./LandingPage.module.css";
import Button from "../Ui/Button";
import AddIcon from "../assets/icons/AddIcon";
export default function LandingPage() {
  return (
    <div className={classes.test}>
      <InputField
        status={"active"}
        placeholder={"your email address"}
        type={"dropdownsearch"}
      />
      <Button lefticon={<AddIcon />} />
    </div>
  );
}

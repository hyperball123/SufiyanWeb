import React from "react";

export default function alert(props) {
    const capitalized = (word) =>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
    // checking if props.alert is null or not if not null then only go further
    props.alert && <div>
       <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{capitalized(props.alert.type)}</strong>: {props.alert.msg}
        
      </div>
    </div>
  );
}

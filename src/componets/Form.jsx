import React from "react";

const Form = ({ children, handleSubmit }) => {
  return <form onSubmit={handleSubmit && handleSubmit}>{children}</form>;
};

export default Form;

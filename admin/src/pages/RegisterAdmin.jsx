import React from "react";
import FormRegisterAdmin from "../components/form/FormRegisterAdmin";

function RegisterAdmin() {
  return (
    <>
      <div className="px-3 w-full">
        <p className="text-2xl text-black font-bold mb-5 font-roboto">Register New Admin</p>
      </div>
      <FormRegisterAdmin />
    </>
  );
}

export default RegisterAdmin;

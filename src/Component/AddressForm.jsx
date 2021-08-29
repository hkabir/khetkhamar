import React from "react";
import { useForm } from "react-hook-form";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "../reducer/cartContext";

export const AddressForm = () => {
  const { isModalOpen, closeModal } = useGlobalContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <>
      <div
        className={`${
          isModalOpen ? "modal-overlay show-modal" : "modal-overlay"
        }`}
      >
        <div className="modal-container">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label className="col-form-label">Address_title:</label>
              <input
                type="text"
                className={`form-control ${errors.name && "invalid"}`}
                {...register("address", { required: "address is Required" })}
              />
              {errors.name && (
                <small className="text-danger">{errors.name.message}</small>
              )}
            </div>
            <div className="form-group">
              <label className="col-form-label">Address:</label>
              <textarea
                className={`form-control ${errors.message && "invalid"}`}
                {...register("message", {
                  required: "Message is Required",
                  minLength: {
                    value: 10,
                    message: "Minimum Required length is 10",
                  },
                  maxLength: {
                    value: 50,
                    message: "Maximum allowed length is 50 ",
                  },
                })}
              ></textarea>
              {errors.message && (
                <small className="text-danger">{errors.message.message}</small>
              )}
            </div>
            <button type="submit" className="btn btn-danger">
              Save
            </button>
          </form>
          <button className="close-modal-btn" onClick={closeModal}>
            <FaTimes />
          </button>
        </div>
      </div>
    </>
  );
};

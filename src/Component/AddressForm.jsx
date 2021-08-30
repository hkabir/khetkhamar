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
            <input
              className="input-field"
              ref="input"
              type="text"
              {...register("test", { required: true })}
            />
            box
            <input name="name" placeholder="name" />
            <input
              name="street_address"
              placeholder="Street Address"
              {...register("test", { required: true })}
            />
            <input
              name="city"
              placeholder="City"
              {...register("test", { required: true })}
            />
            <input
              name="state"
              placeholder="State"
              {...register("test", { required: true })}
            />
            <input
              name="zip_code"
              placeholder="Zipcode"
              {...register("test", { required: true })}
            />
            <button type="submit">Submit</button>
          </form>
          <button className="close-modal-btn" onClick={closeModal}>
            <FaTimes />
          </button>
        </div>
      </div>
    </>
  );
};

import React from "react";
import { useGlobalContext } from "../reducer/cartContext";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import axiosInstance from "../helper/axios";
import { FaTimes } from "react-icons/fa";

export const EditForm = () => {
  let history = useHistory();
  const { setFormData, isModalOpen, formData, getToken, closeModal } =
    useGlobalContext();
  //const { user } = getToken;
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  ///Store Authenticated user's shipping + billing address.

  const onSubmit = (data) => {
    setFormData(data);

    //console.log(data);
    history.push("./checkoutpage");
    reset();
  };

  const editAddress = () => {
    axiosInstance.get(
      "/address/update",
      {},
      {
        headers: {
          Authorization: `Bearer ${getToken.token}`,
        },
      }
    );
  };
  return (
    <main>
      <div
        className={`${
          isModalOpen ? "modal-overlay show-modal" : "modal-overlay"
        }`}
      >
        <div className="container">
          <div className="row justify-content-md-center row-space-top">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="bill">
                <h1>Billing & Shippping address</h1>

                <form onSubmit={handleSubmit(onSubmit)}>
                  <input
                    name="address"
                    placeholder="address"
                    {...register("address", { required: true })}
                  />
                  <input
                    name="country"
                    placeholder="country"
                    {...register("country", { required: true })}
                  ></input>
                  <input
                    name="city"
                    placeholder="city"
                    {...register("city", { required: true })}
                  />
                  <input
                    name="postal_code"
                    placeholder="postal_code"
                    {...register("postal_code", { required: true })}
                  />
                  <input
                    name="phone"
                    placeholder="phone"
                    {...register("phone", { required: true })}
                  />
                  <button
                    id="subbtn2"
                    type="submit"
                    className="btn btn-danger "
                  >
                    save
                  </button>
                </form>
              </div>
              <button className="close-modal-btn" onClick={closeModal}>
                <FaTimes />
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

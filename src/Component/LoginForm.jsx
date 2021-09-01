import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "../reducer/cartContext";
import { useHistory } from "react-router-dom";
import axiosInstance from "../helper/axios";
import { useForm } from "react-hook-form";
import { reactLocalStorage } from "reactjs-localstorage";

export const LoginForm = () => {
  const { isModalOpen, closeModal } = useGlobalContext();
  const [id, setId] = useState(null);
  const [viewOtpForm, setViewOtpForm] = useState(false);
  let history = useHistory();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmitPhone = (data) => {
    axiosInstance
      .post("/auth/login-using-otp", data)
      .then(({ data: { data } }) => {
        console.log("data", data);
        setId(data.user_id);
        console.log("id", data.user_id);

        setViewOtpForm(true);
      })
      .catch((error) => {
        console.log(error);
      });
    reset();
  };
  const onSubmitOtp = (data) => {
    axiosInstance
      .post("/auth/otp-verify", {
        user_id: id,
        code: data.code,
      })
      .then(({ data: { data } }) => {
        reactLocalStorage.setObject("token", {
          token: data.token,
          user: data.user,
        });

        history.push("./billingpage");
        // alert(data.message);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div
        className={`${
          isModalOpen ? "modal-overlay show-modal" : "modal-overlay"
        }`}
      >
        <div className="modal-container">
          {!viewOtpForm ? (
            <form onSubmit={handleSubmit(onSubmitPhone)}>
              {errors.phone_number && (
                <small className="text-danger">
                  {errors.phone_number.message}
                </small>
              )}
              <input
                type="text"
                placeholder="Enter your number"
                name="phone_number"
                autoComplete="false"
                // eslint-disable-next-line react/jsx-no-duplicate-props
                className={`form-control ${errors.phone_number && "invalid"}`}
                {...register("phone_number", {
                  required: "Phone is Required",
                  pattern: {
                    value:
                      /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
                    message: "Invalid phone no",
                  },
                })}
              />

              <button type="submit" id="sub" className="btn btn-danger">
                Login With OTP
              </button>
            </form>
          ) : (
            <form onSubmit={handleSubmit(onSubmitOtp)}>
              {errors.code && (
                <small className="text-danger">{errors.code.message}</small>
              )}
              <input
                type="text"
                placeholder="Enter your OTP"
                name="code"
                autoComplete="false"
                // eslint-disable-next-line react/jsx-no-duplicate-props
                className={`form-control ${errors.code && "invalid"}`}
                {...register("code", {
                  required: "code is Required",
                  pattern: {
                    message: "enter 4 digit code",
                  },
                })}
              />

              <button
                id="sub"
                type="submit"
                className="btn btn-danger"
                onClick={closeModal}
              >
                verify
              </button>
            </form>
          )}

          <button className="close-modal-btn" onClick={closeModal}>
            <FaTimes />
          </button>
        </div>
      </div>
    </>
  );
};

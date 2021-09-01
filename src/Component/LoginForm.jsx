import React, { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "../reducer/cartContext";
import { useHistory } from "react-router-dom";
import axiosInstance from "../helper/axios";
import { useForm } from "react-hook-form";
import { reactLocalStorage } from "reactjs-localstorage";
//import { counter } from "@fortawesome/fontawesome-svg-core";

export const LoginForm = () => {
  const { isModalOpen, closeModal } = useGlobalContext();
  const [id, setId] = useState(null);
  const [counter, setCounter] = useState(40);
  const [viewOtpForm, setViewOtpForm] = useState(false);
  const [phone, setPhone] = useState();
  console.log("ph", phone);
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
        //console.log("id", data.user_id);

        setViewOtpForm(true);
      })
      .catch((error) => {
        console.log(error);
      });
    reset();
    setPhone(data);
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
  const resandOtp = () => {
    axiosInstance
      .post("/auth/resend-otp", { phone_number: phone.phone_number })
      .then((res) => {})
      .catch((error) => {});
  };
  //const timer = () => {

  useEffect(() => {
    const temTimer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(temTimer);
  }, [counter]);

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
                placeholder="+880"
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

              <button type="submit" id="sub" className="btn ">
                Login With OTP
              </button>
            </form>
          ) : (
            <div>
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
                  className="btn"
                  onClick={closeModal}
                >
                  verify
                </button>
              </form>
              <button id="sub" className="btn mt-3" onClick={resandOtp}>
                Resand OTP: {counter}
              </button>
            </div>
          )}

          <button className="close-modal-btn" onClick={closeModal}>
            <FaTimes />
          </button>
        </div>
      </div>
    </>
  );
};

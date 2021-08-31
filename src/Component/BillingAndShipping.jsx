import React from "react";
import { useGlobalContext } from "../reducer/cartContext";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
//import axios from "axios";

export const BillingAndShipping = () => {
  let history = useHistory();
  const { setFormData, token } = useGlobalContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (data) => {
    /*  axios
      .post("https://api.khetkhamar.org/api/react/address/store", {
        HEADERS: {
          Authorization: token.token,
        },

        data: {
          user_id: user.id,
          address_type: "",
          address: data.address,
          country: data.country,
          city: data.city,
          postal_code: data.postal_code,
          phone: data.phone,
        },
      })
      .then((res) => {
        console.log("form", res);
      })
      .catch((error) => {
        console.log(error);
      });*/

    setFormData(data);

    //console.log(data);
    history.push("./checkoutpage");
    reset();
  };
  return (
    <div>
      <main>
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
                  />
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
                  <button id="sub2" type="submit" className="btn btn-danger ">
                    save
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

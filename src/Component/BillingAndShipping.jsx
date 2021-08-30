import React from "react";
import { useGlobalContext } from "../reducer/cartContext";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

export const BillingAndShipping = () => {
  let history = useHistory();
  const { setFormData } = useGlobalContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    setFormData(data);

    console.log(data);
    history.push("./checkoutpage");
  };
  return (
    <div>
      <main>
        <div className="container">
          <div className="row  row-space-top">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="bill">
                <h1>Billing address</h1>

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

import React,{useEffect} from "react";
import { useGlobalContext } from "../reducer/cartContext";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import axiosInstance from "../helper/axios";
//import axios from "axios";

export const BillingAndShipping = () => {
  let history = useHistory();
  const { setFormData, getToken } = useGlobalContext();
  const { user } = getToken;
  const {
    register,
    handleSubmit,
  
    reset,
  } = useForm();

  ///Store Authenticated user's shipping + billing address.
  const onSubmit = (data) => {
    axiosInstance
      .post(
        "/address/store",
        {
          user_id: user.id,
          address_type: "billing_address ",
          address: data.address,
          country: data.country,
          city: data.city,
          postal_code: data.postal_code,
          phone: data.phone,
        },
        {
          headers: {
            Authorization: `Bearer ${getToken.token}`,
          },
        }
      )
      .then(({ data: { data } }) => {
       // setFormData(data);
      })
      .catch((error) => {
        console.log(error);
      });

    //setFormData(data);

    //console.log(data);
    history.push("./checkoutpage");
    reset();
  };
  // const getData =  () => {
  //    axiosInstance
  //     .get(`/addresses/billing_address/${user.id}`, {
  //       headers: {
  //         Authorization: `Bearer ${getToken.token}`,
  //       },
  //     })
  //     .then(
  //       ({
  //         data: {
  //           data: { data },
  //         },
  //       }) => {
  //         setFormData(data);
  //         //console.log("get", data);
  //       }
  //     )
  //     .catch((error) => {
  //       console.log(error);
  //     });
  //   //setFormData(data);
  // };
  // useEffect(() => {
  //   getData();
  // }, []);
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
                  <button
                    id="subbtn2"
                    type="submit"
                    className="btn btn-danger "
                  >
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

import React from "react";
import { useGlobalContext } from "../Context";

export const Banner = () => {
  const { setKeyword } = useGlobalContext();

  const handleChange = (e) => {
    setKeyword(e.target.value);
  };

  return (
    <section className="banner">
      <div className="container-fluid banner">
        <div className="row justify-content-md-center ">
          <div className="col-12 col-md-10 col-lg-8">
            <h2 className="align-center">Deliver within 60 minutes</h2>
            <form className="card card-sm">
              <div className="card-body row no-gutters align-items-center">
                <div className="col-auto">
                  <i className="fas fa-search h4 text-body"></i>
                </div>

                <div className="col">
                  <input
                    className="form-control form-control-lg form-control-borderless"
                    type="search"
                    placeholder="Search topics or keywords"
                    onChange={handleChange}
                  />
                </div>

                <div className="col-auto">
                  <button
                    className="btn btn-lg btn-success"
                    type="submit"
                    onClick={handleChange}
                  >
                    Search
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

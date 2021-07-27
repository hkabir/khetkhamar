import React from "react";
import { SideBar } from "./SideBar";
import { Main } from "./Main";

export const CategoriesPRoduct = () => {
  return (
    <main class="container-fluid pb-3 flex-grow-1 d-flex flex-column flex-sm-row overflow-auto mt-5">
      <SideBar />
      <Main />
    </main>
  );
};

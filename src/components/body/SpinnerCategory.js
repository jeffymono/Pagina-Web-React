import React from "react";
import Skeleton from "@material-ui/lab/Skeleton";
import SpinnerProduct from "./SpinnerProduct";
export default function Variantes() {
  let rowEightCategories = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <div>
      {rowEightCategories.map((c, indice) => {
        return (
          <div key={indice}>
            <div style={{ display: "flex" }}>
              <Skeleton
                variant="rect"
                width={84}
                height={37}
                style={{ borderRadius: ".25rem" }}
              />
              &nbsp;&nbsp;
              <Skeleton
                variant="rect"
                width={84}
                height={35}
                style={{ borderRadius: ".25rem" }}
              />
            </div>
            <hr align="left" width="70%" />
            <SpinnerProduct />
          </div>
        );
      })}
    </div>
  );
}

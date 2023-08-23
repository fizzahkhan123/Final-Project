import React from "react";
import ProductTable from "../Components/ProductTable";

export default function Admin() {

  return (
    <div>
      <div style={{margin:20}}>
        <h3>Products</h3>
        <p>This table helps in showing, creating, updating and deleting products.</p>

        <ProductTable />
      </div>
    </div>
  );
}

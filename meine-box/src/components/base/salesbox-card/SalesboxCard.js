import React, { useEffect } from 'react';

const SalesboxCard = ({boxId, products}) => {

  useEffect(() => {
    console.log(products);
  }, [products]);
  return (
    <div className="box-card">
      <h3> Box {boxId} </h3>
      <p>Address</p>
      <div>
        <div>icon</div>
        <div>Product name</div>
        <div>in stock</div>
      </div>
    </div>
  );
}

export default SalesboxCard;
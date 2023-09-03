// import React, { useEffect } from "react";
// import { FaRegTrashAlt } from "react-icons/fa";

// const CartItem = ({ dataItem, index }) => {
//   const dispatch = useDispatch();
//   useEffect(() => {
//     AOS.init({
//       easing: "linear",
//       duration: "1000",
//       once: false,
//     });
//   }, []);
  
  
//   return (
//     <BasketItemWrapper>
//       <div className="data-tr d-grid">
//         <div className="data-td px-2">{index + 1}</div>
//         <div className="data-td d-grid">
//           <div className="data-td-l">
//             <img src={dataItem.image} data-aos="fade-up-left" alt="" />
//           </div>
//           <div className="data-td-r">{dataItem.name}</div>
//         </div>
//         <div className="data-td px-2">
//           <p
//             className="fs-14"
//             dangerouslySetInnerHTML={{
//               __html: dataItem.description.slice(0, 100),
//             }}
//           ></p>
//         </div>
//         <div className="data-td d-flex flex-column">
//           <span className="fw-7">
//             {dataItem.price_sign} {dataItem.price}
//           </span>
//           <span className="fw-5 fs-14">
//             Subtotal: {dataItem.price_sign} {dataItem.amount}
//           </span>
//         </div>
//         <div className="data-td">
//           <BasketItemControl dataItem={dataItem} />
//         </div>
//         <div className="data-td d-flex align-items-center justify-content-start op-05">
//           <button
//             type="button"
//             className="remove-btn"
//             onClick={() => dispatch(removeItem(dataItem.id))}
//           >
//             <FaRegTrashAlt size={18} />
//           </button>
//         </div>
//       </div>
//     </BasketItemWrapper>
//   );
// };

// export default CartItem;

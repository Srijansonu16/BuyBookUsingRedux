import React from "react";
import { useDispatch, useSelector } from "react-redux";
import buyBook from "../Redux/Action";

const BookContainer = () => {
  const noOfBooks = useSelector((state) => state.NumberOfBooks);
  const dispatch = useDispatch();
  return (
    <>
      <div>BookContainer</div>
      <h3>No of Books:{noOfBooks}</h3>
      <button
        onClick={() => {
          dispatch(buyBook());
        }}
      >
        Buy Book
      </button>
    </>
  );
};
export default BookContainer;

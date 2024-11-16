import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, incrementByAmount, clearAmount } from '../redux/counter/counterSlice';
import 'bootstrap/dist/css/bootstrap.min.css';

const CounterApp = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [amount, setAmount] = useState("");

useEffect(()=> {

  const h2Tag = document.querySelector("h2");
    if (h2Tag.innerText < 0) {
      h2Tag.style.setProperty("color", "#FF6B6B", "important");
    }
    else {
      h2Tag.style.removeProperty("color"); // Reset the color
    }

}, [count])

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleIncrementByAmount = () => {
    dispatch(incrementByAmount(amount));
    setAmount(""); // Optionally clear the input after increment
  };

  const handleClear = () => {
    dispatch(clearAmount());
    setAmount(""); // Optionally clear the input
  };


  return (
    <div className="container mt-5 pt-5 ">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          <div className="border rounded-5 p-4 shadow text-center">
            <h1 className="mb-2 display-4 text-primary fw-light">Redux Counter App</h1>
            <h2 className="mb-4 text-primary display-1 fw-light">{count}</h2>
            
            <div className="d-flex flex-column flex-md-row justify-content-center gap-3 mb-4">
              <button className="btn btn-primary rounded-3 px-4 py-2" onClick={handleIncrement}>
                Increment
              </button>
              <button className="btn btn-primary rounded-3 px-4 py-2" onClick={handleDecrement}>
                Decrement
              </button>
            </div>

            <div className="d-flex justify-content-center mb-3">
              <input 
                type="number" min="0"
                placeholder="Enter any amount" 
                className="form-control border-1 rounded-5 shadow-lg px-2 py-2 w-100 " 
                value={amount}
                onChange={handleAmountChange} 
              />
            </div>

            <div className="d-flex flex-column flex-md-row justify-content-center gap-3">
              <button className="btn btn-primary rounded-3 px-4 py-2" onClick={handleIncrementByAmount}>
                Increment Input
              </button>
              <button className="btn btn-primary rounded-3 px-4 py-2" onClick={handleClear}>
                Clear
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CounterApp;

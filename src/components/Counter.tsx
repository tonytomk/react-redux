import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount,toggleCounter } from '../store';

const Counter = () => {
  const toggleCounterHandler = () => {
    dispatch(toggleCounter());
  };
  const incerementHandler = () => {
      dispatch(increment());
  }
  const incerementAmount = () => {
      dispatch(incrementByAmount(5));
  }
  const decrementHandler = () => {
    dispatch(decrement());
  }

  const counter = useSelector((state: {counter: number}) => state.counter);
  const dispatch = useDispatch();
  const show = useSelector((state: {showCounter: boolean}) => state.showCounter);
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      { show && <div className={classes.value}> {counter}</div> }
      <div>
        <button onClick={incerementHandler}>Increment</button>
        <button onClick={incerementAmount}>IncrementBy5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

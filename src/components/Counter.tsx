import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount,toggleCounter } from '../store/counter';

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
  const dispatch = useDispatch();
  const counter = useSelector((state:{counter: {counter: number}}) => state.counter.counter);
  const show = useSelector((state:{counter: {showCounter: boolean}}) => state.counter.showCounter);
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

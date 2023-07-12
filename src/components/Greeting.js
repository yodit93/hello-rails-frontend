import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreeting } from '../Redux/greetingSlice';

const Greeting = () => {
  const { greeting, isLoading, error } = useSelector((state) => state.greeting);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGreeting());
  }, [dispatch]);
  return (
    <>
      {isLoading && <h1>Loading...</h1>}
      {greeting && <h1>{greeting}</h1>}
      {error && <h1>{error}</h1>}
    </>
  );
};

export default Greeting;

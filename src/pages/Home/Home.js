import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { GetModelsForMakeIdYear } from '../../Redux/ModelsCar/ModelsCarAction';


const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetModelsForMakeIdYear(474, 2015));
  }, [])
  return (
    <div>
      Home
    </div>
  );
};

export default Home;

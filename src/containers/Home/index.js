import React, {useEffect, useState } from 'react';
import { useInjectReducer, useInjectSaga } from 'redux-injectors';
import { useDispatch, useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {togglePage} from '../App/action';
import {makeSelectAppData} from '../App/selector';


import reducer from './reducer';
import saga from './saga';
const key = 'home';
const stateSelector = createStructuredSelector({
  data: makeSelectAppData(),
});
const Home = () => {
    const dispatch = useDispatch();
    const {
      data
    } = useSelector(stateSelector);
    useInjectReducer({ key: key, reducer });
    useInjectSaga({ key: key, saga });
   
   
  return (
    <div className='pokemon'>
      Hi 
    </div>
  )
}
export default Home;
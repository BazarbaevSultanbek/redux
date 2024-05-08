import { LoadingOutlined } from '@ant-design/icons';
import React, { Suspense } from 'react';
import { Link, Route, Routes } from 'react-router-dom';

const Home = React.lazy(() => delayedFunc(import('./Home')));

function Loading() {
  return (
    <div className='MainPage'>
      <div className="container">
        <div className="MainPage-block">
          <div className="MainPage-block-inner-nav">
          </div>
          <div className="MainPage-block-inner-items">
            <Suspense fallback={
              <div style={{ display: "flex", justifyContent: 'center', alignItems: 'center', height: '200px' }}>
                <LoadingOutlined style={{ fontSize: '40px' }} />
              </div>
            }>
              <Routes>
                <Route path="/" element={<Home />} />
              </Routes>
            </Suspense>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Loading;


const delayedFunc = (promise) => {
  return new Promise(resolve => {
    setTimeout(resolve, 5000);
  }).then(() => promise)
}
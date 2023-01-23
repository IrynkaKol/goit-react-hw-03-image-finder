import React from 'react';
import { Circles } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <Circles
      className="Loader"
      height="60"
      width="60"
      color="#4fa94d"
      ariaLabel="circles-loading"
      wrapperStyle={{
        display: 'flex',
        justifyContent: 'center',
      }}
      wrapperClass=""
      visible={true}
    />
  );
};

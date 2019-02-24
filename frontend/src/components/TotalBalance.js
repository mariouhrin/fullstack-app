import React, { useState, useEffect } from 'react';
import { axiosHandler } from '../utils/utils';

export function TotalBalance() {
  const [totalBalance, setTotalBalance] = useState(undefined);

  const fetchTotalBalance = async () => {
    const response = await axiosHandler('get', 'api/customers/total');
    setTotalBalance(response.data.totalBalance);
  };

  useEffect(() => {
    fetchTotalBalance();
  }, []);

  return (
    <div style={{ marginLeft: '7.5%' }}>
      <h3>Total balance: {totalBalance}</h3>
    </div>
  );
}

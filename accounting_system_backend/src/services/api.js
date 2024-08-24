// Example API call to fetch accounts
import React, { useEffect, useState } from 'react';
import api from '../services/api';

const AccountsList = () => {
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    api.get('/accounts')
      .then(response => setAccounts(response.data))
      .catch(error => console.error('Error fetching accounts:', error));
  }, []);

  return (
    <div>
      <h1>Accounts</h1>
      <ul>
        {accounts.map(account => (
          <li key={account.id}>{account.name} - {account.balance}</li>
        ))}
      </ul>
    </div>
  );
};

export default AccountsList;

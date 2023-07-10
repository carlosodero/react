import { useState, useEffect } from 'react';
import { useSort } from '../../hooks/UseSort.js';
import TableGrid from '../../components/UseSort/TableGrid.js';
import Headers from '../../components/UseSort/Headers.js';

import './UseSort.css';

function useSorts() {

  const users = [
    { Name: 'Kevin', Age: 42, Profits: 500, Expenses: 200 },
    { Name: 'Peter', Age: 30, Profits: 250, Expenses: 50 },
    { Name: 'Luise', Age: 50, Profits: 150, Expenses: 30 },
    { Name: 'Jules', Age: 18, Profits: 425, Expenses: 180 },
    { Name: 'Carol', Age: 37, Profits: 800, Expenses: 425 }
  ];

  const [usersList, setUsersList] = useState(users);
  const { sort, sorting } = useSort();

  useEffect(() => {
    const usersListCopy = [...usersList];

    const sortedCurrentUsers = usersListCopy.sort((a, b) => {
      if (typeof a[sort.orderby] === 'string' && typeof b[sort.orderby] === 'string') {
        return a[sort.orderby].localeCompare(b[sort.orderby]);
      }
      return a[sort.orderby] - b[sort.orderby];
    });

    setUsersList(
      sort.ascending ? sortedCurrentUsers : sortedCurrentUsers.reverse()
    );
  }, [sort]);

  return (
    <>
      <div className='webContainer'>
        <div style={{ width: '350px', display: 'flex' }}>
          {Object.keys(usersList[0]).map((column, index) =>
            <Headers key={index} onClick={() => sorting(column, !sort.ascending)}>
              <div>{column}</div>
            </Headers>
          )}
        </div>
        <div style={{ width: '350px' }}>
          {usersList.map((user, index) =>
            <TableGrid key={index} backgroundColor={index % 2 === 0 ? 'white' : 'lightblue'} >
              <div>{user.Name}</div>
              <div>{user.Age}</div>
              <div>{`${user.Profits}€`}</div>
              <div>{`${user.Expenses}€`}</div>
            </TableGrid>
          )}
        </div>
      </div>
    </>
  );
}

export default useSorts;

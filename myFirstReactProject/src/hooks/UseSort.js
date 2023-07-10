import { useState } from 'react';

export function useSort() {
  const [sort, setSort] = useState({ orderby: 'Name', ascending: true });

  function sorting(orderby, ascending) {
    setSort({ orderby, ascending });
  }

  return { sort, sorting };
}

export function columnsToShow() {
  const headersAndColumnWidth = {
    name: 100,
    balance: 70,
    isactive: 70,
    phone: 100,
    company: 80,
    gender: 50,
    age: 50,
    email: 150,
    address: 200,
    registered: 100
  };

  const headers = Object.keys(headersAndColumnWidth);
  const columns = headers.map((header) => ({
    Header: header,
    accessor: header,
    width: headersAndColumnWidth[header]
  }));

  return columns;
}

export function customFilter(filter, row) {
  const id = filter.pivotId || filter.id;
  if (row[id] !== null && typeof row[id] === 'string') {
    return row[id] !== undefined
      ? String(row[id].toLowerCase()).includes(filter.value.toLowerCase())
      : true;
  }
}

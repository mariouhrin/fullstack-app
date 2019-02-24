import React from 'react';

export function columnsToShow(showAll, showModal) {
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

  const cellStyle = { color: '#3366BB', fontWeight: 700, cursor: 'pointer' };
  const cellLink = (row) => (
    <div role="button" tabIndex={0} style={cellStyle} onClick={showModal}>
      {row.value}
    </div>
  );

  const updateOrDeleteColumns = {
    update: { accessor: 'update', width: 40, Filter: () => <div />, Cell: cellLink },
    delete: { accessor: 'delete', width: 40, Filter: () => <div />, Cell: cellLink }
  };

  // Cell: row => {
  //   // const geneID = row.original.GENEID
  //   return (
  // <div className="table__row--link" onClick={() => this.openModal(geneID)}></div>
  //   )
  // }

  const mergedColums = showAll
    ? { ...updateOrDeleteColumns, ...headersAndColumnWidth }
    : headersAndColumnWidth;

  const headers = Object.keys(mergedColums);
  const columns = headers.map((header) => {
    if (['update', 'delete'].includes(header)) {
      return mergedColums[header];
    }

    return { Header: header, accessor: header, width: mergedColums[header] };
  });

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

import React from 'react';

export function columnsAll(handleOpenModal, deleteCustomerByGuid) {
  const headersAndColumnWidth = {
    name: 150,
    balance: 70,
    isactive: 70,
    phone: 180,
    company: 120,
    gender: 80,
    age: 70,
    email: 250,
    address: 450,
    registered: 150
  };

  const cellStyle = { color: '#3366BB', fontWeight: 700, cursor: 'pointer' };
  const cellLinkUpdate = (row) => {
    const { guid } = row.original;

    return (
      <button type="button" tabIndex={0} style={cellStyle} onClick={() => handleOpenModal(guid)}>
        {row.value}
      </button>
    );
  };
  const cellLinkDelete = (row) => {
    const { guid } = row.original;

    return (
      <button
        type="button"
        tabIndex={0}
        style={cellStyle}
        onClick={() => deleteCustomerByGuid(guid)}
      >
        {row.value}
      </button>
    );
  };

  const updateOrDeleteColumns = {
    update: { accessor: 'update', width: 70, Filter: () => <div />, Cell: cellLinkUpdate },
    delete: { accessor: 'delete', width: 70, Filter: () => <div />, Cell: cellLinkDelete }
  };

  const mergedColums = { ...updateOrDeleteColumns, ...headersAndColumnWidth };

  const headers = Object.keys(mergedColums);
  const columns = headers.map((header) => {
    if (['update', 'delete'].includes(header)) {
      return mergedColums[header];
    }

    return { Header: header, accessor: header, width: mergedColums[header] };
  });

  return columns;
}

export function columnsInactive() {
  const headersAndColumnWidth = {
    name: 150,
    balance: 70,
    discount: 70,
    phone: 180,
    company: 120,
    gender: 80,
    age: 70
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

export function inititialFormData(dataForUpdate) {
  if (dataForUpdate.length) {
    return {
      guid: dataForUpdate[0].guid,
      name: dataForUpdate[0].name,
      balance: dataForUpdate[0].balance,
      phone: dataForUpdate[0].phone,
      company: dataForUpdate[0].company,
      gender: dataForUpdate[0].gender,
      age: dataForUpdate[0].age,
      email: dataForUpdate[0].email,
      address: dataForUpdate[0].address
    };
  }

  return {
    name: '',
    balance: '',
    phone: '',
    company: '',
    gender: 'female',
    age: '',
    email: '',
    address: ''
  };
}

export function hideTablesScrollbar(openModal) {
  const reactTableOverflow = document.querySelectorAll('.ReactTable .rt-table');

  if (openModal) {
    reactTableOverflow.forEach((element) => {
      const el = element;
      el.style.overflow = 'hidden';
    });
  } else {
    reactTableOverflow.forEach((element) => {
      const el = element;
      el.style.overflow = 'scroll';
    });
  }
}

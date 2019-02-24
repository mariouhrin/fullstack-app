import moment from 'moment';

export function transformingData(customersData: Customer[]) {
  const transformedData = customersData.map((record: Customer) => ({
    ...record,
    isactive: record['isactive'].toString(),
    registered: moment.utc(record['registered']).format('YYYY-MM-DD')
  }));

  return transformedData;
}

import { Row } from '../components';

export const sortCurry =
  (sortData: string) =>
  (data: Row[]): Row[] =>
    !sortData
      ? data
      : sortData === 'asc'
      ? data.sort((a, b) => a.lastPayments - b.lastPayments)
      : data.sort((a, b) => b.lastPayments - a.lastPayments);

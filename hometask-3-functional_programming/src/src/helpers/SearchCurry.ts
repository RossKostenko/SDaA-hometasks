import { Row } from '../components';

export const searchCurry =
  (searchData: string) =>
  (data: Row[]): Row[] =>
    data.filter((row: Row) =>
      row.country.toLowerCase().includes(searchData.toLowerCase())
    );

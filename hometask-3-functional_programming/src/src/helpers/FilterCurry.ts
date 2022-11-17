import { Row } from '../components';

export const filterCurry =
  (filterData: string[]) =>
  (data: Row[]): Row[] =>
    !filterData?.length || filterData.includes('Without posts')
      ? data
      : data.filter(row => row.posts >= 100);

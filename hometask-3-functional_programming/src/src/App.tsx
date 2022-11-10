import { FC } from 'react';
import { useState, useEffect } from 'react';
import { StyledEngineProvider } from '@mui/material/styles';

import { mergeToRowData, filterCurry, searchCurry, sortCurry } from './helpers';
import { Image, User, Account } from '../types';
import { Table, Filters, Sort, Search, Row } from './components';
import { getImages, getUsers, getAccounts } from './mocks/api';
import rows from './mocks/rows.json';
import styles from './App.module.scss';

// mockedData has to be replaced with parsed Promises’ data
const mockedData: Row[] = rows.data;

export const App: FC = () => {
  const [data, setData] = useState<Row[]>(undefined);
  const [filterData, setFilterData] = useState<string[]>();
  const [searchData, setSearchData] = useState<string>('');
  const [sortData, setSortData] = useState<string>('');

  useEffect(() => {
    Promise.all([getImages(), getUsers(), getAccounts()]).then(
      ([images, users, accounts]: [Image[], User[], Account[]]) => {
        setData(mergeToRowData(images, users, accounts));
      }
    );
  }, []);

  const getCurrentData = (data: Row[]) =>
    data
      ? [
          filterCurry(filterData),
          searchCurry(searchData),
          sortCurry(sortData),
        ].reduce((acc, fn) => fn(acc), data)
      : null;

  return (
    <StyledEngineProvider injectFirst>
      <div className="App">
        <div className={styles.container}>
          <div className={styles.sortFilterContainer}>
            <Filters updateStore={setFilterData} />
            <Sort updateStore={setSortData} />
          </div>
          <Search updateStore={setSearchData} />
        </div>
        <Table rows={getCurrentData(data) || mockedData} />
      </div>
    </StyledEngineProvider>
  );
};

import { Image, User, Account } from '../../types';
import { Row } from '../components';

export const mergeToRowData = (
  images: Image[],
  users: User[],
  accounts: Account[]
): Row[] => {
  return images.map((image: Image) => {
    const userData = findData(users, image.userID);
    const accountsData = findData(accounts, image.userID);

    return {
      avatar: image.url || null,
      username: userData?.username || null,
      country: userData?.country || null,
      name: userData?.name || null,
      lastPayments: accountsData?.payments[0]?.totalSum || 0,
      posts: accountsData?.posts || null,
    };
  });
};

function findData(array: any[], userID: string) {
  return array.find(el => el.userID === userID);
}

import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';

import userData from '../data/user.json';
import statisticData from '../data/data.json';
import friendsData from '../data/friends.json';
import transactionsData from '../data/transactions.json';

export const App = () => {
  const { username, tag, location, avatar, stats } = userData;

  return (
    <>
      <Profile
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />
      <Statistics title="Upload Stats" stats={statisticData} />
      <Statistics stats={statisticData} />
      <FriendList friends={friendsData} />
      <TransactionHistory items={transactionsData} />;
    </>
  );
};

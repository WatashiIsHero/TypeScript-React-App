import './App.css';
import { UserCard } from './components/UserCard';
import { Props } from './types/userProfile';

const data: Props = {
  id: 1,
  name: 'Yamato',
  email: 'aa@mail.com',
  address: 'Osaka',
};

function App() {
  const fetchUser = () => {
    axios.get
  }

  return (
    <>
      <button onClick={fetchUser}>データ取得</button>
      <UserCard user={data} />
    </>
  );
}

export default App;

import Auth from './components/Auth';
import Counter from './components/Counter';
import Header from './components/Header';
import UserProfile from './components/UserProfile';
import { useSelector } from 'react-redux';
function App() {
  const isAuthenticated = useSelector((state:{auth: {isAuthenticated: boolean}}) => state.auth.isAuthenticated);
  return (
    <>
    <Header></Header>
   {!isAuthenticated && <Auth></Auth>}
   {isAuthenticated && <UserProfile></UserProfile>}
   {isAuthenticated && <Counter /> }
    </>
  );
}

export default App;

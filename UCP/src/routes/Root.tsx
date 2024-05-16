import { UserProvider } from '../components/UserContext/Usercontext';
import Start from './Start'

const Root = () => {
  return (
    <>
      <UserProvider>
        <Start />
      </UserProvider>
    </>
  );
};

export default Root
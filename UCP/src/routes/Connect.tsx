import { useContext } from 'react';
import MainContainer from '../components/PersonCard/MainContainer'
import { UserContext } from '../components/UserContext/Usercontext'
import MatchPage from '../pages/matchPage/MatchPage'

function Connect() {
  const { user } = useContext(UserContext);

  return (
    <>
      <UserContext.Provider value={{ user }}>
        <MainContainer person={undefined} />
        <MatchPage />
      </UserContext.Provider>
    </>
  )
}

export default Connect
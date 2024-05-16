import { UserProvider } from '../components/UserContext/Usercontext'
import { StartPage } from '../pages/startPage/startPage'

const Start = () => {
  return (
    <>
      <div>Start</div>
      <UserProvider>
        <StartPage />
      </UserProvider>

    </>
  )
}

export default Start
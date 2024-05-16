import { UserProvider } from '../components/UserContext/Usercontext'
import RegisterPage from '../pages/RegisterPage/RegisterPage'

const MakeProfile = () => {
  console.log("hej")
  return (
    <>
      <UserProvider>
        <RegisterPage />
      </UserProvider>
    </>
  )
}

export default MakeProfile
import { GoogleLogin, GoogleLogout } from 'react-google-login'
import { useDispatch, useSelector } from 'react-redux'
import { setUserProfile } from '../../../core/redux/reducers'
import { refreshTokenSetup } from '../../../utils/refreshToken'
const clientId =
  '443487308616-8puo8krnuakc6g65roott9q8sat6s9ql.apps.googleusercontent.com'

const Login = () => {
  const { userProfile } = useSelector((state) => state.getUserReducer)
  const dispatch = useDispatch()
  const onLogin = (res) => {
    dispatch(setUserProfile(res))
    refreshTokenSetup(res)
  }
  const onLogout = (res) => {
    dispatch(setUserProfile(res))
  }
  const onFailure = (res) => {
    console.log('🚀 ~ file: index.js ~ line 9 ~ onFailure ~ res', res)
  }

  return (
    <div>
      {!userProfile.name ? (
        <GoogleLogin
          clientId={clientId}
          buttonText="Login"
          onSuccess={onLogin}
          onFailure={onFailure}
          cookiePolicy="single_host_origin"
          isSignedIn={true}
        />
      ) : (
        <GoogleLogout
          clientId={clientId}
          buttonText="Logout"
          onLogoutSuccess={onLogout}
        />
      )}
    </div>
  )
}

export { Login }

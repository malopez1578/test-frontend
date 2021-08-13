import { GoogleLogin, GoogleLogout } from "react-google-login";
import { refreshTokenSetup } from "../../../utils/refreshToken";
const clientId = '443487308616-8puo8krnuakc6g65roott9q8sat6s9ql.apps.googleusercontent.com'

const Login = ({type='login'}) => {
    const onSucess = (res) => {
        console.log("🚀 ~ file: index.js ~ line 7 ~ onSucess ~ res", res)
        refreshTokenSetup(res)
    }
    const onFailure = (res) => {
        console.log("🚀 ~ file: index.js ~ line 9 ~ onFailure ~ res", res)
    }
    
    return (
        <div>
            {
                type==='login' ?
                <GoogleLogin 
                    clientId={clientId} 
                    buttonText="Login" 
                    onSuccess={onSucess} 
                    onFailure={onFailure} 
                    cookiePolicy="single_host_origin"
                    isSignedIn={true}            
                />
                :
                <GoogleLogout
                    clientId={clientId} 
                    buttonText="Logout" 
                    onSuccess={onSucess}     
                />

            }
        </div>
    )
}

export { Login };

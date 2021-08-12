import { GoogleLogin } from "react-google-login";
const clientId = '443487308616-8puo8krnuakc6g65roott9q8sat6s9ql.apps.googleusercontent.com'

const Login = () => {
    const onSucess = (res) => {
        console.log("🚀 ~ file: index.js ~ line 7 ~ onSucess ~ res", res)
    }
    const onFailure = (res) => {
        console.log("🚀 ~ file: index.js ~ line 9 ~ onFailure ~ res", res)
    }
    
    return (
        <div>
            <GoogleLogin 
                clientId={clientId} 
                buttonText="Login" 
                onSuccess={onSucess} 
                onFailure={onFailure} 
                cookiePolicy="single_host_origin"
                isSignedIn={true}            
            />
        </div>
    )
}

export { Login };

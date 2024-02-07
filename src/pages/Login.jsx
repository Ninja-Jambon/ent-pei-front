export default function Login() {
    return (
        <div className="login">
            <h1 className="logintext">Login with discord</h1>
            <a href="https://discord.com/api/oauth2/authorize?client_id=1155429463081885717&response_type=code&redirect_uri=http%3A%2F%2Fleizour.fr%2Fapi%2Fv1%2Fdiscord%2Fredirect&scope=identify" className="login-button">Login</a>
        </div>
    )
}
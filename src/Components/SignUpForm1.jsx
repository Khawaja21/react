import React,{useState} from "react";
// import Signpic from "../Assets/Images/google.svg";



function SignUpForm1 ({ onSignIn }){

    // const SignUpForm1 = ({ onSignIn }) => {
        const [username, setUsername] = useState('');
        const [password, setPassword] = useState('');
      
        const handleSignIn = () => {
          
          if (username && password) {
            
            onSignIn(username);
          } else {
            alert('Please enter username and password');
          }
        };


  const buttonStyle = {
    width: '100%',
    marginTop: '2rem',
    backgroundColor: '#7367f0',
    transition: 'box-shadow 0.3s ease',
    boxShadow: 'none'
};

//   const handleHover = () => {
//     buttonStyle.boxShadow = '0px 4px 8px rgba(115, 103, 240, 0.5)';
// };

// const handleHoverOut = () => {
//     buttonStyle.boxShadow = 'none';
// };

  return (
<>

        <div className="Const" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', justifyContent: 'center', gap: '17rem', marginLeft: 'auto', marginRight: 'auto', maxWidth: '1200px' }}>
            <a className="Brand-Logo" style={{ position: 'absolute', top: '2rem', left: '2rem', margin: '0', zIndex: '1' }} href="">
                <img src="/logigates_line.png" style={{ maxWidth: '100%', width: '240px' }} alt="" />
            </a>
            <div className="La1" style={{}}>
                <img src="/slide_image.png" style={{ marginTop: '5rem' }} alt="" />
            </div>
            <div style={{ marginTop: '5rem' }}>
                <div className="col-12 col-sm-8 col-md-6 col-lg-12 px-xl-2 mx-auto">
                    <a href="javascript:void(0);" className="brand-logo"></a>
                    <a className="" href="javascript:void(0);">
                        <center><img style={{ maxWidth: '500px' }} src="/AssetGate.png" alt="Product Logo" /></center>
                    </a>
                    <br />
                    <h2 className="card-title font-weight-bold mb-1" style={{ color: 'gray', fontSize: '2px', fontSize: '1rem', fontWeight: '500', marginBottom: '1.25rem !important' }}><center>Sign-in to start the adventure</center></h2>
                    <form id="loginform" action="/Account/Login" method="post">
                        <div className="form-group">
                        <label>Username:</label>
                            <input type="text" className="form-control" id="login-email" name="LoginId" placeholder="Username" aria-describedby="login-email" tabIndex="2" autoFocus="" required="" value={username}
          onChange={(e) => setUsername(e.target.value)} style={{ marginBottom: '1rem' }} />
                        </div>
                        <div className="form-group">
                            <div className="input-group input-group-merge form-password-toggle">
                            <label>Password:</label>
                                <input type="password" className="form-control form-control-merge" id="login-password" name="Password" tabIndex="3" placeholder="Password" aria-describedby="login-password" required="" value={password}
          onChange={(e) => setPassword(e.target.value)} />
                                <div className="input-group-append">
                                    <span className="input-group-text cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-eye"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg></span>
                                </div>
                            </div>
                        </div>
                        <button id="btn-submit" type="button" className="btn btn-primary btn-block waves-effect waves-float waves-light" tabIndex="4" onClick={handleSignIn} style={buttonStyle}>Sign in</button>
                    </form>
                </div>
            </div>
        </div>
</>


  );
}
export default SignUpForm1;

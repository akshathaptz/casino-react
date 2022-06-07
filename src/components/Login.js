import React from 'react';
import {useNavigate,Link} from 'react-router-dom';
class Login extends React.Component {

  state = {

  };
  componentDidMount() {

  }
 

  render() {
    return (
      <div style={{ margin: "17%" }}>
        <form>
          <div className="MuiBox-root css-47wgsv">
            <p className="MuiTypography-root MuiTypography-body1 MuiTypography-alignCenter css-hwyw7d-MuiTypography-root"> Login</p>
          </div>
          <div className="MuiFormControl-root MuiFormControl-marginNormal MuiFormControl-fullWidth MuiTextField-root css-17vbkzs-MuiFormControl-root-MuiTextField-root">
            <label className="MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink MuiInputLabel-outlined MuiFormLabel-root MuiFormLabel-colorPrimary MuiFormLabel-filled css-1dy70k0-MuiFormLabel-root-MuiInputLabel-root" data-shrink="true">Email Address</label>
            <div className="MuiOutlinedInput-root MuiInputBase-root MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-formControl css-igzd9l-MuiInputBase-root-MuiOutlinedInput-root">
              <input aria-invalid="false" name="email" type="email" className="MuiOutlinedInput-input MuiInputBase-input css-1vvw2hi-MuiInputBase-input-MuiOutlinedInput-input" />
              <fieldset aria-hidden="true" className="MuiOutlinedInput-notchedOutline css-6k9065-MuiOutlinedInput-notchedOutline">
                <legend className="css-186xcr5"><span>Email Address</span></legend>
              </fieldset>
            </div>
          </div>
          <div className="MuiFormControl-root MuiFormControl-marginNormal MuiFormControl-fullWidth MuiTextField-root css-17vbkzs-MuiFormControl-root-MuiTextField-root">
            <label className="MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink MuiInputLabel-outlined MuiFormLabel-root MuiFormLabel-colorPrimary MuiFormLabel-filled css-1dy70k0-MuiFormLabel-root-MuiInputLabel-root" data-shrink="true">Password</label>
            <div className="MuiOutlinedInput-root MuiInputBase-root MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-formControl css-igzd9l-MuiInputBase-root-MuiOutlinedInput-root">
              <input aria-invalid="false" name="password" type="password" className="MuiOutlinedInput-input MuiInputBase-input css-1vvw2hi-MuiInputBase-input-MuiOutlinedInput-input" />
              <fieldset aria-hidden="true" className="MuiOutlinedInput-notchedOutline css-6k9065-MuiOutlinedInput-notchedOutline">
                <legend className="css-186xcr5"><span>Password</span></legend>
              </fieldset>
            </div>
          </div>
          <div className="MuiBox-root css-1sf3xto"><Link to="/home"><button className="MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeLarge MuiButton-containedSizeLarge MuiButton-disableElevation MuiButton-fullWidth MuiButtonBase-root css-4gm3sl-MuiButtonBase-root-MuiButton-root" tabIndex="0" type="button" onClick={this.signin}>Sign In Now</button></Link></div>
        </form>
      </div>
    );
  }
}
export default Login;
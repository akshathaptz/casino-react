import React from 'react';
import avatar from '../images/avatar_6.png';
import casino from '../images/casino.png';
import {useNavigate,Link} from 'react-router-dom';
import { Box, Button, Modal, Popover, Typography } from '@mui/material';
class Header extends React.Component {
  state = {
    balance: 100,
    name: '',
    open: false
  };

  componentDidMount() {
    if (!localStorage.getItem("balance")) {
      localStorage.setItem("balance", 100);
      localStorage.setItem("name", "James");
      this.setState({ balance: 100, name: "James" })
    } else {
      this.setState({ balance: localStorage.getItem("balance"), name: localStorage.getItem("name") })
    }
  }

  handleOpen = () => {
    this.setState({ open: true,balance: localStorage.getItem("balance") })
  }

  handleClose = () => {
    this.setState({ open: false })
  }


  render() {
    return (
      <header style={{ backgroundColor: "rebeccapurple" }} className="MuiPaper-root MuiPaper-elevation MuiPaper-elevation4 MuiAppBar-root MuiAppBar-colorPrimary MuiAppBar-positionFixed mui-fixed css-1x8alpq-MuiPaper-root-MuiAppBar-root">
        <div className="MuiToolbar-root MuiToolbar-regular css-11hqee0-MuiToolbar-root">
          <button className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-au2cmv-MuiButtonBase-root-MuiIconButton-root" tabIndex="0" type="button">
            <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall css-ptiqhd-MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true" data-testid="MenuIcon">
              <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
            </svg>
          </button>
          <button className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-1h68knr-MuiButtonBase-root-MuiIconButton-root" tabIndex="0" type="button" aria-label="Search" data-mui-internal-clone-element="true">

            <img src={casino} style={{ width: "40px" }} />
          </button>
          <div className="MuiBox-root css-i9gxme"></div>

          <div className="MuiAvatar-root MuiAvatar-circular css-11pc8pr-MuiAvatar-root"><img onClick={this.handleOpen} src={avatar} className="MuiAvatar-img css-1pqm26d-MuiAvatar-img" style={{ cursor: "pointer" }} /></div>
        </div>
        {/* <Modal
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box  >
            wdfwfd
          </Box>
        </Modal> */}
        <Popover
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          id="logout"
          style={{ top: "48px" }}
          open={this.state.open}
          onClose={this.handleClose}
        >
          <Typography sx={{ p: 2 }}><b>Name: {this.state.name}  </b></Typography>
          <hr />
          <Typography sx={{ p: 2 }}><b>Balace: ${this.state.balance}  </b></Typography>
          <hr />
          <Link to="/"> <Typography sx={{ p: 2 }} style={{ cursor: "pointer" }}>
            <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall css-ptiqhd-MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true" data-testid="UsersIcon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"></path></svg></svg> Logout
          </Typography></Link>
        </Popover>
      </header>);
  }
}
export default Header;
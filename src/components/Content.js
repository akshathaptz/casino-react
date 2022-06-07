import React from 'react';
import Xmg from '../images/X.jpg';
import Ymg from '../images/Y.png';
import Zmg from '../images/Z.png';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Avatar,
  Box,
  Card,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  TableContainer,
  Button,
  Dialog,
  TableSortLabel,
  DialogContent,
  DialogContentText,
  DialogActions,
  Paper
} from '@mui/material';
class Content extends React.Component {
  state = {
    limit: 10,
    page: 0,
    items: [],
    isOpen: false,
    slot1: "",
    slot2: "",
    slot3: ""
  };

  componentDidMount() {

  }

  randomSymbol = () => {
    var array = ["X", "Y", "Z"]
    const slot1 = array[Math.floor(Math.random() * array.length)];
    const slot2 = array[Math.floor(Math.random() * array.length)];
    const slot3 = array[Math.floor(Math.random() * array.length)];
    this.setState({
      slot1: slot1, slot2: slot2, slot3: slot3, items: [...this.state.items, {
        id: (this.state.items.length + 1),
        slot: slot1 + "" + slot2 + "" + slot3,
        time: new Date() + ""
      }]
    });

    this.handleLocalstore(-2);
  }

  handlePageChange = (event, page) => {
    console.log(event, page)
    this.setState({ page: page })
  }
  handleLimitChange = (event) => {
    this.setState({ limit: event.target.value })
  }

  handleClickOpen = () => {
    this.setState({ isOpen: true })
  }

  handleClose = () => {
    this.setState({ isOpen: false })
  }
  spinCell = (val) => {

    var str = this.state.slot1 + " " + this.state.slot2 + " " + this.state.slot3;
    var x = str.split("X").length - 1;
    var y = str.split("Y").length - 1;
    var z = str.split("Z").length - 1;
    if (x == 1 && y == 1 && z == 1) {

    } else if (x == 2) {
      this.handleLocalstore(0.5);
    } else if (y == 2) {
      this.handleLocalstore(0.5);
    } else if (z == 2) {
      this.handleLocalstore(0.5);
    } else {
      this.handleLocalstore(5);
    }
    this.setState({ slot1: "", slot2: "", slot3: "" });
  }

  handleLocalstore = (val) => {
    if (val == -2) {
      if (parseFloat(localStorage.getItem("balance")) - 2 >= 0) {
        localStorage.setItem("balance", parseFloat(localStorage.getItem("balance")) - 2);
      } else {
        alert("Game is over");
        localStorage.setItem("balance", 100);
      }
    } else {
      localStorage.setItem("balance", parseFloat(localStorage.getItem("balance")) + val);
    }

  }

  getImage = (name) => {
    if (name == "X") {
      return Xmg;
    } else if (name == "Y") {
      return Ymg;
    } else {
      return Zmg;
    }
  }


  render() {
    return (
      <div>
        <Card >
          <PerfectScrollbar>
            <Box sx={{ minWidth: 1050 }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>
                      Id
                    </TableCell>
                    <TableCell>
                      <TableSortLabel>
                        Slot</TableSortLabel>
                    </TableCell>
                    <TableCell>  <TableSortLabel>
                      Time  </TableSortLabel>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {this.state.items.slice((this.state.limit * this.state.page), (this.state.limit * this.state.page) + this.state.limit).map((item) => (
                    <TableRow
                      hover
                      key={item.id}
                    >

                      <TableCell>
                        <Box
                          sx={{
                            alignItems: 'center',
                            display: 'flex'
                          }}>

                          {item.id}

                        </Box>
                      </TableCell>
                      <TableCell>
                        {item.slot}
                      </TableCell>
                      <TableCell>
                        {item.time}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </PerfectScrollbar>
          <TablePagination
            component="div"
            count={this.state.items.length}
            onPageChange={this.handlePageChange}
            onRowsPerPageChange={this.handleLimitChange}
            page={this.state.page}
            rowsPerPage={this.state.limit}
            rowsPerPageOptions={[5, 10, 25]}
          />

          <Button variant="contained" onClick={this.handleClickOpen} color="primary" style={{ margin: "10px" }}>
            Start Game
          </Button>
          <Dialog open={this.state.isOpen} onClose={this.handleClose}>
            {/* <DialogTitle>Confirm</DialogTitle> */}
            <DialogActions>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 400 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell><Button variant="text" onClick={this.randomSymbol}>Symbols</Button></TableCell>
                      <TableCell><Button variant="text">Debug</Button></TableCell>
                      <TableCell><Button variant="text" onClick={this.handleClose}>Close</Button></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>

                    <TableRow>
                      <TableCell align="center" onClick={() => this.spinCell(this.state.slot1)}>   <img src={this.getImage(this.state.slot1)} style={{ width: "40px" }} /></TableCell>
                      <TableCell align="center" onClick={() => this.spinCell(this.state.slot2)}>
                        <img src={this.getImage(this.state.slot2)} style={{ width: "40px" }} />
                      </TableCell>
                      <TableCell align="center" onClick={() => this.spinCell(this.state.slot3)}>
                        <img src={this.getImage(this.state.slot3)} style={{ width: "40px" }} />
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </DialogActions>
          </Dialog>


        </Card>
      </div>
    );
  }
}
export default Content;
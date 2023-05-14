import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import "./Style/Industries.css";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";

const Industries = (props) => {
  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  const [open4, setOpen4] = React.useState(false);
  const [open5, setOpen5] = React.useState(false);
  const [open6, setOpen6] = React.useState(false);
  const [open7, setOpen7] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpen1 = () => {
    setOpen1(true);
  };
  const handleClose1 = () => {
    setOpen1(false);
  };
  const handleClickOpen2 = () => {
    setOpen2(true);
  };
  const handleClose2 = () => {
    setOpen2(false);
  };
  const handleClickOpen3 = () => {
    setOpen3(true);
  };
  const handleClose3 = () => {
    setOpen3(false);
  };
  const handleClickOpen4 = () => {
    setOpen4(true);
  };
  const handleClose4 = () => {
    setOpen4(false);
  };
  const handleClickOpen5 = () => {
    setOpen5(true);
  };
  const handleClose5 = () => {
    setOpen5(false);
  };
  const handleClickOpen6 = () => {
    setOpen6(true);
  };
  const handleClose6 = () => {
    setOpen6(false);
  };
  const handleClickOpen7 = () => {
    setOpen7(true);
  };
  const handleClose7 = () => {
    setOpen7(false);
  };
  return (
    <>
      <div className="Industry-container">
        <div className="Industry-container-0">
          <div className="Industry-container-1">
            <div className="Industry-container-header">
              <div>
                <h2>{props.data.Heading}</h2>
                <hr />
                
              </div>
              <div>{props.data.para[0].para1}</div>
              <br />
              <div>{props.data.para[0].para2}</div>
              <br />
            </div>
          </div>
        </div>
        <div className=" Industry-container-1 ">
          <div className="mb-5">
            <Card className="card">
              <div className="over">
                <Card.Img
                  variant="top"
                  src={props.data.card[0].image}
                  className="card-img"
                />
              </div>
              <Card.Body>
                <Card.Title>{props.data.card[0].name}</Card.Title>
                <Card.Text>
                  {props.data.card[0].description1.slice(0, 350)}
                </Card.Text>
                <button className="button-1" onClick={handleClickOpen}>
                  Read more
                </button>
                <Dialog
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                >
                  <DialogTitle
                    className="dialog-heading"
                    id="alert-dialog-title"
                  >
                    <h4>{props.data.card[0].name}</h4>
                  </DialogTitle>
                  <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                      <div className="dialog-img">
                        <img
                          height={200}
                          src={props.data.card[0].image}
                          alt=""
                        />
                      </div>
                      <div className="px-4">
                        <div className="mb-1">
                          {props.data.card[0].description2}
                        </div>
                        <div className="mb-1">
                          {props.data.card[0].moreData_para1}
                        </div>
                        <br />
                        <h4>{props.data.card[0].moreData_heading1}</h4>

                        <div className="mb-1">
                          {props.data.card[0].moreData_para2}
                        </div>
                        <br />
                        <h4 className="mb-1">
                          {props.data.card[0].moreData_heading2}
                        </h4>

                        <div className="mb-1">
                          {props.data.card[0].moreData_para3}
                        </div>
                        <div className="mb-1">
                          {props.data.card[0].moreData_para4}
                        </div>
                        <div className="mb-1">
                          {props.data.card[0].moreData_para5}
                        </div>
                        <div className="mb-1">
                          {props.data.card[0].moreData_para6}
                        </div>
                      </div>
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <button className="button-1" onClick={handleClose}>
                      Cancel
                    </button>
                  </DialogActions>
                </Dialog>
              </Card.Body>
            </Card>
          </div>
          <div className="mb-5">
            <Card className="card">
              <div className="over">
                <Card.Img
                  variant="top"
                  src={props.data.card[1].image}
                  className="card-img"
                />
              </div>
              <Card.Body>
                <Card.Title>{props.data.card[1].name}</Card.Title>
                <Card.Text>
                  {props.data.card[1].description1.slice(0, 360)}
                </Card.Text>
                <button
                  className="button-1"
                  variant="primary"
                  onClick={handleClickOpen1}
                >
                  Read more
                </button>
                <Dialog
                  open={open1}
                  onClose={handleClose1}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                >
                  <DialogTitle
                    className="dialog-heading"
                    id="alert-dialog-title"
                  >
                    <h4>{props.data.card[1].name}</h4>
                  </DialogTitle>
                  <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                      <div className="dialog-img">
                        <img
                          height={200}
                          src={props.data.card[1].image}
                          alt=""
                        />
                      </div>
                      <div className="px-4">
                        <div>{props.data.card[1].description2}</div>
                        <div> {props.data.card[1].moreData_para1}</div>
                        <br />
                        <h4>{props.data.card[1].moreData_heading1}</h4>
                        <div className="mb-1">
                          {props.data.card[1].moreData_para2}
                        </div>
                        <div className="mb-1">
                          {props.data.card[1].moreData_para3}
                        </div>
                        <h4>{props.data.card[1].moreData_heading2}</h4>
                        <div className="mb-1">
                          {props.data.card[1].moreData_para4}
                        </div>
                        <h4>{props.data.card[1].moreData_heading3}</h4>
                        <div className="mb-1">
                          {props.data.card[1].moreData_para5}
                        </div>
                      </div>
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <button
                      className="button-1"
                      onClick={handleClose1}
                      autoFocus
                    >
                      Cancel
                    </button>
                  </DialogActions>
                </Dialog>
              </Card.Body>
            </Card>
          </div>
          <div className="mb-5">
            <Card className="card">
              <div className="over">
                <Card.Img
                  variant="top"
                  src={props.data.card[2].image}
                  className="card-img"
                />
              </div>
              <Card.Body>
                <Card.Title>{props.data.card[2].name}</Card.Title>
                <Card.Text>
                  {props.data.card[2].description1.slice(0, 300)}
                </Card.Text>
                <button
                  className="button-1"
                  variant="primary"
                  onClick={handleClickOpen2}
                >
                  Read more
                </button>
                <Dialog
                  open={open2}
                  onClose={handleClose2}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                >
                  <DialogTitle
                    className="dialog-heading"
                    id="alert-dialog-title"
                  >
                    <h4>{props.data.card[2].name}</h4>
                    <hr />
                  </DialogTitle>
                  <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                      <div className="dialog-img">
                        <img
                          height={200}
                          src={props.data.card[2].image}
                          alt=""
                        />
                      </div>
                      <div className="px-4">
                        <div>{props.data.card[2].description2}</div>
                        <div> {props.data.card[2].moreData_para1}</div>
                        <br />
                        <div> {props.data.card[2].moreData_para2}</div>
                        <br />
                        <div> {props.data.card[2].moreData_para3}</div>
                      </div>
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <button
                      className="button-1"
                      onClick={handleClose2}
                      autoFocus
                    >
                      Cancel
                    </button>
                  </DialogActions>
                </Dialog>
              </Card.Body>
            </Card>
          </div>
          <div className="mb-5">
            <Card className="card">
              <div className="over">
                <Card.Img
                  variant="top"
                  src={props.data.card[3].image}
                  className="card-img"
                />
              </div>
              <Card.Body>
                <Card.Title>{props.data.card[3].name}</Card.Title>
                <Card.Text>
                  {props.data.card[3].description1.slice(0, 350)}
                </Card.Text>
                <button
                  className="button-1"
                  variant="primary"
                  onClick={handleClickOpen3}
                >
                  Read more
                </button>
                <Dialog
                  open={open3}
                  onClose={handleClose3}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                >
                  <DialogTitle
                    className="dialog-heading"
                    id="alert-dialog-title"
                  >
                    <h4>{props.data.card[3].name}</h4>
                  </DialogTitle>
                  <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                      <div className="dialog-img">
                        <img
                          height={200}
                          src={props.data.card[3].image}
                          alt=""
                        />
                      </div>
                      <div className="px-4">
                        <div>{props.data.card[3].description2}</div>
                        <div> {props.data.card[3].moreData_para1}</div>
                        <br />
                        <div> {props.data.card[3].moreData_para2}</div>
                        <br />
                        <div> {props.data.card[3].moreData_para3}</div>
                      </div>
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <button
                      className="button-1"
                      onClick={handleClose3}
                      autoFocus
                    >
                      Cancel
                    </button>
                  </DialogActions>
                </Dialog>
              </Card.Body>
            </Card>
          </div>
          <div className="mb-5">
            <Card className="card">
              <div className="over">
                <Card.Img
                  variant="top"
                  src={props.data.card[4].image}
                  className="card-img"
                />
              </div>
              <Card.Body>
                <Card.Title>{props.data.card[4].name}</Card.Title>
                <Card.Text>
                  {props.data.card[4].description1.slice(0, 350)}
                </Card.Text>
                <button
                  className="button-1"
                  variant="primary"
                  onClick={handleClickOpen4}
                >
                  Read more
                </button>
                <Dialog
                  open={open4}
                  onClose={handleClose4}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                >
                  <DialogTitle
                    className="dialog-heading"
                    id="alert-dialog-title"
                  >
                    <h4>{props.data.card[4].name}</h4>
                  </DialogTitle>
                  <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                      <div className="dialog-img">
                        <img
                          height={200}
                          src={props.data.card[4].image}
                          alt=""
                        />
                      </div>
                      <div className="px-4">
                        <div>{props.data.card[4].description2}</div>
                        <div> {props.data.card[4].moreData_para1}</div>
                        <br />
                        <h4>{props.data.card[4].moreData_heading1}</h4>
                        <div className="mb-1">
                          {props.data.card[4].moreData_para2}
                        </div>
                        <div className="mb-1">
                          {props.data.card[4].moreData_para3}
                        </div>
                        <h4>{props.data.card[4].moreData_heading2}</h4>
                        <div className="mb-1">
                          {props.data.card[4].moreData_para4}
                        </div>
                        <div className="mb-1">
                          {props.data.card[4].moreData_para5}
                        </div>
                        <div className="mb-1">
                          {props.data.card[4].moreData_para6}
                        </div>
                        <div className="mb-1">
                          {props.data.card[4].moreData_para7}
                        </div>
                      </div>
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <button
                      className="button-1"
                      onClick={handleClose4}
                      autoFocus
                    >
                      Cancel
                    </button>
                  </DialogActions>
                </Dialog>
              </Card.Body>
            </Card>
          </div>
          <div className="mb-5">
            <Card className="card">
              <div className="over">
                <Card.Img
                  variant="top"
                  src={props.data.card[5].image}
                  className="card-img"
                />
              </div>
              <Card.Body>
                <Card.Title>{props.data.card[5].name}</Card.Title>
                <Card.Text>
                  {props.data.card[5].description1.slice(0, 350)}
                </Card.Text>
                <button
                  className="button-1"
                  variant="primary"
                  onClick={handleClickOpen5}
                >
                  Read more
                </button>
                <Dialog
                  open={open5}
                  onClose={handleClose5}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                >
                  <DialogTitle
                    className="dialog-heading"
                    id="alert-dialog-title"
                  >
                    <h4> {props.data.card[5].name}</h4>
                  </DialogTitle>
                  <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                      <div className="dialog-img">
                        <img
                          height={200}
                          src={props.data.card[5].image}
                          alt=""
                        />
                      </div>
                      <div className="px-4">
                        <div>{props.data.card[5].description2}</div>
                        <div className="mb-1">
                          {props.data.card[5].moreData_para1}
                        </div>
                        <div className="mb-1">
                          {props.data.card[5].moreData_para2}
                        </div>
                      </div>
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <button
                      className="button-1"
                      onClick={handleClose5}
                      autoFocus
                    >
                      Cancel
                    </button>
                  </DialogActions>
                </Dialog>
              </Card.Body>
            </Card>
          </div>
          <div className="mb-5">
            <Card className="card">
              <div className="over">
                <Card.Img
                  variant="top"
                  src={props.data.card[6].image}
                  className="card-img"
                />
              </div>
              <Card.Body>
                <Card.Title>{props.data.card[6].name}</Card.Title>
                <Card.Text>
                  {props.data.card[6].description1.slice(0, 360)}
                </Card.Text>
                <button
                  className="button-1"
                  variant="primary"
                  onClick={handleClickOpen6}
                >
                  Read more
                </button>
                <Dialog
                  open={open6}
                  onClose={handleClose6}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                >
                  <DialogTitle
                    className="dialog-heading"
                    id="alert-dialog-title"
                  >
                    <h4>{props.data.card[6].name}</h4>
                  </DialogTitle>
                  <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                      <div className="dialog-img">
                        <img
                          height={200}
                          src={props.data.card[6].image}
                          alt=""
                        />
                      </div>
                      <div className="px-4">
                        <div>{props.data.card[6].description2}</div>
                        <div className="mb-1">
                          {props.data.card[6].moreData_para1}
                        </div>
                        <div className="mb-1">
                          {props.data.card[6].moreData_para2}
                        </div>
                        <div className="mb-1">
                          {props.data.card[6].moreData_para3}
                        </div>
                      </div>
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <button
                      className="button-1"
                      onClick={handleClose6}
                      autoFocus
                    >
                      Cancel
                    </button>
                  </DialogActions>
                </Dialog>
              </Card.Body>
            </Card>
          </div>
          <div className="mb-5">
            <Card className="card">
              <div className="over">
                <Card.Img
                  variant="top"
                  src={props.data.card[7].image}
                  className="card-img"
                />
              </div>
              <Card.Body>
                <Card.Title>{props.data.card[7].name}</Card.Title>
                <Card.Text>
                  {props.data.card[7].description1.slice(0, 360)}
                </Card.Text>

                <button
                  className="button-1"
                  onClick={handleClickOpen7}
                >
                  Read more
                </button>
                <Dialog
                  open={open7}
                  onClose={handleClose7}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                >
                  <DialogTitle
                    className="dialog-heading"
                    id="alert-dialog-title"
                  >
                    <h4>{props.data.card[7].name}</h4>
                  </DialogTitle>
                  <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                      <div className="dialog-img">
                        <img
                          height={200}
                          src={props.data.card[7].image}
                          alt=""
                        />
                      </div>
                      <div className="px-4">
                        <div>
                          <div>{props.data.card[7].description2}</div>
                          <div className="mb-1">
                            {props.data.card[7].moreData_para1}
                          </div>
                          <div className="mb-1">
                            {props.data.card[7].moreData_para2}
                          </div>
                        </div>
                      </div>
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <button className="button-1" onClick={handleClose7}>
                      Cancel
                    </button>
                  </DialogActions>
                </Dialog>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default Industries;

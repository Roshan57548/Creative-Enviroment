import React, { useEffect, useState } from "react";
import './Apply.css';
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row, Button, Form, Card, Collapse } from "react-bootstrap";
import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import "yup-phone";
import axios from "axios";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import MarkunreadIcon from '@mui/icons-material/Markunread';
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const Apply = () => {
  const History = useNavigate();
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const validate = yup.object({
    fullname: yup.string().min(2).required(),
    email: yup.string().email().required(),
    Phone: yup
      .string()
      .required()
      .matches(phoneRegExp, "Phone number is not valid")
      .min(10, "too short")
      .max(10, "too long"),
    CompanyName: yup.string().min(2).required(),
    Query: yup.string().min(2).required(),
  });

  const user = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      Phone: "",
      CompanyName: "",
      Query: "",
    },
    validationSchema: validate,
    onSubmit: async (values) => {
      const {
        fullname,
        email,
        Phone,
        CompanyName,
        Query,
      } = values;
      const res = await axios({
        method: "post",
        url: "https://v1.nocodeapi.com/roshanprajapati/google_sheets/TWyjKmomeRFcsgxO",
        params: { tabId: "Sheet1" },
        data: [
          [
            fullname,
            email,
            Phone,
            CompanyName,
            Query,
          ],
        ],
      })
        .then(function (response) {
          // handle success
          swal("Send", "Your message sent successfully!", "success").then(
            (value) => {
              handleClose()
            }
          );
        })
        .catch(function (error) {
          // handle error
          console.log(error);
          swal("Error", "All field are required", "warning");
        });
    },
  });
  const [isVisible, setIsVisible] = useState(false);

  const listenToScroll = () => {
    let heightToHidden = 20;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  return (
    <Wrapper>
      {isVisible && (
        <div className="top-btn" onClick={handleClickOpen}>
          Enquiry 
        </div>
      )}
      <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="responsive-dialog-title"
          onSubmit={user.handleSubmit}
        >
          <DialogContent>
            <DialogContentText id="dalogbox">
            <Form
              method="POST"
              onSubmit={user.handleSubmit}
              className="col-12 takewidth"
            >
              <h2 className="send">Fill the form to Get In Touch</h2>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridName">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control
                    name="fullname"
                    value={user.values.fullname}
                    onChange={user.handleChange}
                    placeholder="Enter Full Name"
                  />
                  {user.touched.fullname && user.errors.fullname && (
                    <p className="error-part">{user.errors.fullname}</p>
                  )}
                </Form.Group>
                <Form.Group as={Col} controlId="formGridName">
                  <Form.Label>Company Name</Form.Label>
                  <Form.Control
                    name="CompanyName"
                    value={user.values.CompanyName}
                    onChange={user.handleChange}
                    placeholder="Enter Company Name"
                  />
                  {user.touched.CompanyName && user.errors.CompanyName && (
                    <p className="error-part">{user.errors.CompanyName}</p>
                  )}
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    name="email"
                    value={user.values.email}
                    onChange={user.handleChange}
                    type="email"
                    placeholder="Enter email"
                  />
                  {user.touched.email && user.errors.email && (
                    <p className="error-part">{user.errors.email}</p>
                  )}
                </Form.Group>

                <Form.Group as={Col} controlId="Contact">
                  <Form.Label>Contact No</Form.Label>
                  <Form.Control
                    name="Phone"
                    value={user.values.Phone}
                    onChange={user.handleChange}
                    placeholder="Enter Contact No."
                  />
                  {user.touched.Phone && user.errors.Phone && (
                    <p className="error-part">{user.errors.Phone}</p>
                  )}
                </Form.Group>
              </Row>
              <Form.Group className="mb-3" controlId="formGridtext">
                <Form.Label>Your Query</Form.Label>
                <Form.Control
                  name="Query"
                  value={user.values.carddetails}
                  onChange={user.handleChange}
                  placeholder="Enter Your Query.."
                  as="textarea"
                  rows={3}
                />
                {user.touched.Query && user.errors.Query && (
                    <p className="error-part">{user.errors.Query}</p>
                  )}
              </Form.Group>
              <Button variant="primary" type="submit" id="galllay-button">
                Submit
              </Button>
              <br /> <br />
            </Form>
            </DialogContentText>
          </DialogContent>
        </Dialog>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  .top-btn {
    writing-mode: vertical-rl;
    text-orientation: mixed;
    padding: 20px 10px;
    z-index: 9999;
    box-shadow: 0 0 3px rgb(0 0 0 / 30%);
    transform: rotate(180deg);
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    font-size: 18px;
    width: 40px;
    height: 100px;
    color: #fff;
    background-color: #1e6c99;
    border-radius: 10% 0 0 0 0;
    position: fixed;
    bottom: 20rem;
    right: 0rem;
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &--icon {
      animation: gototop 1.2s linear infinite alternate-reverse;
    }
    @keyframes gototop {
      0% {
        transform: translateY(-0.5rem);
      }
      100% {
        transform: translateY(1rem);
      }
    }
  }
  @media screen and (max-width: 600px) {
    .top-btn {
      width: 30px;
      height: 80px;
      font-size: 12px;
      bottom: 15rem;
    }
  }
`;

export default Apply;

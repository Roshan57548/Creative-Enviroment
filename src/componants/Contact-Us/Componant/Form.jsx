import React, { useEffect, useState } from "react";
import "./Style/Form.css";
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
const ContactForm = () => {
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
          console.log(response.data);
          swal("Send", "Your message sent successfully!", "success").then(
            (value) => {
              History("/");
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
  return (
    <div className="ContactForm-0">
      <div className="container ContactForm-1">
        <div className="row ContactForm-1">
          <div className="col-lg-6 col-md-12">
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
              </Form.Group>
              <Button variant="primary" type="submit" id="galllay-button">
                Submit
              </Button>
              <br /> <br />
            </Form>
          </div>
          <div className="col-lg-4 col-md-12 ContactForm-2 row">
            <h2 className="col-12">Contact Us</h2>
            <div className="row">
              <div className="col-12 ContactForm-3">
                <AddBusinessIcon /> Creative Environmental Solutions
              </div>
              <div>
                SB-118, 3rd Cross Road, Ist Stage, Peenya Industrial Estate,
                Bengaluru - 560058 Karnataka, INDIA
              </div>
              <div className="col-12 ContactForm-3">
                <ContactPhoneIcon /> +91-741-145-5246
              </div>
              <div>
                9:00 AM to 10:00 PM Office Time
              </div>
              <div className="col-12 ContactForm-3">
                <MarkunreadIcon /> roshan@gmail.com
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

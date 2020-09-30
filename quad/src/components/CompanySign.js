import React from "react";
import axios from "axios";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

class CompanySign extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      CompanyName: "",
      Email: "",
      Password: "",
      Cpassword: ""
    };
    this.getSign = this.getSign.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
    console.log("=====>",event.target)
  }

  async getSign() {
    let body = {
      CompanyName: this.state.CompanyName,
      Email: this.state.Email,
      Password: this.state.Password,
      Cpassword: this.state.Cpassword
    };
    if (body.Password !== body.Cpassword) {
      alert("check your password again !")
    }else{
    axios
      .post("", body)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  }

  render() {
    return (
      <Form>
        <div>
          <Input
            name="CompanyName"
            type="text"
            placeholder="Company Name"
            onChange={this.handleChange}
          />
          <br />
          <Input
            name="Email"
            type="email"
            placeholder="Email"
            onChange={this.handleChange}
          />
          <br />
          <Input
            name="Password"
            type="password"
            placeholder="Password"
            onChange={this.handleChange}
          />
          <br />
          <Input
            name="Cpassword"
            type="password"
            placeholder="Confirm password"
            onChange={this.handleChange}
          />
          <br />
          <Button color="primary" type="submit">Submit</Button>
        </div>
      </Form>
    );
  }
}

export default CompanySign;

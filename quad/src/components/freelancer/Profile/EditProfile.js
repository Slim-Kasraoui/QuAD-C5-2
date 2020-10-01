import React from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

class EditProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      avatar: '',
      firstName: '',
      lastName : '',
      email : '', 
      age : '', 
      PhoneNumber : '',
      Descreption : '',
      Skills : ''
    };

  }
 

  render() {
    let body = {
      Avatar: this.state.avatar,
      FirstName: this.state.firstName,
      LastName: this.state.lastName,
      Email: this.state.email,
      Age : this.state.age, 
      PhoneNumber : this.state.PhoneNumber,
      Descreption : this.state.Descreption,
      Skills : this.state.Skills
    };
    return (
        <Form>
        <div>
        <Label for="avatar">Avatar</Label>
        <Input type="file" name="avatar" accept="image/*"/>
        <Label for="firstName">First Name:</Label>
        <Input type="text" name="firstName" /><br/>
        <Label for="lastName">Last Name:</Label>
        <Input type="text" name="lastName"/><br/>
        <Label for="email">Email:</Label><br/>
        <Input type="email" name="email"/><br/>
        <Label for="password">Password:</Label><br/>
        <Input type="password" name="password"/><br/>
        <Label for="Birthday">Birthday:</Label><br/>
        <Input type="date" name="age"/><br/>
        <Label for="PhoneNumber">Phone Number:</Label><br/>
        <Input type="tel" name="PhoneNumber"/><br/>
        <Label for="Descreption">Profile:</Label><br/>
        <Input type="text" name="Descreption" placeholder="Describe yourself.."/><br/>
        <Label for="Skills">Skills:</Label><br/>
        <Input type="text" name="Skills" placeholder="Describe your skills.."/><br/>
        <Button >Cancel</Button>
        <Button >Save</Button>
    </div>
    </Form>
    );
  }
}

export default EditProfile;

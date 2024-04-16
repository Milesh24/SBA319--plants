const React = require('react');

const DefaultLayout = require('../layout/Default.jsx')
class Edit extends React.Component{
    render() {
      return (
        <DefaultLayout title="Edit User">
          <form action={`/users/${this.props.user._id}?_method=PUT`} method="POST">
            fName: <input type="text" name="fName" defaultValue={this.props.user.fName} /><br />
            lName: <input type="name" name="lName" defaultValue={this.props.user.lName} /><br />
            phone: <input type="number" name="phone" defaultValue={this.props.user.phone} /><br />
           Stay Signed In :
              { this.props.user.staySignedIn ? <input type="checkbox" name="StaySignedIn" defaultChecked />: <input type="checkbox" name="StaySignedIn"/> }
          <br/>
            <input type="submit" value="Submit Changes" />
          </form>
        </DefaultLayout>
      )
    }
  }
  
  module.exports= Edit;
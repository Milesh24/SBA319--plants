const React = require('react');
// As you can see we are using the app layout
const DefaultLayout = require('../layout/Default.jsx')

class Edit extends React.Component{
  render() {
    return (
      <DefaultLayout title="Edit Page">      
  
      <form action={`/flowers/${this.props.flower._id}?_method=PUT`} method="POST">
          Name: <input type="text" name="name" defaultValue={this.props.flower.name}/><br/>
          Color: <input type="text" name="color"  defaultValue={this.props.flower.color}/><br/>
          Is Ready To Pick:
              { this.props.flower.readyToPick? <input type="checkbox" name="readyToPick" defaultChecked />: <input type="checkbox" name="readyToPick"/> }
          <br/>
          <input type="submit" value="Submit Changes"/>
      </form>
      </DefaultLayout>
    )
  }
}
module.exports= Edit;
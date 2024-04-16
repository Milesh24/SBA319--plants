const React = require('react');
// As you can see we are using the app layout
const DefaultLayout = require('../layout/Default.jsx')

class Edit extends React.Component{
  render() {
    return (
      <DefaultLayout title="Edit Page">      
  
      <form action={`/plants/${this.props.plant._id}?_method=PUT`} method="POST">
          Name: <input type="text" name="name" defaultValue={this.props.plant.name}/><br/>
          Color: <input type="text" name="color"  defaultValue={this.props.plant.color}/><br/>
          Is Ready To Pick:
              { this.props.plant.readyToPick? <input type="checkbox" name="readyToPick" defaultChecked />: <input type="checkbox" name="readyToPick"/> }
          <br/>
          <input type="submit" value="Submit Changes"/>
      </form>
      </DefaultLayout>
    )
  }
}
module.exports= Edit;
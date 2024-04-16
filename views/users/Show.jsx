const React = require("react");

const DefaultLayout = require("../layout/Default");

class Show extends React.Component {
  render() {
    const user = this.props.user;

    return (
      <DefaultLayout title="Show an Individual User">
        <p>
           {user.fName} is {user.lName} and {user.phone}
        </p> {user.staySignedIn ? `Stay Signed IN`
                           :   `Do Not Stay Signed In`}

        <br />
        <a href={`/users/${user._id}/edit`}>Get This User</a>
        <form action={`/users/${user._id}?_method=DELETE`} method="POST">
          <input type="submit" value="DELETE" />
        </form>
        <a href="/users">Back to Index</a>
      </DefaultLayout>
    );
  }
}

module.exports = Show;
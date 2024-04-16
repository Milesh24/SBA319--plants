const React = require('react');
const DefaultLayout = require('../layout/Default')
class New extends React.Component {
    render () {
        return (
            <DefaultLayout title={'Add a New User'}>
                {/* NOTE: the route, method is HTTP  */}
                <form action='/users' method="POST">
                fName: <input type="text" name="fName" /><br />
                    lName: <input type="name" name="lName" /><br />
                    phone: <input type="number" name="phone" /><br />
                    Stay Signed In: <input type="checkbox" name="staySignedIn"/> <br />
                    <input type="submit" value="Create User"/>
                </form>
            </DefaultLayout>
        )
    }
}


module.exports = New;
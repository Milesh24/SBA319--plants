const React = require('react');
const DefaultLayout = require('../layout/Default')

class New extends React.Component {
    render () {
        return (
            <DefaultLayout title={'Add a New Plants'}>
                {/* NOTE: action will be the route, method will be the HTTP verb */}
                <form action='/plants' method="POST">
                    Name: <input type="text" name="name" /><br />
                    Color: < input type="text" name="color"/> <br />
                    Are Ready To Pick: <input type="checkbox" name="arereadytopick"/> <br />
                    <input type="submit" name="" value="Create Plants"/>
                </form>
            </DefaultLayout>
        )
    }
}

module.exports = New;
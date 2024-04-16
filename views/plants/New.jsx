const React = require('react');
const DefaultLayout = require('../layout/Default')

class New extends React.Component {
    render () {
        return (
            <DefaultLayout title={'Add a New Plants'}>
                {/* NOTE: action route, method is HTTP  */}
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
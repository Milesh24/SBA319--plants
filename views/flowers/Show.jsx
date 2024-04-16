const React = require('react');
const DefaultLayout = require('../layout/Default')

class Show extends React.Component {
    render() {
        const flower = this.props.flower;

        return (
            <DefaultLayout title="Show an Individual Flower">
                <p>The {flower.name} is {flower.color}</p>
                {flower.readyToPick ? 'It is ready to pick' : "NOT READY!"}
                <br />
                <a href={`/flower/${flower._id}/edit`}>Edit This Flower</a>
                <form action={`/flowers/${flower._id}?_method=DELETE`} method="POST">
                    <input type="submit" value="DELETE" />
                </form>
                <a href="/flowers">Back to Index</a>
            </DefaultLayout >

        )
    }
}

module.exports = Show;
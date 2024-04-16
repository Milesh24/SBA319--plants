const React = require('react');
const DefaultLayout = require('../layout/Default')

class Show extends React.Component {
    render() {
        const plant = this.props.plant;

        return (
            <DefaultLayout title="Show an Individual Plant">
                <p>The {plant.name} is {plant.color}</p>
                {plant.readyToPick ? 'It is ready to pick' : "NOT READY!"}
                <br />
                <a href={`/plant/${plant._id}/edit`}>Edit This Plant</a>
                <form action={`/Plants/${plant._id}?_method=DELETE`} method="POST">
                    <input type="submit" value="DELETE" />
                </form>
                <a href="/plants">Back to Index</a>
            </DefaultLayout >

        )
    }
}

module.exports = Show;
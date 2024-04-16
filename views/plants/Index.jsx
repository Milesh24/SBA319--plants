const React = require('react');
const DefaultLayout = require('../layout/Default')

class Index extends React.Component {
    render() {
        const { plants } = this.props;
        // const plants = this.props.plants;

        return (
            <DefaultLayout title={"Plants Index Page"}>
                <nav>
                    <a href="/plants/new">Create a New plants</a>
                </nav>
                <ul>
                    {plants.map((plant, i) => {
                        return (
                            <li>
                                The {' '}
                                <a href={`/plants/${plant._id}`}>
                                    {plant.name}
                                </a> {' '}
                                is {plant.color} <br></br>
                                {plant.readyToPick
                                ? `Are ready to pick`
                            :   ` NOT ready to pick`}
                            <br />
                            <a href={`/plants/${plant._id}/edit`}>Edit These plant</a>
                            <form action={`/plants/${plant._id}?_method=DELETE`} method="POST">
                                <input type="submit" value="DELETE"/>
                            </form>
                            </li>
                        )
                    })

                    }
                </ul>
            </DefaultLayout>
        )
    }
}

module.exports = Index;
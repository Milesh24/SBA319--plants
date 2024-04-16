const React = require('react');
const DefaultLayout = require('../layout/Default')

class Index extends React.Component {
    render() {
        const { flowers } = this.props;
        // const flowers = this.props.flowers;

        return (
            <DefaultLayout title={"Flowers Index Page"}>
                <nav>
                    <a href="/flowers/new">Create a New flowers</a>
                </nav>
                <ul>
                    {flowers.map((flower, i) => {
                        return (
                            <li>
                                The {' '}
                                <a href={`/flowers/${flower._id}`}>
                                    {flower.name}
                                </a> {' '}
                                is {flower.color} <br></br>
                                {flower.readyToPick
                                ? `Are ready to pick`
                            :   ` NOT ready to pick`}
                            <br />
                            <a href={`/flowers/${flower._id}/edit`}>Edit These Flowers</a>
                            <form action={`/flowers/${flower._id}?_method=DELETE`} method="POST">
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
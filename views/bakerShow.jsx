const React = require('react')
const Default = require('./layout/default')

function BakerShow({ baker }) {
    const breads = baker.breads.map(bread => {
        return (
            <li key={bread.id}>{bread.name}</li>
        )
    })
    return (
        <Default>
            <h3>{baker.name}</h3>
            <p>{baker.name} has been baking with us since {baker.startDate.getFullYear()}</p>
            <p>About {baker.name}: {baker.bio}</p>
            <h3>Breads {baker.name} has baked {breads}</h3>
            <ul>
                {breads}
            </ul>
            <form action={`/baker/${baker.id}?_method=DELETE`} method='POST'>
            <input type='submit' value='DELETE' />
        </form>
        </Default>
    )
}

module.exports = BakerShow
const React = require('react')
const Default = require('./layout/default')

function Index({ breads }) {
    const display = breads.map((bread, i) => {
        return <li key={i}>{bread.name}</li>
    })
    return (
      <Default>
        <h2>Index Page</h2>
        <ul>
            {display}
        </ul>
      </Default>
    )
}

module.exports = Index
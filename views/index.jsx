const React = require('react')
const Default = require('./layout/default')

function Index({ breads, bakers }) {
  const display = breads.map((bread) => {
    return (
      <li>
        <a href={`/bread/${bread.id}`}>{bread.name}</a>
      </li>
    )
  })
  const bakerDisplay = bakers.map(baker => {
    return(
      <li key={baker.id}>
        <a href={`/baker/${baker.id}`}>{baker.name}</a>
      </li>
    )
  })
    return (
      <Default>
        <h2>Index Page</h2>
        <ul>
        <div className="newButton">
          <a href="/bread/new"><button>Add a new bread</button></a>
        </div>
        <div className="backButton">
          <a href="/bread"><button>Go back to the index</button></a>
        </div>
            {display}
        </ul>
            <p>Bakers</p>
            {bakerDisplay}
      </Default>
    )
}

module.exports = Index
function Card({ word }) {
    return (
        <div className="col-sm-12 mb-1 mr-2 card">
            <div className="card-body">
                <h5 className="card-title">{word.word}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{word.description}</h6>
                <p className="card-text">{word.useCase}</p>
            </div>
        </div>
    )
}

export default Card
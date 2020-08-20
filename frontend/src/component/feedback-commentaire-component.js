import React from 'react'

const FeedBackCommentaire = ({ nomProprietaire, dateCommentaire, commentaire, divClass }) => (
    <div className={divClass}>
        <h3>{nomProprietaire}</h3>
        <h4>{dateCommentaire}</h4>
        <p>{commentaire}</p>
    </div>
)

export default FeedBackCommentaire

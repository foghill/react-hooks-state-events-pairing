import React from 'react'

export default function Comments({comments, showComments}) {
    const commentsDisplay = comments.map(comment => {
        return (
            <div>
                <h3>{comment.user}</h3>
                <p>{comment.comment}</p>
            </div>
        )
    })
  return (
    <div>
        {commentsDisplay}
    </div>
  )
}

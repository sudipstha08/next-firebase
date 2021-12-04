import React, { useState } from 'react'

const CommentsPage = () => {
  const [comments, setComments] = useState([])
  const [comment, setComment] = useState('')

  const fetchComments = async () => {
    const res = await fetch('/api/comments')
    const data = await res.json()
    setComments(data)
  }

  const submitComment = async () => {
    const res = await fetch(`/api/comments`, {
      method: 'POST',
      body: JSON.stringify({ comment }),
      headers: {
        'Content-type': 'application/json',
      },
    })
    const data = await res.json()
    console.log(data)
  }

  return (
    <div>
      <input
        type="text"
        name="text"
        id=""
        value={comment}
        onChange={e => setComment(e.target.value)}
      />
      <button onClick={submitComment}>Submit Comment</button>
      <button onClick={fetchComments}>Load Comment.</button>
      {comments.map((comment: any, idx) => (
        <div key={idx}>
          {comment?.id}. {comment?.text}
        </div>
      ))}
    </div>
  )
}

export default CommentsPage

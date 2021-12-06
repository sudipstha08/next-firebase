/* eslint-disable no-console */
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

  const deleteComment = async commentId => {
    const res = await fetch(`/api/comments/${commentId}`, {
      method: 'DELETE',
    })
    const data = await res.json()
    console.log(data)
    fetchComments()
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
      {comments.map((comment: any) => (
        <div key={comment?.id}>
          {comment?.id}. {comment?.text}
          <button onClick={() => deleteComment(comment.id)}>Delete</button>
        </div>
      ))}
    </div>
  )
}

export default CommentsPage

import { NextApiRequest, NextApiResponse } from 'next'
import { comments } from '../../utils/data'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { commentId } = req.query

  if (req.method === 'GET') {
    res.status(200).json(comments)
  } else if (req.method === 'POST') {
    const comment = req.body.comment
    const newComment = {
      id: Date.now(),
      text: comment,
    }
    comments.push(newComment)
    res.status(201).json(newComment)
  } else if (req.method === 'DELETE') {
    const deletedComment = comments.find(comment => {
      comment.id === parseInt(commentId as string)
    })

    const index = comments.findIndex(
      comment => comment.id === parseInt(commentId as string),
    )

    comments.splice(index, 1)
    res.status(200).json(deletedComment)
  }
}

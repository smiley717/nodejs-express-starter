import { RequestHandler } from 'express'

/**
 * JSON 404 response
 */
const notFoundHandler: RequestHandler = (_req, res) => {
    return res.status(404).json({ message: 'not found' })
}

export default notFoundHandler
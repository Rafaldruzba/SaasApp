import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET || 'secret'

export const requireAuth = (req: Request, res: Response, next: NextFunction) => {
	const authHeader = req.headers.authorization
	if (!authHeader) return res.status(401).json({ message: 'No authorization header' })

	const parts = authHeader.split(' ')
	if (parts.length !== 2 || parts[0] !== 'Bearer')
		return res.status(401).json({ message: 'Invalid authorization format' })

	const token = parts[1]
	try {
		const payload = jwt.verify(token, JWT_SECRET) as any
		;(req as any).user = { id: payload.id, email: payload.email }
		return next()
	} catch (err) {
		return res.status(401).json({ message: 'Invalid or expired token' })
	}
}

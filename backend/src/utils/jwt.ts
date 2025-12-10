import jwt from 'jsonwebtoken'

if (!process.env.JWT_SECRET) {
	throw new Error('Missing JWT_SECRET')
}

const secret = process.env.JWT_SECRET
const EXPIRES_IN = process.env.JWT_EXPIRES_IN || '1h'

export const createAccessToken = (payload: object) => {
	const token = jwt.sign(payload, secret, { expiresIn: '24h' })
	return token
}

export const verifyAccessToken = (token: string) => {
	return jwt.verify(token, secret)
}

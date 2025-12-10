import jwt from 'jsonwebtoken'

if (!process.env.JWT_SECRET) {
	throw new Error('Missing JWT_SECRET')
}

const secret = process.env.JWT_SECRET

export const createAccessToken = (payload: object) => {
	const token = jwt.sign(payload, secret, { expiresIn: '1h' })
	return token
}

export const verifyAccessToken = (token: string) => {
	return jwt.verify(token, secret)
}

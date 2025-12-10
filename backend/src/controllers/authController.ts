import { Request, Response } from 'express'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { createAccessToken } from '../utils/jwt'
import { findUserByLogin } from '../db/userRepository'

type LoginBody = { login?: string; password?: string }

export const registerHandler = async (req: Request, res: Response) => {
	const { login, password } = req.body as LoginBody
	if (!login || !password) {
		return res.status(400).json({ message: 'Login and password required' })
	}

	// rejestracja coś tego
}

export const loginHandler = async (req: Request, res: Response) => {
	const { login, password } = req.body

	try {
		// pobierz usera
		const user = await findUserByLogin(login)

		if (!user) {
			return res.status(400).json({ message: 'User not found.' })
		}

		// sprawdź hasło
		const isValid = await bcrypt.compare(password, user.password)
		if (!isValid) {
			return res.status(400).json({ message: 'Invalid password.' })
		}

		// stwórz token
		const token = createAccessToken({ id: user.id, login: user.login })

		return res.json({ token })
	} catch (err) {
		console.error(err)
		res.status(500).json({ message: 'Server error.' })
	}
}

import { Request, Response } from 'express'
import bcrypt from 'bcrypt'
import { createAccessToken } from '../utils/jwt'
import { findUserByEmail, createUser } from '../db/userRepository'

type LoginBody = { email?: string; password?: string }

export const registerHandler = async (req: Request, res: Response) => {
	const { email, password } = req.body as LoginBody
	if (!email || !password) {
		return res.status(400).json({ message: 'Email and password required' })
	}

	// rejestracja coś tego
}

export const loginHandler = async (req: Request, res: Response) => {
	const { email, password } = req.body as LoginBody
	if (!email || !password) return res.status(400).json({ message: 'Email and password required' })

	const user = findUserByEmail(email)
	if (!user) return res.status(401).json({ message: 'Invalid credentials' })

	// logowanie
}

export const meHandler = async (req: Request, res: Response) => {
	// requireAuth middleware sets req.user
	const user = (req as any).user
	return res.json({ user })
}

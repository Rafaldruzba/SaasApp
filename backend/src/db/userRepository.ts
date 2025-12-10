// Repozytorium użytkowników — tu trafia prawdziwy kod pod DB.
// Kontrolery nie używają już in-memory modelu tylko tego repo.

import { db } from '../db/index'

export type User = {
	id: string
	login: string
	password: string
}

// Znajdź użytkownika po loginie
export const findUserByLogin = async (login: string): Promise<User | null> => {
	const [users]: any = await db.query('SELECT * FROM users WHERE email = ? OR login = ? LIMIT 1', [login, login])
	return users[0] || null
}

// Repozytorium użytkowników — tu trafia prawdziwy kod pod DB.
// Kontrolery nie używają już in-memory modelu tylko tego repo.

export type User = {
	id: string
	email: string
	passwordHash: string
}

// Znajdź użytkownika po email
export const findUserByEmail = async (email: string): Promise<User | null> => {
	// TODO: podłącz swoje zapytanie do DB
	// przykład dla Prisma:
	// return await prisma.user.findUnique({ where: { email } })

	return null
}

// Utwórz użytkownika
export const createUser = async (data: { email: string; passwordHash: string }): Promise<User> => {
	// TODO: podłącz DB
	// return await prisma.user.create({ data })

	return {
		id: 'TEMP_REPLACE_WITH_DB_ID',
		email: data.email,
		passwordHash: data.passwordHash,
	}
}

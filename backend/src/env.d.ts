declare namespace NodeJS {
	interface ProcessEnv {
		PORT?: string

		JWT_SECRET: string
		JWT_EXPIRES_IN?: string

		// Możesz dodać tu kolejne zmienne, jeśli będziesz ich używać:
		// DATABASE_URL?: string;
		// REFRESH_TOKEN_SECRET?: string;
		// REFRESH_TOKEN_EXPIRES_IN?: string;
	}
}

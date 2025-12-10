import React, { createContext, useContext, useEffect, useState } from 'react'

type User = {
	id: string
	email: string
}

type AuthContextType = {
	user: User | null
	token: string | null
	login: (token: string, user: User) => void
	logout: () => void
	loading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
	const [token, setToken] = useState<string | null>(null)
	const [user, setUser] = useState<User | null>(null)
	const [loading, setLoading] = useState(true)

	// Ładowanie tokenu z localStorage (odświeżenie strony)
	useEffect(() => {
		const storedToken = localStorage.getItem('authToken')
		const storedUser = localStorage.getItem('authUser')

		if (storedToken) setToken(storedToken)
		if (storedUser) setUser(JSON.parse(storedUser))

		setLoading(false)
	}, [])

	const login = (newToken: string, newUser: User) => {
		setToken(newToken)
		setUser(newUser)

		localStorage.setItem('authToken', newToken)
		localStorage.setItem('authUser', JSON.stringify(newUser))
	}

	const logout = () => {
		setToken(null)
		setUser(null)
		localStorage.removeItem('authToken')
		localStorage.removeItem('authUser')
	}

	return <AuthContext.Provider value={{ user, token, login, logout, loading }}>{children}</AuthContext.Provider>
}

// Hook
export const useAuth = () => {
	const ctx = useContext(AuthContext)
	if (!ctx) throw new Error('useAuth must be used within AuthProvider')
	return ctx
}

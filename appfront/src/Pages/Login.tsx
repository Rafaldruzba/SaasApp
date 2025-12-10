import React, { useState, type JSX } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

type LoginResponse = {
	token: string
	user?: { id: string; email: string }
}

export default function Login(): JSX.Element {
	const { login: saveAuth } = useAuth()

	const [login, setLogin] = useState<string>('')
	const [password, setPassword] = useState<string>('')
	const [loading, setLoading] = useState<boolean>(false)
	const [error, setError] = useState<string | null>(null)
	const navigate = useNavigate()

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		setError(null)

		if (!login || !password) {
			setError('Please enter both email and password.')
			return
		}

		setLoading(true)
		try {
			const res = await fetch('/api/auth/login', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ login, password }),
			})

			if (!res.ok) {
				// try to parse message, otherwise generic
				const errBody = await res.json().catch(() => null)
				setError(errBody?.message || 'Invalid credentials or server error.')
				setLoading(false)
				return
			}

			const data = (await res.json()) as LoginResponse
			if (!data?.token) {
				setError('No token returned from server.')
				setLoading(false)
				return
			}

			saveAuth(data.token, data.user!)
			navigate('/')
		} catch (err) {
			console.error(err)
			setError('Network error. Please try again.')
		} finally {
			setLoading(false)
		}
	}

	return (
		<div style={styles.container}>
			<form onSubmit={handleSubmit} style={styles.card}>
				<h2 style={styles.title}>Sign in</h2>

				{error && <div style={styles.error}>{error}</div>}

				<label style={styles.label}>
					Login
					<input
						type='login'
						value={login}
						onChange={e => setLogin(e.target.value)}
						style={styles.input}
						autoComplete='username'
						required
					/>
				</label>

				<label style={styles.label}>
					Password
					<input
						type='password'
						value={password}
						onChange={e => setPassword(e.target.value)}
						style={styles.input}
						autoComplete='current-password'
						required
					/>
				</label>

				<button type='submit' style={styles.button} disabled={loading}>
					{loading ? 'Signing in...' : 'Sign in'}
				</button>

				<div style={styles.footer}>
					<small>Don't have an account? Register in your app or contact admin.</small>
				</div>
			</form>
		</div>
	)
}

const styles: { [k: string]: React.CSSProperties } = {
	container: {
		minHeight: '100vh',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		background: '#f5f7fb',
		padding: 16,
	},
	card: {
		width: 360,
		padding: 24,
		borderRadius: 8,
		boxShadow: '0 6px 18px rgba(0,0,0,0.08)',
		background: '#fff',
		display: 'flex',
		flexDirection: 'column',
		gap: 12,
	},
	title: {
		margin: 0,
		textAlign: 'center',
		fontSize: 20,
	},
	label: {
		display: 'flex',
		flexDirection: 'column',
		fontSize: 13,
		gap: 6,
	},
	input: {
		padding: '8px 10px',
		borderRadius: 6,
		border: '1px solid #dfe6ef',
		fontSize: 14,
	},
	button: {
		marginTop: 6,
		padding: '10px 12px',
		borderRadius: 6,
		border: 'none',
		background: '#2563eb',
		color: '#fff',
		fontWeight: 600,
		cursor: 'pointer',
	},
	error: {
		padding: 8,
		borderRadius: 6,
		background: '#fee2e2',
		color: '#b91c1c',
		fontSize: 13,
	},
	footer: {
		marginTop: 8,
		textAlign: 'center',
		color: '#6b7280',
		fontSize: 12,
	},
}

import express from 'express'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(
	cors({
		origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
		credentials: true,
	})
)

import authRoutes from './src/routes/auth'
app.use('/api/auth', authRoutes)

//DEAFAULT ENDPOINT
app.get('/', (req, res) => {
	res.send({ message: 'Serwer działa poprawnie!' })
})

app.get('/api/protected', (req, res) => {
	res.json({ ok: true, message: 'Public route — replace with protected middleware as needed' })
})

export default app

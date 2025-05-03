import type { Request, Response } from 'express'
import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

// const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY! })

// Test endpoint
app.post('/api/test', async (req: Request, res: Response) => {
  res.status(200).json({ result: `Hello from backend! Time: ${new Date().toLocaleTimeString()}` })
})

app.listen(5000, () => {
  console.info('API server running at http://localhost:5000')
})

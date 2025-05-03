import React, { useState } from 'react'
import axios from 'axios'
import { environment } from '../utils/environment'

/**
 * Demonstrates fetching data from the backend.
 */
const TestComponent: React.FC = () => {
  const [result, setResult] = useState<string>('')

  const fetchData = async () => {
    try {
      const response = await axios.post<{ result: string }>(`${environment.API_URL}/api/test`)
      setResult(response.data.result)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Test Endpoint Result</h1>
      <button
        onClick={() => {
          void fetchData()
        }}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300 cursor-pointer"
      >
        Fetch Data
      </button>
      <pre className="mt-4 p-4 bg-gray-800 text-white rounded">
        <code>{result || 'Press the button to get the result from backend...'}</code>
      </pre>
    </div>
  )
}

export default TestComponent

'use client'
import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    if (error.name === 'ChunkLoadError' || error.message?.includes('Loading chunk')) {
      window.location.reload()
    }
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center">
      <button onClick={reset} className="px-6 py-3 bg-primary-900 text-white rounded-xl">
        Try again
      </button>
    </div>
  )
}

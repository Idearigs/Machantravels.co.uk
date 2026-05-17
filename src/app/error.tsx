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
    // ChunkLoadError means a new deployment happened — reload to get fresh chunks
    if (error.name === 'ChunkLoadError' || error.message?.includes('Loading chunk')) {
      window.location.reload()
      return
    }
    console.error('App error:', error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-50 px-6">
      <div className="text-center max-w-md">
        <h2 className="text-2xl font-semibold text-primary-900 mb-4">Something went wrong</h2>
        <p className="text-neutral-600 mb-2 text-sm font-mono break-all">{error.message}</p>
        {error.digest && (
          <p className="text-neutral-400 text-xs mb-6">Error ID: {error.digest}</p>
        )}
        <button
          onClick={reset}
          className="px-6 py-3 bg-primary-900 text-white rounded-xl hover:bg-primary-800 transition-colors"
        >
          Try again
        </button>
      </div>
    </div>
  )
}

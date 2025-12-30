import React from 'react'
import { AlertCircle, RefreshCw } from 'lucide-react'

const ErrorState = ({ message, onRetry }) => {
  return (
    <div className="text-center py-20">
      <div className="mx-auto w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mb-6">
        <AlertCircle className="h-12 w-12 text-red-600" />
      </div>
      <h3 className="text-2xl font-bold font-serif text-sage-800 mb-3">Something went wrong</h3>
      <p className="text-sage-600 max-w-md mx-auto mb-6">{message}</p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="inline-flex items-center space-x-2 px-6 py-3 bg-primary-500 text-white font-medium rounded-xl hover:bg-primary-600 transition-colors"
        >
          <RefreshCw className="h-4 w-4" />
          <span>Try Again</span>
        </button>
      )}
    </div>
  )
}

export default ErrorState

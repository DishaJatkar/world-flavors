import React from 'react'

const LoadingState = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {Array.from({ length: 8 }).map((_, index) => (
        <div key={index} className="recipe-card rounded-2xl overflow-hidden shadow-lg animate-pulse">
          <div className="h-48 bg-gray-200 loading-shimmer"></div>
          <div className="p-5 space-y-3">
            <div className="h-6 bg-gray-200 rounded loading-shimmer"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4 loading-shimmer"></div>
            <div className="flex justify-between">
              <div className="h-4 bg-gray-200 rounded w-16 loading-shimmer"></div>
              <div className="h-4 bg-gray-200 rounded w-20 loading-shimmer"></div>
            </div>
            <div className="h-10 bg-gray-200 rounded loading-shimmer"></div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default LoadingState

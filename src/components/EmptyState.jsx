import React from 'react'
import { ChefHat } from 'lucide-react'

const EmptyState = ({ title, message }) => {
  return (
    <div className="text-center py-20">
      <div className="mx-auto w-24 h-24 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full flex items-center justify-center mb-6">
        <ChefHat className="h-12 w-12 text-primary-600" />
      </div>
      <h3 className="text-2xl font-bold font-serif text-sage-800 mb-3">{title}</h3>
      <p className="text-sage-600 max-w-md mx-auto">{message}</p>
    </div>
  )
}

export default EmptyState

import React from 'react'

const CodeBox = ({code}) => {
  return (
    <div className="w-48 h-16 md:w-3/4 md:h-16 bg-gray-200 overflow-x-auto overflow-y-auto">
      <code className="block p-4">{code}</code>
    </div>
  )
}

export default CodeBox
import React from 'react'

const Input = ({ label, type, ...rest }) => {
  return (
    <div className="space-y-1">
        <label className="block text-primary text-sm">{label}</label>
        {type === "textarea" ? (
            <textarea className="w-full rounded border border-primary bg-background p-2" {...rest} />
        ) : (
            <input type={type} className="w-full rounded border border-primary bg-background p-2" {...rest} />
        )}
    </div>
  )
}

export default Input
import React from 'react'

const Input = ({ label, type, ...rest }) => {
  return (
    <div className="space-y-1">
        <label className="block text-background text-xl">{label}</label>
        {type === "textarea" ? (
            <textarea className="w-full rounded border border-background bg-primary p-2" {...rest} />
        ) : (
            <input type={type} className="w-full rounded border border-background bg-primary ary p-2" {...rest} />
        )}
    </div>
  )
}

export default Input
import React from 'react'

const Input = ({ label, type, ...rest }) => {
  return (
    <div className="space-y-1">
        <label className="block text-zinc-400">{label}</label>
        {type === "textarea" ? (
            <textarea className="w-full rounded border border-zinc-700 bg-zinc-800 p-2" {...rest} />
        ) : (
            <input type={type} className="w-full rounded border border-zinc-700 bg-zinc-800 p-2" {...rest} />
        )}
    </div>
  )
}

export default Input
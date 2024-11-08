import React from 'react'

const Checkbox = ({ label }) => {
  return (
    <label className="flex items-center gap-2">
        <input type="checkbox" className="rounded bg-zinc-800 border-zinc-700" />
        <span>{label}</span>
    </label>
  )
}

export default Checkbox
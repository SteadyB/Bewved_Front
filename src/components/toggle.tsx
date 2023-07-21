"use client"

import { useState } from 'react'
import { Switch } from '@headlessui/react'

export default function Toggle() {
  const [enabled, setEnabled] = useState(false)

  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      className={`${
        enabled ? 'bg-amber-600' : 'bg-slate-400'
      } relative inline-flex h-6 w-14 items-center rounded-full`}
    >
      <span
        className={`${
          enabled ? 'translate-x-9' : 'translate-x-1'
        } inline-block h-4 w-4 transform rounded-full bg-white transition`}
      />
    </Switch>
  )
}
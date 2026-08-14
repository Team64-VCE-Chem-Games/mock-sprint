import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Settings',
}

export default function SettingsPage() {
  return (
    <div className="space-y-6 rounded-2xl border border-zinc-200 bg-olive-50 px-10 py-10 shadow-sm">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-black">Settings</h1>
        <p className="text-zinc-500 text-sm mt-1">Manage your application settings.</p>
      </div>

      <div className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
        <p className="text-sm text-zinc-400">Settings will appear here.</p>
      </div>
    </div>
  )
}

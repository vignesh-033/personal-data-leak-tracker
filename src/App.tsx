export default function App() {
  return (
    <main className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-lg w-full rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
        <h1 className="text-2xl font-semibold text-slate-900">Personal Data Leak Tracker</h1>
        <p className="mt-3 text-slate-600">
          See which services hold your personal data, track where it gets shared, and get alerts when
          a leak is detected.
        </p>
        <p className="mt-6 inline-flex items-center gap-2 rounded-full bg-amber-50 px-3 py-1 text-sm font-medium text-amber-800 ring-1 ring-amber-200">
          <span className="h-2 w-2 rounded-full bg-amber-500" aria-hidden="true" />
          Coming soon
        </p>
      </div>
    </main>
  );
}

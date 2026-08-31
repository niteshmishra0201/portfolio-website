export default function SystemsLoading() {
  return (
    <main className="p-8">
      <div className="max-w-5xl mx-auto animate-pulse space-y-4">
        <div className="h-8 w-40 bg-border rounded" />
        <div className="h-4 w-72 bg-border rounded" />
        <div className="grid md:grid-cols-2 gap-6 mt-10">
          <div className="h-48 bg-border rounded-xl" />
          <div className="h-48 bg-border rounded-xl" />
        </div>
      </div>
    </main>
  );
}
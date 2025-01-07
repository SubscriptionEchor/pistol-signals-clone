import { Button } from '../../ui/button';

export function Newsletter() {
  return (
    <div className="w-full md:w-auto md:min-w-[320px]">
      <h3 className="text-sm font-semibold mb-4">Stay up to date</h3>
      <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-1 min-w-0 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          required
        />
        <Button variant="gradient" type="submit">
          Try for free
        </Button>
      </form>
    </div>
  );
}
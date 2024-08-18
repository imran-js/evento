import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center pt-36 px-3">
      <h1 className="text-3xl lg:text-6xl font-bold tracking-tight">
        Find Events Around You{" "}
      </h1>
      <p className="mt-7 mb-12 text-2xl lg:text-3xl opacity-75 ">
        Browse more than{" "}
        <span className="font-bold italic underline text-accent ">
          10,000 events
        </span>{" "}
        around you.
      </p>

      <form className="w-full sm:w-[580px]">
        <input
          className="w-full h-16 bg-white/[7%] px-6 outline-none rounded-lg ring-accent/50 transition focus:ring-2 focus:bg-white/10 "
          type="text"
          name="search-events"
          id="search-events"
          placeholder="Search events in any city....."
          spellCheck={false}
        />

        <section className="flex mt-4 text-sm gap-x-4 text-white/50 ">
          <p>Popular:</p>
          <div className="space-x-2 font-semibold">
            <Link href="/events/austin">Austin</Link>
            <Link href="/events/seattle">Seattle</Link>
          </div>
        </section>
      </form>
    </main>
  );
}

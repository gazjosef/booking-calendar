import Link from 'next/link'

export default function Example() {
  return (
    <div className="pt-16">
      <div className="mx-auto max-w-md px-4 sm:px-7 md:max-w-4xl md:px-6">
        <div className="md:grid md:grid-cols-2 md:divide-x md:divide-gray-200">
          <div className="md:pr-14">
            <h1>TEST</h1>
            <h1>TEST</h1>
            <h1>TEST</h1>
            <h1>TEST</h1>
            <h1>TEST</h1>
            <h1>TEST</h1>
          </div>

          {/* SCHEDULE */}
          <section className="mt-12 md:mt-0 md:pl-14">
            <h1>TEST</h1>
            <h1>TEST</h1>
            <h1>TEST</h1>
            <h1>TEST</h1>
            <h1>TEST</h1>
            <h1>TEST</h1>
            <Link href="/calendar">
              <button className="border bg-blue-700 py-1 px-2 text-white">
                Guest
              </button>
            </Link>
          </section>
        </div>
      </div>
    </div>
  )
}

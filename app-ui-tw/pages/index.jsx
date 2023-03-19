import Link from 'next/link'

export default function Example() {
  return (
    <div className="pt-16">
      <div className="mx-auto max-w-md px-4 sm:px-7 md:max-w-4xl md:px-6">
        <div className="md:grid md:grid-cols-2 md:divide-x md:divide-gray-200">
          {/* LOGIN */}
          <div className="md:pr-14">
            <form action="">
              {/* <!-- Email input --> */}
              <div class="relative mb-6" data-te-input-wrapper-init>
                <input
                  type="text"
                  class="data-[te-input-state-active]:placeholder:opacity-100 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200"
                  id="exampleFormControlInput2"
                  placeholder="Email address"
                />
                {/* <label
                  for="exampleFormControlInput2"
                  class="peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200"
                >
                  Email address
                </label> */}
              </div>

              {/* <!-- Password input --> */}
              <div class="relative mb-6" data-te-input-wrapper-init>
                <input
                  type="password"
                  class="data-[te-input-state-active]:placeholder:opacity-100 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200"
                  id="exampleFormControlInput22"
                  placeholder="Password"
                />
                {/* <label
                  for="exampleFormControlInput22"
                  class="peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200"
                >
                  Password
                </label> */}
              </div>

              <div class="text-center lg:text-left">
                <p class="mt-2 mb-0 pt-1 text-sm font-semibold">
                  Don't have an account?
                  <a
                    href="#!"
                    class="text-danger hover:text-danger-600 focus:text-danger-600 active:text-danger-700 transition duration-150 ease-in-out"
                  >
                    Register
                  </a>
                </p>
                <button
                  type="button"
                  class="bg-primary hover:bg-primary-600 focus:bg-primary-600 active:bg-primary-700 inline-block rounded px-7 pt-3 pb-2.5 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  Login
                </button>
              </div>
            </form>
          </div>

          {/* GUEST */}
          <section className="mt-12 md:mt-0 md:pl-14">
            <div className="mt-auto">
              <p class="mt-2 mb-0 pt-1 text-sm font-semibold">
                Sign-in with guest account
              </p>
              <Link href="/calendar">
                <button className="border bg-blue-700 py-1 px-2 text-white">
                  Guest
                </button>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

"use client";
import changeClerk from "@/app/_components/changeClerk";
import { SignUp } from "@clerk/nextjs";

export default function Page() {
  changeClerk(".cl-internal-16vtwdp");
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <section className="login-section">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1605106702734-205df224ecce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            className="absolute inset-0 h-full w-full object-cover opacity-80"
          />

          {/* <div className="hidden lg:relative lg:block lg:p-12">
            <h2 className="mt-6 text-2xl font-bold text-white">
              Sign Up to Dashboard 🦑
            </h2>

            <p className="mt-4 leading-relaxed text-white/90">
              The admin dashboard website is a comprehensive tool for managing
              online projects and tracking various metrics. It offers a range of
              customizable dashboard templates that provide real-time sales
              data, demographics, and other statistical information.
            </p>
          </div> */}
        </section>

        <main className="login-main">
          <div className="max-w-xl lg:max-w-3xl text-center flex md:flex-col md:items-center">
            <div className="relative -mt-16 block lg:hidden mb-4">
              <div
                className="inline-flex size-16 items-center justify-center rounded-full bg-white text-blue-600 sm:size-20 dark:bg-gray-900"
              >
                <span className="sr-only">Home</span>
                <img src="/logo.svg" alt="" className="text-white" />
              </div>

              <h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl  dark:text-white">
                Sign Up to Dashboard 🦑
              </h1>

              <p className="mt-4 leading-relaxed text-gray-500 dark:text-gray-400">
                The admin dashboard website is a comprehensive tool for managing
                online projects and tracking various metrics. It offers a range
                of customizable dashboard templates that provide real-time sales
                data, demographics, and other statistical information.
              </p>
            </div>

            <SignUp />
          </div>
        </main>
      </div>
    </section>
  );
}

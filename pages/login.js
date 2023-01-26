export default function Login() {
  return (
    <>
      <section className="flex felx-col md:flex-row h-screen items-center">
        <div className="bg-cover bg-[url('/signupp.png')] h-screen  lg:block md:w-1/2 xl:w-2/3 h-screen"></div>

        <div className="bg-white flex md:mx-auto md:mx-0 md:max-w-md lg:max-w-full px-6 lg:px-16 xl:p">
          <div className="w-full h-100">
            <h1 className="text-xl md:text-2xl font-bold leading.tight mt-13">
              Login
            </h1>
            <h1 className="text-gray pt-3">
              Login whit the data you entered during your registration
            </h1>

            <form className="mt-6" action="#" method="Post">
              <div>
                <label className="font-semibold">Email</label>
                <input
                  type="Email"
                  placeholder="Enter Email Address"
                  className="w-full mt-2 rounded-lg px-4 py-3
                 border border-black"
                />
              </div>

              <div className="mt-4">
                <label className="block font-inter font-semibold">Password</label>
                <input
                  type="password"
                  placeholder="Enter Password"
                  name=""
                  className="w-full mt-2 rounded-lg px-4 py-3 border border-black"
                />
              </div>

              <button
                className="w-full p-1 gap-2.5 block bg-blue hover:bg-gray-blue  rounded-lg font-semibold text-white px-4 py-3 mt-2"
                type="submit">
                Log in
              </button>

              <div className="text-center mt-3">
                <a
                  href="#"
                  className="text-sm font-semibold text-gray hover:text-blue mt-6"
                >
                  Did you forget your password?
                </a>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

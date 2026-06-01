import Formulaire from "../Components/Forumulaire_Register"

function Register() {
  return (
    <div className="min-h-screen bg-slate-50 grid grid-cols-2">
      <section className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-cyan-500 via-cyan-500 to-cyan-600" />
        <div className="absolute inset-0 border border-white/20 bg-white/5 backdrop-blur-2xl shadow-md ring-1 ring-white/10" />

        <div className="absolute inset-0 flex items-center justify-center p-5">
          <div className="w-full max-w-xl text-left">
            <p className=" font-bold text-7xl bg-linear-to-r from-white to-gray-300 text-transparent bg-clip-text">
              Build Your Future in
            </p>
            <p className="pb-5 font-bold text-5xl bg-linear-to-r from-amber-300 to-cyan-300 text-transparent bg-clip-text">
              AI & Technology
            </p>

            <div className="max-w-lg">
              <p className="bg-linear-to-r from-white to-gray-300 text-transparent bg-clip-text">
                Access cutting-edge resources, collaborate on
              </p>
              <p className="bg-linear-to-r from-white to-gray-300 text-transparent bg-clip-text">
                innovative projects, and become part of a thriving
              </p>
              <p className="bg-linear-to-r from-white to-gray-300 text-transparent bg-clip-text">
                tech community.
              </p>
            </div>

            <div className="mt-8 max-w-lg space-y-4">
              <div className="rounded-2xl border border-white/20 bg-white/5 px-4 py-3 backdrop-blur-2xl shadow-md ring-1 ring-white/10">
                <p className="bg-linear-to-r from-white to-gray-300 text-transparent bg-clip-text font-bold">Access to exclusive coding workshops</p>
              </div>
              <div className="rounded-2xl border border-white/20 bg-white/5 px-4 py-3 backdrop-blur-2xl shadow-md ring-1 ring-white/10 font-bold">
                <p className="bg-linear-to-r from-white to-gray-300 text-transparent bg-clip-text">Certificates and recognition programs</p>
              </div>
              <div className="font-bold rounded-2xl border border-white/20 bg-white/5 px-4 py-3 backdrop-blur-2xl shadow-md ring-1 ring-white/10">
                <p className="bg-linear-to-r from-white to-gray-300 text-transparent bg-clip-text">Career growth opportunities</p>
              </div>
            </div>

            <div className="mt-8 mr-17 flex justify-center">
              <div className="inline-flex items-center gap-6 rounded-full border border-white/20 bg-white/5 px-5 py-2 backdrop-blur-2xl shadow-md ring-1 ring-white/10">
                <div className="flex flex-col justify-center items-center">
                  <p className="text-center bg-linear-to-r from-white to-gray-300 text-transparent bg-clip-text font-bold text-2xl">500+</p>
                  <p className="bg-linear-to-r from-white to-gray-300 text-transparent bg-clip-text ">Members</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <p className="text-center bg-linear-to-r from-white to-gray-300 text-transparent bg-clip-text font-bold text-2xl">100+</p>
                  <p className="bg-linear-to-r from-white to-gray-300 text-transparent bg-clip-text ">Events</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <p className="text-center bg-linear-to-r from-white to-gray-300 text-transparent bg-clip-text font-bold text-2xl">50+</p>
                  <p className="bg-linear-to-r from-white to-gray-300 text-transparent bg-clip-text">Projects</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="flex flex-col items-center px-6">
        <p className="pt-16 pb-2 font-bold text-3xl">Create Account</p>
        <p className="text-gray-600">Start your tech journey with us</p>
        <Formulaire />
      </div>
    </div>
  )
}

export default Register

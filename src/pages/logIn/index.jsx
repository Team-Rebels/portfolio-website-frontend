

const LogIn = () => {

  return (
  
      <div className="flex h-screen">
        <div className="w-1/2 flex items-center justify-center bg-lightBlue">
          <div className="w-full max-w-sm space-y-4 p-8">
            <h1 className="text-5xl font-semibold">Sign in</h1>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Email address</label>
                <input
                  type="email"
                  placeholder="Email address"
                  className="mt-1 block w-full border border-gray-300 rounded-md p-3"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Password</label>
                <input
                  type="password"
                  placeholder="Password"
                  className="mt-1 block w-full border border-gray-300 rounded-md p-3"
                />
              </div>
              <button className="w-full bg-[#A5045B] text-white py-2 px-4 rounded shadow-sm hover:bg-[#D00855]">
                Log in
              </button>
              <div className="flex items-center my-4">
                <hr className="w-full border-gray-300" />
                <span className="mx-2 text-gray-500">or</span>
                <hr className="w-full border-gray-300" />
              </div>
              <button className="w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded shadow-sm hover:bg-gray-50 flex items-center justify-center">
                <img src="" alt="Google logo" className="w-5 h-5 mr-2" />
                Sign in with Google
              </button>
            </form>
          </div>
        </div>
        <div className="w-1/2">
          <img src="" alt="sign up and in background" className="object-cover w-full h-full" />
        </div>
      </div>
    );
  };
  

export default LogIn

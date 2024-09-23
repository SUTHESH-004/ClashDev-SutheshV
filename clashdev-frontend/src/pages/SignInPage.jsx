import React from "react";

const SignInPage = () => {
  return (
    <div
      className="h-screen w-screen flex justify-center items-center"
      style={{
        backgroundImage:
          "radial-gradient(122.23% 100% at 0 100%, #5bc5e8 0, #3780bd 24.76%, #103a8b 55.66%, #021847 100%)",
      }}
    >
      <div className="bg-white px-40 py-5 rounded-2xl font-serif">
        <div className="text-center"> SuperCell</div>
        <div> Log in into Clash Dev</div>
        <div className="p-4">
            <form action="" method="post">
                <input type="text" />
            </form>

        </div>

      </div>
    </div>
  );
};

export default SignInPage;

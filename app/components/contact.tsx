import React from "react";

const contact = () => {
  return (
    <div className="flex   items-center justify-center gap-10 w-screen h-screen bg-[#F9FFE3] px-10">
      <div>
        <h1 className="text-4xl font-bold">Let's Talk</h1>
        <p className="text-lg">
          Have questions, feedback, or want to get started? Our team is here to
          assist you.
        </p>
        <div>
          <h2 className="text-3xl font-bold">Email</h2>
          <p>Waveafricansocial@gmail.com</p>
        </div>
        <div>
          <h2 className="text-3xl font-bold">Socials</h2>
          <div>
            <div>Telegram</div>
            <div>Instagram</div>
            <div>Tiktok</div>
          </div>
        </div>
      </div>
      <div>
        <form className="flex flex-col gap-5 w-140.75 h-52.75">
          <label className="flex flex-col gap-2 text-gray-800">
            Name
            <input type="text" className="bg-gray-300 h-12 rounded-xl"></input>
          </label>{" "}
          <label className="flex flex-col gap-2 text-gray-800">
            Email
            <input type="email" className="bg-gray-300 h-12 rounded-xl"></input>
          </label>
          <label className="flex flex-col gap-2 text-gray-800">
            Message
            <textarea className="w-140.75 h-52.75 bg-gray-300 rounded-xl"></textarea>
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default contact;

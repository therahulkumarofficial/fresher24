import React from 'react';
import 'material-icons/iconfont/material-icons.css';

export default function EventScheduleScreen() {
  return (
    <main>
      <h1 className="mb-8 pt-8 text-2xl text-lime-50 text-center">
      Fresher's 2024 | Schedule
      </h1>

      <div className="flex flex-col bg-red-700 bg-opacity-70 rounded-xl p-4 w-fit ml-auto mr-auto my-4">
        <p className="text-md font-medium text-red-100 max-w-[256px] text-center">
          {"Online Registrations are closed now. Only offline registrations are open! You can go to the venue directly and register"}
        </p>
      </div>

      <a
        href="/event/register"
        className="text-lg w-fit ml-auto mr-auto font-semibold text-gray-900 items-center align-middle flex flex-row border border-gray-400 px-2 py-1 rounded-lg bg-gray-100 mb-8"
      >
        <span className="material-icons mr-2">app_registration</span>
        Register for Events
      </a>

      <img
        alt="Pragati 2024"
        src="/s1.png"
        className="rounded-xl ml-auto mr-auto"
        width={720}
        height={720}
      />
      <br />
      <img
        alt="Pragati 2024"
        src="/s2.png"
        className="rounded-xl ml-auto mr-auto"
        width={720}
        height={720}
      />
      <div className="my-16"></div>
    </main>
  );
}

import { SettingForm, Sidebar } from "parts";
import React, { useEffect } from "react";

export default function Settings() {
  useEffect(() => {
    window.scroll(0, 0);
    document.title = "Micro | Settings";
  }, []);
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1">
        <div className="px-4 md:px-16">
          <section className="flex flex-col mt-8 pl-12 md:pl-0">
            <h1 className="text-4xl text-gray-900 font-medium">Settings</h1>
            <p className="text-lg text-gray-600">
              Secure your data informations
            </p>
          </section>
          <SettingForm />
        </div>
      </main>
    </div>
  );
}

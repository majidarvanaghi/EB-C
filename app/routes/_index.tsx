import type { MetaFunction } from "@remix-run/cloudflare";
import { DarkThemeToggle } from "flowbite-react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
<body className="w-screen h-screen min-h-full bg-gray-900 text-gray-50">
  <main className="flex bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-300">


    <div id="menu" className="items-center h-screen px-2 pt-5 shrink-0 flex w-24 flex-col border-r bg-gray-50 dark:bg-gray-950 border-gray-200 dark:border-gray-700">

      <div>EB</div>

      <div className=" ">


        <div className=" text-gray-500 hover:text-gray-600 size-11 text-2xl px-2 pt-[10px] border-0 rounded-md mt-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-900 dark:hover:bg-gray-800 dark:text-gray-500 dark:hover:text-gray-400"><a href="#">sadfsdfs</a></div>
        <div className=" text-gray-500 hover:text-gray-600 size-11 text-2xl px-2 pt-[10px] border-0 rounded-md mt-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-900 dark:hover:bg-gray-800 dark:text-gray-500 dark:hover:text-gray-400"><a href="#">LINE</a></div>
        <div className=" text-gray-500 hover:text-gray-600 size-11 text-2xl px-2 pt-[10px] border-0 rounded-md mt-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-900 dark:hover:bg-gray-800 dark:text-gray-500 dark:hover:text-gray-400"><a href="#">LINE</a></div>
        <div className=" text-gray-500 hover:text-gray-600 size-11 text-2xl px-2 pt-[10px] border-0 rounded-md mt-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-900 dark:hover:bg-gray-800 dark:text-gray-500 dark:hover:text-gray-400"><a href="#">LINE</a></div>
        <div className=" text-gray-500 hover:text-gray-600 size-11 text-2xl px-2 pt-[10px] border-0 rounded-md mt-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-900 dark:hover:bg-gray-800 dark:text-gray-500 dark:hover:text-gray-400"><a href="#">LINE</a></div>
        <div><DarkThemeToggle /></div>

        
      </div>

    </div>


    <div id="submenu">

    </div>


    <div id="body">

      <nav></nav>

      <div id="content">
        <div id="main-content"></div>
        <div id="sub-content"></div>
      </div>

    </div>


  </main>
</body>

  );
}

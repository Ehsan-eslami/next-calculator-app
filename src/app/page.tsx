'use client'
import Calc from "@/components/Calc";
import ThemeProvider from "@/components/ThemeProvider";

export default function Home() {
 

  return (
  <div className="calc">
    <header>
      <p className=" flex flex-col justify-end">Calc</p>
      <ThemeProvider/>
    </header>
    <main>
      <Calc />
    </main>
    <footer className="attribution fixed bottom-0 z-40 left-[50%] translate-x-[-50%]  py-1 px-2 rounded-3xl">
      Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
      Coded by <a href="https://github.com/Ehsan-eslami">Ehsan Eslami</a>.
    </footer>
  </div>
  );
}

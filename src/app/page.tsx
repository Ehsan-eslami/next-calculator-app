'use client'

import Display from "@/components/Display";
import ThemeProvider from "@/components/ThemeProvider";
import { useState } from "react";

export default function Home() {
  const [display, setDisplay] = useState('11')
  const [result, setResult] = useState('12')


  return (
  <div className="calc">
    <header>
      <p className=" flex flex-col justify-end">Calc</p>
      <ThemeProvider/>
    </header>
    <main>
     <Display result={result} display={display} />
    </main>
  </div>
  );
}

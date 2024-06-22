'use client'

import Button from "@/components/Button";
import Display from "@/components/Display";
import ThemeProvider from "@/components/ThemeProvider";
import { useState } from "react";

export default function Home() {
  const [display, setDisplay] = useState('')
  const [result, setResult] = useState('')

  // TODO: create functions for each button 


  return (
  <div className="calc">
    <header>
      <p className=" flex flex-col justify-end">Calc</p>
      <ThemeProvider/>
    </header>
    <main>
      <Display result={result} display={display} />
      <div className="button-part">
        <Button name="" value={7} />
        <Button name="" value={8} />
        <Button name="" value={9} />
        <Button name="DEL" value={0}/>
        <Button name="" value={4}/>
        <Button name="" value={5}/>
        <Button name="" value={6}/>
        <Button name="+" value={0}/>
        <Button name="" value={1}/>
        <Button name="" value={2}/>
        <Button name="" value={3}/>
        <Button name="-" value={0}/>
        <Button name="." value={0}/>
        <Button name="" value={0}/>
        <Button name="/" value={0}/>
        <Button name="X" value={0}/>
        <Button name="RESET" value={0}/>
        <Button name="=" value={0}/>
      </div>
    </main>
  </div>
  );
}

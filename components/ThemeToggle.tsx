"use client";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
export default function ThemeToggle(){
  const [dark,setDark]=useState(false);
  useEffect(()=>{const saved=localStorage.getItem("theme"); const d=saved==="dark"; setDark(d); document.documentElement.classList.toggle("dark",d)},[]);
  function toggle(){const next=!dark;setDark(next);document.documentElement.classList.toggle("dark",next);localStorage.setItem("theme",next?"dark":"light")}
  return <button aria-label="Toggle dark mode" onClick={toggle} className="h-10 w-10 rounded-full border border-[var(--line)] flex items-center justify-center hover:scale-105 transition">{dark?<Sun size={17}/>:<Moon size={17}/>}</button>
}

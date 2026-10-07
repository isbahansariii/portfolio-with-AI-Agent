"use client";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
const links=[["About","about"],["Experience","experience"],["Projects","projects"],["Skills","skills"],["AI Me","ai"],["Contact","contact"]];
export default function Navbar(){const [open,setOpen]=useState(false);return <header className="site-nav"><div className="container"><div className="nav-shell"><a href="#top" className="nav-brand">isbah<span>.</span></a><nav className="nav-links">{links.map(([label,id])=><a key={id} href={'#'+id}>{label}</a>)}<ThemeToggle/></nav><div className="nav-mobile"><div className="md:hidden"><ThemeToggle/></div><button className="nav-menu" onClick={()=>setOpen(!open)} aria-label="Toggle navigation">{open?<X size={19}/>:<Menu size={19}/>}</button></div></div>{open&&<nav className="mobile-links">{links.map(([label,id])=><a onClick={()=>setOpen(false)} key={id} href={'#'+id}>{label}</a>)}</nav>}</div></header>}

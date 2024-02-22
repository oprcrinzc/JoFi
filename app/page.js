"use client"
import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";
import clsx from "clsx";

export default function Home() {
  const [sortbySelectMenuState, setSortbySelectMenuState] = useState(false)
  const [sortbySelected, setSortbySelected] = useState(1)
  const sortbyDict = {
    1:"create old, new",
    2:"create new, old",
    3:"deadline long, short",
    4:"deadline short, long",
    5:"difficult hard, easy",
    6:"difficult easy, hard",
    7:"price more, less",
    8:"price less, more"
  }
  const sortby = (w) => {
    setSortbySelectMenuState(false)
    setSortbySelected(w)
  }
  return (
    <div className="mother">
      <div className="plane l">
        <div className="box">
          <p>USERNAME</p>
        </div>
        <div className="box head">
          <h3>Filter</h3>
          <div className="f1">
            <p>sortby:</p>
            <div onClick={()=>{setSortbySelectMenuState(true)}} className="sortby">{sortbyDict[sortbySelected]}</div>
            <div className={clsx("sortbySelect", {"on":sortbySelectMenuState==true}, {"off":sortbySelectMenuState==false})}>
              {
                Object.keys(sortbyDict).map((k, i)=>{
                  return <p key={i} onClick={()=>{sortby(k)}}> {k} {sortbyDict[k]}</p>
                })
              }
            </div>
          </div>
        </div>
      </div>
      <div className="plane">
        
      </div>
    </div>
  );
}

"use client"

import styles from './page.module.css'
import Image from 'next/image'

import head from "../../public/head.jpg"
import main from "../../public/main.jpeg"
import main1 from "../../public/main1.jpg"
import main2 from "../../public/main2.png"
import main3 from "../../public/main3.png"
import main4 from "../../public/main4.jpg"
import main6 from "../../public/main6.png"
import main7 from "../../public/main7.jpg"


import { useState } from 'react'


export default function Home() {
  const [track,setTrack]=useState();
  const isTrue = (track != undefined )

  return (
    
    <main className={styles.main}>
         <Image src={head} style={{width:"100%"}}/> 
       <a href="/aram">اطلب الخدمة الان</a>
      <div>

      <Image src={main} style={{width:"100%"}}/>
      <Image src={main1} style={{width:"100%"}}/>
      <Image src={main2} style={{width:"100%"}}/>
      <Image src={main3} style={{width:"100%"}}/>
      <Image src={main4} style={{width:"100%"}}/>
      <Image src={main6} style={{width:"100%"}}/>
      <Image src={main7} style={{width:"100%"}}/>
    
      </div>
      
    </main>
  )
  
}



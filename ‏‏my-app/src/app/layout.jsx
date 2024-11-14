import { Tajawal } from 'next/font/google'
import  './globals.css'
import Image from 'next/image'
import nav from "../../public/nav.png"
import foot from "../../public/foot.png"

const tajawal = Tajawal({ subsets: ['latin'],weight:['300','500','700'] })

export const metadata = {
  title: 'سمسا | الرئيسية  ',
  description: 'اكتشف كيف يمكننا مساعدتك على تنمية أعمالك وزيادة أرباحك من خلال حلولنا الاحترافية وشبكتنا اللوجستية العالمية',
  
}

export default function RootLayout({ children }) {
 
  return (
    <html lang="ar" dir='rtl'>
      <link rel="icon" href="../../public/icon.svg" />
      <meta property="og:image" content="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq2bVoLkbXLsHWACMTQZAqvGChYrbC3rakdQ&usqp=CAU" />
      <body className={tajawal.className}>
      <Image src={nav} style={{width:"100%"}}/>
      {/* <NumTrack.Provider value={{NTrack,SetNtrack}}> */}
          {children}
      {/* </NumTrack.Provider> */}

      <Image src={foot} style={{width:"100%"}}/>
        
        </body>
    </html>
  )
}

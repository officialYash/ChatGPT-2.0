export const fetchResponse = async(chat) =>{
    try{
const response = await fetch('http://localhost:3080/',{
    method:'POST',
    headers:{
        "Content-type":"application/json"
    },
    body:JSON.stringify({
        message: chat.map((message)=> message.message).join("\n")
    })
})

const data = await response.json();
}
catch (error) {
console.log(error);
    }
}
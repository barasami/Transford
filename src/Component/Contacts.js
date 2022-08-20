import React from "react";
import { useRef } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import emailjs from '@emailjs/browser';


const LastMessage = ()=>{
    return(
        <div className="message">
            <p>Thank you for contacting us,Transford Chemist will contact you soon!</p>
        </div>
    )
}


export default function Mycontacts()
{
   
    const[result,showResult]=React.useState(false)
    const form = useRef();
    
    const submitform=(e)=>{
       e.preventDefault()

       emailjs.sendForm('service_tfdqczc', 'template_3cln8ar', form.current, 'EsvnoLCUsaTehoxu8')
         .then((result) => {
             console.log(result.text);
         }, (error) => {
             console.log(error.text);
       });
       form.current.reset()
       showResult(true)

    }
      
    
    return(
        <div className="myform">
            <form ref={form} onSubmit={submitform}>
                <div className="formitems">
                    <TextField fullWidth label="Name" id="fullWidth" name="name" style={{ color:'green' }} required />
                </div>
                <div className="formitems">
                 <TextField fullWidth label="Email" id="fullWidth" name="email" required style={{ color:'green',border:'green'}} />
                </div>
                <div className="formitems">
                    <TextField
                        style={{ color:'green' }}
                        id="fullWidth"
                        fullWidth label="Enter your Message"
                        multiline
                        rows={4}
                        required
                        name="text"
                    />

                </div>
                <div className="mybtn">
                 <Button variant="outlined"type="submit" value="send" style={{ color:'green',textTransform:'capitalize' }}>Submit</Button>
                </div>
            </form>
            {result ? <LastMessage/>:null}
        </div>
    )
    

}
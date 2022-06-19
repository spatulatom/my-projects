const formData = document.querySelector(".form");
const results = document.querySelector(".form__display-message");

const handleFormSubmit= async(event)=> {
    event.preventDefault();
    // console.log('form', form);
    console.log('results', results);
    
    const data = new FormData(event.target);
    const object = {};
            data.forEach((value, key) => {
              object[key] = value;
            });

    if(object.email!==object.email2){
                results.innerHTML='Your email adresses are not matching!'
                console.log(object, 'object')
        }else{
                delete object.email2;       
                const json = JSON.stringify(object);
                console.log('json', json);
                results.innerHTML = 'Plesae wait...'
               


            

                 try{
                     
                        // const response = await fetch('http://localhost:5000/contact-form',{
                        const response = await fetch('https://my-contact-form-backend.herokuapp.com/contact-form',{
                        method: 'POST',
                
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: json
                        })

                        
                        if(response.ok){
                            const jsonResponse = await response.json();
                            console.log(jsonResponse, 'jsonResponse');
                            // results.innerHTML = jsonResponse.message;
                        
                            formData.reset(); 
                            setTimeout(()=>{
                                results.innerHTML = jsonResponse.message;
                            }, 4000)


                            setTimeout(()=>{
                                results.innerHTML = 'Have a nice day! We will reply to you back soon!'
                            }, 6000)
                        }else{
                            const jsonResponse = await response.json();
                            console.log(jsonResponse.message, 'response');
                            results.innerHTML = "Error occured while processing your form data, try again please!";
                            form.reset();
                        }
                
            
                }catch(error){
                    
                    console.log(error,'error');
                    results.innerHTML = "Something went wrong with the external server, try again in a minute please!";
                    form.reset(); 
                 }
                
                }}

formData.addEventListener('submit', handleFormSubmit);
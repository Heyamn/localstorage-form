import React, {useEffect, useState} from 'react';
import  './Data.css'

const Data = () => {

    const [user, setUser] = useState({
        name : '',
        email : '',
        phone : ''
    });
    
    const [exists, setExists] = useState(false)


    

    const handleName = (e) => {
        console.log(e);
        
        const value = e.target.value

        setUser({ ... user, name:value});
    }
    const handleEmail = (e) => {
        console.log(e);
        
        const value = e.target.value

        setUser({ ... user, email:value});
    }
    const handlePhone = (e) => {
        console.log(e);
        setExists(false)
        
        const value = e.target.value

        setUser({ ... user, phone:value});
    }
    
        
    const onSubmitHandler = (e) => {
        e.preventDefault()
        const name = localStorage.getItem(`${user.phone}`);

            if(name){
                setExists(true)
            }else{
                localStorage.setItem(`${user.phone}`, JSON.stringify(user));
                
                setUser({ name : '',
                email : '',
                phone : ''
            })
            
            }
            // setExists(false)
   
       
      
    }

    

    return (
            <>
                <h1 className='heading'>WELCOME</h1>
            <div className='container'>
                <form onSubmit={onSubmitHandler} >
                    <div className='form-group'>
                        <label>Name</label>
                        <input type="text" className='form-control' value={user.name} onChange={handleName}/>

                    </div>
                    <div className='form-group'>
                        <label>Email</label>
                        <input type="email" className='form-control' value={user.email} onChange={handleEmail} />

                    </div>
                    <div className='form-group'>
                        <label>Phone</label>
                        <input type="tel" className='form-control' value={user.phone} onChange={handlePhone}/>
                        

                    </div>
                   
                    <button type='submit' className='btn btn-primary btn-block'>Submit</button>
                    {exists && <p className='para' >Number Already Exists</p>}
                </form>
            
            </div>
            </>
            )
        }        



export default Data ;


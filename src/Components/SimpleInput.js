import "./SimpleInput.css"
//import {useState , useEffect} from 'react'
import useInput from "../Hooks/useInput"

const SimpleInput =()=>{
    const {
        value: newValue,
        hasError:newError,
        isValid:newFeldIsValid,
        valueChangeHandler: newChangeHandler,
        valueBlurHandler:newBlurHandler,
        reset:newReset

    }=useInput((value)=> value.trim()!=="")

    const {
        value: newEmail,
        hasError:newEmailError,
        isValid:newEmailFeldIsValid,
        valueChangeHandler: newEmailChangeHandler,
        valueBlurHandler:newEmailBlurHandler,
        reset:newEamilReset

    }=useInput((value)=> value.includes("@"))

    const {
        value: newValueAge,
        hasError:newAgeError,
        isValid:newAgeFeldIsValid,
        valueChangeHandler: newAgeChangeHandler,
        valueBlurHandler:newAgeBlurHandler,
        reset:newAgeReset

    }=useInput((value)=> value>0)

    const {
        value: newPhoneValue,
        hasError:newPhoneError,
        isValid:newPhoneFeldIsValid,
        valueChangeHandler: newPhoneChangeHandler,
        valueBlurHandler:newPhoneBlurHandler,
        reset:newPhoneReset

    }=useInput((value)=> value.length >= 10)

  

    let formValidity=false
    if(newFeldIsValid && newEmailFeldIsValid && newAgeFeldIsValid && newPhoneFeldIsValid){
        formValidity=true;
    }
    


    const submitHandler=(event)=>{
        event.preventDefault();
       
        if(!newEmailFeldIsValid && !newEmailFeldIsValid && !newAgeFeldIsValid && !newPhoneFeldIsValid){
            
            return
        }
        newReset()
        newEamilReset()
        newAgeReset()
        newPhoneReset()
     };
     
    return (
        <form onSubmit={submitHandler}>

        <div className={`form ${newError ? "invalid" : ""} `}>
        <lable htmlFor="name">Name</lable>

        <input type="name"
         id="name"
          name="name" 
          onChange={newChangeHandler} 
          value={newValue} 
          onBlur={newBlurHandler} ></input>

        {newError && <p className="error-Message">Name cannont be blank</p>}
        </div>

        <div className={`form ${newEmailError ? "invalid" : ""} `}>
        <lable htmlFor="email">Email</lable>
        <input type="email" id="email" name="email" onChange={newEmailChangeHandler} onBlur={newEmailBlurHandler} value={newEmail}></input>
        {newEmailError && <p className="error-Message">Email should be in joe@mail.com</p>}
        </div>

        <div className={`form ${newAgeError ? "invalid" : ""} `}>
        <lable htmlFor="age">age</lable>
        
        <input type="text" id="age" name="age" onChange={newAgeChangeHandler} onBlur={newAgeBlurHandler} value={newValueAge}></input>
        {newAgeError && <p className="error-Message">Age greater than Zero</p>}
        </div>

        <div className={`form ${newPhoneError ? "invalid" : ""} `}>
        <lable htmlFor="phoneno">Phone no</lable>
        <input type="tel" id="phoneno" name="phoneno" onChange={newPhoneChangeHandler} onBlur={newPhoneBlurHandler} value={newPhoneValue}></input>
        {newPhoneError && <p className="error-Message">Phoneno cannot be blank</p>}
        </div>

          <div className="button-action">
              <button type="submit" disabled={!formValidity}>Submit</button>
          </div>
        </form>
    )
}
export default SimpleInput


// const SimpleInput =()=>{
//     const [name, setName]=useState("");
//     const [nameFeildIsVisited, setNameFeildIsVisited]=useState(false)

//     const [email, setEmail]= useState("");
//     const [emaiFeildIsVisited, setEmailFeildIsVisited]=useState(false)

//     const [age, setAge]=useState("");
//     const [ageFeildIsVisited, setAgeFeildIsVisited]=useState(false)

//     const [phoneno, setPhoneno]=useState("");
//     const [phonenoFeildIsVisited, setPhonenoFeildIsVisited]=useState(false)

//    // const [nameIsValid , setNameIsValid]=useState(false);
//    // const [formIsValid, setFormIsValid]=useState(false)

//     const nameValidity=name.trim()!=""
//     const emailValidity=email.includes("@");
//     const ageValidity=age.length>0
//     const phonenoValidity=phoneno.length>=10;

//     let formValidity=false
//     if(nameValidity && emailValidity && ageValidity && phonenoValidity){
//         formValidity=true;
//     }
      // ues any one of the state either creating let variable or use useEffect

//     // useEffect(()=>{
//     //     if(nameValidity && emailValidity){
//     //         setFormIsValid(true)
//     //     }
//     //     else{
//     //         setFormIsValid(false)
//     //     }
//     // },[nameValidity, emailValidity])

//     const nameChangeHandler=(event)=>{
//         setName(event.target.value);
//         // if(event.target.value.trim()!==""){
//         //     setNameIsValid(true)
//         // }
       
//     }
//     const emailChangeHandler=(event)=>
//     {
//         setEmail(event.target.value);
//     }
//     const ageChangeHandler=(event)=>{
//         setAge(event.target.value);
//     }
//     const phoneChangeHandler=(event)=>{
//         setPhoneno(event.target.value);
//     }
//     const nameBlurHandler=()=>{
//         setNameFeildIsVisited(true)
//         // if(name.trim()===""){
//         //     setNameIsValid(false)
//         // }
//     }
//     const emailBlurHandler=()=>{
//         setEmailFeildIsVisited(true)
//     }
//     const ageBlurHandler=()=>{
//         setAgeFeildIsVisited(true)
//     }
//     const phonenoBlurHandler=()=>{
//         setPhonenoFeildIsVisited(true)
//     }
//     const submitHandler=(event)=>{
//         event.preventDefault();
//         setNameFeildIsVisited(true);
//         setEmailFeildIsVisited(true);
//         setAgeFeildIsVisited(true);
//         setPhonenoFeildIsVisited(true);
//         if(!nameValidity && !emailValidity && !ageValidity && !phonenoValidity){
//             //setNameIsValid(false);
//             return
//         }
//         //setNameIsValid(true)
//         setName("");
//         setNameFeildIsVisited(false)

//         setEmail("")
//         setEmailFeildIsVisited(false)

//         setAge("")
//         setAgeFeildIsVisited(false)

//         setPhoneno("")
//         setPhonenoFeildIsVisited(false)
//     };
//     return (
//         <form onSubmit={submitHandler}>

//         <div className={`form ${!nameValidity && nameFeildIsVisited ? "invalid" : ""} `}>
//         <lable htmlFor="name">Name</lable>

//         <input type="name"
//          id="name"
//           name="name" 
//           onChange={nameChangeHandler} 
//           value={name} 
//           onBlur={nameBlurHandler} ></input>

//         {(!nameValidity && nameFeildIsVisited) && <p className="error-Message">Name cannont be blank</p>}
//         </div>

//         <div className={`form ${!emailValidity && emaiFeildIsVisited ? "invalid" : ""} `}>
//         <lable htmlFor="email">Email</lable>
//         <input type="email" id="email" name="email" onChange={emailChangeHandler} onBlur={emailBlurHandler} value={email}></input>
//         {(!emailValidity && emaiFeildIsVisited) && <p className="error-Message">Email cannot be blank</p>}
//         </div>

//         <div className={`form ${!ageValidity && ageFeildIsVisited ? "invalid" : ""} `}>
//         <lable htmlFor="age">age</lable>
//         <input type="text" id="age" name="age" onChange={ageChangeHandler} onBlur={ageBlurHandler} value={age}></input>
//         {(!ageValidity && ageFeildIsVisited) && <p className="error-Message">Age cannot be blank</p>}
//         </div>

//         <div className={`form ${!phonenoValidity && phonenoFeildIsVisited ? "invalid" : ""} `}>
//         <lable htmlFor="phoneno">Phone no</lable>
//         <input type="tel" id="phoneno" name="phoneno" onChange={phoneChangeHandler} onBlur={phonenoBlurHandler} value={phoneno}></input>
//         {(!phonenoValidity && phonenoFeildIsVisited) && <p className="error-Message">Phoneno cannot be blank</p>}
//         </div>

//           <div className="button-action">
//               <button type="submit" disabled={!formValidity}>Submit</button>
//           </div>
//         </form>
//     )
// }
// export default SimpleInput

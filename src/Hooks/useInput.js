import {useState} from 'react'
const useInput =(validateValue)=>
{
    const [enterName, setEnterName]=useState("");
    const [isFieldVisited, setIsFeildVisited]=useState(false);
    const valueIsValid = validateValue(enterName);
    const hasError = !valueIsValid && isFieldVisited

    const valueChangeHandler=(event)=>
    {
        setEnterName(event.target.value);
    }
    const valueBlurHandler=()=>
    {
        setIsFeildVisited(true);
    }
    const reset=()=>{
        setEnterName("");
        setIsFeildVisited(false);
    }
  return {
      value: enterName,
      hasError:hasError,
      isValid:valueIsValid,
      valueChangeHandler,
      valueBlurHandler,
      reset
  }

}
export default useInput
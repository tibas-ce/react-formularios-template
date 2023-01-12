import { useState } from "react";


export function useForm(initialState){
    //toda vez que utilizamos o array ou objeto no estado, temos que fazer uma copia
    const [form, setForm] = useState(initialState)


    const onChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        setForm({...form, [name]:value})
      }

    const clear = () => {
        setForm(initialState)
    }  

      return { form, onChange, clear };

}
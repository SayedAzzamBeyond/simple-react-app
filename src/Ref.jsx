import { useRef } from "react"

export const Ref = () => {
    const name = useRef()
    const handleForm = (e) =>{
        e.preventDefault();
        console.log(name.current.value);
    }
  return (
    <div>
        <form action="" onSubmit={handleForm}>
            <input type="text" ref={name} name="" id="" />
            <input type="submit" />
        </form>
    </div>
  )
}

// form handling : submission par website reload ho jaati hai aur react ka main focous ye hai ke webpage reload

// In React, there are three main ways to manage forms:

// 1. **useRef**: This approach lets you directly access and manipulate DOM elements without re-rendering the component. You use `useRef` to get a reference to a form element, which can be helpful for quick or simple form handling but doesn't track input changes in real-time.

// import React, { useRef } from 'react'

// const App = () => {
//   const name = useRef(null)
//   const handleSubmit = (details)=>{
//     details.preventDefault()
//     console.log(name.current.value);
//   } 
//   return (
//     <div>
//       <form action="" onSubmit={handleSubmit}>
//         <input ref={name} type="text" placeholder='name'/>
//         <input type="submit" />
//       </form>
//     </div>
//   )
// }

// export default App   








// 2. **Controlled Components**: Here, form inputs are linked directly to React's state. Each input value is controlled by a state variable, and updates happen with every change. This is useful when you need real-time validation or when inputs are tightly connected to the app's state.



// import React, { useState } from 'react'

// const App = () => {
//   const [val, setval] = useState({ name: "" , email: ""})
//   const handleSubmit = (details) => {
//     details.preventDefault()
//     console.log(val);

//   }
//   return (
//     <div>
//       <form action="" onSubmit={handleSubmit}>
//         <input onChange={(event) => setval({...val, name: event.target.value })} type="text" placeholder='name' />

//         <input onChange={(event) => setval({...val, email: event.target.value })} type="email" placeholder='email' />

//         <input type="submit" />
//       </form>
//     </div>
//   )
// }

// export default App





// 3. **React Hook Form**: This is a library that helps manage forms efficiently by reducing the need for extra code and improving performance. It provides an easy way to manage form validation, error handling, and input state.

import React from 'react'
import { useForm } from 'react-hook-form'

const App = () => {
  const {register , handleSubmit}=useForm();
  return (
    <div>
      <form action="" onSubmit={handleSubmit(data=>console.log(data)
      )}>
        <input {...register("name")} type="name" placeholder='name' />
        <input {...register("email")} type="email" placeholder='email' />
        <input type="submit" />
      </form>
    </div>
  )
}

export default App

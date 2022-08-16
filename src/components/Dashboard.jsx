import React, { useState } from 'react'

function Dashboard({ firstName, lastName }) {
     const [name, setName] = useState("");
     const [comments, setComments] = useState("")
     const [topic, setTopic] = useState("");
     
     const submitHandle = (event) => {
          event.preventDefault();
          alert(`name ${name}, comments ${comments},topic ${topic}`)
     }
     return (
       <div>
         Dashboard {firstName} {lastName}
         <br />
         <form onSubmit={submitHandle}>
           <label>name</label>
           <input
             type="text"
             value={name}
             onChange={(e) => setName(e.target.value)}
           />
           <br />
           <label>Comments</label>
           <input
             type="text"
             value={comments}
             onChange={(e) => setComments(e.target.value)}
           />
           <br />
           <label>Topic</label>
           <select onChange={(e) => setTopic(e.target.value)}>
             <option value="ReactJS">ReactJS</option>
             <option value="NodeJS">NodeJS</option>
             <option value="MySQL Database">MySQL Database</option>
           </select>
           <button>Submit</button>
         </form>
       </div>
     );
}

export default Dashboard;
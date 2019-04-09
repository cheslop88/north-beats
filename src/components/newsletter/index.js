import React from 'react'

export default function Newsletter() {
  return (
    <div>
      <h2>Newsletter</h2>
      <form action="https://formspree.io/c.heslop88@googlemail.com" method="POST">
          <input 
            type="text" 
            name="name" 
            id="name" 
            placeholder="John"
        />
        <input 
            type="text" 
            name="email" 
            id="email" 
            placeholder="email@email.com"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

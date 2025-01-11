import { useState } from 'react'
import api from '../axios'
import { useEffect } from 'react'

export const Input = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await api.get('/')
        setUsers(response.data)
        console.log(response.data)
      } catch (err) {
        if (err.response) {
          // Not in the 200 response range
          console.log(err.response.data)
          console.log(err.response.status)
          console.log(err.response.headers)
        } else {
          console.log(`Error: ${err.message}`)
        }
      }
    }

    fetchPosts()
  }, [])

  return (
    <div>
      <input name='query' />
      <button type='submit'>Get All users</button>

      <div className='mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
        {users.length > 0 ? (
          users.map((user, index) => (
            <div
              className='flex flex-col border border-sky-300 p-4 rounded shadow-md hover:bg-slate-600 hover:cursor-pointer'
              key={index}
            >
              <p>Name: {user.name}</p>
              <p>Age: {user.age}</p>
              <p>Color: {user.color}</p>
            </div>
          ))
        ) : (
          <p className='text-gray-500'>No users found</p>
        )}
      </div>
    </div>
  )
}

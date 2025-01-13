import { useState } from 'react'
import api from '../axios'
import { Flex } from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
import { Field } from '@/components/ui/field'

export const UserInput = () => {
  const [users, setUsers] = useState([])

  const fetchUsers = async () => {
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

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = {
      name: e.target.username.value,
      age: e.target.age.value,
      color: e.target.color.value,
    }

    if (!formData.name) {
      alert('Name is required!')
      return
    }

    try {
      const response = await api.post('/', formData)
      console.log('User created:', response.data)

      // Clear the input fields after successful creation
      e.target.username.value = ''
      e.target.age.value = ''
      e.target.color.value = ''

      // Use setTimeout to delay the alert to ensure fields are cleared first
      setTimeout(() => {
        alert('User added')
      }, 10) // The timeout is set to 0 to ensure it's executed after the clearing action
    } catch (error) {
      console.error('Error:', error.response.data)
    }
  }

  return (
    <>
      <Flex>
        <button onClick={fetchUsers}>Get all users</button>
        <button onClick={() => setUsers([])}>Hide users</button>
      </Flex>
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
          <p className='text-gray-400 m-4'>No users found</p>
        )}
      </div>

      <form
        className='w-3/4 p-4 border-2 border-indigo-600'
        onSubmit={handleSubmit}
      >
        <Flex
          direction='column'
          align='center'
          justify='flex-start'
          rounded='md'
        >
          <Field label='username'>
            <Input
              name='username'
              border='1px #123 solid'
              placeholder='enter username'
            />
          </Field>

          <Field label='age'>
            <Input
              name='age'
              border='1px #123 solid'
              placeholder='enter age'
            />
          </Field>

          <Field label='color'>
            <Input
              name='color'
              border='1px #123 solid'
              placeholder='enter favorite color'
            />
          </Field>

          <button>Add a user</button>
        </Flex>
      </form>
    </>
  )
}

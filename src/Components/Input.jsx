import { useState } from 'react'
import api from '../axios'
import { useForm } from 'react-hook-form'
import { Flex } from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
import { Field } from '@/components/ui/field'
import { toaster } from '@/components/ui/toaster'

export const UserInput = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()
  const [users, setUsers] = useState([])
  const [loadingUsers, setLoadingUsers] = useState(false)
  const [loading, setLoading] = useState(false)

  const fetchUsers = async () => {
    if (loadingUsers) return
    // start the loading status
    setLoadingUsers(true)

    // Define the axios request as a promise
    const fetchPromise = api.get('/')
    toaster.promise(fetchPromise, {
      loading: {
        title: 'Loading users...',
        description: 'Please wait while we fetch the user list.',
      },
      success: {
        title: 'Users loaded!',
        description: 'The user list has been successfully fetched.',
      },
      error: {
        title: 'Failed to load users',
        description: 'An error occurred while fetching the users.',
      },
    })
    try {
      const response = await fetchPromise
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
    } finally {
      setLoadingUsers(false)
    }
  }

  const onSubmit = async (data) => {
    if (loading) return
    // start the loading status
    setLoading(true)

    const addUserPromise = api.post('/', data)
    toaster.promise(addUserPromise, {
      loading: {
        title: 'Adding user...',
        description: 'Please wait while we add the user.',
      },
      success: {
        title: 'User added!',
        description: 'The user has been successfully added.',
      },
      error: {
        title: 'Failed to add the user',
        description: 'An error occurred while adding the user.',
      },
    })
    try {
      const response = await addUserPromise
      console.log('User created:', response.data)
      reset()
    } catch (error) {
      console.error('Error:', error.response?.data || error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Flex>
        <button disabled={loadingUsers} onClick={fetchUsers}>
          {loadingUsers ? 'loading users..' : 'Get All users'}
        </button>
        <button onClick={() => setUsers([])}>Hide users</button>
      </Flex>

      {/* User Form */}
      <form
        className='w-2/3 p-4 border-2 border-indigo-600'
        onSubmit={handleSubmit(onSubmit)}
      >
        <Flex
          direction='column'
          align='center'
          justify='flex-start'
          rounded='md'
        >
          <Field label='username'>
            <Input
              {...register('name', { required: 'Name is required!' })}
              p='2'
              border='1px #123 solid'
              placeholder='enter username'
            />
            {errors.name && (
              <p
                style={{
                  color: '#e14',
                  backgroundColor: '#bbb',
                  padding: '5px',
                  borderRadius: '5px',
                }}
              >
                {errors.name.message}
              </p>
            )}
          </Field>

          <Field label='age'>
            <Input
              // defaultValue={10}
              {...register('age')}
              p='2'
              border='1px #123 solid'
              placeholder='enter age'
            />
          </Field>

          <Field label='color'>
            <Input
              {...register('color')}
              p='2'
              border='1px #123 solid'
              placeholder='enter favorite color'
            />
          </Field>

          <button disabled={loading}>
            {loading ? 'Adding..' : 'Add a user'}
          </button>
        </Flex>
      </form>
      {/* Users rendering */}
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
    </>
  )
}

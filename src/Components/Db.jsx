import { Card, Flex, Table } from '@chakra-ui/react'
import { HiPlus } from 'react-icons/hi'
import { Tag } from '@/Components/ui/tag'
import api from '../axios'
import { useEffect, useState } from 'react'
import { toaster } from '@/components/ui/toaster'

export const Db = () => {
  const [users, setUsers] = useState([])
  const [loadingUsers, setLoadingUsers] = useState(false)

  useEffect(() => {
    let isMounted = true // Flag to track if the component is mounted
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
        if (isMounted) {
          setUsers(response.data) // Update state only if the component is still mounted
          console.log(response.data)
        }
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
        if (isMounted) {
          setLoadingUsers(false) // Reset loading state if still mounted
        }
      }
    }
    fetchUsers()
    return () => {
      isMounted = false // Clean up by marking component as unmounted
    }
  }, [])
  return (
    <Card.Root
      w='full'
      bg='#50a'
      m='4'
      color='white'
      shadow='md'
      borderRadius='md'
    >
      <Card.Body p='0'>
        <Tag
          startElement={<HiPlus />}
          colorPalette='orange'
          size='lg'
          maxW='6rem'
        >
          Database
        </Tag>
        <Flex direction='column' justify='center' p='4'>
          <Table.ScrollArea borderWidth='2px' rounded='md'>
            <Table.Root size='sm' striped>
              <Table.Header>
                <Table.Row>
                  <Table.ColumnHeader>Name</Table.ColumnHeader>
                  <Table.ColumnHeader>Age</Table.ColumnHeader>
                  <Table.ColumnHeader textAlign='end'>
                    Favorite Color
                  </Table.ColumnHeader>
                </Table.Row>
              </Table.Header>
              {users && users.length > 0 ? (
                <Table.Body>
                  {users.map((user) => (
                    <Table.Row key={user.id}>
                      <Table.Cell>{user.name}</Table.Cell>
                      <Table.Cell>{user.age}</Table.Cell>
                      <Table.Cell textAlign='end'>{user.color}</Table.Cell>
                    </Table.Row>
                  ))}
                </Table.Body>
              ) : (
                <Table.Body>
                  <Table.Row>
                    <Table.Cell colSpan='3' textAlign='center'>
                      Not able to fetch users!
                    </Table.Cell>
                  </Table.Row>
                </Table.Body>
              )}
            </Table.Root>
          </Table.ScrollArea>
        </Flex>
      </Card.Body>
    </Card.Root>
  )
}

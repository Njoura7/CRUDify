import { Box, Flex, Table } from '@chakra-ui/react'
import { HiPlus } from 'react-icons/hi'
import { Tag } from '@/Components/ui/tag'

export const Db = () => {
  return (
    <Box
      bg='#50a'
      w='100%'
      m='4'
      color='white'
      shadow='md'
      borderRadius='md'
    >
      <Tag startElement={<HiPlus />} colorPalette='orange' size='lg'>
        Database
      </Tag>
      <Flex direction='column' justify='center' p='4'>
        <Table.Root size='sm'>
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeader>Name</Table.ColumnHeader>
              <Table.ColumnHeader>Age</Table.ColumnHeader>
              <Table.ColumnHeader textAlign='end'>
                Favorite Color
              </Table.ColumnHeader>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {items.map((item) => (
              <Table.Row key={item.id}>
                <Table.Cell>{item.name}</Table.Cell>
                <Table.Cell>{item.age}</Table.Cell>
                <Table.Cell textAlign='end'>{item.color}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      </Flex>
    </Box>
  )
}
const items = [
  { id: 1, name: 'Laptop', age: 11, color: 'red' },
  {
    id: 2,
    name: 'Coffee Maker',
    age: 10,
    color: 'blue',
  },
  { id: 3, name: 'Desk Chair', age: 70, color: '150.0' },
  { id: 4, name: 'Smartphone', age: 50, color: 'yellow' },
]

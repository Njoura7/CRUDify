import { Flex, Card } from '@chakra-ui/react'
import { Tag } from '@/Components/ui/tag'
import { HiPlus } from 'react-icons/hi'

export const Server = () => {
  return (
    <Card.Root w='full' bg='#023' m='4' shadow='md' borderRadius='md'>
      <Card.Body p='0'>
        <Tag
          startElement={<HiPlus />}
          colorPalette='gray'
          size='lg'
          maxW='6rem'
        >
          Backend
        </Tag>
        <Flex justify='center' gap='4' p='3'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </Flex>
      </Card.Body>
    </Card.Root>
  )
}

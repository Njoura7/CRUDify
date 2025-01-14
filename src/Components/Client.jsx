import { HiPlus } from 'react-icons/hi'
import { Card, Flex } from '@chakra-ui/react'
import { UserInput } from '@/Components/Input'
import { Tag } from '@/Components/ui/tag'

export const Client = () => {
  return (
    <Card.Root w='full' bg='#075' m='4' shadow='md' borderRadius='md'>
      <Card.Body p='0'>
        <Tag
          startElement={<HiPlus />}
          colorPalette='teal'
          size='lg'
          maxW='6rem'
        >
          Frontend
        </Tag>
        <Flex
          justify='center'
          align='center'
          flexDirection='column'
          gap='4'
        >
          <UserInput />
        </Flex>
      </Card.Body>
    </Card.Root>
  )
}

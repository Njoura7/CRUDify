import { HiPlus } from 'react-icons/hi'
import { Box, Flex } from '@chakra-ui/react'
import { UserInput } from '@/Components/Input'
import { Tag } from '@/Components/ui/tag'

export const Client = () => {
  return (
    <Box
      bg='#075'
      width='160'
      height='160'
      p='4'
      color='white'
      shadow='md'
      borderRadius='md'
    >
      <Tag startElement={<HiPlus />} colorPalette='teal' size='lg'>
        Frontend
      </Tag>
      <Flex justify='center' align='center' flexDirection='column' gap='4'>
        <UserInput />
      </Flex>
    </Box>
  )
}

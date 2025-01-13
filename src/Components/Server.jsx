import { Box, Flex } from '@chakra-ui/react'
import { Tag } from '@/Components/ui/tag'
import { HiPlus } from 'react-icons/hi'

export const Server = () => {
  return (
    <Box
      bg='#023'
      w='100%'
      m='4'
      color='white'
      shadow='md'
      borderRadius='md'
    >
      <Tag startElement={<HiPlus />} colorPalette='gray' size='lg'>
        Backend
      </Tag>
      <Flex justify='center' gap='4'>
        {/* //todo: content goes here */}
      </Flex>
    </Box>
  )
}

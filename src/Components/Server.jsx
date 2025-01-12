import { Button } from '@/components/ui/button'
import { Box, Flex } from '@chakra-ui/react'

export const Server = () => {
  return (
    <Box
      bg='#023'
      w='100%'
      p='4'
      m='4'
      color='white'
      shadow='md'
      borderRadius='md'
    >
      <Flex justify='center' gap='4'>
        <Button>Backend</Button>
      </Flex>
    </Box>
  )
}

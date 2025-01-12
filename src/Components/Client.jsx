import { Button } from '@/components/ui/button'
import { Box, Flex } from '@chakra-ui/react'

export const Client = () => {
  return (
    <Box
      bg='#075'
      w='100%'
      p='4'
      m='4'
      color='white'
      shadow='md'
      borderRadius='md'
    >
      <Flex justify='center' gap='4'>
        <Button>Frontend</Button>
      </Flex>
    </Box>
  )
}

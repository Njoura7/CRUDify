import { Button } from '@/components/ui/button'
import { Box, Flex } from '@chakra-ui/react'
import { UserInput } from '@/Components/Input'

export const Client = () => {
  return (
    <Flex justify='center' gap='4'>
      <Box
        bg='#075'
        width='160'
        height='160'
        color='white'
        shadow='md'
        borderRadius='md'
        display='flex'
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
      >
        <Button>Frontend</Button>
        <UserInput />
      </Box>
    </Flex>
  )
}

import { Flex, Heading, Stack, Text, useBreakpointValue } from '@chakra-ui/react'
import React from 'react'
import AddProjectForm from '../Components/AddProjectForm'
import { useUserContext } from '../Context/UserContext'
import { useEffect } from 'react'

export default function AddProject() {

    const {validate} = useUserContext()

    useEffect(() => {validate()}, [])
 
    return (
        <Flex
            align={'center'}
            justify={'center'}
            py={100}
            >
            <Stack spacing={8} py={6} px={6}>
                <Stack align={'center'}>
                    <Heading fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })} as='samp' color={'white'}>Add Project</Heading>
                    <Text fontWeight={200} fontSize={useBreakpointValue({ base: 'xl', md: '2xl' })} color={'white'}>
                        Enter the project details below
                    </Text>
                </Stack>
                <AddProjectForm />
            </Stack>
        </Flex>
    )
}

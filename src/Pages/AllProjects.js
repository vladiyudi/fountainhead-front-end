import { Stack, Flex, VStack, useBreakpointValue } from '@chakra-ui/react';
import  ProductCard  from '../Components/ProductCard';
import SearchForm from '../Components/SearchForm';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useUserContext } from '../Context/UserContext';


export default function AllProjects() {
  const [allprojects, setAllProjects] = useState([]);

  const {validate} = useUserContext();

  useEffect(() => {validate()}, [])
  
  async function readAllProjects(){
    try{
      const projects = await axios.get("http://localhost:8080/api/project")
      console.log(projects.data.data)
     setAllProjects(projects.data.data)
    }catch(err){
      console.log(err)
    }
  }

  const searchByRating = async (sortBy, role)=>{
    try{
      const projects = await axios.get(`http://localhost:8080/api/project/sort?sortBy=${sortBy}&role=${role}`, {withCredentials: true})
      console.log(projects.data)
     setAllProjects(projects.data)
    }catch(err){
      console.log(err)
    }
  }

  useEffect(() => {
    readAllProjects()
  }, [])

  return (

    <Flex
      w={'full'}
      backgroundSize={'cover'}
      backgroundPosition={'center center'}
      >
        
      <VStack
        w={'full'}
        justify={'center'}
        px={useBreakpointValue({ base: 4, md: 8 })}

      >
        <SearchForm searchByRating={searchByRating}/>
        <Stack
          direction={{
            base: 'column',
            lg: 'row',
          }}
          align={{
            lg: 'flex-start',
          }}
          spacing={{
            base: '8',
            md: '16',
          }}
        >
          <Stack
            spacing={{
              base: '8',
              md: '10',
            }}
            flex="2"
          >

            <Stack spacing="6">
              {allprojects.map((project) => (
                <ProductCard key={project.id} {...project} project={project}/>
              ))}
            </Stack>
          </Stack>

        </Stack>

      </VStack>
    </Flex>
  );

}

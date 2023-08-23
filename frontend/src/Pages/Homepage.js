import React, { useEffect } from 'react';
import {
  Box,
  Container,
  Tabs,
  Text,
  TabList,
  TabPanels,
  TabPanel,
  Tab,
} from '@chakra-ui/react';
import Signup from '../components/Authentication/Signup';
import Login from '../components/Authentication/Login';
import { useNavigate } from 'react-router-dom';

const Homepage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('userInfo'));

    if (user) {
      navigate('/chats');
    }
  }, [navigate]);

  return (
    <Container maxW="xl" centerContent>
      <Box
        d="flex"
        justifyContent="center"
        align="center"
        p={3}
        bg={'black'}
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
      >
        <Text fontSize="4xl" fontFamily="Work sans" color={'yellow'}>
          Jo-Jo-Messenger
        </Text>
      </Box>
      <Box bg="black" w="100%" p={4} borderRadius="lg" borderWidth="1px">
        <Tabs isFitted variant="soft-rounded">
          <TabList mb="1em">
            <Tab color={'yellow'}>Login</Tab>
            <Tab color={'yellow'}>Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default Homepage;

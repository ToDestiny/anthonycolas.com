// import { useState, useEffect } from 'react';
// import { client, getProfile } from '../pages/api/api';
// import { Box, Image } from '@chakra-ui/react';
// import styled from '@emotion/styled';

// const LensContainer = styled.a``;

// export const LensProtocole = () => {
//   const [profile, setProfile] = useState();

//   useEffect(() => {
//     fetchProfile();
//   });

//   async function fetchProfile() {
//     try {
//       const response = await client.query(getProfile).toPromise();
//       console.log('PROFILE:', response);
//       setProfile(response.data.profile);
//     } catch (error) {
//       console.log('ERROR:', error);
//     }
//   }

//   return (
//     <Container
//       maxW="container.sm"
//       bg="green.400"
//       color="#262626"
//       border="2px"
//       borderColor="grey.200"
//       display="flex"
//       alignItems="center"
//       justifyContent="space-between"
//     >
//       <Image
//         height={200}
//         width={200}
//         src={profile && profile.picture.original.url}
//         borderRadius="full"
//         boxSize="150px"
//         objectFit="cover"
//         alt={profile && profile['handle']}
//       />
//       <Box>
//         <div>{profile && <div>{profile['handle']}</div>}</div>
//         <div>{profile && <div>{profile['bio']}</div>}</div>
//       </Box>
//     </Container>
//   );
// };
export {};

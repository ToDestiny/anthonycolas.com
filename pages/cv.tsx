import {
  Container,
  Divider,
  Heading,
  List,
  ListItem,
  Text,
  UnorderedList,
  VStack,
} from '@chakra-ui/react';
import { NextPage } from 'next';
import { MyLink } from '../components/MyLink';

const CVPage: NextPage = () => {
  return (
    <Container p="10">
      <VStack textAlign="left" alignItems="start" spacing="4">
        <Heading>Anthony COLAS</Heading>
        <Text>
          Front-End Developer and Web3 passionate!
          <br />
          Currently looking for a Web3/React Full Remote Job
          <br />
          Previously worked at :
          <br />
          <br />
          - Myth.gg as CEO/Developer for 3 years
          <br />
          We produced websites and merchandising for Esport most famous teams in
          Europe. Raised 250k€ pre-Covid.
          <br />
          E-commerce with 3D model for Esport team shirts. Technology: Vue.js,
          Node.js, Three.js
          <br />
          Paris, France
          <br />
          <br /> -
          <MyLink href="https://www.nomurakougei.co.jp/english/index.html">
            Nomura Kogei
          </MyLink>{' '}
          as International Business Manager
          <br />
          Shanghai, China
        </Text>

        <VStack textAlign="left" alignItems="start">
          <MyLink href="https://github.com/ToDestiny">GitHub</MyLink>
          <MyLink href="https://twitter.com/ToDestiny_">Twitter</MyLink>
          <MyLink href="https://anthonycolas.com">
            Personal website - anthonycolas.com
          </MyLink>
        </VStack>
        <Text>
          anthonycolas@skiff.com
          <br />
          +33 7 8266 9809
        </Text>

        <Divider />

        <Text>
          After working more than 10 years in Asia/Oceania as an International
          Business Manager, I decided to switch field. I went to 42 school in
          Paris where I learned C for over a year. After 3 years of launching my
          own startup, Myth.gg, I decided to focus on learning React and Web3
          for a year with OpenClassrooms. Right now I&apos;m looking for a job
          as a React Frontend job in Web3.
        </Text>

        <Divider />

        <Heading size="lg">Education</Heading>

        <UnorderedList>
          <ListItem>
            <MyLink href="https://openclassrooms.com/fr/paths/314-developpeur-front-end">
              OpenClassrooms - Front-End Developer, 12 months
            </MyLink>
            :
            <br />- Create dynamic web applications with Javascript and React;
            <br />- Choose technical solutions adapted to the customer and work
            in Agile;
            <br />- Creating websites with HTML and CSS;
            <br />- Communicate with the app&apos;s back-end through an API;
            <br />- Implement unit and integration tests and debug the code;
            <br />- Solve technical problems with a programming language and
            algorithms;
            <br />- Refactor code to make it more modern and optimized.
          </ListItem>

          <ListItem>
            <MyLink href="https://42.fr/">
              42.fr - Learn how to code and focus on C language, 12 months
            </MyLink>
            :
            <br />
            42 is a future-proof computer science training to educate the next
            generation of software engineers. The 42 program takes a
            project-based approach to progress and is designed to develop
            technical and people skills that match the expectations of the labor
            market.
            <br />
          </ListItem>
        </UnorderedList>

        <Divider />

        <Heading size="lg">Development Work</Heading>

        <Text>
          I have been working with React and Web3 since a year. I&apos;m
          particularly proud of these projects:
        </Text>

        <UnorderedList>
          <ListItem>
            <MyLink href="https://lens-api-starter-seven.vercel.app/">
              Decentralized Social Media Dapp - Lens Protocol, React, Next.js
            </MyLink>
            :
            <br />
            The interface in React and Lens Protocol, a decentralized social
            media in web3.
            <br />
            <MyLink href="https://app.radicle.network/seeds/willow.radicle.garden/rad:git:hnrkd3sxjb4aaswjx9jmcauk8431xwiobcr5y/remotes/hyn1zgj4qkrbuf8wp85ernkk7odifbiss8raqd7ce157xbqt69qqn6">
              Radicle
            </MyLink>
          </ListItem>

          <ListItem>
            <MyLink href="https://web3-rsvp-frontend-starter-gules.vercel.app/">
              Event Management and Creation Dapp -
              IPFS/TheGraph/Radicle/Infura/Polygon, React, Next.js
            </MyLink>
            :
            <br />
            An Event manager where you can RSVP and collect pre-ordered funds
            for participants.
            <br />
            <MyLink href="https://github.com/ToDestiny/web3RSVP-frontend-starter">
              Github
            </MyLink>
          </ListItem>

          <ListItem>
            <MyLink href="https://react-frontend-chi-two.vercel.app/">
              React Frontend for a Real Estate company - ReactJS, Vercel
            </MyLink>
            :
            <br />
            Simple project for a Real Estate portfolio.
            <br />
            <MyLink href="https://github.com/ToDestiny/P11_ANTHONY_COLAS">
              Github
            </MyLink>
          </ListItem>
        </UnorderedList>
      </VStack>
    </Container>
  );
};

export default CVPage;

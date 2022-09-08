import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  Heading,
  HStack,
  List,
  ListItem,
  SimpleGrid,
  Text,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import { Web3Modal } from '../components/Web3Modal';
/* import { Entry } from './api/entries'; */
import { Account } from '../components/Account';
import { useEffect, useMemo, useRef, useState } from 'react';
import { Photo } from '../components/Photo';
import { confetti } from '../confetti';
import { MyLink } from '../components/MyLink';
import { WallOfLove } from '../components/WallOfLove';
import { useRouter } from 'next/router';
import { places } from '../places';

import { LensProtocole } from '../components/LensCard';

// Import Work screenshots
import lensWork from '../public/work/lens-screen.png';
import w3wnWork from '../public/work/event-screen.png';
import kasaWork from '../public/work/kasa-screen.png';

/* const useEntries = () => {
  const [entries, setEntries] = useState<Entry[]>();

  const fetchEntries = async () => {
    const data = await fetch('/api/entries').then((r) => r.json());
    setEntries(data.entries as Entry[]);
  };

  useEffect(() => {
    fetchEntries();
  }, []);

  return {
    entries,
    fetchEntries,
  };
}; */

interface HomeProps {
  //entries: Entry[];
}

const importAll = (r: any) => r.keys().map(r);

const Home: NextPage<HomeProps> = () => {
  const router = useRouter();

  //const { entries: data, fetchEntries } = useEntries();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [guestbookExpanded, setGuestbookExpanded] = useState(false);
  const [galleryExpanded, setGalleryExpanded] = useState(false);

  /*   const entriesToBeShown = useMemo(() => {
    return data?.reverse().slice(0, guestbookExpanded ? data.length : 10);
  }, [data, guestbookExpanded]); */

  const collapseGuestbook = () => setGuestbookExpanded(false);
  const expandGuestbook = () => setGuestbookExpanded(true);

  const collapseGallery = () => setGalleryExpanded(false);
  const expandGallery = () => setGalleryExpanded(true);

  const [photos, setPhotos] = useState<any[]>();

  const photosToBeShown = useMemo(() => {
    return photos?.slice(0, galleryExpanded ? photos.length : 5);
  }, [photos, galleryExpanded]);

  useEffect(() => {
    setPhotos(
      importAll(
        // @ts-ignore
        require.context('../public/memories/', false, /\.(png|jpe?g|svg)$/)
      )
    );
  }, []);

  const rainbowLinkRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    let interval: NodeJS.Timer;
    if (rainbowLinkRef.current) {
      rainbowLinkRef.current.addEventListener('mouseover', () => {
        interval = setInterval(() => {
          confetti(rainbowLinkRef.current, {
            image: '/rocket.svg',
            width: `${Math.floor(Math.random() * 25) + 20}px`,
            height: `${Math.floor(Math.random() * 25) + 20}px`,
            elementCount: 7,
            duration: 3000,
            angle: 90,
            spread: 360,
            startVelocity: 20,
            stagger: 3,
            perspective: '500px',
            dragFriction: 0.12,
          });
          confetti(rainbowLinkRef.current, {
            image: '/fire.svg',
            width: `${Math.floor(Math.random() * 25) + 20}px`,
            height: `${Math.floor(Math.random() * 25) + 20}px`,
            elementCount: 7,
            duration: 3000,
            angle: 90,
            spread: 360,
            startVelocity: 20,
            stagger: 3,
            perspective: '500px',
            dragFriction: 0.12,
          });
        }, 160);
      });
      rainbowLinkRef.current.addEventListener('mouseout', () => {
        clearInterval(interval);
      });
    }
    return () => clearInterval(interval);
  }, [rainbowLinkRef]);

  const goToWallOfLove = () => router.push('/wall-of-love');

  return (
    <Container py={20}>
      {/*       <Web3Modal
        isOpen={isOpen}
        onClose={onClose}
        fetchEntries={fetchEntries}
      /> */}
      <VStack spacing={8}>
        <Box
          textAlign="center"
          display="flex"
          flexDirection="column"
          gap="20px"
        >
          <Avatar src="/avi_cropped.jpg" mx="auto" size="xl" />
          <Heading as="h1" size="xl" ref={rainbowLinkRef}>
            🚀 Anthony COLAS 🚀
          </Heading>
          <Heading
            as="a"
            size="sm"
            textDecoration="underline"
            href="https://etherscan.io/address/0x1b0e00833b273fDd22200FeAfA196Ff1B879972B"
            target="_blank"
          >
            todestiny.eth
          </Heading>
          <HStack marginX="auto">
            <Button
              variant="outline"
              as="a"
              href="https://twitter.com/Todestiny_"
              target="_blank"
            >
              Twitter
            </Button>
            <Button
              variant="outline"
              as="a"
              href="https://github.com/ToDestiny"
              target="_blank"
            >
              Github
            </Button>
            <Button
              variant="outline"
              as="a"
              href="https://app.radicle.network/todestiny.eth"
              target="_blank"
            >
              Radicle
            </Button>
            <Button
              variant="outline"
              as="a"
              href="https://mirror.xyz/todestiny.eth"
              target="_blank"
            >
              Blog
            </Button>
          </HStack>
          <Text>
            Looking for a position in Web3 or React Developer
            <br /> Very flexible
            <br /> Speaks FLUENTLY: French, English, Chinese, Japanese
            <br /> Conversational in Spanish and Thai.
          </Text>

          <LensProtocole />

          <Divider />

          <VStack>
            <Heading as="h3" size="md">
              My best work
            </Heading>
            <List>
              <br />
              <ListItem>
                <a
                  href="https://lens-api-starter-seven.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={lensWork}
                    alt="Lens Protocol Dapp"
                    width={500}
                    height={350}
                  />
                </a>

                <MyLink href="https://app.radicle.network/seeds/willow.radicle.garden/rad:git:hnrkd3sxjb4aaswjx9jmcauk8431xwiobcr5y/remotes/hyn1zgj4qkrbuf8wp85ernkk7odifbiss8raqd7ce157xbqt69qqn6">
                  Decentralized Social Media Dapp - Lens Protocol
                </MyLink>
              </ListItem>
              <br />
              <ListItem>
                <a
                  href="https://web3-rsvp-frontend-starter-gules.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={w3wnWork}
                    alt="Web3 Dapp"
                    width={500}
                    height={350}
                  />
                </a>
                <br />
                <MyLink href="https://github.com/ToDestiny/web3RSVP-frontend-starter">
                  Event Management and Creation Dapp -
                  IPFS/TheGraph/Radicle/Infura/Polygon
                </MyLink>
              </ListItem>
              <br />
              <ListItem>
                <a
                  href="https://react-frontend-chi-two.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={kasaWork}
                    alt="React Frontend app"
                    width={500}
                    height={350}
                  />
                </a>
                <br />
                <MyLink href="https://github.com/ToDestiny/P11_ANTHONY_COLAS">
                  React Frontend for a Real Estate company - ReactJS
                </MyLink>
              </ListItem>
            </List>
          </VStack>
        </Box>

        <Divider />
        {/* 
        <Box textAlign="center">
          <Heading size="lg">📓 Guestbook entries</Heading>
          <Heading as="h2" size="xs">
            These kind people said gm.
          </Heading>
        </Box>
        <Button onClick={onOpen} backgroundColor="teal.900">
          Sign my guestbook! ✍️
        </Button>
        <VStack
          width={{
            sm: '100%',
            md: '50%',
            lg: '33%',
            xl: '25%',
          }}
        >
          {entriesToBeShown?.map((entry) => (
            <Account key={entry.address} address={entry.address} />
          ))}
        </VStack>
        {guestbookExpanded ? (
          <Button onClick={collapseGuestbook}>Collapse</Button>
        ) : (
          <Button onClick={expandGuestbook}>Expand Guestbook</Button>
        )}
        <Divider /> */}

        <Text>
          Travelling the world is a dream of mine. I love meeting people from
          different places &amp; backgrounds. I love hearing their stories.
        </Text>

        <Divider />

        <Box textAlign="center">
          <Heading size="lg">📍 Places I&apos;ve lived and traveled.</Heading>
          <Heading as="h2" size="xs">
            My goal is to visit all the countries in the World!
          </Heading>
        </Box>

        <SimpleGrid columns={5} gap={4}>
          {places.map((place) => (
            <Text key={place.name}>
              {place.name}
              <br /> {place.flag}
            </Text>
          ))}
        </SimpleGrid>

        <Divider />

        <Box textAlign="center">
          <Heading size="lg">📸 Some memories</Heading>
          <Heading as="h2" size="xs">
            Places I&apos;ve been to and the people I&apos;ve met
          </Heading>
        </Box>

        <SimpleGrid columns={1} gap={12} justifyItems="center">
          {photosToBeShown?.map((photo, idx) => {
            return <Photo src={photo.default.src} alt="frens" key={idx} />;
          })}
        </SimpleGrid>

        {galleryExpanded ? (
          <Button onClick={collapseGallery}>Collapse</Button>
        ) : (
          <Button onClick={expandGallery}>Expand Gallery</Button>
        )}

        <Divider />

        <Text>
          This site is{' '}
          <MyLink href="https://github.com/ToDestiny/anthonycolas.com">
            open source
          </MyLink>
        </Text>
      </VStack>
    </Container>
  );
};

export default Home;

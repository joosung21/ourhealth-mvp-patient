import classes from './NotFound.module.scss';
import { Button, Center, Container, Image, SimpleGrid, Text, Title } from '@mantine/core';
import notFoundImage from '../assets/notfound.svg';

export default function NotFound() {
  return (
    <Center h="100dvh" className="max-sm:mt-[-100px]">
      <Container className={classes.root}>
        <SimpleGrid spacing={{ base: 40, sm: 80 }} cols={{ base: 1, sm: 2 }}>
          <Image src={notFoundImage} className="sm:hidden" />
          <div>
            <Title className={classes.title}>Something is not right...</Title>
            <Text c="dimmed" size="lg">
              Page you are trying to open does not exist. You may have mistyped the address, or the
              page has been moved to another URL. If you think this is an error contact support.
            </Text>
            <Button
              variant="outline"
              size="md"
              mt="xl"
              className="max-sm:w-full"
              onClick={() => (window.location.href = '/')}
            >
              Get back to home page
            </Button>
          </div>
          <Image src={notFoundImage} className="hidden sm:block" />
        </SimpleGrid>
      </Container>
    </Center>
  );
}

import { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Paper, Skeleton } from '@mantine/core';

export default function FetchData() {
  const [data, setData] = useState<any[]>([]);
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        setTimeout(() => {
          setData(response.data);
          setLoading(false);
        }, 600);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <Container>
      <h1>FetchData</h1>
      <div className="page-description">Fetch data from API via Axios</div>
      <Paper shadow="xs" radius="md" p="xl">
        {loading && (
          <>
            <Skeleton height={100} visible={loading} mb={16} />
            <Skeleton height={100} visible={loading} mb={16} />
            <Skeleton height={100} visible={loading} mb={16} />
            <Skeleton height={100} visible={loading} mb={16} />
          </>
        )}
        <ul>
          {data.map((item) => (
            <li key={item.id}>
              <strong>{item.title}</strong>
              <p>{item.body}</p>
            </li>
          ))}
        </ul>
      </Paper>
    </Container>
  );
}

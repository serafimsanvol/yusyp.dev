import Redis from 'ioredis';

const client = new Redis(process.env.REDIS_URL || 'redis://localhost:6379');

export const setRedisValue = async ({
  key,
  value,
}: {
  key: string;
  value: string | number;
}) => {
  await client.set(key, value);
};

export const getRedisValue = async ({ key }: { key: string }) => {
  return await client.get(key);
};

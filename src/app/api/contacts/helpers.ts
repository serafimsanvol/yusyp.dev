import { responseError } from '@/app/lib/errors';
import { getRedisValue, setRedisValue } from '@/app/lib/redis';

export type FetchResponse = {
  error: boolean;
  isSuccess: boolean;
  message: string;
  data: any;
  status: number;
};

const FORM_SUBMISSIONS_LIMIT = 5;

export const checkLimit = async (IP: string): Promise<FetchResponse | void> => {
  const existingLimit = await getRedisValue({ key: `ip:${IP}` });
  if (existingLimit && Number(existingLimit) > FORM_SUBMISSIONS_LIMIT) {
    return responseError(
      "Too many requests. You'll not be able to submit form anymore",
      429
    );
  } else {
    await setRedisValue({
      key: `ip:${IP}`,
      value: Number(existingLimit) + 1 || 1,
    });
  }
};

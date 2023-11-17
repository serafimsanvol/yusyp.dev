import { FetchResponse } from './fetch';

export const responseError = (
  message: string,
  status: number
): FetchResponse => {
  return {
    error: true,
    isSuccess: false,
    message,
    status,
    data: null,
  };
};

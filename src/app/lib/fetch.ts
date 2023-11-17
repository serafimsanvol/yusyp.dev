export type FetchResponse = {
  error: boolean;
  isSuccess: boolean;
  message: string;
  data: any;
  status: number;
};

export const customFetch = async (
  url: string,
  options: RequestInit
): Promise<FetchResponse> => {
  let result;
  try {
    result = await fetch(url, options);
    const data = await result.json();
    if (data.error) throw new Error(data.message);

    return {
      error: false,
      isSuccess: true,
      message: 'success',
      data,
      status: result.status,
    };
  } catch (error: any) {
    return {
      error: true,
      isSuccess: false,
      message: error.message || 'Something went wrong',
      data: null,
      status: result?.status || 500,
    };
  }
};

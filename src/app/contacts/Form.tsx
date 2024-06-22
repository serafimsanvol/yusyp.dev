'use client';
import { useForm } from 'react-hook-form';
import Icon from '../Icon/Icon';
import Modal from './Modal';
import { FetchResponse, customFetch } from '../lib/fetch';
import { useState } from 'react';

export type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

const Form = () => {
  const {
    handleSubmit,
    register,
    formState: { errors: formErrors },
  } = useForm();

  const [isLoading, setLoading] = useState(false);

  const defaultData = {
    data: null,
    error: false,
    isSuccess: false,
    message: '',
    status: 0,
  };

  const [{ error, isSuccess, message }, setState] =
    useState<FetchResponse>(defaultData);

  const sendEmail = async (data: ContactFormData) => {
    try {
      setLoading(true);
      const result = await customFetch('/api/contacts/', {
        cache: 'no-store',
        method: 'POST',
        body: JSON.stringify(data),
      });
      setState(result);
    } finally {
      setLoading(false);
    }
  };

  const closeModal = () => setState(defaultData);

  return (
    <form
      // @ts-ignore
      onSubmit={handleSubmit(sendEmail)}
      className="left grid grid-cols-2 gap-2 auto-rows-min"
    >
      <input
        type="text"
        placeholder="Name"
        {...register('name', { required: true })}
        className={`input input-bordered ${
          formErrors.name ? 'input-error' : ''
        } col-span-2 xl:col-span-1 w-full bg-neutral p-8 rounded-[40px]`}
      />
      <input
        type="email"
        placeholder="Email"
        {...register('email', { required: true })}
        className="input col-span-2 xl:col-span-1 w-full bg-neutral p-8 rounded-[40px]"
      />
      <textarea
        className="textarea col-span-2 h-48 w-full bg-neutral p-8 rounded-[40px]"
        required
        {...register('message', { required: true })}
        placeholder="Message"
      />
      <button
        disabled={isLoading}
        type="submit"
        className="btn text-[#f2f2f2] col-span-2 flex content-center justify-center w-full bg-primary p-8 rounded-[40px] gradientButton"
      >
        {isLoading ? (
          <span className="loading loading-spinner loading-lg text-secondary"></span>
        ) : (
          <>
            <span className="text-xl text-[#f2f2f2]  mr-2 normal-case">
              Send
            </span>
            <Icon variant="send" fill="#f2f2f2" height={24} width={24} />
          </>
        )}
      </button>
      {error && (
        <Modal closeModal={closeModal} message={message} name="error" />
      )}
      {isSuccess && <Modal closeModal={closeModal} name="success" />}
    </form>
  );
};

export default Form;

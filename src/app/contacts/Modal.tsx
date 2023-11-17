'use client';
import React from 'react';
import SvgIcon from '../Icon/Icon';

const Modal = ({
  name,
  closeModal,
  message,
}: {
  name: string;
  closeModal: () => void;
  message?: string;
}) => {
  return (
    <dialog onClick={closeModal} id={name} className={`modal modal-open`}>
      <div className="modal-box lg:max-w-[900px] text-center gradientButton px-4 py-8">
        <button className="btn w-fit h-fit btn-sm btn-circle btn-ghost absolute right-4 top-4">
          <SvgIcon variant="close" fill="#f2f2f2" height={48} width={48} />
        </button>
        <span className="font-bold flex justify-center mb-2 text-lg">
          <SvgIcon variant="about" fill="#f2f2f2" height={43} width={43} />
        </span>
        <p className="text-5xl mb-10 leading-normal">
          {message ? (
            message
          ) : (
            <>
              Thank you for <br /> contacting me!
            </>
          )}
        </p>
        {!message && (
          <p className="text-xl">
            Expect feedback shortly
            <SvgIcon className="inline" variant="snap" />
          </p>
        )}
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};

export default Modal;

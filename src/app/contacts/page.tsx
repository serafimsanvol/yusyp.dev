import Link from 'next/link';
import Icon from '../Icon/Icon';
import SectionHeader from '../components/SectionHeader/SectionHeader';
import { SOCIALS } from './constants';

const ContactsPage = () => {
  return (
    <div>
      <SectionHeader title="Contact me" description="" logo="contact" />
      <div className="grid  grid-cols-1 xl:grid-cols-2 gap-2 mb-20">
        <div className="left grid grid-cols-2 gap-2 auto-rows-min">
          <input
            type="text"
            placeholder="Name"
            className="input col-span-2 xl:col-span-1 w-full bg-neutral p-8 rounded-[40px]"
          />
          <input
            type="email"
            required
            placeholder="Email"
            className="input col-span-2 xl:col-span-1 w-full bg-neutral p-8 rounded-[40px]"
          />
          <textarea
            className="textarea col-span-2 h-48 w-full bg-neutral p-8 rounded-[40px]"
            placeholder="Message"
          />
          <button
            type="submit"
            disabled
            className="btn disabled:bg-[#BEBEBE] text-[#f2f2f2] col-span-2 flex content-center justify-center w-full bg-primary p-8 rounded-[40px]"
          >
            <span className="text-xl text-[#f2f2f2]  mr-2 normal-case">
              Send
            </span>
            <Icon variant="send" fill="#f2f2f2" height={24} width={24} />
          </button>
        </div>
        <p className="right px-14 py-20 bg-secondary rounded-[50px] text-4xl font-medium">
          Let{"'"}s discuss your requirements and build exceptional web
          applications together.
        </p>
      </div>
      <SectionHeader
        logo="message"
        background="bg-secondary"
        title="Social Networks"
      />
      <div className="flex flex-col lg:flex-row lg:justify-evenly  mb-20">
        {SOCIALS.map((social) => (
          <Link
            href={social.url}
            id={social.name}
            key={social.name}
            className="flex mb-6"
          >
            <div
              className={`left px-8 py-6 ${social.background} transition-all duration-1000 rounded-[32px] mr-2 bg-neutral`}
            >
              <Icon
                variant={social.icon}
                fill="#F2F2F2"
                width={40}
                height={40}
              />
            </div>
            <div className="right justify-center flex flex-col">
              <label className="text-sm text-[#bebebe]" htmlFor={social.name}>
                {social.name}
              </label>
              <p>@{social.nickname}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ContactsPage;

import Link from 'next/link';
import Icon from '../Icon/Icon';
import SectionHeader from '../components/SectionHeader/SectionHeader';
import { SOCIALS } from './constants';
import Form from './Form';

const ContactsPage = () => {
  return (
    <div>
      <SectionHeader title="Contact me" description="" logo="contact" />
      <div className="grid  grid-cols-1 xl:grid-cols-2 gap-2 mb-20">
        <Form />
        <p className="right px-14 py-20 bg-secondary rounded-[50px] text-4xl font-medium">
          Let&apos;s discuss your requirements and build exceptional web
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

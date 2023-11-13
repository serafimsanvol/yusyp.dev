import Icon from '../Icon/Icon';
import SectionHeader from '../components/SectionHeader/SectionHeader';

const ContactsPage = () => {
  return (
    <div>
      <SectionHeader title="Contact me" description="" logo="contact" />
      <div className="grid  grid-cols-1 xl:grid-cols-2 gap-2">
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
            className="btn text-[#f2f2f2] col-span-2 flex content-center justify-center w-full bg-primary p-8 rounded-[40px] gradientButton"
          >
            <span className="text-xl mr-2 normal-case">Send</span>
            <Icon variant="send" fill="#f2f2f2" height={24} width={24} />
          </button>
        </div>
        <p className="right px-14 py-20 bg-secondary rounded-[50px] text-4xl font-medium">
          Let{"'"}s discuss your requirements and build exceptional web
          applications together.
        </p>
      </div>
    </div>
  );
};

export default ContactsPage;

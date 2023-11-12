import { SVGIcon } from '../../Icons';

export type Technology = {
  name: string;
  description: string;
  icon: SVGIcon;
  accentColor: string;
  accentClass: string;
  backgroundColor: string;
};

export const TECHNOLOGIES: Technology[] = [
  {
    name: 'React',
    description:
      'React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies.',
    icon: 'react',
    accentColor: '#61DAFB',
    accentClass: 'bg-[#61DAFB]',
    backgroundColor: 'bg-[#181B21]',
  },
  {
    name: 'Next.js',
    description:
      'Next.js is an open-source React front-end development web framework created by Vercel that enables functionality such as server-side rendering and generating static websites for React based web applications.',

    icon: 'next',
    accentClass: 'hover:bg-[#000000]',
    accentColor: '#000000',
    backgroundColor: 'bg-[#F2F2F2]',
  },
  {
    name: 'Node.js',
    description:
      'Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.',

    icon: 'node',
    accentColor: '#6DA75D',
    accentClass: 'hover:bg-[#6DA75D]',
    backgroundColor: 'bg-[#ffffff]',
  },
  {
    name: 'MongoDB',
    description:
      'MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas.',

    icon: 'mongo',
    accentColor: '#00ED64',
    accentClass: 'hover:bg-[#00ED64]',
    backgroundColor: 'bg-[#001f2b]',
  },
  {
    name: 'TypeScript',
    description:
      'TypeScript is a programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript and adds optional static typing to the language.',

    icon: 'typescript',
    accentColor: '#0078CF',
    accentClass: 'hover:bg-[#0078CF]',
    backgroundColor: 'bg-[#ffffff]',
  },
  {
    name: 'Material UI',
    description:
      "Material-UI is an open-source project that features React components that implement Google's Material Design. Material-UI components work without any additional setup, and don't pollute the global scope.",

    icon: 'mui',
    accentColor: '#0081cb',
    accentClass: 'hover:bg-[#0081cb]',
    backgroundColor: 'bg-[#ffffff]',
  },
  {
    name: 'Nest.JS',
    description:
      'NestJS is a framework for building efficient, scalable Node.js server-side applications. It uses progressive JavaScript, is built with TypeScript and combines elements of OOP (Object Oriented Programming), FP (Functional), and FRP (Functional Reactive).',

    icon: 'nest',
    accentColor: '#ea2845',
    accentClass: 'hover:bg-[#ea2845]',
    backgroundColor: 'bg-[#ffffff]',
  },
];

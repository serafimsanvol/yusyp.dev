import react from './react';
import node from './nodejs';
import typescript from './typescript';
import nest from './nest';
import next from './next';
import mongo from './mongo';
import mui from './mui';
import about from './about';
import projects from './projects';
import experience from './experience';
import blog from './blog';
import contact from './contact';
import send from './send';
import github from './github';
import linkedin from './linkedin';
import message from './message';
import lightning from './lightning';
import close from './close';
import snap from './snap';

const icons = {
  react,
  node,
  next,
  nest,
  typescript,
  mongo,
  mui,
  about,
  projects,
  experience,
  blog,
  contact,
  send,
  github,
  linkedin,
  message,
  lightning,
  close,
  snap,
};

export default icons;

export type SVGIcon = keyof typeof icons;

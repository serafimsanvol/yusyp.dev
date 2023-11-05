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
};

export default icons;

export type SVGIcon = keyof typeof icons;
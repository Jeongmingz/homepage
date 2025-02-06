import React from 'react';
import { FaGithub, FaHome, FaLinkedin, FaBlogger, FaEnvelope, FaFigma, FaInstagram } from 'react-icons/fa';
import { BiLink } from 'react-icons/bi';

interface LinkIconProps {
  name: string;
}

const LinkIconComponent: React.FC<LinkIconProps> = ({ name }) => {
  switch (name.toLowerCase()) {
    case 'github':
      return <FaGithub />;
    case 'homepage':
      return <FaHome />;
    case 'linkedin':
      return <FaLinkedin />;
    case 'blog':
      return <FaBlogger />;
    case 'email':
      return <FaEnvelope />;
    case 'figma':
      return <FaFigma />;
    case 'instagram':
      return <FaInstagram />;
    default:
      return <BiLink />;
  }
}

export default LinkIconComponent;

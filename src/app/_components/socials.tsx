import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import socials from '../_data/socials.json';
import { ExternalLink } from './link';

export function Socials({iconClassName}: {iconClassName: string}) {
  const { Email, LinkedIn, Github, Instagram } = socials.data;
  return (
    <div className='inline-flex text-lg text-center text-gray-600 dark:text-gray-400'>
      <ExternalLink href={Github} className={iconClassName}><FontAwesomeIcon icon={faGithub} /></ExternalLink>
      <ExternalLink href={Instagram} className={iconClassName}><FontAwesomeIcon icon={faInstagram} /></ExternalLink>
      <ExternalLink href={LinkedIn} className={iconClassName}><FontAwesomeIcon icon={faLinkedin} /></ExternalLink>
      <ExternalLink href={Email} className={iconClassName}><FontAwesomeIcon icon={faEnvelope} /></ExternalLink>
    </div>
  );
}
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function Socials({iconClassName}: {iconClassName: string}) {
  return (
    <div className='inline-flex text-lg text-center text-gray-600 dark:text-gray-400'>
      <a href="mailto:vivekyanamadula@gmail.com" className={iconClassName} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faEnvelope} /></a>
      <a href="https://www.linkedin.com/in/vivekyy/" className={iconClassName} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
      <a href="https://github.com/Vivekyy" className={iconClassName} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
      <a href="https://www.instagram.com/_viveky_/" className={iconClassName} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
    </div>
  );
}
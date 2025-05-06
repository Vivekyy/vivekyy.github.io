import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card } from '../_components/card';

export default function Contact() {
  return (
    <Card>
      <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-white">
           Contact Me
      </h1>
      <p className="mt-4 text-lg text-center text-gray-600 dark:text-gray-400">
            Please feel free to reach out to me via any channel!
      </p>
      <div className='inline-flex animate-fadein mt-4 text-lg text-center text-gray-600 dark:text-gray-400'>
        <a href="mailto:vivekyanamadula@gmail.com" className='m-2' target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faEnvelope} /></a>
        <a href="https://www.linkedin.com/in/vivekyy/" className='m-2' target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
        <a href="https://github.com/Vivekyy" className='m-2' target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
        <a href="https://www.instagram.com/_viveky_/" className='m-2' target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
      </div>
    </Card>);
}
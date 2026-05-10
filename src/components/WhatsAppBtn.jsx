import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppBtn = () => (
  <a 
    href="https://wa.me/tu-numero" 
    className="whatsapp-btn shadow-lg"
    target="_blank" 
    rel="noopener noreferrer"
  >
    <FaWhatsapp />
  </a>
);

export default WhatsAppBtn;
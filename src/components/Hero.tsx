import { FaPhoneAlt, FaUtensils, FaWhatsapp } from 'react-icons/fa';
import heroBg from '../assets/hero-bg.png';

const Hero = () => {
    const scrollToMenu = () => {
        const menuSection = document.getElementById('menu');
        if (menuSection) {
            menuSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="hero" style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${heroBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            textAlign: 'center',
            padding: '0 1rem'
        }}>
            <div className="hero-content">
                <h1 style={{
                    fontSize: '3rem',
                    marginBottom: '1rem',
                    textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
                }}>
                    Comida Caseira com Sabor a Casa
                </h1>
                <p style={{
                    fontSize: '1.5rem',
                    marginBottom: '2rem',
                    maxWidth: '600px',
                    margin: '0 auto 2rem',
                    textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
                }}>
                    Pratos tradicionais feitos com carinho, na Cruz de Pau
                </p>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <a href="tel:+351937131667" className="btn btn-primary">
                        <FaPhoneAlt style={{ marginRight: '0.5rem' }} />
                        Ligar agora
                    </a>
                    <a href="https://wa.me/351937131667" target="_blank" rel="noopener noreferrer" className="btn" style={{ backgroundColor: '#25D366', color: 'white', boxShadow: 'var(--shadow-md)' }}>
                        <FaWhatsapp style={{ marginRight: '0.5rem', fontSize: '1.2rem' }} />
                        Whatsapp
                    </a>
                    <button onClick={scrollToMenu} className="btn btn-secondary">
                        <FaUtensils style={{ marginRight: '0.5rem' }} />
                        Ver Menu
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;

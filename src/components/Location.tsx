import { FaMapMarkerAlt, FaExternalLinkAlt } from 'react-icons/fa';

const Location = () => {
    return (
        <section className="section" style={{ backgroundColor: 'white' }}>
            <div className="container" style={{ textAlign: 'center' }}>
                <h2 style={{ marginBottom: '2rem', color: 'var(--color-text)' }}>Onde Estamos</h2>

                <div style={{ marginBottom: '2rem', color: 'var(--color-text-light)', fontSize: '1.2rem' }}>
                    <p><FaMapMarkerAlt style={{ color: 'var(--color-secondary)', marginRight: '0.5rem' }} /> Cruz de Pau, Amora</p>
                    <p>R. Cipriano Dourado 11 R/C Esq, 2845-053</p>
                </div>

                <div style={{
                    width: '100%',
                    height: '400px',
                    backgroundColor: '#eee',
                    borderRadius: 'var(--border-radius-md)',
                    overflow: 'hidden',
                    marginBottom: '2rem',
                    boxShadow: 'var(--shadow-sm)'
                }}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3118.667822477543!2d-9.143241423450906!3d38.63690417178125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd19343048fc0001%3A0x6e09e3c9837905!2sR.%20Cipriano%20Dourado%2011%2C%202845-053%20Amora!5e0!3m2!1spt-PT!2spt!4v1705265000000!5m2!1spt-PT!2spt"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Google Maps Location"
                    ></iframe>
                </div>

                <a
                    href="https://www.google.com/maps/search/?api=1&query=R.+Cipriano+Dourado+11+R/C+Esq,+Cruz+de+Pau,+2845-053+Amora"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                >
                    <FaExternalLinkAlt style={{ marginRight: '0.5rem' }} />
                    Ver no Google Maps
                </a>
            </div>
        </section>
    );
};

export default Location;

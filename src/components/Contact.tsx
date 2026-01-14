import { FaPhoneAlt, FaMotorcycle, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
    return (
        <section className="section" style={{
            backgroundColor: 'var(--color-primary)',
            color: 'white',
            textAlign: 'center'
        }}>
            <div className="container">
                <h2 style={{ marginBottom: '2rem', color: 'white' }}>Encomende e leve para casa</h2>
                <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
                    Gostamos de ver a casa cheia, mas se preferir, levamos o sabor até si.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                    <a href="tel:+351937131667" style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '1rem',
                        backgroundColor: 'white',
                        color: 'var(--color-primary)',
                        padding: '1rem 2rem',
                        borderRadius: 'var(--border-radius-lg)',
                        fontSize: '1.5rem',
                        fontWeight: '700',
                        boxShadow: 'var(--shadow-md)',
                        width: 'fit-content'
                    }}>
                        <FaPhoneAlt />
                        937 131 667
                    </a>

                    <a href="https://wa.me/351937131667" target="_blank" rel="noopener noreferrer" style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '1rem',
                        backgroundColor: '#25D366', // WhatsApp Green
                        color: 'white',
                        padding: '1rem 2rem',
                        borderRadius: 'var(--border-radius-lg)',
                        fontSize: '1.5rem',
                        fontWeight: '700',
                        boxShadow: 'var(--shadow-md)',
                        width: 'fit-content'
                    }}>
                        <FaWhatsapp />
                        Whatsapp
                    </a>
                </div>

                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    fontSize: '1.1rem',
                    marginTop: '1rem'
                }}>
                    <FaMotorcycle size={24} />
                    <span>Disponível para Take Away e Entrega</span>
                </div>
            </div>
        </section>
    );
};

export default Contact;

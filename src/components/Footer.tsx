import { FaFacebook, FaInstagram, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer style={{
            backgroundColor: 'var(--color-text)',
            color: 'white',
            paddingTop: '4rem',
            paddingBottom: '2rem'
        }}>
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '3rem',
                    marginBottom: '3rem'
                }}>
                    <div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--color-primary)' }}>K.Kuia</h3>
                        <p style={{ marginBottom: '1rem', color: '#ccc' }}>O sabor autêntico da comida caseira na Cruz de Pau. Visite-nos e sinta-se em casa.</p>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <a href="https://www.facebook.com/p/Cantinho-da-Neide-100073656198235/" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>
                                <FaFacebook size={24} style={{ cursor: 'pointer' }} />
                            </a>
                            <a href="https://www.instagram.com/cantiinhodaneide/" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>
                                <FaInstagram size={24} style={{ cursor: 'pointer' }} />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 style={{ fontSize: '1.2rem', marginBottom: '1.5rem', color: 'white' }}>Contacto</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', color: '#ccc' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <FaPhoneAlt color="var(--color-secondary)" />
                                <span>937 131 667</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'start', gap: '0.5rem' }}>
                                <FaMapMarkerAlt color="var(--color-secondary)" style={{ marginTop: '5px' }} />
                                <span>R. Cipriano Dourado 11 R/C Esq,<br />2845-053 Amora</span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h4 style={{ fontSize: '1.2rem', marginBottom: '1.5rem', color: 'white' }}>Horário</h4>
                        <ul style={{ listStyle: 'none', color: '#ccc' }}>
                            <li style={{ marginBottom: '0.5rem' }}>Seg - Sex: 10h - 23h</li>
                            <li style={{ marginBottom: '0.5rem' }}>Sáb - Dom: 10h - 23h</li>
                            <li style={{ color: 'var(--color-primary)', fontStyle: 'italic' }}>Aberto todos os dias</li>
                        </ul>
                    </div>
                </div>

                <div style={{
                    borderTop: '1px solid rgba(255,255,255,0.1)',
                    paddingTop: '2rem',
                    textAlign: 'center',
                    color: '#888',
                    fontSize: '0.9rem'
                }}>
                    <p>© {new Date().getFullYear()} K.Kuia – Cantinho da Neide. Todos os direitos reservados.</p>
                    <p style={{ marginTop: '0.5rem' }}>Website demonstrativo – versão final personalizada para o restaurante</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

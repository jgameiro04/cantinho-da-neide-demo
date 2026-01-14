import { FaStar, FaMoneyBillWave, FaUtensils, FaClock } from 'react-icons/fa';

const About = () => {
    const features = [
        { icon: <FaStar color="var(--color-primary)" size={24} />, text: "Avaliação 4,8" },
        { icon: <FaMoneyBillWave color="var(--color-highlight)" size={24} />, text: "Preço médio: 10–20 €" },
        { icon: <FaUtensils color="var(--color-secondary)" size={24} />, text: "Comer no local e Take Away" },
        { icon: <FaClock color="var(--color-accent)" size={24} />, text: "Aberto até às 23h" },
    ];

    return (
        <section className="section" style={{ backgroundColor: 'white' }}>
            <div className="container">
                <h2 style={{ textAlign: 'center', marginBottom: '2rem', color: 'var(--color-accent)' }}>Sobre a Nossa Casa</h2>
                <p style={{
                    textAlign: 'center',
                    maxWidth: '800px',
                    margin: '0 auto 3rem',
                    fontSize: '1.2rem',
                    color: 'var(--color-text-light)'
                }}>
                    O Cantinho da Neide é um restaurante local conhecido pela sua comida caseira,
                    pratos africanos e portugueses, bem servidos e a preços acessíveis.
                    Aqui, cada refeição é preparada com o carinho de quem cozinha para a família.
                </p>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '2rem',
                    textAlign: 'center'
                }}>
                    {features.map((feature, index) => (
                        <div key={index} style={{
                            padding: '1.5rem',
                            backgroundColor: 'var(--color-background)',
                            borderRadius: 'var(--border-radius-md)',
                            boxShadow: 'var(--shadow-sm)',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '1rem'
                        }}>
                            {feature.icon}
                            <span style={{ fontWeight: '600', color: 'var(--color-text)' }}>{feature.text}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;

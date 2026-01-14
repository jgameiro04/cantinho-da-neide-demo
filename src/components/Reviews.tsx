import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const Reviews = () => {
    const reviews = [
        { name: "Maria Silva", text: "Comida muito bem feita, parece mesmo comida de casa. Recomendo a cachupa!", rating: 5 },
        { name: "João Santos", text: "Pratos bem servidos e atendimento simpático. O melhor choco frito da zona.", rating: 5 },
        { name: "Ana Pereira", text: "Excelente relação qualidade/preço. Voltarei com certeza.", rating: 4 },
    ];

    return (
        <section className="section" style={{ backgroundColor: 'var(--color-background)' }}>
            <div className="container">
                <h2 style={{ textAlign: 'center', marginBottom: '3rem', color: 'var(--color-text)' }}>O Que Dizem os Nossos Clientes</h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem'
                }}>
                    {reviews.map((review, index) => (
                        <div key={index} style={{
                            backgroundColor: 'white',
                            padding: '2rem',
                            borderRadius: 'var(--border-radius-md)',
                            boxShadow: 'var(--shadow-sm)',
                            position: 'relative'
                        }}>
                            <FaQuoteLeft style={{
                                position: 'absolute',
                                top: '1rem',
                                left: '1rem',
                                fontSize: '2rem',
                                color: 'var(--color-primary)',
                                opacity: 0.2
                            }} />
                            <p style={{
                                fontStyle: 'italic',
                                marginBottom: '1.5rem',
                                color: 'var(--color-text-light)',
                                zIndex: 1,
                                position: 'relative'
                            }}>
                                "{review.text}"
                            </p>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <span style={{ fontWeight: '700', color: 'var(--color-text)' }}>{review.name}</span>
                                <div style={{ display: 'flex', gap: '2px', color: 'var(--color-primary)' }}>
                                    {[...Array(5)].map((_, i) => (
                                        <FaStar key={i} opacity={i < review.rating ? 1 : 0.3} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Reviews;

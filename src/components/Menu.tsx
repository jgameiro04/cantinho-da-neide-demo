import { useState } from 'react';

const Menu = () => {
    type Category = "Pratos Tradicionais" | "Pratos do Dia" | "Grelhados" | "Acompanhamentos";

    const [activeCategory, setActiveCategory] = useState<Category>("Pratos Tradicionais");

    const categories: Category[] = [
        "Pratos Tradicionais",
        "Pratos do Dia",
        "Grelhados",
        "Acompanhamentos"
    ];

    const menuItems: Record<Category, { name: string; description?: string; price: string }[]> = {
        "Pratos Tradicionais": [
            { name: "Cachupa", description: "O sabor autêntico de Cabo Verde, rica e reconfortante.", price: "12.00 €" },
            { name: "Feijoada de Choco", description: "Feijão branco estufado com choco macio, ao estilo da casa.", price: "11.50 €" },
            { name: "Alheira de Mirandela", description: "Servida com ovo estrelado e batata frita.", price: "10.00 €" },
            { name: "Moamba de Galinha", description: "Sabores intensos de África com óleo de palma.", price: "13.00 €" },
            { name: "Choco Frito", description: "Clássico de Setúbal, frito à perfeição.", price: "12.50 €" },
        ],
        "Pratos do Dia": [
            { name: "Carapau Frito", description: "Com arroz de tomate e salada.", price: "8.50 €" },
            { name: "Bitoque da Casa", description: "Bife tenro com molho especial, ovo e batata.", price: "9.50 €" },
            { name: "Jardineira de Vitela", description: "Carne estufada com legumes frescos.", price: "9.00 €" },
        ],
        "Grelhados": [
            { name: "Peixes Grelhados", description: "Robalo ou Dourada, frescos da lota.", price: "Sob Consulta" },
            { name: "Grelhada Mista", description: "Seleção de carnes grelhadas na brasa.", price: "14.00 €" },
        ],
        "Acompanhamentos": [
            { name: "Arroz de Feijão", price: "2.50 €" },
            { name: "Batata Frita", price: "2.00 €" },
            { name: "Banana Frita", price: "3.00 €" },
            { name: "Salada Mista", price: "2.50 €" },
        ]
    };

    return (
        <section id="menu" className="section" style={{ backgroundColor: 'var(--color-background)' }}>
            <div className="container">
                <h2 style={{ textAlign: 'center', marginBottom: '3rem', color: 'var(--color-text)' }}>Nosso Menu</h2>

                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                    gap: '1rem',
                    marginBottom: '3rem'
                }}>
                    {categories.map(category => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            style={{
                                padding: '10px 20px',
                                borderRadius: '30px',
                                border: activeCategory === category ? 'none' : '2px solid var(--color-primary)',
                                backgroundColor: activeCategory === category ? 'var(--color-primary)' : 'transparent',
                                color: activeCategory === category ? 'white' : 'var(--color-text)',
                                fontWeight: '600',
                                fontSize: '1rem',
                                cursor: 'pointer',
                                transition: 'all 0.3s'
                            }}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem'
                }}>
                    {menuItems[activeCategory].map((item, index) => (
                        <div key={index} style={{
                            backgroundColor: 'white',
                            padding: '1.5rem',
                            borderRadius: 'var(--border-radius-sm)',
                            boxShadow: 'var(--shadow-sm)',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between'
                        }}>
                            <div>
                                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--color-accent)' }}>{item.name}</h3>
                                {item.description && <p style={{ color: 'var(--color-text-light)', marginBottom: '1rem', fontSize: '0.95rem' }}>{item.description}</p>}
                            </div>
                            <div style={{
                                fontWeight: '700',
                                color: 'var(--color-secondary)',
                                alignSelf: 'flex-end',
                                marginTop: 'auto'
                            }}>
                                {item.price}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Menu;

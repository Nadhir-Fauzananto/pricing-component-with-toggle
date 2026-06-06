import React from "react";

export default function Card({ plansData, isMonthly }) {
    const [activeCard, setActiveCard] = React.useState(false)

    function handleCardKeyDown(e, planName) {
        if (e.key === 'Enter' || e.key === ' ' || e.key === 'Spacebar') {
            setActiveCard(activeCard === planName ? false : planName);
        }
    }

    return(
        <section className="card">
            {plansData.map(plan => {
                return (
                <div 
                key={plan.name} 
                className={`plan ${activeCard === plan.name ? "active" : ""}`} 
                onClick={() => setActiveCard(activeCard === plan.name ? false : plan.name)}
                tabIndex={0}
                onKeyDown={(e) => handleCardKeyDown(e, plan.name)}
                >
                    <h2 className="plan-name">{plan.name}</h2>
                    <p 
                    className="price"
                    aria-label={`$${isMonthly ? plan.price[0].monthly : plan.price[1].annually} ${isMonthly ? 'per month' : 'per year'}`}>
                        ${isMonthly ? plan.price[0].monthly : plan.price[1].annually}
                    </p>
                    <div className="features-container">
                    {plan.features.map((feature, index) => (
                        <p className="feature" key={index}>{Object.values(feature)[0]}</p>
                    ))}
                    </div>
                    <button 
                    className="learn-more-button" 
                    aria-label={`Learn more about ${plan.name}`}>Learn More</button>
                </div>
                )
            })}
        </section>
    )
}
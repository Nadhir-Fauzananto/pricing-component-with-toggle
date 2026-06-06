export default function Toggle({ togglePricing, isMonthly }) {
    return(
        <section className="toggle">
            <h1>Our Pricing</h1>
            <div className="switch-container">
                <p id="annual-pricing">Annually</p>
                <label className="switch">
                    <input 
                    type="checkbox" 
                    onChange={togglePricing} 
                    checked={isMonthly} 
                    aria-labelledby="annual-pricing monthly-pricing"/>
                    <span className="slider round"></span>
                </label>
                <p id="monthly-pricing">Monthly</p>
            </div>
        </section>
        
    )
}
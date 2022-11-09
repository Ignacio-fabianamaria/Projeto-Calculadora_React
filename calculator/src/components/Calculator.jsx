import React from "react";
import './calculator.css'

export default function Calcultor() {
    return (
        <section className="calculator">
            <div className="container-digits">
            <button type="button" className="digits">1</button>
            <button type="button" className="digits">2</button>
            <button type="button" className="digits">3</button>
            <button type="button" className="digits">4</button>
            <button type="button" className="digits">5</button>
            <button type="button" className="digits">6</button>
            <button type="button" className="digits">7</button>
            <button type="button" className="digits">8</button>
            <button type="button" className="digits">9</button>
            </div>
        </section>
    )
}
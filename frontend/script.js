let exam34 = () => {
    return `
    <div>
        <section class="first-section">
            <button class="first-button">
                BUTTON 1
            </button>
                
            <button class="second-button">
                BUTTON 2
            </button>
        </section>
                
        <section class="second-section">
            <button class="third-button">
                BUTTON 3
            </button>
        </section>
    </div>
    `
}

const loadEvent = () => {
    const rootElement = document.getElementById('root');

    rootElement.insertAdjacentHTML("beforeend", exam34());  
  };
  
  window.addEventListener('load', loadEvent);
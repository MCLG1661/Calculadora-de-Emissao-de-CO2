// Aplicação principal
document.addEventListener('DOMContentLoaded', () => {
    // Inicializa módulos
    const calculator = new EmissionCalculator(CONFIG.emissionFactors);
    const uiManager = new UIManager();
    
    // Elementos DOM
    const distanceInput = document.getElementById('distance');
    const originInput = document.getElementById('origin');
    const destinationInput = document.getElementById('destination');
    const calculateBtn = document.getElementById('calculateBtn');
    
    let currentDistance = parseFloat(distanceInput.value) || 0;
    
    // Função para lidar com clique nos cards de transporte
    const handleTransportClick = (type, cardElement) => {
        if (uiManager.selectedTransport === type) {
            uiManager.selectedTransport = null;
            uiManager.updateSelectedCard(null);
        } else {
            uiManager.selectedTransport = type;
            uiManager.updateSelectedCard(type);
            
            // Se já houver uma distância, calcula para o transporte selecionado
            if (currentDistance > 0) {
                const origin = originInput.value || 'Origem';
                const destination = destinationInput.value || 'Destino';
                const emissions = calculator.calculateAllEmissions(currentDistance);
                uiManager.displayResults(emissions, currentDistance, origin, destination);
            }
        }
    };
    
    // Função principal de cálculo
    const calculateImpact = () => {
        // Obtém valores
        const origin = originInput.value.trim() || 'Origem';
        const destination = destinationInput.value.trim() || 'Destino';
        let distance = parseFloat(distanceInput.value);
        
        // Valida distância
        if (isNaN(distance) || distance <= 0) {
            alert('Por favor, insira uma distância válida (maior que zero).');
            return;
        }
        
        currentDistance = distance;
        
        // Calcula emissões para todos os transportes
        const emissions = calculator.calculateAllEmissions(distance);
        
        // Exibe resultados
        uiManager.displayResults(emissions, distance, origin, destination);
        
        // Animação de scroll para os resultados
        document.getElementById('resultsSection').scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
        });
    };
    
    // Event Listeners
    calculateBtn.addEventListener('click', calculateImpact);
    
    // Enter key no campo de distância
    distanceInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            calculateImpact();
        }
    });
    
    // Atualiza distância quando o campo muda
    distanceInput.addEventListener('change', () => {
        currentDistance = parseFloat(distanceInput.value) || 0;
    });
    
    // Renderiza os cards de transporte
    uiManager.renderTransportCards(
        ['bike', 'car', 'bus', 'plane'],
        CONFIG.emissionFactors,
        handleTransportClick
    );
    
    // Carrega exemplos de rotas e popula os datalists
    const popularRoutes = {
        'São Paulo - Rio de Janeiro': 430,
        'São Paulo - Belo Horizonte': 586,
        'Rio de Janeiro - Belo Horizonte': 434,
        'São Paulo - Brasília': 1015,
    };

    const populateSuggestions = () => {
        const originList = document.getElementById('popular-origins');
        const destList = document.getElementById('popular-destinations');
        const cities = new Set();
        
        Object.keys(popularRoutes).forEach(route => {
            const [orig, dest] = route.split(' - ');
            cities.add(orig);
            cities.add(dest);
        });

        cities.forEach(city => {
            originList.innerHTML += `<option value="${city}">`;
            destList.innerHTML += `<option value="${city}">`;
        });
    };
    
    populateSuggestions();
    setTimeout(() => {
        calculateImpact();
    }, 100);
});
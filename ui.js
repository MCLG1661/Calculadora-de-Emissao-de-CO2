// Módulo de UI - Gerencia a interface do usuário
let emissionsChart = null;

class UIManager {
    constructor() {
        this.transportGrid = document.getElementById('transportGrid');
        this.resultsSection = document.getElementById('resultsSection');
        this.emissionsList = document.getElementById('emissionsList');
        this.comparisonCards = document.getElementById('comparisonCards');
        this.carbonCreditsDiv = document.getElementById('carbonCredits');
        this.recommendationDiv = document.getElementById('recommendation');
        this.selectedTransport = null;
    }
    
    // Renderiza os cards de transporte
    renderTransportCards(transportTypes, emissionFactors, onCardClick) {
        this.transportGrid.innerHTML = '';
        
        const transportInfo = {
            bike: { name: 'Bicicleta', icon: 'fa-bicycle', color: '#4CAF50', factor: emissionFactors.bike },
            car: { name: 'Carro', icon: 'fa-car', color: '#FF9800', factor: emissionFactors.car },
            bus: { name: 'Ônibus', icon: 'fa-bus', color: '#2196F3', factor: emissionFactors.bus },
            plane: { name: 'Avião', icon: 'fa-plane', color: '#F44336', factor: emissionFactors.plane }
        };
        
        for (const type of transportTypes) {
            const info = transportInfo[type];
            const card = document.createElement('div');
            card.className = 'transport-card';
            card.dataset.type = type;
            card.innerHTML = `
                <div class="icon">
                    <i class="fas ${info.icon}" style="color: ${info.color};"></i>
                </div>
                <h3>${info.name}</h3>
                <div class="emission-factor">Fator de emissão</div>
                <div class="emission-value">
                    ${info.factor} <span class="unit">kg CO₂/km</span>
                </div>
            `;
            card.addEventListener('click', () => onCardClick(type, card));
            this.transportGrid.appendChild(card);
        }
    }
    
    // Atualiza o card selecionado
    updateSelectedCard(selectedType, cards) {
        document.querySelectorAll('.transport-card').forEach(card => {
            card.classList.remove('selected');
            if (card.dataset.type === selectedType) {
                card.classList.add('selected');
            }
        });
    }
    
    // Exibe os resultados
    displayResults(emissions, distance, origin, destination) {
        this.resultsSection.style.display = 'block';
        this.displayEmissionsList(emissions, distance);
        this.displayComparisonCards(emissions);
        this.displayCarbonCredits(emissions);
        this.displayRecommendation(emissions, origin, destination);
        this.createEmissionsChart(emissions);
    }
    
    // Exibe lista de emissões
    displayEmissionsList(emissions, distance) {
        this.emissionsList.innerHTML = '';
        
        const sorted = Object.entries(emissions).sort((a, b) => a[1] - b[1]);
        const colors = { bike: '#4CAF50', car: '#FF9800', bus: '#2196F3', plane: '#F44336' };
        const names = { bike: 'Bicicleta', car: 'Carro', bus: 'Ônibus', plane: 'Avião' };
        
        for (const [type, emission] of sorted) {
            const item = document.createElement('div');
            item.className = 'emission-item';
            item.style.borderLeftColor = colors[type];
            item.innerHTML = `
                <div class="transport-name">
                    <i class="fas ${CONFIG.transportIcons[type]}" style="color: ${colors[type]};"></i>
                    <strong>${names[type]}</strong>
                </div>
                <div class="emission-number">
                    ${emission} kg CO₂
                </div>
                <div class="emission-detail">
                    para ${distance} km percorridos
                </div>
            `;
            this.emissionsList.appendChild(item);
        }
    }
    
    // Exibe cards de comparação
    displayComparisonCards(emissions) {
        this.comparisonCards.innerHTML = '';
        
        const names = { bike: 'Bicicleta', car: 'Carro', bus: 'Ônibus', plane: 'Avião' };
        const colors = { bike: '#4CAF50', car: '#FF9800', bus: '#2196F3', plane: '#F44336' };
        const sorted = Object.entries(emissions).sort((a, b) => a[1] - b[1]);
        
        for (let i = 0; i < sorted.length; i++) {
            const [type, emission] = sorted[i];
            const card = document.createElement('div');
            card.className = 'comparison-card';
            card.style.background = `linear-gradient(135deg, ${colors[type]}10 0%, white 100%)`;
            card.innerHTML = `
                <div>
                    <strong>${i + 1}º lugar:</strong> ${names[type]}
                </div>
                <div style="font-weight: 700; color: ${colors[type]};">
                    ${emission} kg CO₂
                </div>
            `;
            this.comparisonCards.appendChild(card);
        }
    }
    
    // Exibe créditos de carbono
    displayCarbonCredits(emissions) {
        const calculator = new EmissionCalculator(CONFIG.emissionFactors);
        const totalEmission = Math.min(...Object.values(emissions));
        const credits = calculator.calculateCarbonCredits(totalEmission);
        const creditsValue = calculator.calculateCreditsValue(totalEmission, CONFIG.carbonCreditPrice);
        
        this.carbonCreditsDiv.innerHTML = `
            <h3><i class="fas fa-tree"></i> Compensação de Carbono</h3>
            <p>Para compensar a viagem com menor emissão (${totalEmission} kg CO₂):</p>
            <div class="credits-value">${credits} toneladas de CO₂ equivalente</div>
            <p>Valor estimado para compensação: <strong>R$ ${creditsValue.toLocaleString('pt-BR')}</strong></p>
            <small>* Valor baseado no mercado de créditos de carbono</small>
        `;
    }
    
    // Exibe recomendação
    displayRecommendation(emissions, origin, destination) {
        const sorted = Object.entries(emissions).sort((a, b) => a[1] - b[1]);
        const best = sorted[0];
        const worst = sorted[sorted.length - 1];
        
        const names = { bike: 'bicicleta', car: 'carro', bus: 'ônibus', plane: 'avião' };
        
        let message = '';
        if (best[0] === 'bike') {
            message = `🌟 Para a rota de ${origin} para ${destination}, a BICICLETA é a opção mais sustentável, emitindo ZERO CO₂! Além de não poluir, você ainda pratica exercícios físicos.`;
        } else {
            const savings = ((worst[1] - best[1]) / worst[1] * 100).toFixed(1);
            message = `💡 Para viajar de ${origin} para ${destination}, o ${names[best[0]]} é a opção mais sustentável entre as disponíveis, emitindo apenas ${best[1]} kg CO₂. Isso representa uma economia de ${savings}% em comparação com o ${names[worst[0]]}!`;
        }
        
        this.recommendationDiv.innerHTML = `
            <h3><i class="fas fa-lightbulb"></i> Recomendação EcoTrip</h3>
            <p>${message}</p>
            <small>🌍 Dica: Para viagens curtas, prefira bicicleta ou transporte público. Para longas distâncias, o ônibus tem menor impacto que o avião.</small>
        `;
    }
    
    // Cria gráfico de emissões
    createEmissionsChart(emissions) {
        const ctx = document.getElementById('emissionsChart').getContext('2d');
        
        if (emissionsChart) {
            emissionsChart.destroy();
        }
        
        const names = { bike: 'Bicicleta', car: 'Carro', bus: 'Ônibus', plane: 'Avião' };
        const colors = { bike: '#4CAF50', car: '#FF9800', bus: '#2196F3', plane: '#F44336' };
        
        emissionsChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: Object.keys(emissions).map(t => names[t]),
                datasets: [{
                    label: 'Emissão de CO₂ (kg)',
                    data: Object.values(emissions),
                    backgroundColor: Object.keys(emissions).map(t => colors[t] + '80'),
                    borderColor: Object.keys(emissions).map(t => colors[t]),
                    borderWidth: 2,
                    borderRadius: 8
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return `${context.raw} kg CO₂`;
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Emissão de CO₂ (kg)'
                        }
                    },
                    x: {
                        title: {
                            display: true,
                            text: 'Meio de Transporte'
                        }
                    }
                }
            }
        });
    }
}
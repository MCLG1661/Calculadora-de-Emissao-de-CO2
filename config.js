// Configurações da aplicação
const CONFIG = {
    // Fatores de emissão por tipo de transporte (kg CO₂ por km)
    emissionFactors: {
        bike: 0,
        car: 0.120,
        bus: 0.050,
        plane: 0.255
    },
    
    // Configurações do gráfico
    chart: {
        colors: {
            bike: '#4CAF50',
            car: '#FF9800',
            bus: '#2196F3',
            plane: '#F44336'
        }
    },
    
    // Preço por kg de crédito de carbono (R$)
    carbonCreditPrice: 85.00,
    
    // Ícones Font Awesome para cada transporte
    transportIcons: {
        bike: 'fa-bicycle',
        car: 'fa-car',
        bus: 'fa-bus',
        plane: 'fa-plane'
    }
};
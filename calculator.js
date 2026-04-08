// Módulo de cálculos da calculadora

class EmissionCalculator {
    constructor(factors) {
        this.factors = factors;
    }
    
    // Calcula emissão para um transporte específico
    calculateEmission(transportType, distance) {
        const factor = this.factors[transportType];
        if (factor === undefined) return 0;
        return parseFloat((distance * factor).toFixed(2));
    }
    
    // Calcula emissões para todos os transportes
    calculateAllEmissions(distance) {
        const emissions = {};
        for (const [type, factor] of Object.entries(this.factors)) {
            emissions[type] = parseFloat((distance * factor).toFixed(2));
        }
        return emissions;
    }
    
    // Encontra o transporte com menor emissão
    findBestTransport(emissions) {
        let best = null;
        let minEmission = Infinity;
        
        for (const [type, emission] of Object.entries(emissions)) {
            if (emission < minEmission) {
                minEmission = emission;
                best = type;
            }
        }
        
        return { best, minEmission };
    }
    
    // Calcula créditos de carbono necessários para compensar
    calculateCarbonCredits(emission) {
        return parseFloat((emission / 1000).toFixed(2)); // Toneladas de CO₂
    }
    
    // Calcula valor monetário dos créditos
    calculateCreditsValue(emission, pricePerKg) {
        return parseFloat((emission * pricePerKg).toFixed(2));
    }
    
    // Calcula economia relativa entre dois transportes
    calculateSavings(currentEmission, alternativeEmission) {
        if (currentEmission === 0) return 0;
        const saved = currentEmission - alternativeEmission;
        const percentage = (saved / currentEmission) * 100;
        return {
            saved: parseFloat(saved.toFixed(2)),
            percentage: parseFloat(percentage.toFixed(1))
        };
    }
}

// Mapeamento de nomes amigáveis para os transportes
const TransportNames = {
    bike: 'Bicicleta',
    car: 'Carro',
    bus: 'Ônibus',
    plane: 'Avião'
};

// Nomes completos para exibição
const TransportFullNames = {
    bike: 'Bicicleta 🚲',
    car: 'Carro 🚗',
    bus: 'Ônibus 🚌',
    plane: 'Avião ✈️'
};
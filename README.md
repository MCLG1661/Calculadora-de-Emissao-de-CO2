## 🌿 EcoTrip - Calculadora de Impacto Ambiental para Viagens

![EcoTrip Banner](https://img.shields.io/badge/EcoTrip-Calculadora%20Ambiental-brightgreen)

---

## 📋 Sobre o Projeto

**EcoTrip** é uma calculadora interativa que permite aos usuários comparar as emissões de CO₂ geradas por diferentes meios de transporte durante uma viagem. O projeto foi desenvolvido para conscientizar sobre o impacto ambiental das escolhas de deslocamento e incentivar opções mais sustentáveis.

---

### 🎯 Objetivos

- Calcular e comparar emissões de CO₂ entre bicicleta, carro, ônibus e avião
- Fornecer recomendações personalizadas para cada rota
- Calcular créditos de carbono necessários para compensação
- Educar usuários sobre o impacto ambiental de suas viagens

---

## 🚀 Funcionalidades

| Funcionalidade | Descrição |
|----------------|-----------|
| 🗺️ **Cálculo por Rota** | Informe origem, destino e distância para calcular emissões |
| 🚲 **4 Meios de Transporte** | Bicicleta, Carro, Ônibus e Avião |
| 📊 **Gráfico Comparativo** | Visualização em barras das emissões |
| 🏆 **Ranking Sustentável** | Ordenação do mais ao menos sustentável |
| 🌳 **Créditos de Carbono** | Cálculo de compensação e valor monetário |
| 💡 **Recomendação Inteligente** | Sugestão do melhor transporte para sua rota |
| 📱 **Design Responsivo** | Adapta-se a qualquer dispositivo |

---

## 📊 Fatores de Emissão Utilizados

| Transporte | Emissão (kg CO₂/km) | Fonte |
|------------|---------------------|-------|
| 🚲 Bicicleta | 0 | Emissão zero |
| 🚌 Ônibus | 0.050 | Transporte público eficiente |
| 🚗 Carro | 0.120 | Veículo médio a gasolina |
| ✈️ Avião | 0.255 | Voo doméstico médio |

> **Nota:** Os fatores podem ser ajustados no arquivo `js/config.js` conforme necessidade.

---

## 🛠️ Tecnologias Utilizadas

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Chart.js](https://img.shields.io/badge/Chart.js-FF6384?style=for-the-badge&logo=chartdotjs&logoColor=white)
![Font Awesome](https://img.shields.io/badge/Font_Awesome-339AF0?style=for-the-badge&logo=fontawesome&logoColor=white)

---

## 📁 Estrutura do Projeto
```
ecotrip/
│
├── index.html # Página principal
├── css/
│ └── style.css # Estilos e responsividade
├── js/
│ ├── config.js # Configurações (fatores de emissão)
│ ├── calculator.js # Lógica de cálculos
│ ├── ui.js # Gerenciamento da interface
│ └── app.js # Inicialização da aplicação
└── README.md # Documentação
```

---

## 🔧 Como Executar

### Pré-requisitos

- Navegador web moderno (Chrome, Firefox, Edge, Safari)
- Editor de código (recomendado: VS Code)

---

### Passo a Passo

1. **Clone o repositório**
```bash
git clone https://github.com/seu-usuario/ecotrip.git
```
---

2. **Acesse a pasta do projeto**
```bash
cd ecotrip
```
---

3. **Abra com VS Code**
```bash
code .
```

---

4. **Execute com Live Server (recomendado)**

- Instale a extensão "Live Server" no VS Code
- Clique com botão direito no index.html
- Selecione "Open with Live Server"

---

5. **Ou abra diretamente**

Dê dois cliques no arquivo index.html

---

## 🎮 Como Usar

1. **Informe sua rota**

- Digite a cidade de origem
- Digite a cidade de destino
- Informe a distância em quilômetros

---

2. **Clique em "Calcular Impacto"**

---

3. **Analise os resultados**

- Visualize as emissões em gráfico
- Veja o ranking dos transportes
- Consulte os créditos de carbono necessários
- Leia a recomendação personalizada

---

4. **Explore os transportes**

- Clique nos cards para selecionar um transporte específico




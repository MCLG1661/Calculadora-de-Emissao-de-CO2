## 🌿 EcoTrip 

*Calculadora de Impacto Ambiental para Viagens*

![HTML5](https://img.shields.io/badge/HTML5-Frontend-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-Responsive-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript&logoColor=black)
![Chart.js](https://img.shields.io/badge/Chart.js-Data%20Visualization-FF6384?logo=chartdotjs&logoColor=white)
![GitHub Copilot](https://img.shields.io/badge/GitHub-Copilot-000000?logo=githubcopilot&logoColor=white)
![Sustainability](https://img.shields.io/badge/Focus-Sustainability-2E8B57)
![DIO](https://img.shields.io/badge/DIO-CI%26T%20Bootcamp-5A0FC8)
![Status](https://img.shields.io/badge/Status-Concluído-brightgreen) 

O **EcoTrip** é uma aplicação web interativa desenvolvida para comparar as
emissões estimadas de CO₂ associadas a diferentes meios de transporte em uma viagem.

A partir da distância informada pelo usuário, a aplicação calcula e compara o
impacto de **bicicleta, ônibus, carro e avião**, apresenta os resultados
visualmente e identifica as alternativas de menor impacto.

O projeto combina **desenvolvimento Front-end, JavaScript, visualização de dados
e sustentabilidade**, utilizando o GitHub Copilot como ferramenta de apoio ao
desenvolvimento.

---

## 🎯 Objetivo

Criar uma ferramenta simples e visual para demonstrar como diferentes escolhas
de transporte podem produzir impactos distintos em termos de emissões de CO₂.

A aplicação permite:

- Comparar diferentes meios de transporte
- Calcular emissões estimadas por distância
- Visualizar os resultados graficamente
- Criar um ranking das alternativas
- Estimar compensação de carbono
- Apresentar recomendações ao usuário

---

## 🖥️ Preview

<img width="800" height="400" alt="Captura de tela 2026-08-12 200737" src="https://github.com/user-attachments/assets/29655b09-da27-46b6-a0ec-0b902c20a11f" />

---

## 🌐 Live Demo

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-Explorar_EcoTrip-2ea44f)](URL-DO-GITHUB-PAGES)

---

## ✨ Funcionalidades

🗺️ **Cálculo por distância** - Calcula emissões a partir da distância informada

🚲 **Comparação de transportes** - Bicicleta, ônibus, carro e avião 

📊 **Visualização gráfica** - Compara os resultados visualmente 

🏆 **Ranking sustentável** - Ordena as alternativas por emissão

🌳 **Compensação** - Estima a compensação associada às emissões

💡 **Recomendação** - Apresenta uma alternativa com menor impacto

📱 **Responsividade** - Interface adaptável a diferentes telas

---

## 🧮 Como Funciona

O fluxo principal da aplicação é :

```text
Usuário
   ↓
Distância da Viagem
   ↓
Fatores de Emissão
   ↓
Cálculo em JavaScript
   ↓
Emissões Estimadas
   ↓
Comparação
   ↓
Ranking
   ↓
Visualização + Recomendação
```

O cálculo básico segue a relação:

```text
Emissão estimada = Distância × Fator de emissão
```

Cada modalidade possui um fator configurável utilizado pela aplicação.

---

## 📊 Fatores Utilizados no Projeto

🚲 Bicicleta - 0 kg CO₂/km

🚌 Ônibus - 0,050 kg CO₂/km

🚗 Carro - 0,120 kg CO₂/km

✈️ Avião - 0,255 kg CO₂/km

> ⚠️ **Nota metodológica:** os valores utilizados são parâmetros simplificados
> para fins educacionais e comparativos. Emissões reais podem variar conforme
> veículo, combustível, ocupação, trajeto, eficiência operacional e metodologia
> utilizada.

Os fatores podem ser alterados em `config.js`.

---

## 🧩 Organização da Aplicação

O projeto separa diferentes responsabilidades em arquivos específicos:

`config.js`

Centraliza parâmetros e fatores utilizados pelos cálculos.

`calculator.js`

Contém a lógica relacionada aos cálculos de impacto.

`ui.js`

Responsável pela atualização e interação com a interface.

`app.js`

Inicializa e coordena o funcionamento da aplicação.

Essa separação facilita manutenção e evolução do projeto.

---

## 🛠️ Tecnologias

**HTML5** - Estrutura da aplicação

*CSS3** - Interface e responsividade 

**JavaScript** - Lógica e interatividade

**Chart.js** - Visualização dos resultados

**Font Awesome** - Iconografia 

**Google Fonts** - Tipografia

**GitHub Copilot** - Apoio ao desenvolvimento

 **Git/GitHub** - Versionamento e documentação

---

## 📂 Estrutura do Projeto

```text
EcoTrip/
│
├── index.html
├── style.css
│
├── config.js
├── calculator.js
├── ui.js
├── app.js
│
└── README.md
```

---

## ▶️ Como Executar

1. Clone o repositório

```bash
git clone https://github.com/MCLG1661/Calculadora-de-Emissao-de-CO2.git
```

2. Entre no diretório

```bash
cd Calculadora-de-Emissao-de-CO2
```

3. Execute

Abra:

```text
index.html
```

em um navegador moderno.

Para desenvolvimento, também pode ser utilizado um servidor local como o
**Live Server**.

---

## 🎮 Como Usar

1. Informe a origem e o destino da viagem.
2. Digite a distância em quilômetros.
3. Clique em **Calcular Impacto**.
4. Compare as emissões estimadas.
5. Analise o ranking dos meios de transporte.
6. Consulte a estimativa de compensação e a recomendação apresentada.

---

## 🧪 Exemplo

Para uma distância hipotética de **430 km**, utilizando os fatores configurados
no projeto :

```text
🚲 Bicicleta     0,0 kg CO₂
🚌 Ônibus       21,5 kg CO₂
🚗 Carro        51,6 kg CO₂
✈️ Avião       109,7 kg CO₂
```

O exemplo demonstra como a mesma distância pode produzir resultados diferentes
quando aplicados fatores distintos para cada modalidade.

---

## 🎨 Personalização

Os parâmetros utilizados pela calculadora podem ser alterados em:

```text
config.js
```

Isso permite experimentar diferentes fatores e cenários sem modificar a lógica
principal da aplicação.

Novos meios de transporte também podem ser incorporados ao projeto.

---

## 📱 Responsividade

A interface foi desenvolvida para se adaptar a diferentes dimensões de tela,
incluindo desktop, tablet e dispositivos móveis.

---

## 💡 Competências Demonstradas

- JavaScript
- HTML5
- CSS3
- Manipulação do DOM
- Modularização de código
- Lógica de programação
- Data Visualization
- Responsive Web Design
- Desenvolvimento assistido por IA
- Sustentabilidade aplicada à tecnologia
- Git e GitHub

---

## 🚀 Possíveis Evoluções

O EcoTrip pode evoluir incorporando:

- 🚆 Trem e metrô
- 🛵 Motocicletas
- 🚙 Diferentes tipos de automóveis
- ⚡ Veículos elétricos
- 👥 Ocupação do veículo
- 🗺️ Cálculo automático da distância
- 📍 Geolocalização
- 🗃️ Histórico de viagens
- ⭐ Rotas favoritas
- 🌙 Dark Mode
- 🔗 Compartilhamento dos resultados
- 📊 Dashboard de impacto
- 🌱 Fontes externas para fatores de emissão

Uma evolução particularmente relevante seria integrar uma fonte de dados
ambientais para utilizar fatores de emissão documentados e atualizáveis.

---

## 🤝 Como Contribuir

Contribuições são bem-vindas, principalmente relacionadas a :

- Novos meios de transporte
- Metodologias de cálculo
- Visualizações
- UX/UI
- Acessibilidade
- Sustentabilidade

1. Faça um Fork
2. Crie uma branch
3. Implemente e teste a alteração
4. Faça o commit
5. Envie sua branch
6. Abra um Pull Request

---

## 🎓 Contexto Acadêmico

Projeto desenvolvido como desafio do curso **Desenvolvimento com GitHub Copilot**,
integrante do Bootcamp **CI&T**, na DIO.

O projeto teve como objetivo aplicar desenvolvimento web e ferramentas de IA
assistiva na construção de uma solução interativa.

---

## 🌟 Agradecimentos

- Font Awesome - Ícones incríveis
- Chart.js - Biblioteca de gráficos
- Google Fonts - Fonte Inter

---

## 👨‍💻 Autor

**Marcus Guedes**

Marketing | Data Science | Inteligência Artificial | Gestão de Projetos

GitHub: MCLG1661  

LinkedIn: Marcus Guedes

---

🌿 **Tecnologia aplicada à conscientização sobre o impacto das escolhas de mobilidade.**

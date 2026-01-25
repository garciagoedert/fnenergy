/**
 * Registry of Vendors for the FN Energy Portal
 */
const vendorsData = [
    {
        id: 'solartech',
        name: 'SolarTech Engenharia',
        type: 'Engenharia',
        category: 'Solar',
        categoryColor: 'text-yellow-600',
        description: 'Especialista em projetos de usinas solares de grande porte e minigeração distribuída.',
        longDescription: 'A SolarTech Engenharia é líder no mercado de energia solar, oferecendo soluções completas "chave na mão" (turnkey). Com uma equipe de engenheiros altamente qualificados, garantimos a máxima eficiência e retorno sobre o investimento para seus projetos solares. Atuamos desde o estudo de viabilidade até o comissionamento e operação assistida.',
        since: '2018',
        status: 'Homologado',
        statusColor: 'bg-green-100 text-green-700',
        logoLetter: 'S',
        logoBg: 'bg-yellow-100',
        logoColor: 'text-yellow-600',
        services: [
            'Projetos Executivos',
            'Instalação e Montagem',
            'Homologação na Concessionária',
            'Consultoria Técnica'
        ],
        contact: {
            email: 'contato@solartech.com.br',
            phone: '(11) 99999-0001',
            website: 'www.solartech.com.br',
            address: 'Av. Paulista, 1000 - São Paulo, SP'
        }
    },
    {
        id: 'windpower',
        name: 'WindPower Solutions',
        type: 'O&M',
        category: 'Eólica',
        categoryColor: 'text-blue-500',
        description: 'Soluções completas para operação e manutenção de parques eólicos.',
        longDescription: 'Especialistas em O&M para parques eólicos, a WindPower Solutions utiliza tecnologia de ponta e monitoramento em tempo real para maximizar a disponibilidade e performance de seus aerogeradores. Nossa equipe técnica está pronta para atuar 24/7 em manutenções preventivas e corretivas.',
        since: '2015',
        status: 'Homologado',
        statusColor: 'bg-green-100 text-green-700',
        logoLetter: 'W',
        logoBg: 'bg-blue-100',
        logoColor: 'text-blue-600',
        services: [
            'Manutenção Preventiva',
            'Monitoramento 24/7',
            'Inspeção de Pás com Drones',
            'Reparos de Componentes'
        ],
        contact: {
            email: 'comercial@windpower.com.br',
            phone: '(85) 98888-0002',
            website: 'www.windpower.com.br',
            address: 'Rodovia do Vento, Km 50 - Fortaleza, CE'
        }
    },
    {
        id: 'ecogrid',
        name: 'EcoGrid Consultoria',
        type: 'Consultoria',
        category: 'Regulatório',
        categoryColor: 'text-emerald-500',
        description: 'Apoio regulatório para acessantes e agentes da CCEE.',
        longDescription: 'Navegar pelo complexo ambiente regulatório do setor elétrico brasileiro exige expertise. A EcoGrid Consultoria oferece suporte estratégico para consumidores livres, geradores e comercializadoras, garantindo conformidade e otimização de resultados junto à CCEE, ONS e ANEEL.',
        since: '2021',
        status: 'Em Análise',
        statusColor: 'bg-slate-100 text-slate-600',
        logoLetter: 'E',
        logoBg: 'bg-emerald-100',
        logoColor: 'text-emerald-600',
        services: [
            'Adesão à CCEE',
            'Gestão de Contratos',
            'Representação junto à ANEEL',
            'Auditoria Regulatória'
        ],
        contact: {
            email: 'regulatorio@ecogrid.com.br',
            phone: '(61) 3333-0003',
            website: 'www.ecogrid.com.br',
            address: 'Setor Comercial Sul, Q. 2 - Brasília, DF'
        }
    },
    {
        id: 'dataenergy',
        name: 'DataEnergy Analytics',
        type: 'Software',
        category: 'Tech',
        categoryColor: 'text-purple-500',
        description: 'Inteligência de dados para previsão de PLD e consumo.',
        longDescription: 'Transforme dados em decisões inteligentes com a plataforma DataEnergy. Utilizamos algoritmos avançados de Machine Learning para prever PLD, consumo e geração, permitindo que sua empresa antecipe cenários e mitigue riscos no Mercado Livre de Energia using Big Data.',
        since: '2023',
        status: 'Homologado',
        statusColor: 'bg-green-100 text-green-700',
        logoLetter: 'D',
        logoBg: 'bg-purple-100',
        logoColor: 'text-purple-600',
        services: [
            'Previsão de PLD',
            'Dashboard de Inteligência',
            'Relatórios Automatizados',
            'APIs de Dados de Energia'
        ],
        contact: {
            email: 'hello@dataenergy.tech',
            phone: '(48) 97777-0004',
            website: 'www.dataenergy.tech',
            address: 'Parque Tecnológico, Bloco A - Florianópolis, SC'
        }
    }
];

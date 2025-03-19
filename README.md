# CRM Imobiliário

Sistema completo para gestão de imobiliárias e corretores de imóveis com funcionalidades avançadas de CRM, gestão de aluguéis, vendas e financeiro.

## Funcionalidades Principais

- **Dashboard Interativo**: Visão centralizada com métricas e gráficos modernos
- **Gestão de Imóveis**: Cadastro completo, fotos, localização e especificações
- **Pipeline de Vendas**: Acompanhamento de negociações e conversões
- **Gestão de Aluguéis**: Controle de contratos, inquilinos e pagamentos
- **Financeiro**: Controle de receitas, despesas, comissões e relatórios
- **Automações**: Fluxos automatizados para marketing e comunicação
- **Relatórios e Analytics**: Métricas de performance detalhadas

## Tecnologias

- **Frontend**: Next.js 15, React, Tailwind CSS
- **Charts**: ApexCharts para visualizações interativas
- **Backend**: API Routes, Prisma ORM
- **Banco de Dados**: MySQL
- **Autenticação**: JWT com controle de permissões

## Arquitetura

O sistema foi desenvolvido com arquitetura multi-tenant, permitindo que múltiplas imobiliárias utilizem a mesma infraestrutura com isolamento de dados.

- **Sistema de Temas**: Suporte a tema claro e escuro
- **Responsivo**: Funciona em dispositivos desktop e móveis
- **Módulo Super Admin**: Gerenciamento centralizado de todas as empresas

## Instalação

```bash
# Clone o repositório
git clone https://github.com/leovidal7/imobiliario-crm-sistema.git

# Instale as dependências
cd imobiliario-crm-sistema
npm install

# Configure as variáveis de ambiente
cp .env.example .env.local

# Inicie o ambiente de desenvolvimento
npm run dev
```

## Screenshots

![Dashboard](https://via.placeholder.com/800x400?text=Dashboard)
![Gestão+de+Imóveis](https://via.placeholder.com/800x400?text=Gestão+de+Imóveis)
![Analytics](https://via.placeholder.com/800x400?text=Analytics)

## Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo LICENSE para mais detalhes.
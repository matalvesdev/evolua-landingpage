# Documento de Requisitos

## Introdução

Componentização de uma landing page HTML monolítica existente do produto "Evolua" (SaaS para fonoaudiólogas) em um projeto Next.js com TypeScript e Tailwind CSS. O objetivo é transformar o HTML único em componentes React reutilizáveis, mantendo a fidelidade visual e funcional da página original.

## Glossário

- **Landing_Page**: Página de destino do produto Evolua, composta por seções de apresentação, funcionalidades, depoimentos, preços e cadastro
- **Componente**: Unidade React reutilizável e isolada que encapsula estrutura, estilo e comportamento de uma seção ou elemento da interface
- **Navbar**: Barra de navegação fixa no topo com logo, links de âncora, botão de login e CTA, incluindo menu hamburger para mobile
- **Hero**: Seção principal de destaque com headline, subtítulo e chamada para ação
- **Feature_Section**: Seção que apresenta uma funcionalidade do produto (Relatórios por Voz, Agenda Inteligente, Prontuário Digital)
- **Glass_Card**: Efeito visual de cartão com fundo translúcido e desfoque (backdrop-blur)
- **Demo_Section**: Seção com mockup de player de vídeo demonstrativo
- **Social_Proof**: Seção de depoimentos de profissionais
- **Pricing_Section**: Seção com cartões de planos e preços
- **Signup_Section**: Seção de formulário de cadastro com divulgação progressiva de campos
- **Footer**: Rodapé com logo, links e copyright
- **Divulgação_Progressiva**: Padrão de UX onde campos adicionais do formulário aparecem conforme o usuário preenche os campos iniciais
- **Sistema_de_Build**: Configuração do Next.js, TypeScript e Tailwind CSS que compila e serve a aplicação

## Requisitos

### Requisito 1: Estrutura do Projeto Next.js

**User Story:** Como desenvolvedor, quero um projeto Next.js configurado com TypeScript e Tailwind CSS, para que eu tenha uma base sólida para os componentes.

#### Critérios de Aceitação

1. THE Sistema_de_Build SHALL utilizar Next.js com App Router, TypeScript e Tailwind CSS configurados
2. THE Sistema_de_Build SHALL configurar a fonte DM Sans do Google Fonts via next/font
3. THE Sistema_de_Build SHALL configurar o Tailwind com as cores customizadas do tema (primary #8A05BE, primary-hover, primary-light e demais cores do design original)
4. THE Sistema_de_Build SHALL incluir os estilos CSS customizados (glass-card, conversational-container, section-fade, hidden-step, scrollbar customizado) como classes utilitárias ou estilos globais

### Requisito 2: Componente Navbar

**User Story:** Como visitante, quero uma barra de navegação fixa e responsiva, para que eu possa navegar facilmente entre as seções da página.

#### Critérios de Aceitação

1. THE Navbar SHALL renderizar o logo "Evolua", links de navegação (Diferenciais, Demonstração, Depoimentos, Preços), botão de Login e botão CTA "Comece Grátis"
2. WHEN a largura da tela for menor que o breakpoint md, THE Navbar SHALL exibir um botão hamburger que abre e fecha o menu mobile
3. WHEN o usuário clicar em um link de navegação, THE Navbar SHALL rolar suavemente até a seção correspondente
4. THE Navbar SHALL permanecer fixa no topo da viewport durante a rolagem da página

### Requisito 3: Componente Hero

**User Story:** Como visitante, quero ver uma seção de destaque impactante, para que eu entenda rapidamente a proposta de valor do Evolua.

#### Critérios de Aceitação

1. THE Hero SHALL renderizar a headline "E se você pudesse focar apenas no cuidado?", o subtítulo descritivo e um botão CTA de rolagem
2. THE Hero SHALL aplicar o efeito de fade-in na entrada da seção conforme o design original

### Requisito 4: Componentes de Funcionalidades (Feature Sections)

**User Story:** Como visitante, quero ver as funcionalidades do produto apresentadas de forma clara e visual, para que eu entenda os diferenciais do Evolua.

#### Critérios de Aceitação

1. THE Feature_Section de "Relatórios por Voz" SHALL renderizar o título, descrição e um Glass_Card com o conteúdo ilustrativo da funcionalidade
2. THE Feature_Section de "Agenda Inteligente" SHALL renderizar o título, descrição e um mockup interativo de assistente de agendamento
3. THE Feature_Section de "Prontuário Digital" e "Sigilo Total" SHALL renderizar em um layout de grid de 2 colunas com os respectivos conteúdos
4. WHEN a viewport for menor que o breakpoint md, THE Feature_Section de grid SHALL empilhar as colunas verticalmente

### Requisito 5: Componente Demo

**User Story:** Como visitante, quero ver uma demonstração do produto, para que eu tenha uma ideia visual de como o Evolua funciona.

#### Critérios de Aceitação

1. THE Demo_Section SHALL renderizar um mockup de player de vídeo com botão de play e controles visuais
2. THE Demo_Section SHALL manter a aparência visual do player conforme o design original

### Requisito 6: Componente Social Proof

**User Story:** Como visitante, quero ver depoimentos de outros profissionais, para que eu tenha confiança na qualidade do produto.

#### Critérios de Aceitação

1. THE Social_Proof SHALL renderizar os depoimentos de 2 profissionais com avatar, nome, cargo e texto do depoimento
2. THE Social_Proof SHALL apresentar os depoimentos em um layout responsivo que se adapta a diferentes tamanhos de tela

### Requisito 7: Componente Pricing

**User Story:** Como visitante, quero comparar os planos disponíveis, para que eu possa escolher o mais adequado para minha necessidade.

#### Critérios de Aceitação

1. THE Pricing_Section SHALL renderizar dois cartões de preço: "Essencial" (R$49/mês) e "Evolua Pro" (R$89/mês) com suas respectivas listas de funcionalidades
2. THE Pricing_Section SHALL destacar visualmente o plano recomendado conforme o design original
3. WHEN a viewport for menor que o breakpoint md, THE Pricing_Section SHALL empilhar os cartões verticalmente

### Requisito 8: Componente Signup com Divulgação Progressiva

**User Story:** Como visitante, quero preencher um formulário de cadastro simples e progressivo, para que eu possa me registrar sem me sentir sobrecarregado.

#### Critérios de Aceitação

1. THE Signup_Section SHALL renderizar um formulário com campo de nome inicialmente visível
2. WHEN o usuário digitar no campo de nome, THE Signup_Section SHALL revelar progressivamente os campos adicionais (email, telefone, etc.)
3. WHEN o formulário for submetido com campos obrigatórios vazios, THE Signup_Section SHALL exibir indicação visual de erro e impedir o envio
4. THE Signup_Section SHALL manter o estado dos campos preenchidos durante a interação

### Requisito 9: Componente Footer

**User Story:** Como visitante, quero ver informações institucionais no rodapé, para que eu possa acessar links de suporte e informações legais.

#### Critérios de Aceitação

1. THE Footer SHALL renderizar o logo "Evolua", links (Suporte, Privacidade, Termos) e texto de copyright
2. THE Footer SHALL apresentar um layout responsivo adequado para mobile e desktop

### Requisito 10: Composição da Página e Integração

**User Story:** Como desenvolvedor, quero que todos os componentes sejam compostos em uma única página, para que a landing page funcione como um todo coeso.

#### Critérios de Aceitação

1. THE Landing_Page SHALL compor todos os componentes na ordem: Navbar, Hero, Feature_Sections, Demo_Section, Social_Proof, Pricing_Section, Signup_Section, Footer
2. THE Landing_Page SHALL utilizar ícones Material Symbols Outlined conforme o design original
3. WHEN o usuário rolar a página, THE Landing_Page SHALL aplicar animações de fade-in nas seções conforme entram na viewport
4. THE Landing_Page SHALL manter fidelidade visual com o design HTML original em todos os breakpoints

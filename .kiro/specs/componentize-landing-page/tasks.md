# Plano de Implementação: Componentizar Landing Page

## Visão Geral

Transformar a landing page HTML monolítica do Evolua em componentes React dentro de um projeto Next.js 14+ com App Router, TypeScript e Tailwind CSS. As tarefas seguem uma ordem incremental: configuração do projeto, tipos compartilhados, componentes individuais (dos mais simples aos mais complexos), e composição final.

## Tarefas

- [x] 1. Configurar projeto Next.js com TypeScript e Tailwind CSS
  - [x] 1.1 Inicializar projeto Next.js com App Router e TypeScript
    - Criar `package.json`, `tsconfig.json`, `next.config.ts`
    - Configurar `tailwind.config.ts` com cores customizadas (primary #8A05BE, primary-hover, primary-light)
    - Configurar `postcss.config.mjs`
    - _Requirements: 1.1, 1.3_
  - [x] 1.2 Criar layout raiz e estilos globais
    - Criar `src/app/layout.tsx` com fonte DM Sans via `next/font/google`
    - Criar `src/app/globals.css` com estilos customizados (glass-card, conversational-container, section-fade, hidden-step, scrollbar)
    - Incluir link para Material Symbols Outlined no layout
    - _Requirements: 1.2, 1.4_
  - [x] 1.3 Criar tipos compartilhados e hook de animação
    - Criar `src/types/index.ts` com interfaces NavLink, Testimonial, PricingPlan, SignupFormState
    - Criar `src/hooks/useSectionFade.ts` com IntersectionObserver para fade-in
    - _Requirements: 1.1_

- [x] 2. Implementar componentes estáticos (Navbar, Hero, Footer)
  - [x] 2.1 Implementar componente Navbar
    - Criar `src/components/Navbar.tsx` como componente cliente ("use client")
    - Implementar logo, links de navegação, botões Login e CTA
    - Implementar menu hamburger mobile com estado isMenuOpen
    - Implementar scroll suave via scrollIntoView nos links de âncora
    - Aplicar posição fixa (fixed) no topo
    - _Requirements: 2.1, 2.2, 2.3, 2.4_
  - [x] 2.2 Implementar componente Hero
    - Criar `src/components/Hero.tsx` como componente servidor
    - Renderizar headline, subtítulo e botão CTA com ícone de seta
    - Aplicar classe section-fade para animação
    - _Requirements: 3.1, 3.2_
  - [x] 2.3 Implementar componente Footer
    - Criar `src/components/Footer.tsx` como componente servidor
    - Renderizar logo, links (Suporte, Privacidade, Termos) e copyright
    - Layout responsivo
    - _Requirements: 9.1, 9.2_
  - [ ]* 2.4 Escrever teste de propriedade para elementos obrigatórios dos componentes de seção
    - **Property 1: Componentes de seção renderizam todos os elementos obrigatórios**
    - **Validates: Requirements 2.1, 3.1**

- [x] 3. Implementar componentes de funcionalidades (Feature Sections)
  - [x] 3.1 Implementar FeatureVoice
    - Criar `src/components/FeatureVoice.tsx` com título, descrição e Glass_Card
    - Aplicar efeito glass-card (backdrop-blur, fundo translúcido)
    - _Requirements: 4.1_
  - [x] 3.2 Implementar FeatureSchedule
    - Criar `src/components/FeatureSchedule.tsx` com título, descrição e mockup de chat
    - Implementar visual do conversational-container
    - _Requirements: 4.2_
  - [x] 3.3 Implementar FeatureSecurity
    - Criar `src/components/FeatureSecurity.tsx` com grid de 2 colunas
    - Renderizar "Prontuário Digital" e "Sigilo Total" lado a lado
    - Empilhar verticalmente em mobile (responsive grid)
    - _Requirements: 4.3, 4.4_

- [x] 4. Implementar componentes de dados (Demo, SocialProof, Pricing)
  - [x] 4.1 Implementar componente Demo
    - Criar `src/components/Demo.tsx` com mockup de player de vídeo
    - Renderizar botão play e controles visuais
    - _Requirements: 5.1, 5.2_
  - [x] 4.2 Implementar componentes SocialProof e TestimonialCard
    - Criar `src/components/TestimonialCard.tsx` recebendo props do tipo Testimonial
    - Criar `src/components/SocialProof.tsx` renderizando 2 TestimonialCards
    - Layout responsivo para os depoimentos
    - _Requirements: 6.1, 6.2_
  - [ ]* 4.3 Escrever teste de propriedade para renderização de cartões orientados a dados
    - **Property 2: Cartões orientados a dados renderizam todos os campos**
    - **Validates: Requirements 6.1, 7.1**
  - [x] 4.4 Implementar componentes Pricing e PricingCard
    - Criar `src/components/PricingCard.tsx` recebendo props do tipo PricingPlan
    - Criar `src/components/Pricing.tsx` renderizando 2 PricingCards (Essencial e Evolua Pro)
    - Destacar visualmente o plano com highlighted=true
    - Empilhar cartões em mobile
    - _Requirements: 7.1, 7.2, 7.3_
  - [ ]* 4.5 Escrever teste de propriedade para distinção visual do plano destacado
    - **Property 3: Plano destacado tem distinção visual**
    - **Validates: Requirements 7.2**

- [x] 5. Checkpoint - Verificar componentes individuais
  - Ensure all tests pass, ask the user if questions arise.

- [x] 6. Implementar componente Signup com formulário progressivo
  - [x] 6.1 Implementar componente Signup com divulgação progressiva
    - Criar `src/components/Signup.tsx` como componente cliente ("use client")
    - Implementar campo de nome sempre visível
    - Implementar revelação progressiva: nome → email → telefone
    - Implementar validação de campos obrigatórios no submit
    - Implementar indicação visual de erro (borda vermelha, mensagem)
    - Manter estado dos campos preenchidos
    - _Requirements: 8.1, 8.2, 8.3, 8.4_
  - [ ]* 6.2 Escrever teste de propriedade para divulgação progressiva
    - **Property 4: Divulgação progressiva do formulário**
    - **Validates: Requirements 8.2, 8.4**
  - [ ]* 6.3 Escrever teste de propriedade para validação do formulário
    - **Property 5: Validação do formulário rejeita submissões inválidas**
    - **Validates: Requirements 8.3**

- [x] 7. Compor página final e integrar componentes
  - [x] 7.1 Criar página principal compondo todos os componentes
    - Criar `src/app/page.tsx` importando e renderizando todos os componentes na ordem: Navbar, Hero, FeatureVoice, FeatureSchedule, FeatureSecurity, Demo, SocialProof, Pricing, Signup, Footer
    - Aplicar IDs de seção para navegação por âncora
    - Integrar useSectionFade nas seções para animação de fade-in
    - _Requirements: 10.1, 10.2, 10.3, 10.4_
  - [ ]* 7.2 Escrever testes unitários de integração da página
    - Verificar que todos os componentes são renderizados na ordem correta
    - Verificar presença de IDs de âncora nas seções
    - _Requirements: 10.1_

- [x] 8. Checkpoint final - Verificar integração completa
  - Ensure all tests pass, ask the user if questions arise.

## Notas

- Tarefas marcadas com `*` são opcionais e podem ser puladas para um MVP mais rápido
- Cada tarefa referencia requisitos específicos para rastreabilidade
- Checkpoints garantem validação incremental
- Testes de propriedade validam propriedades universais de corretude
- Testes unitários validam exemplos específicos e edge cases

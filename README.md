## Ficha da CitizenTech

# AERIS — Monitoramento Inteligente da Qualidade do Ar

*Nome da CitizenTech:*  
Aeris — Sistema Inteligente de Monitoramento da Qualidade do Ar.

*Cidade e bairro:*  
São Paulo – SP, região da Avenida Paulista.

*Cidadão beneficiado:*  
Moradores, trabalhadores e frequentadores da região, especialmente crianças, idosos e pessoas com problemas respiratórios.

*Problema, em uma frase:*  
A falta de informações acessíveis e atualizadas sobre a qualidade do ar dificulta a identificação de situações de risco e a prevenção dos impactos da poluição na saúde da população.

*Como funciona:*  
O Aeris é um projeto de monitoramento inteligente da qualidade do ar, desenvolvido para acompanhar os níveis de partículas poluentes PM2.5 e PM10 na região da Avenida Paulista, em São Paulo. Por meio de sensores conectados a um ESP32, o sistema coleta dados ambientais que são processados e apresentados em uma plataforma digital. O objetivo é facilitar o acesso a informações sobre a qualidade do ar, identificar possíveis situações de risco e ajudar a população a se prevenir dos efeitos da poluição na saúde. Também daixamos ele mais abragente para ficar mais realista ainda, levando esse contexto para outros lugares

*O que cada parte faz:*
Computational Thinking with Python (Lógica): desenvolve um programa em Python que utiliza os dados de um arquivo JSON para apresentar as cidades disponíveis, consultar os níveis de PM2.5 e PM10 e classificar a qualidade do ar em Boa, Intermediária ou Crítica. Também permite salvar, visualizar e excluir consultas por meio de outro arquivo JSON.

Differentiated Problem Solving (Matemática): aplica limites, derivadas e integrais para analisar a concentração, a variação e o acúmulo de poluentes.

Edge Computing & Computer Systems (Sensor): utiliza um ESP32 e sensores ambientais para representar a coleta de informações sobre a qualidade do ar. O funcionamento do hardware é simulado no Wokwi.

Front-end Design (Interface): desenvolve a parte visual da plataforma, permitindo que os cidadãos consultem os dados de maneira simples e intuitiva.

Software & Total Experience Design (Experiência): planeja a experiência do usuário, a organização das funcionalidades e a jornada de utilização do sistema.

Storytelling & Inspiração Empreendedora (Pitch): apresenta o projeto, o problema identificado, a solução proposta e seu impacto social.

Web Development (Interação): desenvolve as funcionalidades e interações da aplicação web, conectando a interface aos dados do sistema.

*Indicador de impacto:*  
Concentração de PM2.5 e PM10, frequência de episódios de poluição elevada e variação da qualidade do ar ao longo do tempo.

*ODS conectados:*
- ODS 3 — Saúde e Bem-Estar.
- ODS 11 — Cidades e Comunidades Sustentáveis.
- ODS 13 — Ação Contra a Mudança Global do Clima.


## Como rodar

Com o node e npm instalados, extraia o ZIP, abra o terminal na pasta /Aeris e execute:
npm ci
npm run dev

Após isso, abra o endereço informado pelo Vite


## Observações

No projeto da matéria de Python, por falta de uma API pública que demonstre os níveis de PM2.5 e PM10, foi feito um JSON estático que contém os dados usados nesse projeto. Para que ocorra essa integração com as demais partes do projeto, os arquivos da Global Solution de Python estão presentes aqui.

Tudo o que está contido na pasta /python pertence ao projeto da matéria Computational Thinking With Python, pelos motivos descritos acima, e pode ser desconsiderado para essa entrega.

Após problemas com o repositório inicial, tivemos que criar um repositório novo para esse projeto, porém com ele já acabado.

Para fazer o CRUD com uma API externa, criei uma API em mockapi.io e a integrei nesse projeto.
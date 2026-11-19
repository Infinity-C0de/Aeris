# AERIS — Monitoramento Inteligente da Qualidade do Ar

**Nome da CitizenTech:**  
Aeris — Sistema Inteligente de Monitoramento da Qualidade do Ar.

**Cidade e bairro:**  
São Paulo – SP, região da Avenida Paulista.

**Cidadão beneficiado:**  
Moradores, trabalhadores e frequentadores da região, especialmente crianças, idosos e pessoas com problemas respiratórios.

**Problema, em uma frase:**  
A falta de informações acessíveis e atualizadas sobre a qualidade do ar dificulta a identificação de situações de risco e a prevenção dos impactos da poluição na saúde da população.

**Como funciona:**  
O Aeris é um projeto de monitoramento inteligente da qualidade do ar, desenvolvido para acompanhar os níveis de partículas poluentes PM2.5 e PM10 na região da Avenida Paulista, em São Paulo. Por meio de sensores conectados a um ESP32, o sistema coleta dados ambientais que são processados e apresentados em uma plataforma digital. O objetivo é facilitar o acesso a informações sobre a qualidade do ar, identificar possíveis situações de risco e ajudar a população a se prevenir dos efeitos da poluição na saúde.

**O que cada parte faz:**
- **Computational Thinking with Python (Lógica):** desenvolve um programa em Python que carrega os dados das cidades a partir de um arquivo JSON, permite consultar os níveis de PM2.5 e PM10, classifica a qualidade do ar em Boa, Intermediária ou Crítica, salva as consultas em um histórico e permite visualizar e excluir registros. O programa também realiza validações e trata erros durante a execução.
Inicialmente a ideia era utilizar uma API para conseguir pegar as cidades e os valores dos poluentes, mas não conseguimos achar uma API que conseguisse fazer isso, por isso decidimos colocar as cidades em um arquivo json que não seria modificado e trabalhasse a partir dele, para assim criar um novo aquivo que podesse ser personalizado pelo usuário. 

**Indicador de impacto:**  
Concentração de PM2.5 e PM10, frequência de episódios de poluição elevada e variação da qualidade do ar ao longo do tempo.

**ODS conectados:**
- ODS 3 — Saúde e Bem-Estar.
- ODS 11 — Cidades e Comunidades Sustentáveis.
- ODS 13 — Ação Contra a Mudança Global do Clima.


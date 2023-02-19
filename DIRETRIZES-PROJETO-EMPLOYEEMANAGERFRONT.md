## SOLUÇÃO - CARACTERÍSTICAS GERAIS

A solução apresentada tem como objetivo gerenciar os cadastros de Departamentos e Empregados. Em tese para uma empresa fictícia, sem relevância para ESTE PROJETO ESTUDO.

A solução é composta de : 

--> Uma aplicação front-end desenvolvida até aqui(17/02/2023) em Angular2 em sua versão 15.1 
    EMPLOYEEMANAGERFRONT
    Endereço Git - https://github.com/AriMorato/EmployeeManagerFront.git

--> Uma aplicação WEb Api desenvolvida em .Net Core versão 6.0
    EMPLOYEEMANAGER
    Endereço Git - https://github.com/AriMorato/EmployeeManager.git

## ESTRUTURA FRONTEND : EMPLOYEEMANAGERFRONT

Optou-se por estruturar a aplicação em módulos para cada uma das seções da aplicação pensando na responsabilidade única de cada módulo:
- Home --> Área da Aplicação a contemplar um DashBoard com indicadores relevantes.
- Departament --> Área da Soluão detinada ao Gerenciamento dos registros de Departamento
- Employee --> Área da Solução destinada ao Gerenciamento dos registros de Employee

--Premissas
  A todo custo aproveitar os dados já carregados do BackEnd.
  Isolar as funcionalidades em seus respectivos módulos de modo a favorecer a manutenção e implementação de novos recursos com o mínimo de impacto em outras áreas do sistema.
  Uso de tecnologias que proporcionem produtividade.

--Recursos e técnicas utilizadas
  Utilizamos o Angular Material para construção do design da solução. 
  Essa decisão se deu em função:
  1)Do uso corporativo da solução sem necessidade de uma personalização de Design muito grande.(Embora seja possível aperfeiçoar o design com uso do Angular Material). 
  
  2) Criamos um módulo para compartilhamento dos recuros do Angular material utilizados em toda a aplicação.

  3) Da grande produtividade ao utilizar os recursos agregados aos compnentes pré-fabricados do Angular Material, primncipalmente as funções nativas já implementadas nos recursos. a ex.: Paginão, Classificção e Filrtagem de dados.

  4) Utilizamos a técnica de lazy louading para os módulos principais- essa técnica permite o importe de módulos por demanda. Ou seja: A possíbilidade de se carregar os módulos e os componentes desses módulos à medida que são chamados ao uso durante a navegação do usuário. Isso permite que embora a carga seja mais lenta, ela acaba perfomando melhor na aplicação, já que não será necessário carregar todos os módulos e componentes utilizados na solução toda antes de disponibilizar a parte de recusos que o usuário chamou à execução.


## MELHORIAS RECOMENDADAS

1) Controle de acesso por login e senha com hash gravado em localStorage para consulta durante a navegação do usuário
2) Restrição de acesso a determinados componentes em função dos provilégios do usuário
3) Armazenar e criptografar dados de uso constante em localStorage
4) Incluir empresas e gerenciar usuários, departamentos e funionários por empresas
5) Incluir fotos no cadastro de usuários
6) Inlcuir Cargos associados a empresas, departamentos, funcionários
7) Incluir salário no cadastro de funionários associados ao cargo
8) Incluir a divulgação de vagas para cargos em empresas
9) Associar curriculos à empresas
10) Criar um seção ADM para gestão da solução por perfil Aministrador

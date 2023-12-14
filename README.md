
#Aplicação Fullstack - Agenda Telefônica

Bem-vindo à nossa aplicação fullstack de Agenda Telefônica! Esta aplicação permite que os usuários realizem operações de cadastro, edição e exclusão de contatos em uma agenda telefônica pessoal. A aplicação é dividida em duas partes: o backend (API) localizado na pasta "Back" e o frontend na pasta "Front".

Configuração e Execução do Backend (API)
Configuração do Banco de Dados:

Antes de iniciar a API, é necessário criar um banco de dados. Execute os seguintes comandos no terminal:

Execute o seguinte comando para executar as migrações do TypeORM:

generate src/migrations/InitialMigration -- -d src/data-source
npm run typeorm migration:run -- -d src/data-source


#Execução da API:

Navegue até a pasta "Back" utilizando o terminal.

Execute o comando npm install para instalar as dependências necessárias.
Após a conclusão da instalação, execute o comando npm run dev para iniciar a API em modo de desenvolvimento.

A API estará acessível em http://localhost:3000.

Certifique-se de configurar as variáveis de ambiente necessárias, como credenciais de banco de dados, se aplicável. Consulte os arquivos de configuração na pasta "Back" para ajustes adicionais.


#Execução do Frontend

Navegue até a pasta "Front" utilizando o terminal.

Execute o comando npm install para instalar as dependências necessárias.

Após a conclusão da instalação, execute o comando npm run dev para iniciar a aplicação frontend em modo de desenvolvimento.
O frontend estará disponível em http://localhost:5173/.


##Antes de iniciar o frontend, certifique-se de que a API esteja em execução para garantir o correto funcionamento das operações na agenda telefônica.

#Funcionalidades da Agenda Telefônica:

Login e Senha: A aplicação exige que os usuários façam login com suas credenciais para acessar a agenda telefônica.

Cadastro de Contatos: Os usuários podem cadastrar novos contatos, fornecendo informações como nome, número de telefone e email.

Edição de Contatos: É possível editar informações de contatos existentes.

Exclusão de Contatos: Os usuários podem excluir contatos que não são mais necessários na agenda telefônica.

Observações Importantes:\

Certifique-se de ter o Node.js e o npm instalados em sua máquina.
Este é um guia básico, e configurações adicionais podem ser necessárias dependendo da configuração do ambiente. Consulte a documentação específica das tecnologias utilizadas.
Aproveite a utilização da Agenda Telefônica! Se tiver alguma dúvida ou problema, não hesite em entrar em contato conosco.

Link da doc: http://localhost:3000/docs/


# Boas vindas ao Desafio Técnico da Accenture!

# O que é o Desafio Técnico da Accenture?

É uma aplicação FullStack, em que consiste em um CRUD de Empresas e Fornecedores, além de consumir uma API de validação de CEPs o [ViaCep](https://viacep.com.br/ws/), armazenando as informações em um banco de dados MySQL utilizando a tecnologia Angular no FrontEnd e Java com SpringBoot no BackEnd. Este desafio foi proposto pela empresa [Accenture](https://www.accenture.com/br-pt).

## Técnologias usadas

Back-end:
> Desenvolvido usando: Java, API Rest, Spring Boot, MySQL, JPA.

Front-end:
> Desenvolvido usando: Angular, Typescript.


Para executar o projeto corretamente, atente-se a cada passo descrito a seguir.

<details>
  <summary><strong>‼️ Para bem utilizar esse projeto</strong></summary><br />

  1. Clone o repositório
  - Utilize o comando: `git clone git@github.com:JoaopSilvaa/Desafio_Accenture.git`<br />
  2. Acesse a pasta do projeto
  - Acesse a pasta Desafio_Accenture com `cd Desafio_Accenture`;<br />
  3. Crie uma nova branch a partir da master
  - Verifique se você está na branch `master`
    * Exemplo: `git branch`
  - Se não estiver, mude para a branch `master`
    * Exemplo: `git checkout master`
  - Crie a branch
    * Exemplo: `git checkout -b joaozinho-desafio-accenture`<br />
  4. Dependências: <br />
    * Atente-se em ter instalado o Java JDK 22^ em seu computador <br />
    * Atente-se em ter instalado o Angular CLI no seu computador para a inicialização do frontend <br />
    * Atente-se em ter instalado o npm em seu computador para a inicialização do frontend <br />
    * Atente-se em ter instalado o MySQL versão 8 no seu computador e criar o banco de dados <br /> 
        - `create database BD_DESAFIO` <br />
    

</details>

<details>
<summary><strong>Estrutura do projeto</strong></summary><br />

O projeto é composto de 3 entidades importantes para sua estrutura:

1️ -> **Banco de dados:**
  - Tem o papel de fornecer dados para o serviço de _backend_.
  - Contém um banco de dados MySQL já configurado pelo _backend_ sendo apenas necessário a criação no seu computador da base de dados com o comando:
  <br /> 
    - `create database BD_DESAFIO` <br />
  - Após a criação da base de dados, vá até a pasta do _backend_ e execute o comando `./mvnw spring-boot:run`, assim o Springboot irá gerar as tabelas no seu banco de dados e estará pronto para consumo <br />

2️ -> **Back-end:**
 - Deve rodar na porta `8080` do localhost;
 - A aplicação é inicializada a partir do comando `./mvnw spring-boot:run` na pasta do _backend_;

3 -> **Front-end:**
  - Assim que você baixar o projeto rode o comando `npm install` na pasta do frontend para **instalar as dependências gerais do projeto**;
  - Deve rodar na porta `4200` do localhost;
  - A aplicação é inicializada a partir do comando `npm start` na pasta do _frontend_;
  

</details>

<details>
  <summary><strong> 👨‍💻 Informações Importantes </strong></summary><br />

  - Para conseguir criar uma empresa ou fornecedor:
    * O CNPJ ou CPF deve ser um valor único no banco de dados;
    * Caso o fornecedor seja pessoa física, também é necessário cadastrar o RG e a data
de nascimento;
    *  Caso a empresa seja do Paraná, não é permitido cadastrar um fornecedor pessoa física
menor de idade

  - Você pode filtrar tanto fornecedores como empresas por Nome e CPF/CNPJ:
</details>

<details>
  <summary id="infos"><strong> Endpoints Acessíveis no Backend</strong></summary><br />

## POST `empresa`
* Endpoint responsável por criar uma empresa, caso todos os dados sejam preenchidos corretamente (como descreve a seção Informações importantes) e registrar no banco de dados.
  - O corpo da requisição deve seguir o formato abaixo:
    ```json
    {
        "cnpj": 12345678000199,
        "nomeFantasia": "Empresa Exemplo",
        "cep": "12345678",
        "logradouro": "Rua Exemplo",
        "bairro": "Bairro Exemplo",
        "cidade": "Cidade Exemplo",
        "estado": "SP",
        "numero": "10A"
    }
    ```

## GET `empresa`
- O endpoint terá a resposta da requisição conforme formato abaixo, retornando todas as empresas cadastradas:
    ```json
    [
        {
            "idEmpresa": 1,
            "cnpj": 12345678000199,
            "nomeFantasia": "Empresa Exemplo",
            "cep": "12345678",
            "logradouro": "Rua Exemplo",
            "bairro": "Bairro Exemplo",
            "cidade": "Cidade Exemplo",
            "estado": "SP",
            "numero": "10A"
        },
        /*...*/
    ]
    ```

## DELETE `empresa/id`
- O endpoint retorna uma resposta de sucesso ou falha:

## POST `fornecedor`
* Endpoint responsável por criar um fornecedor, caso todos os dados sejam preenchidos corretamente (como descreve a seção Informações importantes) e registrar no banco de dados.
  - O corpo da requisição deve seguir o formato abaixo:
    ```json
    {
        "cnpj_CPF": 12345678900,
        "nome": "João Silva",
        "rg": 123456789,
        "data_de_Nascimento": "01/01/1990",
        "email": "joao.silva@example.com",
        "cep": "12345678",
        "logradouro": "Rua das Flores",
        "bairro": "Centro",
        "cidade": "São Paulo",
        "estado": "SP",
        "numero": "10A"
    }
    ```

## GET `fornecedor`
- O endpoint terá a resposta da requisição conforme formato abaixo, retornando todas os fornecedores cadastrados:
    ```json
    [
        {
            "idFornecedor": 1,
            "cnpj_CPF": 12345678900,
            "nome": "João Silva",
            "rg": 123456789,
            "data_de_Nascimento": "01/01/1990",
            "email": "joao.silva@example.com",
            "cep": "12345678",
            "logradouro": "Rua das Flores",
            "bairro": "Centro",
            "cidade": "São Paulo",
            "estado": "SP",
            "numero": "10A"
        },
        /*...*/
    ]
    ```

## DELETE `fornecedor/id`
- O endpoint retorna uma resposta de sucesso ou falha:

</details>

<br />
Projeto desenvolvido por [Joao_Antonio](https://github.com/JoaopSilvaa)


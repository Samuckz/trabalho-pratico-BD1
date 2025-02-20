# Reserva Fácil Laboratórios

### Membros:
Rávilla Noely dos Santos Moreira - 201512040134
Samuel Viana Santana - 20203019863
Tarcisio Batista Prates - 20193008761

O “Reserva Fácil Laboratórios” será um sistema de gerenciamento centralizado para a alocação de laboratórios em uma instituição de ensino. O objetivo principal é fornecer aos administradores uma ferramenta eficiente para organizar e cadastrar os horários de locação dos laboratórios, garantindo que os recursos sejam utilizados de maneira otimizada e sem conflitos.

## Tecnologias Utilizadas

### Backend:
- **Java 21**
- **Spring Boot**
- **Maven 3.9.6**
- **Banco de Dados:** PostgreSQL 16 (ou outro configurável)

### Frontend:
- **Angular 13**
- **Node.js 16+**
- **NPM 8+**

## Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas:

1. [Java 21](https://jdk.java.net/21/)
2. [Maven 3.9.6](https://maven.apache.org/download.cgi)
3. [Node.js 16+ e NPM 8+](https://nodejs.org/)
4. [Angular CLI 13](https://angular.io/cli)
5. [PostgreSQL](https://www.postgresql.org/) ou [Docker](https://www.docker.com/)

## Configuração do Backend

1. Clone o repositório:
   ```sh
   git clone https://github.com/seu-usuario/seu-repositorio.git
   cd seu-repositorio/backend
   ```
2. Configure o banco de dados no `application.properties` ou `application.yml`:
   ```properties
   spring.datasource.url=jdbc:postgresql://localhost:5432/seubanco
   spring.datasource.username=seuusuario
   spring.datasource.password=suasenha
   ```
3. Compile e execute a aplicação:
   ```sh
   mvn clean install
   mvn spring-boot:run
   ```
4. O backend estará disponível em: `http://localhost:8080`

## Configuração do Frontend

1. Navegue até a pasta do frontend:
   ```sh
   cd ../frontend
   ```
2. Instale as dependências:
   ```sh
   npm install
   ```
3. Inicie o servidor Angular:
   ```sh
   ng serve
   ```
4. O frontend estará disponível em: `http://localhost:4200`

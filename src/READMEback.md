# 📚 Documentação da API - Controle de Glicose

## 📋 Visão Geral

Esta aplicação é uma **API REST** para registro e acompanhamento de medições de glicose de pacientes.

Tecnologias utilizadas:

- **Backend:** Java 21 + Spring Boot 3
- **Autenticação:** JWT (Json Web Token)
- **Banco de dados:** PostgreSQL (Supabase)

---

## 🗂️ Entidades

### 1. Usuário (`User`)

| Campo    | Tipo              | Descrição                        |
| :------- | :---------------- | :------------------------------- |
| id       | UUID              | Identificador único              |
| nome     | String            | Nome do usuário                  |
| email    | String            | Email do usuário                 |
| senha    | String            | Senha hashada                    |
| googleId | String (nullable) | ID do Google (para login social) |
| criadoEm | LocalDateTime     | Data de criação                  |

### 2. Medição de Glicose (`GlucoseMeasurement`)

| Campo            | Tipo              | Descrição                  |
| :--------------- | :---------------- | :------------------------- |
| id               | UUID              | Identificador único        |
| usuarioId        | UUID              | Relacionamento com Usuário |
| glicemia         | Integer           | Valor da glicemia em mg/dL |
| dataHoraRegistro | LocalDateTime     | Data e hora da medição     |
| anotacao         | String (nullable) | Anotações opcionais        |
| criadoEm         | LocalDateTime     | Data de criação            |

---

## 🛠️ Endpoints da API

### Autenticação

#### 1. Registro de Usuário

`POST /api/auth/register`

```json
{
  "nome": "João Silva",
  "email": "joao@email.com",
  "senha": "senhaSegura123"
}
```

#### 2. Login (Email e Senha)

`POST /api/auth/login`

```json
{
  "email": "joao@email.com",
  "senha": "senhaSegura123"
}
```

#### Resposta

```json
{
  "token": "jwt_token_gerado"
}
```

#### 3. Login via Google

`POST /api/auth/google`

```json
{
  "tokenId": "id_token_do_google"
}
```

### Medições de Glicose

> Todos os endpoints abaixo requerem o header:
> Authorization: Bearer <jwt_token>

#### 4. Adicionar nova medição

`POST /api/measurements`

```json
{
  "glicemia": 110,
  "dataHoraRegistro": "2025-04-27T14:30:00",
  "anotacao": "Antes do almoço"
}
```

#### 5. Listar medições do usuário

`GET /api/measurements`

##### Query Params:

- page (opcional): número da página

- size (opcional): tamanho da página

#### Resposta:

```json
[
  {
    "id": "uuid-da-medicao",
    "glicemia": 110,
    "dataHoraRegistro": "2025-04-27T14:30:00",
    "anotacao": "Antes do almoço",
    "criadoEm": "2025-04-27T14:31:00"
  }
]
```

#### 6. Deletar uma medição

`DELETE /api/measurements/{id}`

### Usuário

#### 7. Buscar informações do usuário logado

`GET /api/users/me`

#### Resposta:

```json
{
  "id": "uuid-do-usuario",
  "nome": "João Silva",
  "email": "joao@email.com",
  "googleId": null,
  "criadoEm": "2025-04-27T13:00:00"
}
```



# CreativeFlow Service

Backend para o serviço **CreativeFlow** — uma API construída com **Node.js**, **TypeScript** e **Fastify**, com uma arquitetura limpa (controllers, serviços, repositórios) para suportar operações relacionadas a usuários, autenticação e outras rotas do sistema.

## 🧱 Tecnologias

- Node.js  
- TypeScript  
- Fastify  
- (Possivelmente) outras bibliotecas, como validação, ORM, etc — dependendo da implementação (ajuste conforme seu código)

## 📦 Funcionalidades

- Rotas de usuário (GET, POST, etc) via controllers  
- Organização em camadas (Controller → Service → Repository)  
- Código tipado com TypeScript  
- Facilidade para adicionar novas rotas / domínios  

---

## 🚀 Como rodar localmente

1. Clone o repositório  
   ```bash
   git clone https://github.com/scarvalhos/creativeflow-service.git
   cd creativeflow-service
````

2. Instale as dependências

   ```bash
   npm install
   # ou, se você usar yarn:
   # yarn install
   ```

3. Crie um arquivo de variáveis de ambiente

   * Copie `.env.example` para `.env` (se houver)
   * Preencha as variáveis de ambiente necessárias (porta, banco, credenciais, etc)

4. Execute em modo de desenvolvimento

   ```bash
   npm run dev
   # ou yarn dev
   ```

5. (Opcional) Para construir para produção

   ```bash
   npm run build
   npm start
   ```

---

## 🔧 Scripts úteis

| Script          | Descrição                                            |
| --------------- | ---------------------------------------------------- |
| `npm run dev`   | Inicia o servidor em modo de desenvolvimento (watch) |
| `npm run build` | Transpila o código TypeScript para JavaScript        |
| `npm start`     | Executa a versão compilada (produção)                |
| `npm test`      | Executa os testes (se existirem)                     |
| `npm lint`      | Verifica problemas de estilo / lint (se configurado) |

---

## 🧪 Testes

*(Se você tiver testes)*
Explique como rodar os testes, por exemplo:

```bash
npm test
# ou
npm run test:watch
```

Se você usa alguma ferramenta específica de teste (ex: Jest, Vitest, node:test), detalhe-a aqui.

---

## 📐 Arquitetura

Este projeto segue uma estrutura em camadas:

* **Controllers**: recebem requisições HTTP e delegam para os serviços
* **Services**: contêm a lógica de negócio
* **Repositories**: abstraem o acesso a dados (banco ou outros repositórios)
* **Rotas**: definem os endpoints e fazem a ligação entre os controllers e o app Fastify

Esse padrão facilita **testabilidade**, **manutenção** e **escalabilidade**.

---

## 🔐 Variáveis de Ambiente

Aqui estão algumas variáveis de ambiente comuns que podem ser utilizadas (ajuste conforme sua implementação):

| Variável       | Descrição                                        |
| -------------- | ------------------------------------------------ |
| `PORT`         | Porta onde o servidor roda (ex: `3000`)          |
| `DATABASE_URL` | URL de conexão com o banco de dados              |
| `JWT_SECRET`   | Segredo para tokens JWT (se houver autenticação) |
| `NODE_ENV`     | Ambiente (`development`, `production`)           |

---

## 📄 Documentação da API

Se você tiver documentação da API (Swagger / OpenAPI, Postman, etc), explique onde encontrá-la. Exemplo:

* Acesse `http://localhost:3000/docs` para ver a documentação Swagger (caso esteja configurado).
* Ou compartilhe o link do Postman / Swagger.

---

## 🤝 Contribuição

Contribuições são bem-vindas! Se quiser colaborar:

1. Fork este repositório
2. Crie uma branch para sua feature ou correção (`git checkout -b feature/nova-rota`)
3. Faça suas alterações e adicione testes, se necessário
4. Abra um Pull Request com uma descrição clara do que mudou

---

## 📝 Licença

Este projeto está sob a licença **MIT** (ou outra licença, se for o caso).

---

## 👤 Autor

* **Scarvalhos** — [github.com/scarvalhos](https://github.com/scarvalhos)

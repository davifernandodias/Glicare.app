## 📫 Contribuindo para Glicday

Para contribuir com glicday, verifique os padrões de contribuição no fim desta página e siga as seguintes etapas:

1. Dê um fork neste repositório.
2. Crie um branch: `git checkout -b <nome_branch>`.
3. Faça suas alterações e confirme-as: `git commit -m '<mensagem_commit>'`
4. Envie para o branch original: `git push origin <nome_do_projeto> / <local>`
5. Crie a solicitação de pull.

Como alternativa, consulte a documentação do GitHub em [como criar uma solicitação pull](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).

---

##### Padrão de criação de branch

```
# Padrão:
<id-da-sua-tarefa-ou-issue>/<resumo-feature>

# Exemplo:
git checkout -b GD-10/create-post-api
```

##### Tipos de commit

- `feat` Um novo recurso para a aplicação, e não precisa ser algo grande, mas apenas algo que não existia antes e que a pessoa final irá acessar.
- `fix` Correções de bugs
- `docs` Alterações em arquivos relacionados à documentações
- `style` Alterações de estilização, formatação etc
- `refactor` Um codigo de refatoração, ou seja, que foi alterado, que tem uma mudança transparente para o usuário final, porém uma mudança real para a aplicação
- `perf` Alterações relacionadas à performance
- `test` Criação ou modificação de testes
- `chore` Alterações em arquivos de configuração, build, distribuição, CI, ou qualquer outra coisa que não envolva diretamente o código da aplicação para o usuário final

```
# Exemplo
feat(posts): creating hook to integrate with posts API
test: add missing tests for posts hook
```

###### Padrão título de pull request

```
# Padrão:
[<id-da-sua-tarefa>] tipo(escopo)/descricao

# Exemplo:
[GD-11] feat(home): register new blood glucose level button
```

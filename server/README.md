Essa é a parte do webserver da aplicação Would You Rather Tech!

Esta partição do backend está sendo desenvolvida utilizando [Go](https://go.dev/) e [Chi](https://github.com/go-chi/chi),
caso queira contribuir com o projeto ou apenas esteja curioso, siga as instruções abaixo.

## Iniciando o projeto

Primeiramente, clone o repositório do projeto onde você preferir:

```bash
$ git clone <HTTPS URL ou Chave SSH do repo>
```

Após ter clonado o repositório na sua máquina, acesse a pasta que foi criada com o `git clone`e depois acesse a pasta que
agrega todo o código do webserver da aplicação:

```bash
$ cd would-you-rather-tech/server/
```

Depois disso, só entrar no seu editor de código favorito e começar a contribuir!

## Padrões de código e arquitetura de pastas

Como forma de organização, estamos utilizando o padrão de arquitetura utilizada pela comunidade de Go, encorajamos que 
siga o mesmo. [Padrões de Layout em Go](https://github.com/golang-standards/project-layout).

Segue alguns exemplos de arquitetura que estamos empregando:

### /cmd

A pasta `cmd` é onde fica o(s) código(s) principais da aplicação, como o código que será compilado e gerado o executável.
Tente evitar muitos arquivos dentro deste diretório.

### /configs

Onde irá residir arquivos de configuração ou padrões de configuração.

### /internal

Esta pasta reside arquivos/ bibliotecas que desejamos que permaneça internas, que não sejam acessadas por aplicações externas ou 
importadas por terceiros. Esta pasta pode ter diversas outras pastas que contemplem este mesmo ideal, permanecer privadas.

### /pkg

O oposto da internal, aqui dedicaremos arquivos/ pastas que queremos que sejam compartilhadas e utilizadas por outras pessoas.

### /api

Por mais que o nome pareça sugestivo, nesta pasta iremos apenas colocar arquivos gerados pelo Swagger/OpenAPI, JSON scheme files e
outros arquivos que tenham relação à estrutura da API sendo contruída neste repositório.
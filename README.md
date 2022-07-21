
# S3 connection

This project connects NodeJS  to aws S3 and do the basic functions (download, upload and delete a file).

## Documentação da API

#### Upload file

```http
  POST /api/s3/upload/:fileKey
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `fileKey` | `string` | **Obrigatório**. The name shown on s3 after success upload |

#### Delete file

```http
  DELETE /api/s3/delete/:fileKey
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. File name on S3 |

#### Download file

```http
  GET /api/s3/get/:fileKey
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. File name on S3 |




## Variáveis de Ambiente

To run this project y'll have to create the .env.AWS_PROFILE file and put the following variables:
 (It's ok to put on .env too)
 
`AWS_REGION`

`AWS_ACCESS_KEY_ID`

`AWS_SECRET_ACCESS_KEY`

`BUCKET_NAME`

Y'll have to configure aws cli too, see this dock: https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-quickstart.html

## 🔗 Links
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/paulo-henrique-mendes-de-souza-a251981a2/)


## Autores

- PAULO HENRIQUE MENDES DE SOUZA  --  https://github.com/PauloMendees


/**
 * @interface ILogs
 * -> twofa_salt: É o token de autenticação de dois fatores armazenados na tabela 'users'
 * -> token: É uma string de 6 números enviada pelo usuário na autenticação de dois fatores.
 */

 export interface ILogs{
    status: number,
    message: string
}

export interface IExceptionProvider{
    
    userException(label:ILogs): Object;
}
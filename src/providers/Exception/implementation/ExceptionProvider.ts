import { IExceptionProvider, ILogs } from "../interface/IExceptionProvider";

export class ExceptionProvider implements IExceptionProvider {
    
     /**
     * @method createAuthToken responsável por criar o segredo com uma base numérica que será utilizada para gerar tokens. 
     * @param {label: twofa_salt, token}
     * @returns {secret.base32: string}
     */

     public status: number;
     public message: string;

     
     constructor(log:ILogs){
        this.status = log.status;
        this.message = log.message;
      
     }

    userException(): Object {
        
        return {status: this.status, message: this.message}
    }

}
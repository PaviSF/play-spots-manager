export interface RegisterData {
    turf_name: string;
    location: string;
    description: string;
    user_name: string;
    user_phone: string;
    user_email?: string;
  }

  export default interface RegisterResponseData {
    status: number;
    message: string;
  }
  

  export enum ResponseStatus {
    TOKEN_EXPIRED = 101,
    SUCCESS = 1,
    FAILED = 0,
  }
  

  
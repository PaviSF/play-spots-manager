interface RegisterData {
    turf_name: string;
    location: string;
    description: string;
    user_name: string;
    user_email: string;
    user_phone: string;
    longitude: number;
    latitude: number;
  }

  export default interface RegisterResponseData {
    status: number;
    message: string;
  }
  

  
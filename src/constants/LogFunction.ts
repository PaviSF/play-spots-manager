const LOGGING = true;

export default function logMessage(message:any): void {
  LOGGING && console.log(message);
}

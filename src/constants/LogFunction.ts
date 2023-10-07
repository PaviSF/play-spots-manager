const LOGGING = true;

export default function logMessage(message: string): void {
  LOGGING && console.log(message);
}

import { toast } from 'react-hot-toast';

export class ErrorHandler {
  static handle(error: unknown, fallbackMessage = 'An error occurred'): string {
    let message = fallbackMessage;

    if (error instanceof Error) {
      message = error.message;
    } else if (typeof error === 'string') {
      message = error;
    }

    toast.error(message);
    return message;
  }

  static async handleAsync<T>(
    promise: Promise<T>,
    options: {
      loadingMessage?: string;
      successMessage?: string;
      errorMessage?: string;
    } = {}
  ): Promise<T | null> {
    const { loadingMessage, successMessage, errorMessage } = options;

    try {
      if (loadingMessage) {
        toast.loading(loadingMessage);
      }

      const result = await promise;

      if (successMessage) {
        toast.success(successMessage);
      }

      return result;
    } catch (error) {
      this.handle(error, errorMessage);
      return null;
    }
  }
}
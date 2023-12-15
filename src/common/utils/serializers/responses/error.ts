import { HttpStatus } from '@nestjs/common';

/**
 * Success response type declaration.
 *
 * @interface
 */
interface ErrorResponse {
  statusCode: number;
  error: any;
  errorCode: string;
  message: string;
  success: boolean;
}

/**
 * Error response entity used for serializing response data.
 *
 * @class
 *
 * @implements {ErrorResponse}
 */
export class ErrorResponseEntity implements ErrorResponse {
  statusCode = HttpStatus.INTERNAL_SERVER_ERROR;
  error: any = {};
  errorCode = 'E_INTERNAL_ERROR';
  message = 'Error.';
  success = false;

  constructor(partial: Partial<ErrorResponseEntity>) {
    Object.assign(this, partial);
  }
}

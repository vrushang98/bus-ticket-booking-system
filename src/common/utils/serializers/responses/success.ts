import { HttpStatus } from '@nestjs/common';

/**
 * Success response type declaration.
 *
 * @interface
 */
interface SuccessResponse {
  statusCode: number;
  success: boolean;
  data: any;
  message: string;
}

/**
 * Success response entity used for serializing response data.
 *
 * @class
 *
 * @implements {SuccessResponse}
 */
export class SuccessResponseEntity implements SuccessResponse {
  statusCode = HttpStatus.OK;
  success = true;
  data: any = {};
  message = 'Success';
  constructor(partial: Partial<SuccessResponseEntity>) {
    // @ts-ignore
    BigInt.prototype.toJSON = function () {
      return this.toString();
    };

    Object.assign(this, partial);
  }
}

export class ResponseHelperEntity {
  /**
   * 响应一个错误
   * @param error 错误信息
   * @returns
   */
  public static sendError(error: string | '') {
    return {
      code:400,
      msg:error,
      data:[]
    }
  }

  /**
   * 响应一个成功数据
   * @param message 响应信息
   * @param data 响应数据
   * @returns
   */
  public static sendData(message: string, data: any) {
    return {
      code: 200,
      message,
      data,
    };
  }
}

// 用户相关js
class FieldValidator {
  // 构造函数
  constructor(fieldId, validatorFunction) {
    this.inputDom = document.querySelector('#' + fieldId)
    this.pDom = this.inputDom.nextElementSibling
    this.validatorFunction = validatorFunction
    this.inputDom.onblur = () => {
      this.verify()
    }
  }

  // 成员方法
  /**
   * 校验
   */
  async verify() {
    const verifyRes = await this.validatorFunction(this.inputDom.value)
    if (verifyRes) {
      this.pDom.innerText = verifyRes
      return false
    } else {
      this.pDom.innerText = ''
      return true
    }
  }

  // 静态方法
  static async verifyList(...validatorList) {
    const promiseList = validatorList.map((x) => x.validatorFunction)
    const result = await Promise.all(promiseList)
    return result
  }
}

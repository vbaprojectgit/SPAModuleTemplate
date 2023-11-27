import { IServiceModule } from 'web-modules-common'

export default class {{cookiecutter.moduleName}}Service implements IServiceModule {
  registerToEvents: Array<{
    subscriberId: string
    key: string
    callback: Function
  }> = []
  init: Function = () => {}
}

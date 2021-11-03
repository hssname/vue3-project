import { ElLoading, ElMessage, ElMessageBox, ElButton } from 'element-plus'
const components = [ElButton]
const plugins = [ ElLoading, ElMessage, ElMessageBox]

export const useElementPlus = (app: any) => {
    // 组件注册
    components.forEach(component => {
        app.component(component.name, component)
    });
    // 插件注册
    plugins.forEach(plugin => {
        app.use(plugin)
    });
}

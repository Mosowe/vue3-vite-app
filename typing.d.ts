declare module '@*'
declare module 'components*'

interface Window {
  $cancelRequest: Function;
}
interface Date { // 给Date添加方法
  Format(params: any): void;
}

export enum Notifications {
    Info = 'info',
    Warning = 'warning',
    Error = 'error',
    Success = 'success',
}
export interface NotificationProps {
    text:string,
    type: Notifications,
    isVisible:boolean
}

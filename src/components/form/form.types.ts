//probs makes more sense as an enum
export enum FieldTypes {
    Text = 'text',
    Email = 'email',
    Password = 'password',
    Number = 'number',
    Phone = 'phone',
    Radio =  'radio',
    Select =  'select',
    Checkbox = 'checkbox',
    Textarea = 'Textbox'
}

export type Rules = {
    maxLength?:number,
    minLength?:number,
    matcher?:RegExp
}

export type Option = {
    value:string,
    label:string,
    selected?:boolean
}

export enum FieldsetVariant {
    Default = 'default',
    Inline ='inline'
}
export interface Field {
    label:string,
    name:string,
    id:string,
    type?: FieldTypes
    error?:string,
    required?:boolean,
    hasError?:boolean,
    disabled?:boolean,
    rules?:Rules,
    options?: Option[],
    variant?: FieldsetVariant
}


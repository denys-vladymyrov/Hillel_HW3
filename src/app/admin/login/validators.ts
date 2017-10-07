import { FormControl } from '@angular/forms';

export function rangeValidator(min: number, max: number) {
    return (control: FormControl) => {
        if (control.value.length < min || control.value.length > max) {
            return {
                'rangeValidator': {
                    value: control.value
                }
            }
        }
    
        return null;
    }
}
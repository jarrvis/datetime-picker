import { Component } from '@stencil/core';
import flatpickr from 'flatpickr';

const CALENDER_CLASS_NAME = 'flatpickr-calendar';

@Component({
    tag: 'datetime-picker',
    styleUrl: 'datetime-picker.scss'
})
export class DatetimePicker {

    

    render() {
        return (
            <div>
                <p>Hello DatetimePicker!</p>
            </div>
        );
    }
}

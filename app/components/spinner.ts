import { Component,Input } from 'angular2/core';
@Component({
    selector : 'spinner',
    template : `
                <div>
                    <i class="fa fa-spinner fa-spin fa-5x fa-fw"></i>
                </div>`
})
export class Spinner{
    @Input() visible = true; 
    
}
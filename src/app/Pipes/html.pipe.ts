import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hTML'
})
export class HTMLPipe implements PipeTransform {

  transform(value: string, ...args: any[]): string {
      
      value = value.replace('"', '');
      
      while(value.includes('&lt;') || value.includes('&gt;')){
          value = `` + value.replace("&lt;", "<").replace("&gt;", ">") + ``;
      }
      
      return value;
  }

}

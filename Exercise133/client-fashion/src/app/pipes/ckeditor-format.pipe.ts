import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ckeditorFormat'
})
export class CkeditorFormatPipe implements PipeTransform {
  transform(value: string): string {
    // Thực hiện xử lý định dạng ở đây
    // Ví dụ: Loại bỏ thẻ p và thêm định dạng khác
    const formattedValue = value.replace(/<p>/g, '<span>').replace(/<\/p>/g, '</span>');
    return formattedValue;
  }

}
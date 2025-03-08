import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Fashion } from '../../classes/Fashion';
import { ClientFashionService } from '../client-fashion.service';
import { CkeditorFormatPipe } from '../pipes/ckeditor-format.pipe';

@Component({
  selector: 'app-client-fashion-detail',
  templateUrl: './client-fashion-detail.component.html',
  styleUrls: ['./client-fashion-detail.component.css'],
  imports: [CkeditorFormatPipe]
})

export class ClientFashionDetailComponent {
  fashion = new Fashion() // fashion data to show
  id: string = '' // fashion id
  errMessage: string = ''

  constructor(private _service: ClientFashionService, private _router: Router, private _activeroute: ActivatedRoute) {
    this._activeroute.params.subscribe(params => {
      this.id = params['id'] //
      if (this.id != null) {
        this.searchFashion(this.id) // get fashionselected
      }
      else {
        window.alert('Invalid fashion id to show')
        this._router.navigate(['client-fashion'])
      }
    })
  }

  searchFashion(fashionId: string) {
    this._service.getFashion(fashionId).subscribe({
      next: (data) => { this.fashion = data },
      error: (err) => { this.errMessage = err },
    })
  }
}
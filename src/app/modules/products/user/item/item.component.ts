import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductserService } from '../../services/products.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  signleItem: any;
  itemId: any;

  constructor(private route: ActivatedRoute,  private service: ProductserService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.itemId=params['id']
      this.showItem(this.itemId)
    });
  }
  showItem(id: any) {
    this.service.singleProduct(id).subscribe((res: any) => {
      this.signleItem = res
    })
  }
}

import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { ProductserService } from '../../../services/products.service';
import { ToastrService } from 'ngx-toastr';
import {PeriodicElement, Product} from '../../../models/product.model'
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.scss'],
})
export class AdminViewComponent implements AfterViewInit, OnInit {
  rowId: number =0
  editFlag: boolean = false
  openModelFlag:boolean = false
  modelMode: string ='add';
  modelHeader: string = "Add New Product"
  selectedProduct:any ;
  imageSrc: string ="";
  ProductsList:Product[] = [];
  dataSource = new MatTableDataSource(this.ProductsList);
  @ViewChild(MatTable) table!: MatTable<PeriodicElement>;
  @ViewChild(MatPaginator) paginator: MatPaginator = new MatPaginator(
    new MatPaginatorIntl(),
    ChangeDetectorRef.prototype
  );
  subs:Subscription[]=[]
  displayedColumns: string[] = [
    'title',
    'category',
    'price',
    'rating',
    'actions',
  ];
  constructor(
    private Productservice: ProductserService,
    private toastr: ToastrService,) { }

  ngOnInit(): void {
    this.getAllProducts()
  }

  getAllProducts() {
    this.Productservice.getProducts().subscribe(res=> {
      this.ProductsList = res;
    });
  }

  getRowId(id:number){
    this.rowId = id
      }

  deleteProduct() {
    this.Productservice.deleteProducts(this.rowId).subscribe(
      res=> {
        this.toastr.success("product Deleted Successfully")
        this.getAllProducts()
      },
      error=> {
        this.toastr.error("Oops We Has An Error")
      }
    );
  }

  productAdded(product: any) {
    console.log(product,"thamks")
    this.openModelFlag= false
    this.subs.push(
      this.Productservice.product.subscribe(res=>{
        this.ProductsList = res
      })
    )
  }
  cancelAddEditModal(){
    this.openModelFlag= false
  }

  openAddEditModal(productData?:Product[]) {
    if (productData) {
      this.modelHeader = "Edit Product";
      this.modelMode ="edit"
      this.selectedProduct = { ...productData };
    } else {
      this.selectedProduct = {};
      this.modelMode="add"
      this.modelHeader = "Add New Product";
    }
    this.openModelFlag = true;
  }

  productEdited(id: string) {
    this.openModelFlag= false
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}


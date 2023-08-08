import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductserService } from '../../../services/products.service';
import { ToastrService } from 'ngx-toastr';
import { Product } from '../../../models/product.model';
@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit-product.component.html',
  styleUrls: ['./add-edit-product.component.scss'],
})
export class AddEditComponent implements OnInit {
  productData!: FormGroup;
  url: String = '';
  imageSrc: String = '';
  @Input() modelOpend: boolean = false;
  productObject: Product = <Product>{};
  @Input() mode: string = '';
  @Output() cancelAddEditModal = new EventEmitter();
  @Input() header: string = '';
  @Output() productUpdated = new EventEmitter();
  @Output() productAdded = new EventEmitter();
  isEditMode: boolean = false;
  @Input() selectedProduct(product: Product) {
    if (product) {
      this.productObject = product;
      this.updateForm();
    } else {
      this.productObject = product;
    }
  }
  constructor(
    private formBuilder: FormBuilder,
    private ProductserService: ProductserService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.intiateProductForm();
  }

  intiateProductForm() {
    this.productData = this.formBuilder.group({
      title: ['', Validators.required],
      category: ['', Validators.required],
      Price: ['', Validators.required],
      description: [''],
    });
  }
  updateForm() {
    this.productData.patchValue({
      title: this.productObject.title,
      category: this.productObject.category,
      Price: this.productObject.price,
      description: this.productObject.description,
    });
  }
  submit() {
    if (this.mode == 'edit') {
      this.updateProduct();
    } else if (this.mode == 'add') {
      this.addNewProduct();
    }
  }
  addNewProduct() {
    this.ProductserService.Addproduct(this.productData.value).subscribe(
      (res) => {
        this.cancelAddEditModal.emit();
        this.ProductserService.product.next(res);
        // this.productAdded.emit(res);
        this.toastr.success('Product Add Successfully');
      },
      (error) => {
        this.toastr.error('Oops We Has An Error');
      }
    );
  }
  updateProduct() {
    this.ProductserService.updateProduct(
      this.productData.value,
      this.productObject.id
    ).subscribe(
      (res) => {
        this.cancelAddEditModal.emit();
        this.productUpdated.emit(this.productObject.id);
        this.toastr.success('Product Updated Successfully');
      },
      (error) => {
        this.toastr.error('Oops We Has An Error');
      }
    );
  }
  readURL(event: any): void {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.onload = (event: any) => {
        this.url = event.target.result;
        this.imageSrc = this.url;
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  }
  cancelModal() {
    this.cancelAddEditModal.emit();
  }
}

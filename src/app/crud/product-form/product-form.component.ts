import { Component, ElementRef, ViewChild } from '@angular/core';
import { CRUDService } from '../services/crud.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})

export class ProductFormComponent {
  // @ts-ignore
  productForm: FormGroup;

  constructor(
    private crudService: CRUDService, 
    private formBuilder: FormBuilder,
    private router: Router
  ) { }


  ngOnInit(): void {
    this.createProductForm();
  }

  @ViewChild('idMagento') idMagento!: ElementRef;
  @ViewChild('img') img!: ElementRef;
  @ViewChild('nomeProdotto') nomeProdotto!: ElementRef;
  @ViewChild ('brand') brand!: ElementRef;
  @ViewChild ('setAttributi') setAttributi!: ElementRef;
  @ViewChild ('SKU') SKU!: ElementRef;
  @ViewChild ('SKUFornitore') SKUFornitore!: ElementRef;
  @ViewChild ('qnt') qnt!: ElementRef;
  @ViewChild ('prezzo') prezzo!: ElementRef;
  @ViewChild ('attivo') attivo!: ElementRef;
  @ViewChild ('visibilità') visibilità!: ElementRef;
  @ViewChild ('tipologia') tipologia!: ElementRef;
  @ViewChild ('assegnatario') assegnatario!: ElementRef;
  @ViewChild ('presaInCarico') presaInCarico!: ElementRef;
  @ViewChild ('completamento') completamento!: ElementRef;
  @ViewChild ('lingue') lingue!: ElementRef;
  @ViewChild ('statoRevisione') statoRevisone!: ElementRef;
  @ViewChild ('score') score!: ElementRef;
  @ViewChild ('sync') sync!: ElementRef;
  
  

  createProductForm() {
    this.productForm = this.formBuilder.group({
      'id_magento': ['', Validators.compose([Validators.required])],
      'img': [''],
      'nome_prodotto': ['', Validators.compose([Validators.required])],
      'brand': [''],
      'set_attributi': [''],
      'SKU': [''],
      'SKU_fornitore': [''],
      'qnt': [''],
      'prezzo': [''],
      'attivo': [''],
      'visibilità': [''],
      'tipologia': [''],
      'assegnatario': [''],
      'presa_in_carico': [''],
      'completamento': [''],
      'lingue': [''],
      'stato_revisione': [''],
      'score': [''],
      'sync': ['']
    })
  }

  createProduct(values: any, isUpdate: any) {
    // output i dati inseriti nel form creaProdotto
    console.log(values);
    let formData = new FormData();
    formData.append('id_magento', values.id_magento);
    formData.append('img', values.img);
    formData.append('nome_prodotto', values.nome_prodotto);
    formData.append('brand', values.brand);
    formData.append('set_attributi', values.set_attributi);
    formData.append('SKU', values.SKU);
    formData.append('SKU_fornitore', values.SKU_fornitore);
    formData.append('qnt', values.qnt);
    formData.append('prezzo', values.prezzo);
    formData.append('attivo', values.attivo);
    formData.append('visibilità', values.visibilità);
    formData.append('tipologia', values.tipologia);
    formData.append('assegnatario', values.assegnatario);
    formData.append('presa_in_carico', values.presa_in_carico);
    formData.append('completamento', values.completamento);
    formData.append('lingue', values.lingue);
    formData.append('stato_revisione', values.stato_revisione);
    formData.append('score', values.score);
    formData.append('sync', values.sync);


    if (isUpdate) {
      // for update product details
    } else {
      this.crudService.createProduct(formData).subscribe(res => {
        if (res.body && res.body.result === 'success'){
          this.router.navigate(['/crud/product-list']);
        }
      })
    }

    // Reset il form dopo aver aggiunto un prodotto
    const campiForm = [
      this.idMagento,
      this.img,
      this.nomeProdotto,
      this.brand,
      this.setAttributi,
      this.SKU,
      this.SKUFornitore,
      this.qnt,
      this.prezzo,
      this.attivo,
      this.visibilità,
      this.tipologia,
      this.assegnatario,
      this.presaInCarico,
      this.completamento,
      this.lingue,
      this.statoRevisone,
      this.score,
      this.sync
    ];
    
    campiForm.forEach(campo => {
      campo.nativeElement.value = '';
    });
    

  }
}

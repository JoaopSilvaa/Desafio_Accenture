import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FornecedorDialogComponent } from './fornecedor-dialog.component';

describe('FornecedorDialogComponent', () => {
  let component: FornecedorDialogComponent;
  let fixture: ComponentFixture<FornecedorDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FornecedorDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FornecedorDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

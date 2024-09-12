package com.backend.backend.domain;

import jakarta.persistence.*;

@Entity

public class Empresa_Fornecedor {
    @Id
    @ManyToOne(optional = false)
    @JoinColumn(name = "idEmpresa", nullable = false)
    private Empresa empresa;
    @ManyToOne(optional = false)
    @JoinColumn(name = "idFornecedor", nullable = false)
    private Fornecedor fornecedor;
    // Getters e Setters

    public Empresa getEmpresa() {
        return empresa;
    }

    public void setEmpresa(Empresa empresa) {
        this.empresa = empresa;
    }

    public Fornecedor getFornecedor() {
        return fornecedor;
    }

    public void setFornecedor(Fornecedor fornecedor) {
        this.fornecedor = fornecedor;
    }
}
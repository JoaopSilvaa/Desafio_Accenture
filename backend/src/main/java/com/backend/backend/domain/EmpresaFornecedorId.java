package com.backend.backend.domain;

import java.io.Serializable;
import java.util.Objects;

public class EmpresaFornecedorId implements Serializable {
    private Long empresa;
    private Long fornecedor;

    // Getters, Setters, hashCode e equals

    public Long getEmpresa() {
        return empresa;
    }

    public void setEmpresa(Long empresa) {
        this.empresa = empresa;
    }

    public Long getFornecedor() {
        return fornecedor;
    }

    public void setFornecedor(Long fornecedor) {
        this.fornecedor = fornecedor;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        EmpresaFornecedorId that = (EmpresaFornecedorId) o;
        return Objects.equals(empresa, that.empresa) && Objects.equals(fornecedor, that.fornecedor);
    }

    @Override
    public int hashCode() {
        return Objects.hash(empresa, fornecedor);
    }
}

package com.backend.backend.domain;

import jakarta.persistence.*;

import java.util.Date;

@Entity
public class Fornecedor {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idFornecedor;
    private Long CNPJ_CPF;
    private String Nome;
    private Long RG;
    private Date Data_de_Nascimento;
    private String Email;
    private String CEP;
    private String Logradouro;
    private String Bairro;
    private String Cidade;
    private String Estado;
    private String Numero;
    // Getters e Setters

    public Long getIdFornecedor() {
        return idFornecedor;
    }

    public void setIdFornecedor(Long idFornecedor) {
        this.idFornecedor = idFornecedor;
    }

    public Long getCNPJ_CPF() {
        return CNPJ_CPF;
    }

    public void setCNPJ_CPF(Long CNPJ_CPF) {
        this.CNPJ_CPF = CNPJ_CPF;
    }

    public String getNome() {
        return Nome;
    }

    public void setNome(String Nome) {
        this.Nome = Nome;
    }

    public Long getRG() {
        return RG;
    }

    public void setRG(Long RG) {
        this.RG = RG;
    }

    public Date getData_de_Nascimento() {
        return Data_de_Nascimento;
    }

    public void setData_de_Nascimento(Date Data_de_Nascimento) {
        this.Data_de_Nascimento = Data_de_Nascimento;
    }

    public String getEmail() {
        return Email;
    }

    public void setEmail(String Email) {
        this.Email = Email;
    }

    public String getCEP() {
        return CEP;
    }

    public void setCEP(String CEP) {
        this.CEP = CEP;
    }

    public String getLogradouro() {
        return Logradouro;
    }

    public void setLogradouro(String Logradouro) {
        this.Logradouro = Logradouro;
    }

    public String getBairro() {
        return Bairro;
    }

    public void setBairro(String Bairro) {
        this.Bairro = Bairro;
    }

    public String getCidade() {
        return Cidade;
    }

    public void setCidade(String Cidade) {
        this.Cidade = Cidade;
    }

    public String getEstado() {
        return Estado;
    }

    public void setEstado(String Estado) {
        this.Estado = Estado;
    }

    public String getNumero() {
        return Numero;
    }

    public void setNumero(String Numero) {
        this.Numero = Numero;
    }
}
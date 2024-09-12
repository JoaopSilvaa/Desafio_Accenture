package com.backend.backend.repository;

import com.backend.backend.domain.EmpresaFornecedor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface EmpresaFornecedorRepository extends JpaRepository<EmpresaFornecedor, Long> {

    @Query("SELECT ef FROM EmpresaFornecedor ef WHERE ef.empresa.idEmpresa = :idEmpresa")
    public List<EmpresaFornecedor> findByEmpresa(@Param("idEmpresa") Long idEmpresa);

    @Query("SELECT ef FROM EmpresaFornecedor ef WHERE ef.fornecedor.idFornecedor = :idFornecedor")
    public List<EmpresaFornecedor> findByFornecedor(@Param("idFornecedor") Long idFornecedor);
}

package com.backend.backend.service;

import com.backend.backend.domain.EmpresaFornecedor;
import com.backend.backend.repository.EmpresaFornecedorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class EmpresaFornecedorService {
    @Autowired
    private EmpresaFornecedorRepository empresaFornecedorRepository;

    public List<EmpresaFornecedor> listarTodos() {
        return empresaFornecedorRepository.findAll();
    }

    public EmpresaFornecedor salvar(EmpresaFornecedor empresaFornecedor) {
        return empresaFornecedorRepository.save(empresaFornecedor);
    }

    public void excluir(Long id) {
        empresaFornecedorRepository.deleteById(id);
    }

    public List<EmpresaFornecedor> buscarPorEmpresa(Long id) {
        return empresaFornecedorRepository.findByEmpresa(id);
    }

    public List<EmpresaFornecedor> buscarPorFornecedor(Long id) {
        return empresaFornecedorRepository.findByFornecedor(id);
    }

}
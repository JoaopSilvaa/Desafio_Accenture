package com.backend.backend.service;

import com.backend.backend.domain.Empresa;
import com.backend.backend.repository.EmpresaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class EmpresaService {
    @Autowired
    private EmpresaRepository empresaRepository;

    public List<Empresa> listarTodos() {
        return empresaRepository.findAll();
    }

    public Empresa salvar(Empresa empresa) {
        return empresaRepository.save(empresa);
    }

    public void excluir(Long id) {
        empresaRepository.deleteById(id);
    }

    public Empresa buscarPorId(Long id) {
        return empresaRepository.findById(id).get();
    }
}
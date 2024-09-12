package com.backend.backend.controller;

import com.backend.backend.domain.Empresa;
import com.backend.backend.service.EmpresaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/empresa")
public class EmpresaController {
    @Autowired
    private EmpresaService empresaService;

    @GetMapping
    public ResponseEntity<List<Empresa>> listarTodos() {
        List<Empresa> empresaList = empresaService.listarTodos();
        return ResponseEntity.ok(empresaList);
    }

    @PostMapping
    public ResponseEntity<Empresa> salvar(@RequestBody Empresa empresa) {
        Empresa empresaResponse = empresaService.salvar(empresa);
        return ResponseEntity.ok(empresaResponse);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> remover(@PathVariable Long id) {
        try {
            empresaService.excluir(id);
            return ResponseEntity.ok().build();
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<Empresa> buscarPorId(@PathVariable Long id) {
        Empresa empresa = empresaService.buscarPorId(id);
        if (empresa != null) {
            return ResponseEntity.ok(empresa);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
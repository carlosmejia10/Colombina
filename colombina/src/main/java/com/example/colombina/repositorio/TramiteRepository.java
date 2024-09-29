package com.example.colombina.repositorio;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.colombina.entidad.Tramite;
import com.example.colombina.entidad.Usuario;
public interface TramiteRepository extends JpaRepository <Tramite, Long>{
    List<Tramite> findByTipo(String tipo);
    List<Tramite> findByUsuario(Usuario usuario);
    List<Tramite> findByTitulo(String titulo);
    
}

package com.example.colombina.servicio;

import com.example.colombina.entidad.Usuario;
import com.example.colombina.repositorio.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UsuarioService {

    private final UsuarioRepository usuarioRepository;

    @Autowired
    public UsuarioService(UsuarioRepository usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }


    public Usuario saveUsuario(Usuario usuario) {
        return usuarioRepository.save(usuario);
    }


    public Optional<Usuario> getUsuarioById(Long id) {
        return usuarioRepository.findById(id);
    }


    public Optional<Usuario> getUsuarioByCredencial(String credencial) {
        return usuarioRepository.findByCredencial(credencial);
    }


    public Optional<Usuario> getUsuarioByCorreo(String correo) {
        return usuarioRepository.findByCorreo(correo);
    }


    public List<Usuario> getUsuariosByTipo(String tipo) {
        return usuarioRepository.findByTipo(tipo);
    }


    public void deleteUsuarioById(Long id) {
        usuarioRepository.deleteById(id);
    }


    public List<Usuario> getAllUsuarios() {
        return usuarioRepository.findAll();
    }
}
package com.example.colombina.controlador;

import com.example.colombina.entidad.Usuario;
import com.example.colombina.servicio.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Info;

@RestController
@RequestMapping("/api/usuarios")
@OpenAPIDefinition(info = @Info(title = "Usuarios API", version = "1.0", description = "API para la gestión de usuarios"))
public class UsuarioController {

    @Autowired
    UsuarioService usuarioService;

    // GET: Obtener todos los usuarios
    @GetMapping
    @Operation(summary = "Obtener todos los usuarios", description = "Devuelve una lista de todos los usuarios registrados.")
    public ResponseEntity<List<Usuario>> getAllUsuarios() {
        List<Usuario> usuarios = usuarioService.getAllUsuarios();
        return new ResponseEntity<>(usuarios, HttpStatus.OK);
    }

    // GET: Obtener un usuario por ID
    @GetMapping("/{id}")
    @Operation(summary = "Obtener un usuario por ID", description = "Devuelve los detalles de un usuario específico según su ID.")
    public ResponseEntity<Usuario> getUsuarioById(
        @Parameter(description = "ID del usuario a obtener", required = true) @PathVariable Long id) {
        Optional<Usuario> usuario = usuarioService.getUsuarioById(id);
        return usuario.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                      .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    // GET: Obtener un usuario por credencial
    @GetMapping("/credencial/{credencial}")
    @Operation(summary = "Obtener un usuario por credencial", description = "Devuelve los detalles de un usuario por su credencial.")
    public ResponseEntity<Usuario> getUsuarioByCredencial(
        @Parameter(description = "Credencial del usuario", required = true) @PathVariable String credencial) {
        Optional<Usuario> usuario = usuarioService.getUsuarioByCredencial(credencial);
        return usuario.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                      .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    // GET: Obtener usuarios por tipo
    @GetMapping("/tipo/{tipo}")
    @Operation(summary = "Obtener usuarios por tipo", description = "Devuelve una lista de usuarios según su tipo (admin, usuario regular, etc.).")
    public ResponseEntity<List<Usuario>> getUsuariosByTipo(
        @Parameter(description = "Tipo de usuario a buscar", required = true) @PathVariable String tipo) {
        List<Usuario> usuarios = usuarioService.getUsuariosByTipo(tipo);
        return new ResponseEntity<>(usuarios, HttpStatus.OK);
    }

    // POST: Crear un nuevo usuario
    @PostMapping
    @Operation(summary = "Crear un nuevo usuario", description = "Permite registrar un nuevo usuario en el sistema.")
    public ResponseEntity<Usuario> createUsuario(
        @Parameter(description = "Detalles del usuario a crear", required = true) @RequestBody Usuario usuario) {
        Usuario nuevoUsuario = usuarioService.saveUsuario(usuario);
        return new ResponseEntity<>(nuevoUsuario, HttpStatus.CREATED);
    }

    // PUT: Actualizar un usuario existente
    @PutMapping("/Update/{id}")
    @Operation(summary = "Actualizar un usuario", description = "Permite actualizar los detalles de un usuario existente.")
    public ResponseEntity<Usuario> updateUsuario(
        @Parameter(description = "ID del usuario a actualizar", required = true) @PathVariable Long id,
        @Parameter(description = "Nuevos detalles del usuario", required = true) @RequestBody Usuario usuarioActualizado) {
        Optional<Usuario> usuarioOptional = usuarioService.getUsuarioById(id);
        if (usuarioOptional.isPresent()) {
            Usuario usuario = usuarioOptional.get();
            usuario.setUsuario(usuarioActualizado.getUsuario());
            usuario.setCorreo(usuarioActualizado.getCorreo());
            usuario.setTipo(usuarioActualizado.getTipo());
            usuario.setContraseña(usuarioActualizado.getContraseña());
            Usuario usuarioGuardado = usuarioService.saveUsuario(usuario);
            return new ResponseEntity<>(usuarioGuardado, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    // DELETE: Eliminar un usuario por ID
    @DeleteMapping("/Delete/{id}")
    @Operation(summary = "Eliminar un usuario", description = "Permite eliminar un usuario del sistema utilizando su ID.")
    public ResponseEntity<Void> deleteUsuarioById(
        @Parameter(description = "ID del usuario a eliminar", required = true) @PathVariable Long id) {
        Optional<Usuario> usuarioOptional = usuarioService.getUsuarioById(id);
        if (usuarioOptional.isPresent()) {
            usuarioService.deleteUsuarioById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}

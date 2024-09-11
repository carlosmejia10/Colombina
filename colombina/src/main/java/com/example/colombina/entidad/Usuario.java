package com.example.colombina.entidad;
import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;

@Entity
public class Usuario {
    //Atributos
    @Id
    @GeneratedValue
    private Long id;
    
    private String credencial;
    private String correo;
    private String tipo;
    private String contraseña;

    //Relaciones
    @OneToMany(mappedBy="usuario", cascade=CascadeType.ALL, orphanRemoval=true)
    private List<Tramite> tramites = new ArrayList<>();

    //Constructores
    public Usuario(Long id, String credencial, String correo, String tipo, String contraseña, List<Tramite> tramites) {
        this.id = id;
        this.credencial = credencial;
        this.correo = correo;
        this.tipo = tipo;
        this.contraseña = contraseña;
        this.tramites = tramites;
    }

    public Usuario() {
    }

    public Usuario(String credencial, String correo, String tipo, String contraseña, List<Tramite> tramites) {
        this.credencial = credencial;
        this.correo = correo;
        this.tipo = tipo;
        this.contraseña = contraseña;
        this.tramites = tramites;
    }

    //Getters y setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsuario() {
        return credencial;
    }

    public void setUsuario(String credencial) {
        this.credencial = credencial;
    }

    public String getCorreo() {
        return correo;
    }

    public void setCorreo(String correo) {
        this.correo = correo;
    }

    public String getTipo() {
        return tipo;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }

    public String getContraseña() {
        return contraseña;
    }

    public void setContraseña(String contraseña) {
        this.contraseña = contraseña;
    }

    public List<Tramite> getTramites() {
        return tramites;
    }

    public void setTramites(List<Tramite> tramites) {
        this.tramites = tramites;
    }

    
}

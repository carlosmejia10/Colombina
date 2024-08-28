package com.colombina.colombina_app.model;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToMany;

@Entity
public class Tramites {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nombre;
    private String descripcion;
    private String requisitos;

    public Tramites() {
    }

    public Tramites(String nombre, String descripcion, String requisitos, Long id) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.requisitos = requisitos;
    }

    @ManyToMany
    @JoinTable(name = "tramites_usuarios", joinColumns = @JoinColumn(name = "tramite_id"), inverseJoinColumns = @JoinColumn(name = "usuario_id"))
    private List<Usuarios> usuarios = new ArrayList<>();

    @OneToMany(mappedBy = "tramite")
    private List<TramitesUsuarios> tramitesUsuarios = new ArrayList<>();

    public void setId(Long id) {
        this.id = id;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public void setRequisitos(String requisitos) {
        this.requisitos = requisitos;
    }

    public Long getId() {
        return id;
    }

    public String getNombre() {
        return nombre;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public String getRequisitos() {
        return requisitos;
    }
}

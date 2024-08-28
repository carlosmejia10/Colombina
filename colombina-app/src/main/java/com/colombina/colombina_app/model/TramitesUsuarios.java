package com.colombina.colombina_app.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class TramitesUsuarios {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "tramite_id")
    private Tramites tramite;

    @ManyToOne
    @JoinColumn(name = "usuario_id")
    private Usuarios usuario;

    // Otros campos adicionales que quieras en la tabla intermedia

    public TramitesUsuarios() {
    }

    public TramitesUsuarios(Tramites tramite, Usuarios usuario) {
        this.tramite = tramite;
        this.usuario = usuario;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Tramites getTramite() {
        return tramite;
    }

    public void setTramite(Tramites tramite) {
        this.tramite = tramite;
    }

    public Usuarios getUsuario() {
        return usuario;
    }

    public void setUsuario(Usuarios usuario) {
        this.usuario = usuario;
    }
}

package com.example.colombina.repositorio;


import org.springframework.data.jpa.repository.JpaRepository;


import com.example.colombina.entidad.DatabaseInit;


public interface DatabaseInitRepository extends JpaRepository <DatabaseInit, Long>{

    
} 

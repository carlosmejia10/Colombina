package com.example.colombina.entidad;

import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Controller;

import jakarta.transaction.Transactional;

//Implementar clases de repositorio para inicializar la base de datos

//@Autowired
//UsuarioRepository usuarioRepository;

//...

@Controller
@Transactional
public class DatabaseInit implements ApplicationRunner {

    @Override
    public void run(ApplicationArguments args) throws Exception {
        //Implementacion del repositorio
    }
    
}

package com.cefetmg.reserva_facil_laboratorios.services.impl.reservas.validations;

public class ReservaException extends RuntimeException{
    public ReservaException(String errorMessage){
        super(errorMessage);
    }
}

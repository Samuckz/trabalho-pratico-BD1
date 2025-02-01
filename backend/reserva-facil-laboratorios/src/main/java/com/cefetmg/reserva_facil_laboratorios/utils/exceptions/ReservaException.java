package com.cefetmg.reserva_facil_laboratorios.utils.exceptions;

public class ReservaException extends RuntimeException{
    public ReservaException(String errorMessage){
        super(errorMessage);
    }
}

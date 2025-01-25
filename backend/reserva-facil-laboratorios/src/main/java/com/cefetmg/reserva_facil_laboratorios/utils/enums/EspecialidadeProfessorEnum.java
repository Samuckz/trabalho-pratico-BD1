package com.cefetmg.reserva_facil_laboratorios.utils.enums;

import lombok.Getter;

@Getter
public enum EspecialidadeProfessorEnum {
  ENGENHARIA_COMPUTACAO("Engenharia da Computação"),
  ENGENHARIA_ELETRICA("Engenharia Elétrica"),
  ADMINISTRACAO("Administração"),
  ARQUITETURA("Arquitetura"),
  CIENCIAS_CONTABEIS("Ciências Contábeis"),
  CIENCIAS_DA_COMPUTACAO("Ciências da Computação"),
  DIREITO("Direito"),
  ENGENHARIA_AMBIENTAL("Engenharia Ambiental"),
  ENGENHARIA_CIVIL("Engenharia Civil"),
  ENGENHARIA_MECANICA("Engenharia Mecânica"),
  ENGENHARIA_DE_PRODUCAO("Engenharia de Produção"),
  FARMACIA("Farmácia"),
  MEDICINA("Medicina"),
  PEDAGOGIA("Pedagogia"),
  PSICOLOGIA("Psicologia");

  private final String especialidade;

  EspecialidadeProfessorEnum(String especialidade) {
    this.especialidade = especialidade;
  }
}

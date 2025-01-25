package com.cefetmg.reserva_facil_laboratorios.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "TB_LABORATORIOS")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Laboratorio {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column(unique = true, nullable = false)
  private String nome;

  @Column(nullable = false)
  private Integer capacidadeMaxima;

  @Column(nullable = false)
  private Integer predio;

  @Column(nullable = false)
  private Integer sala;

  public Laboratorio(String nome, Integer capacidadeMaxima, Integer predio, Integer sala) {
    this.nome = nome;
    this.capacidadeMaxima = capacidadeMaxima;
    this.predio = predio;
    this.sala = sala;
  }
}

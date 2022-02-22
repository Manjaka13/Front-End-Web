import { Client } from "./client";
import { JourSemaineType } from "./jourSemaineType";
import { Media } from "./media";
import { Probleme } from "./probleme";
import { RapportChantierRegulier } from "./rapportChantierRegulier";
import { Site } from "./site";
import { StatusType } from "./statusType";
import { StatusIntervention } from "./statusIntervention";

export class ChantierGet {
  constructor(
    public id: number,
    public site: Site,
    public client: Client,
    public problemes: Set<Probleme>,
    public medias: Set<Media>,
    public adresse: string,
    public ouvriers: Set<string>,
    public nbOuvrier: number,
    public materiel: string,
    public dateDebutTheorique: Date,
    public dateFinTheorique: Date,
    public estimationTemps: number,
    public telephone: string,
    public statusChantier: StatusType,
    public nomChantier: string,
    public informationsInterne: string,
    public description: string,
    public dateDebutEffectif: Date,
    public dateFinEffectif: Date,
    public conducteurPresent: boolean,
    public regularite: boolean,
    public statusIntervention?: StatusIntervention,
    public volume?: string,
    public poid?: string,
    public accessibilite?: string,
    public joursRegularite?: Array<JourSemaineType>,
    public dateDebutRegularite?: Date,
    public dateFinRegularite?: Date,
    public rapportsRegulier?: Set<RapportChantierRegulier>
  ) {}
}

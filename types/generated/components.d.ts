import type { Schema, Attribute } from '@strapi/strapi';

export interface ArticlesArticles extends Schema.Component {
  collectionName: 'components_articles_articles';
  info: {
    displayName: 'Articles';
    icon: 'feather';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    content: Attribute.RichText & Attribute.Required;
    image: Attribute.Media;
    button_title: Attribute.String;
    button_url: Attribute.String;
    showImageOnMobile: Attribute.Boolean & Attribute.DefaultTo<true>;
    openNewTab: Attribute.Boolean & Attribute.DefaultTo<true>;
  };
}

export interface ComiteeMemberMembre extends Schema.Component {
  collectionName: 'components_comitee_member_membres';
  info: {
    displayName: 'Membre';
    icon: 'emotionHappy';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    function: Attribute.String;
    description: Attribute.String;
    image: Attribute.Media;
  };
}

export interface CreneauxCreneaux extends Schema.Component {
  collectionName: 'components_creneaux_creneaux';
  info: {
    displayName: 'Cr\u00E9neaux';
    icon: 'priceTag';
  };
  attributes: {
    title: Attribute.String;
    subtitle: Attribute.String;
    day: Attribute.Enumeration<
      ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche']
    >;
    color: Attribute.Enumeration<['Bleu', 'Gris']>;
  };
}

export interface EventsEvenements extends Schema.Component {
  collectionName: 'components_events_evenements';
  info: {
    displayName: 'Evenements';
    icon: 'bell';
    description: '';
  };
  attributes: {
    date: Attribute.Date;
    title: Attribute.String;
    content: Attribute.RichText;
    image: Attribute.Media;
  };
}

export interface LicenseLicence extends Schema.Component {
  collectionName: 'components_license_licences';
  info: {
    displayName: 'Licence';
    icon: 'file';
  };
  attributes: {
    name: Attribute.String;
    price: Attribute.String;
    description: Attribute.String;
  };
}

export interface TeamEquipe extends Schema.Component {
  collectionName: 'components_team_equipes';
  info: {
    displayName: '\u00C9quipe';
    icon: 'rocket';
  };
  attributes: {
    name: Attribute.String;
    image: Attribute.Media;
    description: Attribute.RichText;
    ranking: Attribute.String;
    rankingColor: Attribute.Enumeration<['red', 'blue', 'green']>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'articles.articles': ArticlesArticles;
      'comitee-member.membre': ComiteeMemberMembre;
      'creneaux.creneaux': CreneauxCreneaux;
      'events.evenements': EventsEvenements;
      'license.licence': LicenseLicence;
      'team.equipe': TeamEquipe;
    }
  }
}

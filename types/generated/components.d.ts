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

export interface ArticlesItem extends Schema.Component {
  collectionName: 'components_articles_items';
  info: {
    displayName: 'Item';
    icon: 'shoppingCart';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    image: Attribute.Media;
    price: Attribute.String;
  };
}

export interface ArticlesStep extends Schema.Component {
  collectionName: 'components_articles_steps';
  info: {
    displayName: 'Step';
    icon: 'check';
  };
  attributes: {
    description: Attribute.RichText & Attribute.Required;
    icon: Attribute.RichText;
    button_action: Attribute.String;
    button_title: Attribute.String;
    button_icon: Attribute.Enumeration<['download', 'link']>;
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

export interface LeaderboardLeaderboard extends Schema.Component {
  collectionName: 'components_leaderboard_leaderboards';
  info: {
    displayName: 'Leaderboard';
    icon: 'bold';
    description: '';
  };
  attributes: {
    competition_id: Attribute.String;
    rows: Attribute.Component<'team.row', true>;
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

export interface SaisonSaison extends Schema.Component {
  collectionName: 'components_saison_saisons';
  info: {
    displayName: 'Saison';
    icon: 'briefcase';
  };
  attributes: {
    name: Attribute.String;
  };
}

export interface SectionSection extends Schema.Component {
  collectionName: 'components_section_sections';
  info: {
    displayName: 'Section';
    icon: 'collapse';
  };
  attributes: {
    articles: Attribute.Component<'articles.articles', true>;
    title: Attribute.String;
  };
}

export interface TeamEquipe extends Schema.Component {
  collectionName: 'components_team_equipes';
  info: {
    displayName: '\u00C9quipe';
    icon: 'rocket';
    description: '';
  };
  attributes: {
    image: Attribute.Media;
    ranking: Attribute.String;
    icbad_id: Attribute.String;
    group: Attribute.String;
    color: Attribute.Enumeration<['blue', 'grey']> &
      Attribute.DefaultTo<'blue'>;
    major: Attribute.Boolean;
    leaderboard: Attribute.Component<'leaderboard.leaderboard'>;
    season: Attribute.Relation<'team.equipe', 'oneToOne', 'api::season.season'>;
  };
}

export interface TeamRow extends Schema.Component {
  collectionName: 'components_team_rows';
  info: {
    displayName: 'Row';
    icon: 'code';
    description: '';
  };
  attributes: {
    club: Attribute.String;
    won: Attribute.Integer & Attribute.Required;
    lost: Attribute.Integer;
    total: Attribute.Integer;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'articles.articles': ArticlesArticles;
      'articles.item': ArticlesItem;
      'articles.step': ArticlesStep;
      'comitee-member.membre': ComiteeMemberMembre;
      'creneaux.creneaux': CreneauxCreneaux;
      'events.evenements': EventsEvenements;
      'leaderboard.leaderboard': LeaderboardLeaderboard;
      'license.licence': LicenseLicence;
      'saison.saison': SaisonSaison;
      'section.section': SectionSection;
      'team.equipe': TeamEquipe;
      'team.row': TeamRow;
    }
  }
}

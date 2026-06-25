import type { Schema, Struct } from '@strapi/strapi';

export interface ArticlesArticles extends Struct.ComponentSchema {
  collectionName: 'components_articles_articles';
  info: {
    description: '';
    displayName: 'Articles';
    icon: 'feather';
  };
  attributes: {
    button_title: Schema.Attribute.String;
    button_url: Schema.Attribute.String;
    content: Schema.Attribute.RichText & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images', true>;
    openNewTab: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    showImageOnMobile: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ArticlesItem extends Struct.ComponentSchema {
  collectionName: 'components_articles_items';
  info: {
    displayName: 'Item';
    icon: 'shoppingCart';
  };
  attributes: {
    image: Schema.Attribute.Media<'images', true>;
    price: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ArticlesStep extends Struct.ComponentSchema {
  collectionName: 'components_articles_steps';
  info: {
    displayName: 'Step';
    icon: 'check';
  };
  attributes: {
    button_action: Schema.Attribute.String;
    button_icon: Schema.Attribute.Enumeration<['download', 'link']>;
    button_title: Schema.Attribute.String;
    description: Schema.Attribute.RichText & Schema.Attribute.Required;
    icon: Schema.Attribute.RichText;
  };
}

export interface ComiteeMemberMembre extends Struct.ComponentSchema {
  collectionName: 'components_comitee_member_membres';
  info: {
    displayName: 'Membre';
    icon: 'emotionHappy';
  };
  attributes: {
    description: Schema.Attribute.String;
    function: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface CreneauxCreneaux extends Struct.ComponentSchema {
  collectionName: 'components_creneaux_creneaux';
  info: {
    displayName: 'Cr\u00E9neaux';
    icon: 'priceTag';
  };
  attributes: {
    color: Schema.Attribute.Enumeration<['Bleu', 'Gris']>;
    day: Schema.Attribute.Enumeration<
      ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche']
    >;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface EventsEvenements extends Struct.ComponentSchema {
  collectionName: 'components_events_evenements';
  info: {
    description: '';
    displayName: 'Evenements';
    icon: 'bell';
  };
  attributes: {
    content: Schema.Attribute.RichText;
    date: Schema.Attribute.Date;
    image: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
  };
}

export interface LeaderboardLeaderboard extends Struct.ComponentSchema {
  collectionName: 'components_leaderboard_leaderboards';
  info: {
    description: '';
    displayName: 'Leaderboard';
    icon: 'bold';
  };
  attributes: {
    competition_id: Schema.Attribute.String;
    rows: Schema.Attribute.Component<'team.row', true>;
  };
}

export interface LicenseLicence extends Struct.ComponentSchema {
  collectionName: 'components_license_licences';
  info: {
    displayName: 'Licence';
    icon: 'file';
  };
  attributes: {
    description: Schema.Attribute.String;
    name: Schema.Attribute.String;
    price: Schema.Attribute.String;
  };
}

export interface SaisonSaison extends Struct.ComponentSchema {
  collectionName: 'components_saison_saisons';
  info: {
    displayName: 'Saison';
    icon: 'briefcase';
  };
  attributes: {
    name: Schema.Attribute.String;
  };
}

export interface SectionSection extends Struct.ComponentSchema {
  collectionName: 'components_section_sections';
  info: {
    displayName: 'Section';
    icon: 'collapse';
  };
  attributes: {
    articles: Schema.Attribute.Component<'articles.articles', true>;
    title: Schema.Attribute.String;
  };
}

export interface TeamEquipe extends Struct.ComponentSchema {
  collectionName: 'components_team_equipes';
  info: {
    description: '';
    displayName: '\u00C9quipe';
    icon: 'rocket';
  };
  attributes: {
    color: Schema.Attribute.Enumeration<['blue', 'grey']> &
      Schema.Attribute.DefaultTo<'blue'>;
    group: Schema.Attribute.String;
    icbad_id: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    images: Schema.Attribute.Media<'images', true>;
    leaderboard: Schema.Attribute.Component<'leaderboard.leaderboard', false>;
    major: Schema.Attribute.Boolean;
    ranking: Schema.Attribute.String;
    season: Schema.Attribute.Relation<'oneToOne', 'api::season.season'>;
  };
}

export interface TeamRow extends Struct.ComponentSchema {
  collectionName: 'components_team_rows';
  info: {
    description: '';
    displayName: 'Row';
    icon: 'code';
  };
  attributes: {
    club: Schema.Attribute.String;
    lost: Schema.Attribute.Integer;
    total: Schema.Attribute.Integer;
    won: Schema.Attribute.Integer & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
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

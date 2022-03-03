/** Enumerates content positions for PDF. */
export enum ContentType {
  FULL_NAME,
  PLACE_OF_BIRTH,
  //GENDER, /** Not needed in the new form*/
  //PARENT_NAME, /** Not needed in the new form*/
  JMBG,
  //PASSPORT_NUMBER, /** Not needed in the new form*/
  SERBIAN_ADDRESS,
  //INTERNALLY_DISPLACED_ADDRESS, /** Not needed in the new form*/
  //FOREIGN_COUNTRY, /** Not needed in the new form, but we might still need it for picking the right email*/
  FOREIGN_ADDRESS,
  POLL_STATION, /** See how to use this vs the FOREIGN_COUNTRY field*/
  //SIGN_PLACE, /** Not needed in the new form*/
  SIGN_DATE,
  //SIGN_NAME, /** Not needed in the new form*/
  SIGNATURE,
  PHONE, /** Split into two fileds in the new form: form and email*/
  EMAIL,
}

export type WriteType = 'text' | 'image';

/** Describes where and how a piece of content should be placed. */
export interface ContentWriteSpec {
  x: number;
  y: number;
  isAddress?: boolean,
}

export function getContentWriteSpec(contentType: ContentType) {
  switch (contentType) {
    case ContentType.FULL_NAME:
      return {x: 285, y: 640};
    case ContentType.PLACE_OF_BIRTH:
      return {x: 285, y: 610};
    // case ContentType.GENDER:
    //   return {x: 300, y: 565};
    // case ContentType.PARENT_NAME:
    //   return {x: 300, y: 544};
    case ContentType.JMBG:
      return {x: 290, y: 550};
    // case ContentType.PASSPORT_NUMBER:
    //   return {x: 300, y: 495};
    case ContentType.SERBIAN_ADDRESS:
      return {x: 290, y: 500, isAddress: true};
    // case ContentType.INTERNALLY_DISPLACED_ADDRESS:
    //   return {x: 300, y: 435, isAddress: true};
    // case ContentType.FOREIGN_COUNTRY:
    //   return {x: 285, y: 395};
    case ContentType.FOREIGN_ADDRESS:
      return {x: 290, y: 460, isAddress: true};
    case ContentType.POLL_STATION:
      return {x: 290, y: 425};
    // case ContentType.SIGN_PLACE:
    //   return {x: 140, y: 265};
    case ContentType.SIGN_DATE:
      return {x: 140, y: 320};
    // case ContentType.SIGN_NAME:
    //   return {x: 350, y: 215};
    case ContentType.SIGNATURE:
      return {x: 350, y: 280};
    case ContentType.PHONE:
      return {x: 340, y: 240};
    case ContentType.EMAIL:
      return {x: 340, y: 185};
  }

}


/** Describes a polling station. */
export interface PollingStation {
  embassy: string;
  embassyCyr: string;
  email: string;
}

/** Describes a country with polling stations. */
export interface VotingCountry {
  /** ISO alpha-2 country code. */
  countryCode: string;
  label: string;
  labelCyr: string;
}

export const STATIONS_BY_COUNTRY: Map<VotingCountry, PollingStation[]> = new Map([
  [
    {
      countryCode: 'AF',
      label: 'Avganistan',
      labelCyr: 'Авганистан',
    }, [
    {
      embassy: 'Ambasada Srbije u Indiji',
      embassyCyr: 'Амбасада Србије у Индији',
      email: 'embassyofserbiadelhi@hotmail.com',
    }
  ],
  ],
  [
    {
      countryCode: 'AL',
      label: 'Albanija',
      labelCyr: 'Албанија',
    }, [
    {
      embassy: 'Ambasada Srbije u Albaniji',
      embassyCyr: 'Амбасада Србије у Албанији',
      email: 'srb.emb.albania@mfa.rs'
    },
  ],
  ],
  [
    {
      countryCode: 'DZ',
      label: 'Alžir',
      labelCyr: 'Алжир',
    }, [
    {
      embassy: 'Ambasada Srbije u Alžiru',
      embassyCyr: 'Амбасада Србије у Алжиру',
      email: 'ambasada@ambserbie-alger.com'
    },
  ],
  ],
  [
    {
      countryCode: 'AU',
      label: 'Australija',
      labelCyr: 'Аустралија',
    }, [
    {
      embassy: 'Ambasada Srbije u Australiji, Kanbera',
      embassyCyr: 'Амбасада Србије у Аустралији, Канбера',
      email: 'embassy.canberra@serbia.org.au',
    },
    {
      embassy: 'Konzulat Srbije u Australiji, Sidnej',
      embassyCyr: 'Конзулат Србије у Аустралији, Сиднеј',
      email: 'srb.cons.sydney@mfa.rs',
    },
  ],
  ],
  [
    {
      countryCode: 'AD',
      label: 'Andora',
      labelCyr: 'Андора',
    }, [
    {
      embassy: 'Ambasada Srbije u Španiji',
      embassyCyr: 'Амбасада Србије у Шпанији',
      email: 'konz.madrid@mfa.rs',
    },
  ],
  ],
  [
    {
      countryCode: 'AO',
      label: 'Angola',
      labelCyr: 'Ангола',
    }, [
    {
      embassy: 'Ambasada Srbije u Angoli',
      embassyCyr: 'Амбасада Србије у Анголи',
      email: 'srb.emb.angola@mfa.rs',
    },
  ],
  ],
  [
    {
      countryCode: 'AG',
      label: 'Antigva i Barbuda',
      labelCyr: 'Антигва и Барбуда',
    }, [
    {
      embassy: 'Ambasada Srbije u SAD, Vašington',
      embassyCyr: 'Амбасада Србије у САД, Вашингтон',
      email: 'izbori2022@serbiaembusa.org',
    },
  ],
  ],
  [
    {
      countryCode: 'AR',
      label: 'Argentina',
      labelCyr: 'Аргентина',
    }, [
    {
      embassy: 'Ambasada Srbije u Argentini',
      embassyCyr: 'Амбасада Србије у Аргентини',
      email: 'consuladoserbia@fibertel.com.ar',
    },
  ],
  ],
  [
    {
      countryCode: 'AT',
      label: 'Austrija',
      labelCyr: 'Аустрија',
    }, [
    {
      embassy: 'Ambasada Srbije u Austriji, Beč',
      embassyCyr: 'Амбасада Србије у Аустрији, Беч',
      email: 'izbori.bec2022@mfa.rs',
    },
    {
      embassy: 'Konzulat Srbije u Austriji, Salcburg',
      embassyCyr: 'Конзулат Србије у Аустрији, Салцбург',
      email: 'genconsulate.salzburg@mfa.rs',
    },
  ],
  ],
  [
    {
      countryCode: 'AZ',
      label: 'Azerbejdžan',
      labelCyr: 'Азербејџан',
    }, [
    {
      embassy: 'Ambasada Srbije u Azerbejdžanu',
      embassyCyr: 'Амбасада Србије у Азербејџану',
      email: 'serbianembassy.baku@azeurotel.com',
    },
  ],
  ],
  [
    {
      countryCode: 'BS',
      label: 'Bahami',
      labelCyr: 'Бахами',
    }, [
    {
      embassy: 'Ambasada Srbije u Sjedinjenim Američkim Državama, Vašington',
      embassyCyr: 'Амбасада Србије у Сједињеним Америчким Државама, Вашингтон',
      email: 'izbori2022@serbiaembusa.org',
    },
  ],
  ],
  [
    {
      countryCode: 'BH',
      label: 'Bahrein',
      labelCyr: 'Бахреин',
    }, [
    {
      embassy: 'Ambasada Srbije u Kuvajtu',
      embassyCyr: 'Амбасада Србије у Кувајту',
      email: 'serbkonzkw@gmail.com',
    },
  ],
  ],
  [
    {
      countryCode: 'BD',
      label: 'Bangladeš',
      labelCyr: 'Бангладеш',
    }, [
    {
      embassy: 'Ambasada Srbije u Indiji',
      embassyCyr: 'Амбасада Србије у Индији',
      email: 'embassyofserbiadelhi@hotmail.com',
    },
  ],
  ],
  [
    {
      countryCode: 'BB',
      label: 'Barbados',
      labelCyr: 'Барбадос',
    }, [
    {
      embassy: 'Ambasada Srbije u Sjedinjenim Američkim Državama, Vašington',
      embassyCyr: 'Амбасада Србије у Сједињеним Америчким Државама, Вашингтон',
      email: 'izbori2022@serbiaembusa.org',
    },
  ],
  ],
  [
    {
      countryCode: 'BE',
      label: 'Belgija',
      labelCyr: 'Белгија',
    }, [
    {
      embassy: 'Ambasada Srbije u Belgiji',
      embassyCyr: 'Амбасада Србије у Белгији',
      email: 'konzularno.brisel@mfa.rs',
    },
  ],
  ],
  [
    {
      countryCode: 'BZ',
      label: 'Belize',
      labelCyr: 'Белизе',
    }, [
    {
      embassy: 'Ambasada Srbije u Sjedinjenim Američkim Državama, Vašington',
      embassyCyr: 'Амбасада Србије у Сједињеним Америчким Државама, Вашингтон',
      email: 'izbori2022@serbiaembusa.org',
    },
  ],
  ],
  [
    {
      countryCode: 'BY',
      label: 'Belorusija',
      labelCyr: 'Белорусија',
    }, [
    {
      embassy: 'Ambasada Srbije u Belorusiji',
      embassyCyr: 'Амбасада Србије у Белорусији',
      email: 'embassy.minsk@mfa.rs',
    },
  ],
  ],
  [
    {
      countryCode: 'BJ',
      label: 'Benin',
      labelCyr: 'Бенин',
    }, [
    {
      embassy: 'Ambasada Srbije u Nigeriji',
      embassyCyr: 'Амбасада Србије у Нигерији',
      email: 'serbconsabuja@gmail.com',
    },
  ],
  ],
  [
    {
      countryCode: 'BW',
      label: 'Bocvana',
      labelCyr: 'Боцвана',
    }, [
    {
      embassy: 'Ambasada Srbije u Južnoj Africi',
      embassyCyr: 'Амбасада Србије у Јужној Африци',
      email: 'info@srbembassy.org.za',
    },
  ],
  ],
  [
    {
      countryCode: 'BO',
      label: 'Bolivija',
      labelCyr: 'Боливија',
    }, [
    {
      embassy: 'Ambasada Srbije u Argentini',
      embassyCyr: 'Амбасада Србије у Аргентини',
      email: 'consuladoserbia@fibertel.com.ar',
    },
  ],
  ],
  [
    {
      countryCode: 'BA',
      label: 'Bosna i Hercegovina',
      labelCyr: 'Босна и Херцеговина',
    }, [
    {
      embassy: 'Konzulat Srbije u Bosni i Hercegovini, Banja Luka',
      embassyCyr: 'Конзулат Србије у Босни и Херцеговини, Бања Лука',
      email: 'srb.cons.banjaluka@mfa.rs',
    },
    {
      embassy: 'Konzulat Srbije u Bosni i Hercegovini, Drvar',
      embassyCyr: 'Конзулат Србије у Босни и Херцеговини, Дрвар',
      email: 'kk.rs-drvar@teol.net',
    }, {
      embassy: 'Konzulat Srbije u Bosni i Hercegovini, Mostar',
      embassyCyr: 'Конзулат Србије у Босни и Херцеговини, Мостар',
      email: 'gk.mostar@mfa.rs',
    }, {
      embassy: 'Konzulat Srbije u Bosni i Hercegovini, Trebinje',
      embassyCyr: 'Конзулат Србије у Босни и Херцеговини, Требиње',
      email: 'srb.cons.trebinje@mfa.rs',
    }, {
      embassy: 'Ambasada Srbije u Bosni i Hercegovini, Sarajevo',
      embassyCyr: 'Амбасада Србије у Босни и Херцеговини, Сарајево',
      email: 'srbamba@bih.net.ba',
    },
  ],
  ],
  [
    {
      countryCode: 'BR',
      label: 'Brazil',
      labelCyr: 'Бразил',
    }, [
    {
      embassy: 'Ambasada Srbije u Brazilu',
      embassyCyr: 'Амбасада Србије у Бразилу',
      email: 'embaixadaservia@terra.com.br',
    },
  ],
  ],
  [
    {
      countryCode: 'BN',
      label: 'Brunej Darusalam',
      labelCyr: 'Брунеј Дарусалам',
    }, [
    {
      embassy: 'Ambasada Srbije u Indoneziji',
      embassyCyr: 'Амбасада Србије у Индонезији',
      email: 'embjakarta@serbian-embassy.org',
    },
  ],
  ],
  [
    {
      countryCode: 'BG',
      label: 'Bugarska',
      labelCyr: 'Бугарска',
    }, [
    {
      embassy: 'Ambasada Srbije u Bugarskoj',
      embassyCyr: 'Амбасада Србије у Бугарској',
      email: 'konz.sofia@mfa.rs',
    },
  ],
  ],
  [
    {
      countryCode: 'BF',
      label: 'Burkina Faso',
      labelCyr: 'Буркина Фасо',
    }, [
    {
      embassy: 'Ambasada Srbije u Nigeriji',
      embassyCyr: 'Амбасада Србије у Нигерији',
      email: 'serbconsabuja@gmail.com',
    },
  ],
  ],
  [
    {
      countryCode: 'BI',
      label: 'Burundi',
      labelCyr: 'Бурунди',
    }, [
    {
      embassy: 'Ambasada Srbije u Keniji',
      embassyCyr: 'Амбасада Србије у Кенији',
      email: 'consular@embassyofserbia.or.ke',
    },
  ],
  ],
  [
    {
      countryCode: 'BT',
      label: 'Butan',
      labelCyr: 'Бутан',
    }, [
    {
      embassy: 'Ambasada Srbije u Indiji',
      embassyCyr: 'Амбасада Србије у Индији',
      email: 'embassyofserbiadelhi@hotmail.com',
    },
  ],
  ],
  [
    {
      countryCode: 'TD',
      label: 'Čad',
      labelCyr: 'Чад',
    }, [
    {
      embassy: 'Ambasada Srbije u Tunisu',
      embassyCyr: 'Амбасада Србије у Тунису',
      email: 'amb.serbia@gnet.tn',
    },
  ],
  ],
  [
    {
      countryCode: 'CF',
      label: 'Centralnoafrička Republika',
      labelCyr: 'Централноафричка Република',
    }, [
    {
      embassy: 'Ambasada Srbije u Kongu, DR',
      embassyCyr: 'Амбасада Србије у Конгу, ДР',
      email: 'serbambakin@gmail.com',
    },
  ],
  ],
  [
    {
      countryCode: 'CZ',
      label: 'Češka',
      labelCyr: 'Чешка',
    }, [
    {
      embassy: 'Ambasada Srbije u Češkoj',
      embassyCyr: 'Амбасада Србије у Чешкој',
      email: 'izbori.prag2022@mfa.rs',
    },
  ],
  ],
  [
    {
      countryCode: 'CL',
      label: 'Čile',
      labelCyr: 'Чиле',
    }, [
    {
      embassy: 'Ambasada Srbije u Argentini',
      embassyCyr: 'Амбасада Србије у Аргентини',
      email: 'consuladoserbia@fibertel.com.ar',
    },
  ],
  ],
  [
    {
      countryCode: 'ME',
      label: 'Crna Gora',
      labelCyr: 'Црна Гора',
    }, [
    {
      embassy: 'Konzulat Srbije u Crnoj Gori, Herceg Novi',
      embassyCyr: 'Конзулат Србије у Црној Гори, Херцег Нови',
      email: 'gkh@mfa.rs',
    },
    {
      embassy: 'Ambasada Srbije u Crnoj Gori, Podgorica',
      embassyCyr: 'Амбасада Србије у Црној Гори, Подгорица',
      email: 'embassy.podgorica@mfa.rs',
    },
  ],
  ],
  [
    {
      countryCode: 'DK',
      label: 'Danska',
      labelCyr: 'Данска',
    }, [
    {
      embassy: 'Ambasada Srbije u Danskoj',
      embassyCyr: 'Амбасада Србије у Данској',
      email: 'konzulat.kopenhagen@mfa.rs',
    },
  ],
  ],
  [
    {
      countryCode: 'DM',
      label: 'Dominika',
      labelCyr: 'Доминика',
    }, [
    {
      embassy: 'Ambasada Srbije u Sjedinjenim Američkim Državama, Vašington',
      embassyCyr: 'Амбасада Србије у Сједињеним Америчким Државама, Вашингтон',
      email: 'izbori2022@serbiaembusa.org',
    },
  ],
  ],
  [
    {
      countryCode: 'DO',
      label: 'Dominikanska Republika',
      labelCyr: 'Доминиканска Република',
    }, [
    {
      embassy: 'Ambasada Srbije na Kubi',
      embassyCyr: 'Амбасада Србије на Куби',
      email: 'konzsrbhav@gmail.com',
    },
  ],
  ],
  [
    {
      countryCode: 'DJ',
      label: 'Džibuti',
      labelCyr: 'Џибути',
    }, [
    {
      embassy: 'Ambasada Srbije u Etiopiji',
      embassyCyr: 'Амбасада Србије у Етиопији',
      email: 'serbambadis@yahoo.com',
    },
  ],
  ],
  [
    {
      countryCode: 'EG',
      label: 'Egipat',
      labelCyr: 'Египат',
    }, [
    {
      embassy: 'Ambasada Srbije u Egiptu',
      embassyCyr: 'Амбасада Србије у Египту',
      email: 'konzul@serbiaeg.com',
    },
  ],
  ],
  [
    {
      countryCode: 'EC',
      label: 'Ekvador',
      labelCyr: 'Еквадор',
    }, [
    {
      embassy: 'Ambasada Srbije u Argentini',
      embassyCyr: 'Амбасада Србије у Аргентини',
      email: 'consuladoserbia@fibertel.com.ar',
    },
  ],
  ],
  [
    {
      countryCode: 'GQ',
      label: 'Ekvatorijalna Gvineja',
      labelCyr: 'Гвинеја',
    }, [
    {
      embassy: 'Ambasada Srbije u Angoli',
      embassyCyr: 'Амбасада Србије у Анголи',
      email: 'srb.emb.angola@mfa.rs',
    },
  ],
  ],
  [
    {
      countryCode: 'ER',
      label: 'Eritreja',
      labelCyr: 'Еритреја',
    }, [
    {
      embassy: 'Ambasada Srbije u Keniji',
      embassyCyr: 'Амбасада Србије у Кенији',
      email: 'consular@embassyofserbia.or.ke',
    },
  ],
  ],
  [
    {
      countryCode: 'EE',
      label: 'Estonija',
      labelCyr: 'Естонија',
    }, [
    {
      embassy: 'Ambasada Srbije u Finskoj',
      embassyCyr: 'Амбасада Србије у Финској',
      email: 'office@serbianembassy.fi',
    },
  ],
  ],
  [
    {
      countryCode: 'ET',
      label: 'Etiopija',
      labelCyr: 'Етиопија',
    }, [
    {
      embassy: 'Ambasada Srbije u Etiopiji',
      embassyCyr: 'Амбасада Србије у Етиопији',
      email: 'serbambadis@yahoo.com',
    },
  ],
  ],
  [
    {
      countryCode: 'FJ',
      label: 'Fidži',
      labelCyr: 'Фиџи',
    }, [
    {
      embassy: 'Ambasada Srbije u Australiji, Kanbera',
      embassyCyr: 'Амбасада Србије у Аустралији, Канбера',
      email: 'embassy.canberra@serbia.org.au',
    },
  ],
  ],
  [
    {
      countryCode: 'PH',
      label: 'Filipini',
      labelCyr: 'Филипини',
    }, [
    {
      embassy: 'Ambasada Srbije u Indoneziji',
      embassyCyr: 'Амбасада Србије у Индонезији',
      email: 'embjakarta@serbian-embassy.org',
    },
  ],
  ],
  [
    {
      countryCode: 'FI',
      label: 'Finska',
      labelCyr: 'Финска',
    }, [
    {
      embassy: 'Ambasada Srbije u Finskoj',
      embassyCyr: 'Амбасада Србије у Финској',
      email: 'office@serbianembassy.fi',
    },
  ],
  ],
  [
    {
      countryCode: 'FR',
      label: 'Francuska',
      labelCyr: 'Француска',
    }, [
    {
      embassy: 'Ambasada Srbije u Francuskoj, Pariz',
      embassyCyr: 'Амбасада Србије у Француској, Париз',
      email: 'izbori.pariz@mfa.rs',
    },
    {
      embassy: 'Konzulat Srbije u Francuskoj, Strazbur',
      embassyCyr: 'Конзулат Србије у Француској, Стразбур',
      email: 'konzulat.strazbur@mfa.rs',
    },
  ],
  ],
  [
    {
      countryCode: 'GA',
      label: 'Gabon',
      labelCyr: 'Габон',
    }, [
    {
      embassy: 'Ambasada Srbije u Angoli',
      embassyCyr: 'Амбасада Србије у Анголи',
      email: 'srb.emb.angola@mfa.rs',
    },
  ],
  ],
  [
    {
      countryCode: 'GM',
      label: 'Gambija',
      labelCyr: 'Гамбија',
    }, [
    {
      embassy: 'Ambasada Srbije u Nigeriji',
      embassyCyr: 'Амбасада Србије у Нигерији',
      email: 'serbconsabuja@gmail.com',
    },
  ],
  ],
  [
    {
      countryCode: 'GH',
      label: 'Gana',
      labelCyr: 'Гана',
    }, [
    {
      embassy: 'Ambasada Srbije u Nigeriji',
      embassyCyr: 'Амбасада Србије у Нигерији',
      email: 'serbconsabuja@gmail.com',
    },
  ],
  ],
  [
    {
      countryCode: 'GR',
      label: 'Grčka',
      labelCyr: 'Грчка',
    }, [
    {
      embassy: 'Ambasada Srbije u Grčkoj, Atina',
      embassyCyr: 'Амбасада Србије у Грчкој, Атина',
      email: 'embassy.athens.consular@mfa.rs',
    },
    {
      embassy: 'Konzulat Srbije u Grčkoj, Solun',
      embassyCyr: 'Конзулат Србије у Грчкој, Солун',
      email: 'srbcons@otenet.gr',
    },
  ],
  ],
  [
    {
      countryCode: 'GD',
      label: 'Grenada',
      labelCyr: 'Гренада',
    }, [
    {
      embassy: 'Ambasada Srbije u Sjedinjenim Američkim Državama, Vašington',
      embassyCyr: 'Амбасада Србије у Сједињеним Америчким Државама, Вашингтон',
      email: 'izbori2022@serbiaembusa.org',
    },
  ],
  ],
  [
    {
      countryCode: 'GE',
      label: 'Gruzija',
      labelCyr: 'Грузија',
    }, [
    {
      embassy: 'Ambasada Srbije u Ukrajini',
      embassyCyr: 'Амбасада Србије у Украјини',
      email: 'konzrs@ukr.net',
    },
  ],
  ],
  [
    {
      countryCode: 'GY',
      label: 'Gvajana',
      labelCyr: 'Гвајана',
    }, [
    {
      embassy: 'Ambasada Srbije u Sjedinjenim Američkim Državama, Vašington',
      embassyCyr: 'Амбасада Србије у Сједињеним Америчким Државама, Вашингтон',
      email: 'izbori2022@serbiaembusa.org',
    },
  ],
  ],
  [
    {
      countryCode: 'GT',
      label: 'Gvatemala',
      labelCyr: 'Гватемала',
    }, [
    {
      embassy: 'Ambasada Srbije u Meksiku',
      embassyCyr: 'Амбасада Србије у Мексику',
      email: 'cons.serbia.mex@gmail.com',
    },
  ],
  ],
  [
    {
      countryCode: 'GN',
      label: 'Gvineja',
      labelCyr: 'Гвинеја',
    }, [
    {
      embassy: 'Ambasada Srbije u Alžiru',
      embassyCyr: 'Амбасада Србије у Алжиру',
      email: 'ambasada@ambserbie-alger.com',
    },
  ],
  ],
  [
    {
      countryCode: 'GW',
      label: 'Gvineja Bisao',
      labelCyr: 'Гвинеја Бисао',
    }, [
    {
      embassy: 'Ambasada Srbije u Alžiru',
      embassyCyr: 'Амбасада Србије у Алжиру',
      email: 'ambasada@ambserbie-alger.com',
    },
  ],
  ],
  [
    {
      countryCode: 'HT',
      label: 'Haiti',
      labelCyr: 'Хаити',
    }, [
    {
      embassy: 'Ambasada Srbije na Kubi',
      embassyCyr: 'Амбасада Србије на Куби',
      email: 'konzsrbhav@gmail.com',
    },
  ],
  ],
  [
    {
      countryCode: 'NL',
      label: 'Holandija/Nizozemska',
      labelCyr: 'Холандија/Низоземска',
    }, [
    {
      embassy: 'Ambasada Srbije u Holandiji',
      embassyCyr: 'Амбасада Србије у Холандији',
      email: 'embassy.hague@mfa.rs',
    },
  ],
  ],
  [
    {
      countryCode: 'HN',
      label: 'Honduras',
      labelCyr: 'Хондурас',
    }, [
    {
      embassy: 'Ambasada Srbije u Meksiku',
      embassyCyr: 'Амбасада Србије у Мексику',
      email: 'cons.serbia.mex@gmail.com',
    },
  ],
  ],
  [
    {
      countryCode: 'HR',
      label: 'Hrvatska',
      labelCyr: 'Хрватска',
    }, [
    {
      embassy: 'Konzulat Srbije u Hrvatskoj, Rijeka',
      embassyCyr: 'Конзулат Србије у Хрватској, Ријека',
      email: 'konzulat.srbije.rijeka@gmail.com',
    },
    {
      embassy: 'Konzulat Srbije u Hrvatskoj, Vukovar',
      embassyCyr: 'Конзулат Србије у Хрватској, Вуковар',
      email: 'generalni.konzulat@gk-srbije-vukovar.hr',
    },
    {
      embassy: 'Ambasada Srbije u Hrvatskoj, Zagreb',
      embassyCyr: 'Амбасада Србије у Хрватској, Загреб',
      email: 'konzularno@ambasada-srbije.hr',
    },
  ],
  ],
  [
    {
      countryCode: 'IN',
      label: 'Indija',
      labelCyr: 'Индија',
    }, [
    {
      embassy: 'Ambasada Srbije u Indiji',
      embassyCyr: 'Амбасада Србије у Индији',
      email: 'embassyofserbiadelhi@hotmail.com',
    },
  ],
  ],
  [
    {
      countryCode: 'ID',
      label: 'Indonezija',
      labelCyr: 'Индонезија',
    }, [
    {
      embassy: 'Ambasada Srbije u Indoneziji',
      embassyCyr: 'Амбасада Србије у Индонезији',
      email: 'embjakarta@serbian-embassy.org',
    },
  ],
  ],
  [
    {
      countryCode: 'IQ',
      label: 'Irak',
      labelCyr: 'Ирак',
    }, [
    {
      embassy: 'Ambasada Srbije u Iraku',
      embassyCyr: 'Амбасада Србије у Ираку',
      email: 'embsrbag@yahoo.com',
    },
  ],
  ],
  [
    {
      countryCode: 'IR',
      label: 'Iran',
      labelCyr: 'Иран',
    }, [
    {
      embassy: 'Ambasada Srbije u Iranu',
      embassyCyr: 'Амбасада Србије у Ирану',
      email: 'serbembteh@neda.net',
    },
  ],
  ],
  [
    {
      countryCode: 'IE',
      label: 'Irska',
      labelCyr: 'Ирска',
    }, [
    {
      embassy: 'Ambasada Srbije u Ujedinjenom Kraljevstvu',
      embassyCyr: 'Амбасада Србије у Уједињеном Краљевству',
      email: 'izbori2022@serbianembassy.org.uk',
    },
  ],
  ],
  [
    {
      countryCode: 'IS',
      label: 'Island',
      labelCyr: 'Исланд',
    }, [
    {
      embassy: 'Ambasada Srbije u Norveškoj',
      embassyCyr: 'Амбасада Србије у Норвешкој',
      email: 'izbori2022@serbianembassy.no',
    },
  ],
  ],
  [
    {
      countryCode: 'TL',
      label: 'Istočni Timor',
      labelCyr: 'Источни Тимор',
    }, [
    {
      embassy: 'Ambasada Srbije u Indoneziji',
      embassyCyr: 'Амбасада Србије у Индонезији',
      email: 'embjakarta@serbian-embassy.org',
    },
  ],
  ],
  [
    {
      countryCode: 'IT',
      label: 'Italija',
      labelCyr: 'Италија',
    }, [
    {
      embassy: 'Konzulat Srbije u Italiji, Milano',
      embassyCyr: 'Конзулат Србије у Италији, Милано',
      email: 'info@gkrsmi.it',
    },
    {
      embassy: 'Ambasada Srbije u Italiji, Rim',
      embassyCyr: 'Амбасада Србије у Италији, Рим',
      email: 'ljubomir.merdovic@mfa.rs',
    },
    {
      embassy: 'Konzulat Srbije u Italiji, Trst',
      embassyCyr: 'Конзулат Србије у Италији, Трст',
      email: 'gkrstrst@spin.it',
    },
  ],
  ],
  [
    {
      countryCode: 'IL',
      label: 'Izrael',
      labelCyr: 'Израел',
    }, [
    {
      embassy: 'Ambasada Srbije u Izraelu',
      embassyCyr: 'Амбасада Србије у Израелу',
      email: 'consular.srb@013net.net',
    },
  ],
  ],
  [
    {
      countryCode: 'JM',
      label: 'Jamajka',
      labelCyr: 'Јамајка',
    }, [
    {
      embassy: 'Ambasada Srbije na Kubi',
      embassyCyr: 'Амбасада Србије на Куби',
      email: 'konzsrbhav@gmail.com',
    },
  ],
  ],
  [
    {
      countryCode: 'JP',
      label: 'Japan',
      labelCyr: 'Јапан',
    }, [
    {
      embassy: 'Ambasada Srbije u Japanu',
      embassyCyr: 'Амбасада Србије у Јапану',
      email: 'embassy.tokyo@mfa.rs',
    },
  ],
  ],
  [
    {
      countryCode: 'YE',
      label: 'Jemen',
      labelCyr: 'Јемен',
    }, [
    {
      embassy: 'Ambasada Srbije u Kuvajtu',
      embassyCyr: 'Амбасада Србије у Кувајту',
      email: 'serbkonzkw@gmail.com',
    },
  ],
  ],
  [
    {
      countryCode: 'AM',
      label: 'Jermenija',
      labelCyr: 'Јерменија',
    }, [
    {
      embassy: 'Ambasada Srbije u Jermeniji, Jerevan',
      embassyCyr: 'Амбасада Србије у Јерменији, Јереван',
      email: 'embserbia.yerevan@gmail.com',
    },
  ],
  ],
  [
    {
      countryCode: 'JO',
      label: 'Jordan',
      labelCyr: 'Јордан',
    }, [
    {
      embassy: 'Ambasada Srbije u Siriji',
      embassyCyr: 'Амбасада Србије у Сирији',
      email: 'dkp.beirutconsul@gmail.com',
    },
  ],
  ],
  [
    {
      countryCode: 'KR',
      label: 'Južna Koreja',
      labelCyr: 'Јужна Кореја',
    }, [
    {
      embassy: 'Ambasada Srbije u Koreji, Republika',
      embassyCyr: 'Амбасада Србије у Кореји, Република',
      email: 'srb.emb.repkorea@mfa.rs',
    },
  ],
  ],
  [
    {
      countryCode: 'ZA',
      label: 'Južna Afrika',
      labelCyr: 'Јужна Африка',
    }, [
    {
      embassy: 'Ambasada Srbije u Južnoj Africi',
      embassyCyr: 'Амбасада Србије у Јужној Африци',
      email: 'info@srbembassy.org.za',
    },
  ],
  ],
  [
    {
      countryCode: 'KH',
      label: 'Kambodža',
      labelCyr: 'Камбоџа',
    }, [
    {
      embassy: 'Ambasada Srbije u Indoneziji',
      embassyCyr: 'Амбасада Србије у Индонезији',
      email: 'embjakarta@serbian-embassy.org',
    },
  ],
  ],
  [
    {
      countryCode: 'CM',
      label: 'Kamerun',
      labelCyr: 'Камерун',
    }, [
    {
      embassy: 'Ambasada Srbije u Nigeriji',
      embassyCyr: 'Амбасада Србије у Нигерији',
      email: 'serbconsabuja@gmail.com',
    },
  ],
  ],
  [
    {
      countryCode: 'CA',
      label: 'Kanada',
      labelCyr: 'Канада',
    }, [
    {
      embassy: 'Ambasada Srbije u Kanadi, Otava',
      embassyCyr: 'Амбасада Србије у Канади, Отава',
      email: 'izbori2022@serbianembassy.ca',
    },
    {
      embassy: 'Konzulat Srbije u Kanadi, Toronto',
      embassyCyr: 'Конзулат Србије у Канади, Торонто',
      email: 'glasanje-toronto@rogers.com',
    },
  ],
  ],
  [
    {
      countryCode: 'QA',
      label: 'Katar',
      labelCyr: 'Катар',
    }, [
    {
      embassy: 'Ambasada Srbije u Kataru',
      embassyCyr: 'Амбасада Србије у Катару',
      email: 'embassyserbiaqatar@outlook.com',
    },
  ],
  ],
  [
    {
      countryCode: 'KZ',
      label: 'Kazahstan',
      labelCyr: 'Казахстан',
    }, [
    {
      embassy: 'Ambasada Srbije u Kazahstanu',
      embassyCyr: 'Амбасада Србије у Казахстану',
      email: 'konz.astana@yahoo.com',
    },
  ],
  ],
  [
    {
      countryCode: 'KE',
      label: 'Kenija',
      labelCyr: 'Кенија',
    }, [
    {
      embassy: 'Ambasada Srbije u Keniji',
      embassyCyr: 'Амбасада Србије у Кенији',
      email: 'consular@embassyofserbia.or.ke',
    },
  ],
  ],
  [
    {
      countryCode: 'CN',
      label: 'Kina',
      labelCyr: 'Кина',
    }, [
    {
      embassy: 'Ambasada Srbije u Kini, Narodna Republika, Peking',
      embassyCyr: 'Амбасада Србије у Кини, Народна Република, Пекинг',
      email: 'embserbia@embserbia.cn',
    },
    {
      embassy: 'Konzulat Srbije u Kini, Narodna Republika, Šangaj',
      embassyCyr: 'Конзулат Србије у Кини, Народна Република, Шангај',
      email: 'srb.cons.shanghai@mfa.rs',
    },
  ],
  ],
  [
    {
      countryCode: 'CY',
      label: 'Kipar',
      labelCyr: 'Кипар',
    }, [
    {
      embassy: 'Ambasada Srbije na Kipru',
      embassyCyr: 'Амбасада Србије на Кипру',
      email: 'nicosia@serbia.org.cy',
    },
  ],
  ],
  [
    {
      countryCode: 'KG',
      label: 'Kirgiska Republika',
      labelCyr: 'Киргиска Република',
    }, [
    {
      embassy: 'Ambasada Srbije u Rusiji',
      embassyCyr: 'Амбасада Србије у Русији',
      email: 'konzularno.moskva@mfa.rs',
    },
  ],
  ],
  [
    {
      countryCode: 'KI',
      label: 'Kiribati',
      labelCyr: 'Кирибати',
    }, [
    {
      embassy: 'Ambasada Srbije u Australiji, Kanbera',
      embassyCyr: 'Амбасада Србије у Аустралији, Канбера',
      email: 'embassy.canberra@serbia.org.au',
    },
  ],
  ],
  [
    {
      countryCode: 'CO',
      label: 'Kolumbija',
      labelCyr: 'Колумбија',
    }, [
    {
      embassy: 'Ambasada Srbije u Sjedinjenim Američkim Državama, Vašington',
      embassyCyr: 'Амбасада Србије у Сједињеним Америчким Државама, Вашингтон',
      email: 'izbori2022@serbiaembusa.org',
    },
  ],
  ],
  [
    {
      countryCode: 'KM',
      label: 'Unija Komora',
      labelCyr: 'Унија Комора',
    }, [
    {
      embassy: 'Ambasada Srbije u Keniji',
      embassyCyr: 'Амбасада Србије у Кенији',
      email: 'consular@embassyofserbia.or.ke',
    },
  ],
  ],
  [
    {
      countryCode: 'CD',
      label: 'Kongo, Demokratska Republika',
      labelCyr: 'Конго Демократска Република',
    }, [
    {
      embassy: 'Ambasada Srbije u Kongu, DR',
      embassyCyr: 'Амбасада Србије у Конгу, ДР',
      email: 'serbambakin@gmail.com',
    },
  ],
  ],
  [
    {
      countryCode: 'CG',
      label: 'Kongo',
      labelCyr: 'Конго',
    }, [
    {
      embassy: 'Ambasada Srbije u Kongu, DR',
      embassyCyr: 'Амбасада Србије у Конгу, ДР',
      email: 'serbambakin@gmail.com'
    },
  ],
  ],
  [
    {
      countryCode: 'KP',
      label: 'Koreja, DNR',
      labelCyr: 'Кореја, ДНР',
    }, [
    {
      embassy: 'Ambasada Srbije u Kini, Narodna Republika, Peking',
      embassyCyr: 'Амбасада Србије у Кини, Народна Република, Пекинг',
      email: 'embserbia@embserbia.cn',
    },
  ],
  ],
  [
    {
      countryCode: 'CR',
      label: 'Kostarika',
      labelCyr: 'Костарика',
    }, [
    {
      embassy: 'Ambasada Srbije u Meksiku',
      embassyCyr: 'Амбасада Србије у Мексику',
      email: 'cons.serbia.mex@gmail.com',
    },
  ],
  ],
  [
    {
      countryCode: 'CU',
      label: 'Kuba',
      labelCyr: 'Куба',
    }, [
    {
      embassy: 'Ambasada Srbije na Kubi',
      embassyCyr: 'Амбасада Србије на Куби',
      email: 'konzsrbhav@gmail.com',
    },
  ],
  ],
  [
    {
      countryCode: 'KW',
      label: 'Kuvajt',
      labelCyr: 'Кувајт',
    }, [
    {
      embassy: 'Ambasada Srbije u Kuvajtu',
      embassyCyr: 'Амбасада Србије у Кувајту',
      email: 'serbkonzkw@gmail.com',
    },
  ],
  ],
  [
    {
      countryCode: 'LA',
      label: 'Laos',
      labelCyr: 'Лаос',
    }, [
    {
      embassy: 'Ambasada Srbije u Mjanmaru',
      embassyCyr: 'Амбасада Србије у Мјанмару',
      email: 'serbemb@yangon.net.mm',
    },
  ],
  ],
  [
    {
      countryCode: 'LS',
      label: 'Lesoto',
      labelCyr: 'Лесото',
    }, [
    {
      embassy: 'Ambasada Srbije u Južnoj Africi',
      embassyCyr: 'Амбасада Србије у Јужној Африци',
      email: 'info@srbembassy.org.za',
    },
  ],
  ],
  [
    {
      countryCode: 'LV',
      label: 'Letonija',
      labelCyr: 'Летонија',
    }, [
    {
      embassy: 'Ambasada Srbije u Švedskoj',
      embassyCyr: 'Амбасада Србије у Шведској',
      email: 'izbori22@telia.com',
    },
  ],
  ],
  [
    {
      countryCode: 'LB',
      label: 'Liban',
      labelCyr: 'Либан',
    }, [
    {
      embassy: 'Ambasada Srbije u Libanu',
      embassyCyr: 'Амбасада Србије у Либану',
      email: 'dkp.beirutconsul@gmail.com',
    },
  ],
  ],
  [
    {
      countryCode: 'LR',
      label: 'Liberija',
      labelCyr: 'Либерија',
    }, [
    {
      embassy: 'Ambasada Srbije u Nigeriji',
      embassyCyr: 'Амбасада Србије у Нигерији',
      email: 'serbconsabuja@gmail.com',
    },
  ],
  ],
  [
    {
      countryCode: 'LY',
      label: 'Libija',
      labelCyr: 'Либија',
    }, [
    {
      embassy: 'Ambasada Srbije u Libiji',
      embassyCyr: 'Амбасада Србије у Либији',
      email: 'serbianembassy_tripoli@yahoo.com',
    },
  ],
  ],
  [
    {
      countryCode: 'LI',
      label: 'Lihtenštajn',
      labelCyr: 'Лихтенштајн',
    }, [
    {
      embassy: 'Ambasada Srbije u Švajcarskoj, Bern',
      embassyCyr: 'Амбасада Србије у Швајцарској, Берн',
      email: 'info@ambasadasrbije.ch',
    },
  ],
  ],
  [
    {
      countryCode: 'LT',
      label: 'Litvanija',
      labelCyr: 'Литванија',
    }, [
    {
      embassy: 'Ambasada Srbije u Poljskoj',
      embassyCyr: 'Амбасада Србије у Пољској',
      email: 'embassy.warsaw@mfa.rs',
    },
  ],
  ],
  [
    {
      countryCode: 'LU',
      label: 'Luksemburg',
      labelCyr: 'Луксембург',
    }, [
    {
      embassy: 'Ambasada Srbije u Belgiji',
      embassyCyr: 'Амбасада Србије у Белгији',
      email: 'konzularno.brisel@mfa.rs',
    },
  ],
  ],
  [
    {
      countryCode: 'MG',
      label: 'Madagaskar',
      labelCyr: 'Мадагаскар',
    }, [
    {
      embassy: 'Ambasada Srbije u Etiopiji',
      embassyCyr: 'Амбасада Србије у Етиопији',
      email: 'serbambadis@yahoo.com',
    },
  ],
  ],
  [
    {
      countryCode: 'HU',
      label: 'Mađarska',
      labelCyr: 'Мађарска',
    }, [
    {
      embassy: 'Ambasada Srbije u Mađarskoj',
      embassyCyr: 'Амбасада Србије у Мађарској',
      email: 'budapest-consulat@serbiaemb.t-online.hu',
    },
  ],
  ],
  [
    {
      countryCode: 'MW',
      label: 'Malavi',
      labelCyr: 'Малави',
    }, [
    {
      embassy: 'Ambasada Srbije u Južnoj Africi',
      embassyCyr: 'Амбасада Србије у Јужној Африци',
      email: 'info@srbembassy.org.za',
    },
  ],
  ],
  [
    {
      countryCode: 'MV',
      label: 'Maldivi',
      labelCyr: 'Малдиви',
    }, [
    {
      embassy: 'Ambasada Srbije u Indiji',
      embassyCyr: 'Амбасада Србије у Индији',
      email: 'embassyofserbiadelhi@hotmail.com',
    },
  ],
  ],
  [
    {
      countryCode: 'MY',
      label: 'Malezija',
      labelCyr: 'Малезија',
    }, [
    {
      embassy: 'Ambasada Srbije u Indoneziji',
      embassyCyr: 'Амбасада Србије у Индонезији',
      email: 'embjakarta@serbian-embassy.org',
    },
  ],
  ],
  [
    {
      countryCode: 'ML',
      label: 'Mali',
      labelCyr: 'Мали',
    }, [
    {
      embassy: 'Ambasada Srbije u Alžiru',
      embassyCyr: 'Амбасада Србије у Алжиру',
      email: 'ambasada@ambserbie-alger.com',
    },
  ],
  ],
  [
    {
      countryCode: 'MT',
      label: 'Malta',
      labelCyr: 'Малта',
    }, [
    {
      embassy: 'Ambasada Srbije u Italiji, Rim',
      embassyCyr: 'Амбасада Србије у Италији, Рим',
      email: 'srb.office.valletta@mfa.rs',
    },
  ],
  ],
  [
    {
      countryCode: 'MA',
      label: 'Maroko',
      labelCyr: 'Мароко',
    }, [
    {
      embassy: 'Ambasada Srbije u Maroku',
      embassyCyr: 'Амбасада Србије у Мароку',
      email: 'ambrsrabat@gmail.com',
    },
  ],
  ],
  [
    {
      countryCode: 'MU',
      label: 'Mauricijus',
      labelCyr: 'Маурицијус',
    }, [
    {
      embassy: 'Ambasada Srbije u Južnoj Africi',
      embassyCyr: 'Амбасада Србије у Јужној Африци',
      email: 'info@srbembassy.org.za',
    },
  ],
  ],
  [
    {
      countryCode: 'MR',
      label: 'Mauritanija',
      labelCyr: 'Мауританија',
    }, [
    {
      embassy: 'Ambasada Srbije u Maroku',
      embassyCyr: 'Амбасада Србије у Мароку',
      email: 'ambrsrabat@gmail.com',
    },
  ],
  ],
  [
    {
      countryCode: 'MX',
      label: 'Meksiko',
      labelCyr: 'Мексико',
    }, [
    {
      embassy: 'Ambasada Srbije u Meksiku',
      embassyCyr: 'Амбасада Србије у Мексику',
      email: 'cons.serbia.mex@gmail.com',
    },
  ],
  ],
  [
    {
      countryCode: 'FM',
      label: 'Mikronezija',
      labelCyr: 'Микронезија',
    }, [
    {
      embassy: 'Ambasada Srbije u Australiji, Kanbera',
      embassyCyr: 'Амбасада Србије у Аустралији, Канбера',
      email: 'embassy.canberra@serbia.org.au',
    },
  ],
  ],
  [
    {
      countryCode: 'MM',
      label: 'Mjanmar',
      labelCyr: 'Мјанмар',
    }, [
    {
      embassy: 'Ambasada Srbije u Mjanmaru',
      embassyCyr: 'Амбасада Србије у Мјанмару',
      email: 'serbemb@yangon.net.mm',
    },
  ],
  ],
  [
    {
      countryCode: 'MD',
      label: 'Moldavija',
      labelCyr: 'Молдавија',
    }, [
    {
      embassy: 'Ambasada Srbije u Rumuniji, Bukurešt',
      embassyCyr: 'Амбасада Србије у Румунији, Букурешт',
      email: 'consulate.bucharest@mfa.rs',
    },
  ],
  ],
  [
    {
      countryCode: 'MC',
      label: 'Monako',
      labelCyr: 'Монако',
    }, [
    {
      embassy: 'Ambasada Srbije u Francuskoj, Pariz',
      embassyCyr: 'Амбасада Србије у Француској, Париз',
      email: 'konzularno.pariz@mfa.rs',
    },
  ],
  ],
  [
    {
      countryCode: 'MN',
      label: 'Mongolija',
      labelCyr: 'Монголија',
    }, [
    {
      embassy: 'Ambasada Srbije u Kini, Narodna Republika, Peking',
      embassyCyr: 'Амбасада Србије у Кини, Народна Република, Пекинг',
      email: 'embserbia@embserbia.cn',
    },
  ],
  ],
  [
    {
      countryCode: 'MZ',
      label: 'Mozambik',
      labelCyr: 'Мозамбик',
    }, [
    {
      embassy: 'Ambasada Srbije u Južnoj Africi',
      embassyCyr: 'Амбасада Србије у Јужној Африци',
      email: 'info@srbembassy.org.za',
    },
  ],
  ],
  [
    {
      countryCode: 'NA',
      label: 'Namibija',
      labelCyr: 'Намибија',
    }, [
    {
      embassy: 'Ambasada Srbije u Južnoj Africi',
      embassyCyr: 'Амбасада Србије у Јужној Африци',
      email: 'info@srbembassy.org.za',
    },
  ],
  ],
  [
    {
      countryCode: 'NR',
      label: 'Nauru',
      labelCyr: 'Науру',
    }, [
    {
      embassy: 'Ambasada Srbije u Australiji, Kanbera',
      embassyCyr: 'Амбасада Србије у Аустралији, Канбера',
      email: 'embassy.canberra@serbia.org.au',
    },
  ],
  ],
  [
    {
      countryCode: 'DE',
      label: 'Nemačka',
      labelCyr: 'Немачка',
    }, [
    {
        embassy: 'Ambasada Srbije u Nemačkoj, Berlin',
        embassyCyr: 'Амбасада Србије у Немачкој, Берлин',
        email: 'izbori@botschaft-serbien.de',
    },
    {
      embassy: 'Konzulat Srbije u Nemačkoj, Diseldorf',
      embassyCyr: 'Конзулат Србије у Немачкој, Диселдорф',
      email: 'gen.konsul@gksrbijedis.de',
    },
    {
      embassy: 'Konzulat Srbije u Nemačkoj, Frankfurt',
      embassyCyr: 'Конзулат Србије у Немачкој, Франкфурт',
      email: 'izbori@gksrbfra.de',
    },
    {
      embassy: 'Konzulat Srbije u Nemačkoj, Hamburg',
      embassyCyr: 'Конзулат Србије у Немачкој, Хамбург',
      email: 'izbori2022@gkrshamburg.de',
    },
    {
      embassy: 'Konzulat Srbije u Nemačkoj, Minhen',
      embassyCyr: 'Конзулат Србије у Немачкој, Минхен',
      email: 'vizekonsul.muenchen@mfa.rs',
    },
    {
      embassy: 'Konzulat Srbije u Nemačkoj, Štutgart',
      embassyCyr: 'Конзулат Србије у Немачкој, Штутгарт',
      email: 'gk-stutgart@t-online.de',
    },
  ],
  ],
  [
    {
      countryCode: 'NP',
      label: 'Nepal',
      labelCyr: 'Непал',
    }, [
    {
      embassy: 'Ambasada Srbije u Indiji',
      embassyCyr: 'Амбасада Србије у Индији',
      email: 'embassyofserbiadelhi@hotmail.com',
    },
  ],
  ],
  [
    {
      countryCode: 'NE',
      label: 'Niger',
      labelCyr: 'Нигер',
    }, [
    {
      embassy: 'Ambasada Srbije u Nigeriji',
      embassyCyr: 'Амбасада Србије у Нигерији',
      email: 'serbconsabuja@gmail.com',
    },
  ],
  ],
  [
    {
      countryCode: 'NG',
      label: 'Nigerija',
      labelCyr: 'Нигерија',
    }, [
    {
      embassy: 'Ambasada Srbije u Nigeriji',
      embassyCyr: 'Амбасада Србије у Нигерији',
      email: 'serbconsabuja@gmail.com',
    },
  ],
  ],
  [
    {
      countryCode: 'NI',
      label: 'Nikaragva',
      labelCyr: 'Никарагва',
    }, [
    {
      embassy: 'Ambasada Srbije u Meksiku',
      embassyCyr: 'Амбасада Србије у Мексику',
      email: 'cons.serbia.mex@gmail.com',
    },
  ],
  ],
  [
    {
      countryCode: 'NO',
      label: 'Norveška',
      labelCyr: 'Норвешка',
    }, [
    {
      embassy: 'Ambasada Srbije u Norveškoj',
      embassyCyr: 'Амбасада Србије у Норвешкој',
      email: 'izbori2022@serbianembassy.no',
    },
  ],
  ],
  [
    {
      countryCode: 'NZ',
      label: 'Novi Zeland',
      labelCyr: 'Нови Зеланд',
    }, [
    {
      embassy: 'Konzulat Srbije u Australiji, Sidnej',
      embassyCyr: 'Конзулат Србије у Аустралији, Сиднеј',
      email: 'srb.cons.sydney@mfa.rs',
    },
  ],
  ],
  [
    {
      countryCode: 'CI',
      label: 'Obala Slonovače - Kot d Ivoar',
      labelCyr: 'Обала Слоноваче - Кот д Ивоар',
    }, [
    {
      embassy: 'Ambasada Srbije u Nigeriji',
      embassyCyr: 'Амбасада Србије у Нигерији',
      email: 'serbconsabuja@gmail.com',
    },
  ],
  ],
  [
    {
      countryCode: 'OM',
      label: 'Oman',
      labelCyr: 'Оман',
    }, [
    {
      embassy: 'Ambasada Srbije u Egiptu',
      embassyCyr: 'Амбасада Србије у Египту',
      email: 'konzul@serbiaeg.com',
    },
  ],
  ],
  [
    {
      countryCode: 'PK',
      label: 'Pakistan',
      labelCyr: 'Пакистан',
    }, [
    {
      embassy: 'Ambasada Srbije u Kini, Narodna Republika, Peking',
      embassyCyr: 'Амбасада Србије у Кини, Народна Република, Пекинг',
      email: 'embserbia@embserbia.cn',
    },
  ],
  ],
  [
    {
      countryCode: 'PW',
      label: 'Palau',
      labelCyr: 'Палау',
    }, [
    {
      embassy: 'Ambasada Srbije u Japanu',
      embassyCyr: 'Амбасада Србије у Јапану',
      email: 'embassy.tokyo@mfa.rs',
    },
  ],
  ],
  [
    {
      countryCode: 'PS',
      label: 'Palestina',
      labelCyr: 'Палестина',
    }, [
    {
      embassy: 'Ambasada Srbije u Egiptu',
      embassyCyr: 'Амбасада Србије у Египту',
      email: 'konzul@serbiaeg.com',
    },
  ],
  ],
  [
    {
      countryCode: 'PA',
      label: 'Panama',
      labelCyr: 'Панама',
    }, [
    {
      embassy: 'Ambasada Srbije u Meksiku',
      embassyCyr: 'Амбасада Србије у Мексику',
      email: 'cons.serbia.mex@gmail.com',
    },
  ],
  ],
  [
    {
      countryCode: 'PG',
      label: 'Papua Nova Gvineja',
      labelCyr: 'Папуа Нова Гвинеја',
    }, [
    {
      embassy: 'Ambasada Srbije u Australiji, Kanbera',
      embassyCyr: 'Амбасада Србије у Аустралији, Канбера',
      email: 'srb.emb.australia@mfa.rs',
    },
  ],
  ],
  [
    {
      countryCode: 'PY',
      label: 'Paragvaj',
      labelCyr: 'Парагвај',
    }, [
    {
      embassy: 'Ambasada Srbije u Argentini',
      embassyCyr: 'Амбасада Србије у Аргентини',
      email: 'consuladoserbia@fibertel.com.ar',
    },
  ],
  ],
  [
    {
      countryCode: 'PE',
      label: 'Peru',
      labelCyr: 'Перу',
    }, [
    {
      embassy: 'Ambasada Srbije u Argentini',
      embassyCyr: 'Амбасада Србије у Аргентини',
      email: 'consuladoserbia@fibertel.com.ar',
    },
  ],
  ],
  [
    {
      countryCode: 'PL',
      label: 'Poljska',
      labelCyr: 'Пољска',
    }, [
    {
      embassy: 'Ambasada Srbije u Poljskoj',
      embassyCyr: 'Амбасада Србије у Пољској',
      email: 'embassy.warsaw@mfa.rs',
    },
  ],
  ],
  [
    {
      countryCode: 'PT',
      label: 'Portugalija',
      labelCyr: 'Португалија',
    }, [
    {
      embassy: 'Ambasada Srbije u Portugaliji',
      embassyCyr: 'Амбасада Србије у Португалији',
      email: 'serviaemba@netcabo.pt',
    },
  ],
  ],
  [
    {
      countryCode: 'RW',
      label: 'Ruanda',
      labelCyr: 'Руанда',
    }, [
    {
      embassy: 'Ambasada Srbije u Keniji',
      embassyCyr: 'Амбасада Србије у Кенији',
      email: 'consular@embassyofserbia.or.ke',
    },
  ],
  ],
  [
    {
      countryCode: 'RO',
      label: 'Rumunija',
      labelCyr: 'Румунија',
    }, [
    {
      embassy: 'Ambasada Srbije u Rumuniji, Bukurešt',
      embassyCyr: 'Амбасада Србије у Румунији, Букурешт',
      email: 'consulate.bucharest@mfa.rs',
    },
    {
      embassy: 'Konzulat Srbije u Rumuniji, Temišvar',
      embassyCyr: 'Конзулат Србије у Румунији, Темишвар',
      email: 'srb.cons.timisoara@mfa.rs',
    },
  ],
  ],
  [
    {
      countryCode: 'RU',
      label: 'Rusija',
      labelCyr: 'Русија',
    }, [
    {
      embassy: 'Ambasada Srbije u Rusiji, Moskva',
      embassyCyr: 'Амбасада Србије у Русији, Москва',
      email: 'konzularno.moskva@mfa.rs',
    },
  ],
  ],
  [
    {
      countryCode: 'US',
      label: 'Sjedinjene Američke Države (SAD)',
      labelCyr: 'Сједињене Америчке Државе (САД)',
    }, [
    {
      embassy: 'Konzulat Srbije u Sjedinjenim Američkim Državama, Čikago',
      embassyCyr: 'Конзулат Србије у Сједињеним Америчким Државама, Чикаго',
      email: 'info@scgchicago.org',
    },
    {
      embassy: 'Konzulat Srbije u Sjedinjenim Američkim Državama, Njujork',
      embassyCyr: 'Конзулат Србије у Сједињеним Америчким Државама, Њујорк',
      email: 'izbori.njujork2020@mfa.rs',
    },
    {
      embassy: 'Ambasada Srbije u Sjedinjenim Američkim Državama, Vašington',
      embassyCyr: 'Амбасада Србије у Сједињеним Америчким Државама, Вашингтон',
      email: 'izbori2022@serbiaembusa.org',
    },
  ],
  ],
  [
    {
      countryCode: 'SV',
      label: 'El Salvador',
      labelCyr: 'Ел Салвадор',
    }, [
    {
      embassy: 'Ambasada Srbije u Meksiku',
      embassyCyr: 'Амбасада Србије у Мексику',
      email: 'cons.serbia.mex@gmail.com',
    },
  ],
  ],
  [
    {
      countryCode: 'WS',
      label: 'Samoa',
      labelCyr: 'Самоа',
    }, [
    {
      embassy: 'Ambasada Srbije u Australiji, Kanbera',
      embassyCyr: 'Амбасада Србије у Аустралији, Канбера',
      email: 'embassy.canberra@serbia.org.au',
    },
  ],
  ],
  [
    {
      countryCode: 'SM',
      label: 'San Marino',
      labelCyr: 'Сан Марино',
    }, [
    {
      embassy: 'Ambasada Srbije u Italiji, Rim',
      embassyCyr: 'Амбасада Србије у Италији, Рим',
      email: 'ljubomir.merdovic@mfa.rs',
    },
  ],
  ],
  [
    {
      countryCode: 'ST',
      label: 'Sao Tome i Principe',
      labelCyr: 'Сао Томе и Принципе',
    }, [
    {
      embassy: 'Ambasada Srbije u Portugaliji',
      embassyCyr: 'Амбасада Србије у Португалији',
      email: 'serviaemba@netcabo.pt',
    },
  ],
  ],
  [
    {
      countryCode: 'SA',
      label: 'Saudijska Arabija',
      labelCyr: 'Саудијска Арабија',
    }, [
    {
      embassy: 'Ambasada Srbije u Saudijskoj Arabiji',
      embassyCyr: 'Амбасада Србије у Саудијској Арабији',
      email: 'embsrb.riyadh@yahoo.com',
    },
  ],
  ],
  [
    {
      countryCode: 'SC',
      label: 'Sejšeli',
      labelCyr: 'Сејшели',
    }, [
    {
      embassy: 'Ambasada Srbije u Etiopiji',
      embassyCyr: 'Амбасада Србије у Етиопији',
      email: 'serbambadis@yahoo.com',
    },
  ],
  ],
  [
    {
      countryCode: 'SN',
      label: 'Senegal',
      labelCyr: 'Сенегал',
    }, [
    {
      embassy: 'Ambasada Srbije u Maroku',
      embassyCyr: 'Амбасада Србије у Мароку',
      email: 'ambrsrabat@gmail.com',
    },
  ],
  ],
  [
    {
      countryCode: 'KN',
      label: 'Sent Kits i Nevis',
      labelCyr: 'Сент Китс и Невис',
    }, [
    {
      embassy: 'Ambasada Srbije u Sjedinjenim Američkim Državama, Vašington',
      embassyCyr: 'Амбасада Србије у Сједињеним Америчким Државама, Вашингтон',
      email: 'izbori2022@serbiaembusa.org',
    },
  ],
  ],
  [
    {
      countryCode: 'VC',
      label: 'Sent Vinsent i Grenadini',
      labelCyr: 'Сент Винсент и Гренадини',
    }, [
    {
      embassy: 'Ambasada Srbije u Sjedinjenim Američkim Državama, Vašington',
      embassyCyr: 'Амбасада Србије у Сједињеним Америчким Државама, Вашингтон',
      email: 'izbori2022@serbiaembusa.org',
    },
  ],
  ],
  [
    {
      countryCode: 'MK',
      label: 'Severna Makedonija',
      labelCyr: 'Северна Македонија',
    }, [
    {
      embassy: 'Ambasada Srbije u Severnoj Makedoniji',
      embassyCyr: 'Амбасада Србије у Северној Македонији',
      email: 'konzularno@srbija.com.mk',
    },
  ],
  ],
  [
    {
      countryCode: 'SL',
      label: 'Sijera Leone',
      labelCyr: 'Сијера Леоне',
    }, [
    {
      embassy: 'Ambasada Srbije u Nigeriji',
      embassyCyr: 'Амбасада Србије у Нигерији',
      email: 'serbconsabuja@gmail.com',
    },
  ],
  ],
  [
    {
      countryCode: 'SG',
      label: 'Singapur',
      labelCyr: 'Сингапур',
    }, [
    {
      embassy: 'Ambasada Srbije u Indoneziji',
      embassyCyr: 'Амбасада Србије у Индонезији',
      email: 'embjakarta@serbian-embassy.org',
    },
  ],
  ],
  [
    {
      countryCode: 'SY',
      label: 'Sirija',
      labelCyr: 'Сирија',
    }, [
    {
      embassy: 'Ambasada Srbije u Siriji',
      embassyCyr: 'Амбасада Србије у Сирији',
      email: 'dkp.beirutconsul@gmail.com',
    },
  ],
  ],
  [
    {
      countryCode: 'SK',
      label: 'Slovačka',
      labelCyr: 'Словачка',
    }, [
    {
      embassy: 'Ambasada Srbije u Slovačkoj',
      embassyCyr: 'Амбасада Србије у Словачкој',
      email: 'consular.bratislava@mfa.rs',
    },
  ],
  ],
  [
    {
      countryCode: 'SI',
      label: 'Slovenija',
      labelCyr: 'Словенија',
    }, [
    {
      embassy: 'Ambasada Srbije u Sloveniji',
      embassyCyr: 'Амбасада Србије у Словенији',
      email: 'konzularno.ljubljana@mfa.rs',
    },
  ],
  ],
  [
    {
      countryCode: 'SB',
      label: 'Solomonova Ostrva',
      labelCyr: 'Соломонова Острва',
    }, [
    {
      embassy: 'Ambasada Srbije u Australiji, Kanbera',
      embassyCyr: 'Амбасада Србије у Аустралији, Канбера',
      email: 'embassy.canberra@serbia.org.au',
    },
  ],
  ],
  [
    {
      countryCode: 'SO',
      label: 'Somalija',
      labelCyr: 'Сомалија',
    }, [
    {
      embassy: 'Ambasada Srbije u Keniji',
      embassyCyr: 'Амбасада Србије у Кенији',
      email: 'consular@embassyofserbia.or.ke',
    },
  ],
  ],
  [
    {
      countryCode: 'ES',
      label: 'Španija',
      labelCyr: 'Шпанија',
    }, [
    {
      embassy: 'Ambasada Srbije u Španiji',
      embassyCyr: 'Амбасада Србије у Шпанији',
      email: 'konz.madrid@mfa.rs',
    },
  ],
  ],
  [
    {
      countryCode: 'LK',
      label: 'Šri Lanka',
      labelCyr: 'Шри Ланка',
    }, [
    {
      embassy: 'Ambasada Srbije u Indiji',
      embassyCyr: 'Амбасада Србије у Индији',
      email: 'embassyofserbiadelhi@hotmail.com',
    },
  ],
  ],
  [
    {
      countryCode: 'SD',
      label: 'Sudan',
      labelCyr: 'Судан',
    }, [
    {
      embassy: 'Ambasada Srbije u Egiptu',
      embassyCyr: 'Амбасада Србије у Египту',
      email: 'konzul@serbiaeg.com',
    },
  ],
  ],
  [
    {
      countryCode: 'SR',
      label: 'Surinam',
      labelCyr: 'Суринам',
    }, [
    {
      embassy: 'Ambasada Srbije u Sjedinjenim Američkim Državama, Vašington',
      embassyCyr: 'Амбасада Србије у Сједињеним Америчким Државама, Вашингтон',
      email: 'izbori2022@serbiaembusa.org',
    },
  ],
  ],
  [
    {
      countryCode: 'SS',
      label: 'Južni Sudan',
      labelCyr: 'Јужни Судан',
    }, [
    {
      embassy: 'Ambasada Srbije u Etiopiji',
      embassyCyr: 'Амбасада Србије у Етиопији',
      email: 'serbambadis@yahoo.com',
    },
  ],
  ],
  [
    {
      countryCode: 'CH',
      label: 'Švajcarska',
      labelCyr: 'Швајцарска',
    }, [
    {
      embassy: 'Konzulat Srbije u Švajcarskoj, Cirih',
      embassyCyr: 'Конзулат Србије у Швајцарској, Цирих',
      email: 'sanja.stojanac@mfa.rs',
    },
    {
      embassy: 'Ambasada Srbije u Švajcarskoj, Bern',
      embassyCyr: 'Амбасада Србије у Швајцарској, Берн',
      email: 'konzul@ambasadasrbije.ch',
    },
  ],
  ],
  [
    {
      countryCode: 'SZ',
      label: 'Esvatini',
      labelCyr: 'Есватини',
    }, [
    {
      embassy: 'Ambasada Srbije u Južnoj Africi',
      embassyCyr: 'Амбасада Србије у Јужној Африци',
      email: 'info@srbembassy.org.za',
    },
  ],
  ],
  [
    {
      countryCode: 'SE',
      label: 'Švedska',
      labelCyr: 'Шведска',
    }, [
    {
      embassy: 'Ambasada Srbije u Švedskoj',
      embassyCyr: 'Амбасада Србије у Шведској',
      email: 'izbori22@telia.com',
    },
  ],
  ],
  [
    {
      countryCode: 'LC',
      label: 'Sveta Lucija',
      labelCyr: 'Света Луција',
    }, [
    {
      embassy: 'Ambasada Srbije u Sjedinjenim Američkim Državama, Vašington',
      embassyCyr: 'Амбасада Србије у Сједињеним Америчким Државама, Вашингтон',
      email: 'izbori2022@serbiaembusa.org',
    },
  ],
  ],
  [
    {
      countryCode: 'TJ',
      label: 'Tadžikistan',
      labelCyr: 'Таџикистан',
    }, [
    {
      embassy: 'Ambasada Srbije u Rusiji',
      embassyCyr: 'Амбасада Србије у Русији',
      email: 'konzularno.moskva@mfa.rs',
    },
  ],
  ],
  [
    {
      countryCode: 'TH',
      label: 'Tajland',
      labelCyr: 'Тајланд',
    }, [
    {
      embassy: 'Ambasada Srbije u Indoneziji',
      embassyCyr: 'Амбасада Србије у Индонезији',
      email: 'embjakarta@serbian-embassy.org',
    },
  ],
  ],
  [
    {
      countryCode: 'TZ',
      label: 'Tanzanija',
      labelCyr: 'Танзанија',
    }, [
    {
      embassy: 'Ambasada Srbije u Etiopiji',
      embassyCyr: 'Амбасада Србије у Етиопији',
      email: 'serbambadis@yahoo.com',
    },
  ],
  ],
  [
    {
      countryCode: 'TG',
      label: 'Togo',
      labelCyr: 'Того',
    }, [
    {
      embassy: 'Ambasada Srbije u Nigeriji',
      embassyCyr: 'Амбасада Србије у Нигерији',
      email: 'serbconsabuja@gmail.com',
    },
  ],
  ],
  [
    {
      countryCode: 'TO',
      label: 'Tonga',
      labelCyr: 'Тонга',
    }, [
    {
      embassy: 'Ambasada Srbije u Australiji, Kanbera',
      embassyCyr: 'Амбасада Србије у Аустралији, Канбера',
      email: 'embassy.canberra@serbia.org.au',
    },
  ],
  ],
  [
    {
      countryCode: 'TT',
      label: 'Trinidad i Tobago',
      labelCyr: 'Тринидад и Тобаго',
    }, [
    {
      embassy: 'Ambasada Srbije u Sjedinjenim Američkim Državama, Vašington',
      embassyCyr: 'Амбасада Србије у Сједињеним Америчким Државама, Вашингтон',
      email: 'izbori2022@serbiaembusa.org',
    },
  ],
  ],
  [
    {
      countryCode: 'TN',
      label: 'Tunis',
      labelCyr: 'Тунис',
    }, [
    {
      embassy: 'Ambasada Srbije u Tunisu',
      embassyCyr: 'Амбасада Србије у Тунису',
      email: 'amb.serbia@gnet.tn',
    },
  ],
  ],
  [
    {
      countryCode: 'TM',
      label: 'Turkmenistan',
      labelCyr: 'Туркменистан',
    }, [
    {
      embassy: 'Ambasada Srbije u Rusiji, Moskva',
      embassyCyr: 'Амбасада Србије у Русији, Москва',
      email: 'konzularno.moskva@mfa.rs',
    },
  ],
  ],
  [
    {
      countryCode: 'TR',
      label: 'Turska',
      labelCyr: 'Турска',
    }, [
    {
      embassy: 'Ambasada Srbije u Turskoj, Ankara',
      embassyCyr: 'Амбасада Србије у Турској, Анкара',
      email: 'embserank@gmail.com',
    },
    {
      embassy: 'Konzulat Srbije u Turskoj, Istanbul',
      embassyCyr: 'Конзулат Србије у Турској, Истанбул',
      email: 'izbori.istanbul22@gmail.com',
    },
  ],
  ],
  [
    {
      countryCode: 'TV',
      label: 'Tuvalu',
      labelCyr: 'Тувалу',
    }, [
    {
      embassy: 'Ambasada Srbije u Australiji, Kanbera',
      embassyCyr: 'Амбасада Србије у Аустралији, Канбера',
      email: 'embassy.canberra@serbia.org.au',
    },
  ],
  ],
  [
    {
      countryCode: 'UG',
      label: 'Uganda',
      labelCyr: 'Уганда',
    }, [
    {
      embassy: 'Ambasada Srbije u Keniji',
      embassyCyr: 'Амбасада Србије у Кенији',
      email: 'consular@embassyofserbia.or.ke',
    },
  ],
  ],
  [
    {
      countryCode: 'AE',
      label: 'Ujedinjeni Arapski Emirati',
      labelCyr: 'Уједињени Арапски Емирати',
    }, [
    {
      embassy: 'Ambasada Srbije u Ujedinjenim Arapskim Emiratima',
      embassyCyr: 'Амбасада Србије у Уједињеним Арапским Емиратима',
      email: 'izboriabudhabi2022@yahoo.com',
    },
  ],
  ],
  [
    {
      countryCode: 'UA',
      label: 'Ukrajina',
      labelCyr: 'Украјина',
    }, [
    {
      embassy: 'Ambasada Srbije u Ukrajini',
      embassyCyr: 'Амбасада Србије у Украјини',
      email: 'konzrs@ukr.net',
    },
  ],
  ],
  [
    {
      countryCode: 'UY',
      label: 'Urugvaj',
      labelCyr: 'Уругвај',
    }, [
    {
      embassy: 'Ambasada Srbije u Argentini',
      embassyCyr: 'Амбасада Србије у Аргентини',
      email: 'consuladoserbia@fibertel.com.ar',
    },
  ],
  ],
  [
    {
      countryCode: 'UZ',
      label: 'Uzbekistan, Repubika',
      labelCyr: 'Узбекистан, Република',
    }, [
    {
      embassy: 'Ambasada Srbije u Rusiji, Moskva',
      embassyCyr: 'Амбасада Србије у Русији, Москва',
      email: 'konzularno.moskva@mfa.rs',
    },
  ],
  ],
  [
    {
      countryCode: 'VU',
      label: 'Vanuatu',
      labelCyr: 'Вануату',
    }, [
    {
      embassy: 'Ambasada Srbije u Australiji, Kanbera',
      embassyCyr: 'Амбасада Србије у Аустралији, Канбера',
      email: 'embassy.canberra@serbia.org.au',
    },
  ],
  ],
  [
    {
      countryCode: 'VA',
      label: 'Vatikan (Sveta Stolica)',
      labelCyr: 'Ватикан (Света Столица)',
    }, [
    {
      embassy: 'Ambasada Srbije u Vatikanu (Svetoj Stolici)',
      embassyCyr: 'Амбасада Србије у Ватикану (Светој Столици)',
      email: 'holysee.embassy@mfa.rs',
    },
  ],
  ],
  [
    {
      countryCode: 'GB',
      label: 'Ujedinjeno Kraljevstvo',
      labelCyr: 'Уједињено Краљевство',
    }, [
    {
      embassy: 'Ambasada Srbije u Ujedinjenom Kraljevstvu',
      embassyCyr: 'Амбасада Србије у Уједињеном Краљевству',
      email: 'izbori2022@serbianembassy.org.uk',
    },
  ],
  ],
  [
    {
      countryCode: 'VE',
      label: 'Venecuela',
      labelCyr: 'Венецуела',
    }, [
    {
      embassy: 'Ambasada Srbije na Kubi',
      embassyCyr: 'Амбасада Србије на Куби',
      email: 'konzsrbhav@gmail.com',
    },
  ],
  ],
  [
    {
      countryCode: 'VN',
      label: 'Vijetnam',
      labelCyr: 'Вијетнам',
    }, [
    {
      embassy: 'Ambasada Srbije u Indoneziji',
      embassyCyr: 'Амбасада Србије у Индонезији',
      email: 'embjakarta@serbian-embassy.org',
    },
  ],
  ],
  [
    {
      countryCode: 'ZM',
      label: 'Zambija',
      labelCyr: 'Замбија',
    }, [
    {
      embassy: 'Ambasada Srbije u Zambiji',
      embassyCyr: 'Амбасада Србије у Замбији',
      email: 'serbianemb.lusaka@gmail.com',
    },
  ],
  ],
  [
    {
      countryCode: 'CV',
      label: 'Kabo Verde (Zelenortska ostrva)',
      labelCyr: 'Кабо Верде (Зеленортска острва)',
    }, [
    {
      embassy: 'Ambasada Srbije u Portugaliji',
      embassyCyr: 'Амбасада Србије у Португалији',
      email: 'serviaemba@netcabo.pt',
    },
  ],
  ],
  [
    {
      countryCode: 'ZW',
      label: 'Zimbabve',
      labelCyr: 'Зимбабве',
    }, [
    {
      embassy: 'Ambasada Srbije u Južnoj Africi',
      embassyCyr: 'Амбасада Србије у Јужној Африци',
      email: 'info@srbembassy.org.za',
    },
  ],
  ],
]);

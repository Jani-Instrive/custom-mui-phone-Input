/* eslint-disable no-useless-escape */
import * as Yup from "yup";

export const phonePatterns: any = {
  AF: /^(\+?93|0)?[7]\d{8}$/, // Afghanistan
  AL: /^(\+?355|0)6[789]\d{6}$/, // Albania
  DZ: /^(\+?213|0)(5|6|7)\d{8}$/, // Algeria
  AD: /^(\+?376)?6\d{5}$/, // Andorra
  AO: /^(\+244)?9[2-9]\d{7}$/, // Angola
  AI: /^(\+?1-264|0)\d{7}$/, // Anguilla
  AG: /^(\+?1-268|0)\d{7}$/, // Antigua and Barbuda
  AR: /^(\+?54|0)9[1-9]\d{8}$/, // Argentina
  AM: /^(\+?374|0)((10|[9|7][0-9])\d{6}$|[2-4]\d{7}$)/, // Armenia
  AW: /^(\+?297)?(5|6)\d{5}$/, // Aruba
  AU: /^(\+?61|0)4\d{8}$/, // Australia
  AT: /^(\+43|0)\d{1,4}\d{3,12}$/, // Austria
  AZ: /^(\+994|0)(5[015]|7[07]|99)\d{7}$/, // Azerbaijan
  BS: /^(\+?1-242|0)\d{7}$/, // Bahamas
  BH: /^(\+?973)?(3|6)\d{7}$/, // Bahrain
  BD: /^(\+?880|0)1[13456789][0-9]{8}$/, // Bangladesh
  BB: /^(\+?1-246|0)\d{7}$/, // Barbados
  BY: /^(\+?375)?(24|25|29|33|44)\d{7}$/, // Belarus
  BE: /^(\+?32|0)4?\d{8}$/, // Belgium
  BZ: /^(\+?501)?\d{6,7}$/, // Belize
  BJ: /^(\+?229)?\d{8}$/, // Benin
  BM: /^(\+?1-441|0)\d{7}$/, // Bermuda
  BT: /^(\+?975)?\d{8}$/, // Bhutan
  BO: /^(\+?591)?(6|7)\d{7}$/, // Bolivia
  BA: /^(\+?387|0)6\d{7}$/, // Bosnia and Herzegovina
  BW: /^(\+?267)?\d{8}$/, // Botswana
  BR: /(?=^(\+?5{2}\-?|0)[1-9]{2}\-?\d{4}\-?\d{4}$)(^(\+?5{2}\-?|0)[1-9]{2}\-?[6-9]{1}\d{3}\-?\d{4}$)|(^(\+?5{2}\-?|0)[1-9]{2}\-?9[6-9]{1}\d{3}\-?\d{4}$)/, // Brazil
  IO: /^(\+?246)?\d{5}$/, // British Indian Ocean Territory
  VG: /^(\+?1-284|0)\d{7}$/, // British Virgin Islands
  BN: /^(\+?673)?\d{7}$/, // Brunei Darussalam
  BG: /^(\+?359|0)?8[789]\d{7}$/, // Bulgaria
  BF: /^(\+?226)?\d{8}$/, // Burkina Faso
  BI: /^(\+?257)?\d{7}$/, // Burundi
  KH: /^(\+?855|0)?[1-9]\d{7,8}$/, // Cambodia
  CM: /^(\+?237)?[2368]\d{7,8}$/, // Cameroon
  CA: /^(\+?1)?[2-9]\d{9}$/, // Canada
  CV: /^(\+?238)?9[0-9]{7}$/, // Cape Verde
  KY: /^(\+?1-345|0)\d{7}$/, // Cayman Islands
  CF: /^(\+?236)?\d{8}$/, // Central African Republic
  TD: /^(\+?235)?[28]\d{7}$/, // Chad
  CL: /^(\+?56|0)[2-9]\d{1}\d{7}$/, // Chile
  CN: /^((\+|00)86)?1([358][0-9]|4[579]|6[67]|7[01235678]|9[189])[0-9]{8}$/, // China
  CX: /^(\+?61|0)4\d{8}$/, // Christmas Island
  CC: /^(\+?61|0)4\d{8}$/, // Cocos Islands
  CO: /^(\+?57|0)?[1-8]\d{9}$/, // Colombia
  KM: /^(\+?269|0)?\d{7}$/, // Comoros
  CK: /^(\+?682)?\d{5}$/, // Cook Islands
  CR: /^(\+?506)?\d{8}$/, // Costa Rica
  HR: /^(\+?385|0)?9\d{8}$/, // Croatia
  CU: /^(\+?53)?([5-9])\d{8}$/, // Cuba
  CW: /^(\+?599-9)?[9]\d{6}$/, // Curaçao
  CY: /^(\+?357|0)?9[0-2]\d{7}$/, // Cyprus
  CZ: /^(\+?420)? ?[1-9][0-9]{2} ?[0-9]{3} ?[0-9]{3}$/, // Czech Republic
  CD: /^(\+?243)?[1-9]\d{8,9}$/, // Democratic Republic of the Congo
  DK: /^(\+?45)?\s?\d{2}\s?\d{2}\s?\d{2}\s?\d{2}$/, // Denmark
  DJ: /^(\+?253)?\d{8}$/, // Djibouti
  DM: /^(\+?1-767|0)\d{7}$/, // Dominica
  DO: /^(\+?1-809|1-829|1-849|0)?\d{7}$/, // Dominican Republic
  TL: /^(\+670)?\d{7}$/, // East Timor
  EC: /^(\+?593|0)([2-7]|9[2-9])\d{7}$/, // Ecuador
  EG: /^((\+?20)|0)?1[0125]\d{8}$/, // Egypt
  SV: /^(\+?503)?[7]\d{7}$/, // El Salvador
  GQ: /^(\+?240)?[2-9]\d{8}$/, // Equatorial Guinea
  ER: /^(\+?291)?[1-9]\d{6}$/, // Eritrea
  EE: /^(\+?372)?\s?(5|8[1-4])\s?([0-9]\s?){6,7}$/, // Estonia
  ET: /^(\+?251)?[1-59]\d{8}$/, // Ethiopia
  FK: /^(\+?500)?\d{5}$/, // Falkland Islands
  FO: /^(\+?298)?\s?\d{2}\s?\d{2}\s?\d{2}$/, // Faroe Islands
  FM: /^(\+?691)?\d{7}$/, // Federated States of Micronesia
  FJ: /^(\+?679)?\s?\d{3}\s?\d{4}$/, // Fiji
  FI: /^(\+?358|0)\s?(4(0|1|2|4|5|6)?|50)\s?(\d\s?){4,8}\d$/, // Finland
  FR: /^(\+?33|0)[67]\d{8}$/, // France
  GF: /^(\+?594|0|00594)[67]\d{8}$/, // French Guiana
  PF: /^(\+?689)?\d{6}$/, // French Polynesia
  GA: /^(\+?241)?[07]\d{7}$/, // Gabon
  GE: /^(\+?995)?(5|79)\d{7}$/, // Georgia
  DE: /^(\+49)?0?1(5[0-25-9]\d|6([23]|0\d?)|7([0-57-9]|6\d))\d{7}$/, // Germany
  GH: /^(\+233|0)(20|50|24|54|27|57|26|56|23|28)\d{7}$/, // Ghana
  GI: /^(\+?350)?[5-8]\d{6,7}$/, // Gibraltar
  GR: /^(\+?30|0)?(69\d{8})$/, // Greece
  GL: /^(\+?299)?\s?\d{2}\s?\d{2}\s?\d{2}$/, // Greenland
  GD: /^(\+?1-473|0)\d{7}$/, // Grenada
  GP: /^(\+?590|0|00590)[67]\d{8}$/, // Guadeloupe
  GU: /^(\+?1-671|0)\d{7}$/, // Guam
  GT: /^(\+?502)?[48]\d{7}$/, // Guatemala
  GG: /^(\+?44|0)1481\d{6}$/, // Guernsey
  GN: /^(\+?224)?\d{8}$/, // Guinea
  GW: /^(\+?245)?[2]\d{7}$/, // Guinea-Bissau
  GY: /^(\+?592)?[6]\d{7}$/, // Guyana
  HT: /^(\+?509)?\d{8}$/, // Haiti
  HN: /^(\+?504)?\d{8}$/, // Honduras
  HK: /^(\+?852[-\s]?)?[456789]\d{3}[-\s]?\d{4}$/, // Hong Kong
  HU: /^(\+?36)(20|30|70)\d{7}$/, // Hungary
  IS: /^(\+?354)?[4-6]\d{6}$/, // Iceland
  IN: /^(\+?91|0)?[6789]\d{9}$/, // India
  ID: /^(\+?62|0)8(1[123456789]|2[1238]|3[1238]|5[12356789]|7[78]|9[56789]|8[123456789])([\s?|\d]{5,11})$/, // Indonesia
  IR: /^(\+?98[\-\s]?|0)9[0-39]\d[\-\s]?\d{3}[\-\s]?\d{4}$/, // Iran
  IQ: /^(\+?964|0)?7[0-9]\d{8}$/, // Iraq
  IE: /^(\+?353|0)8[356789]\d{7}$/, // Ireland
  IM: /^(\+?44|0)1624\d{6}$/, // Isle of Man
  IL: /^(\+972|0)([23489]|5[012345689]|77)[1-9]\d{6}$/, // Israel
  IT: /^(\+?39)?\s?3\d{2} ?\d{6,7}$/, // Italy
  CI: /^(\+?225)?\d{8}$/, // Ivory Coast
  JM: /^(\+?1-876|0)\d{7}$/, // Jamaica
  JP: /^(\+81[ \-]?(\(0\))?|0)[6789]0[ \-]?\d{4}[ \-]?\d{4}$/, // Japan
  JE: /^(\+?44|0)1534\d{6}$/, // Jersey
  JO: /^(\+?962|0)?7[789]\d{7}$/, // Jordan
  KZ: /^(\+?7|8)?7\d{9}$/, // Kazakhstan
  KE: /^(\+?254|0)(7|1)\d{8}$/, // Kenya
  KI: /^(\+?686)?\d{5}$/, // Kiribati
  XK: /^(\+?381|0)?\d{8}$/, // Kosovo
  KW: /^(\+?965)[569]\d{7}$/, // Kuwait
  KG: /^(\+996)?\d{9}$/, // Kyrgyzstan
  LA: /^(\+?856|0)?[20-9]\d{7,9}$/, // Laos
  LV: /^(\+?371)?2\d{7,8}$/, // Latvia
  LB: /^(\+?961)?(3|70)?\d{6}$/, // Lebanon
  LS: /^(\+?266)?[59]\d{7}$/, // Lesotho
  LR: /^(\+?231)?[6-9]\d{7}$/, // Liberia
  LY: /^(\+?218|0)?[29]\d{7}$/, // Libya
  LI: /^(\+?423)?(7([6-9]))\d{4}$/, // Liechtenstein
  LT: /^(\+370|8)\d{8}$/, // Lithuania
  LU: /^(\+?352)?((6\d1)\d{6})$/, // Luxembourg
  MO: /^(\+?853[-\s]?)?[6]\d{3}[-\s]?\d{4}$/, // Macau
  MG: /^(\+?261)?3[0-9]\d{6}$/, // Madagascar
  MW: /^(\+?265)?[9]\d{7}$/, // Malawi
  MY: /^(\+?6?01){1}(([0145]{1}(\-|\s)?\d{7,8})|([236789]{1}(\s|\-)?\d{7}))$/, // Malaysia
  MV: /^(\+?960)?9\d{7}$/, // Maldives
  ML: /^(\+?223)?[6-9]\d{7}$/, // Mali
  MT: /^(\+?356|0)?(99|79|77|21|27|22|25)[0-9]{6}$/, // Malta
  MH: /^(\+?692)?[2356]\d{5}$/, // Marshall Islands
  MQ: /^(\+?596|0|00596)[67]\d{8}$/, // Martinique
  MR: /^(\+?222|0)?[2457]\d{7}$/, // Mauritania
  MU: /^(\+?230|0)?\d{8}$/, // Mauritius
  YT: /^(\+?262|0|00262)[67]\d{8}$/, // Mayotte
  MX: /^(\+?52)?(1|01)?\d{10,11}$/, // Mexico
  MD: /^(\+?373|0)(6[369]|7[0-6])\d{5}$/, // Moldova
  MC: /^(\+?377|0)?6\d{8}$/, // Monaco
  MN: /^(\+?976)?[2-9]\d{7}$/, // Mongolia
  ME: /^(\+?382|0)?6[0-9]\d{6}$/, // Montenegro
  MS: /^(\+?1-664|0)\d{7}$/, // Montserrat
  MA: /^(\+?212|0)([5-7]\d{8})$/, // Morocco
  MZ: /^(\+?258)?[28]\d{7,8}$/, // Mozambique
  MM: /^(\+?95|0)?[1-9]\d{9}$/, // Myanmar
  NA: /^(\+?264|0)?[6]\d{7}$/, // Namibia
  NR: /^(\+?674)?\d{5}$/, // Nauru
  NP: /^(\+?977)?9[78]\d{8}$/, // Nepal
  NL: /^(\+?31|0)6?\d{8}$/, // Netherlands
  NC: /^(\+?687)?\d{6}$/, // New Caledonia
  NZ: /^(\+?64|0)[28]\d{7,9}$/, // New Zealand
  NI: /^(\+?505)?\d{8}$/, // Nicaragua
  NE: /^(\+?227)?[25]\d{7}$/, // Niger
  NG: /^(\+?234|0)?[789]\d{9}$/, // Nigeria
  NU: /^(\+?683)?\d{4}$/, // Niue
  NF: /^(\+?672)?\d{5}$/, // Norfolk Island
  KP: /^(\+?850)?((19[0-2])|(3\d{2})|(4[01]))\d{7}$/, // North Korea
  MK: /^(\+389|0)7(0|1)\d{6}$/, // North Macedonia
  MP: /^(\+?1-670|0)\d{7}$/, // Northern Mariana Islands
  NO: /^(\+?47)?[49]\d{7}$/, // Norway
  OM: /^(\+?968)?(9[1-9])\d{6}$/, // Oman
  PK: /^((\+92)|(0092))-{0,1}\d{3}-{0,1}\d{7}$|^\d{11}$|^\d{4}-\d{7}$/, // Pakistan
  PW: /^(\+?680)?\d{7}$/, // Palau
  PS: /^(\+?970|0)?5[012]\d{7}$/, // Palestine
  PA: /^(\+?507)\d{7,8}$/, // Panama
  PG: /^(\+?675)?[1-9]\d{7}$/, // Papua New Guinea
  PY: /^(\+?595|0)9[9876]\d{7}$/, // Paraguay
  PE: /^(\+?51)?9\d{8}$/, // Peru
  PH: /^(\+?63|0)?[9]\d{9}$/, // Philippines
  PN: /^(\+?64|0)9\d{7}$/, // Pitcairn Islands
  PL: /^(\+?48)? ?[5-8]\d ?\d{3} ?\d{2} ?\d{2}$/, // Poland
  PT: /^(\+?351)?9[1236]\d{7}$/, // Portugal
  PR: /^(\+?1)?[2-9]\d{9}$/, // Puerto Rico
  QA: /^(\+?974)?[356]\d{7}$/, // Qatar
  CG: /^(\+?242)?[0-9]\d{8}$/, // Republic of the Congo
  RE: /^(\+?262|0|00262)[67]\d{8}$/, // Réunion
  RO: /^(\+?4?0)\s?7\d{2}(\/|\s|\.|\-)?\d{3}(\s|\.|\-)?\d{3}$/, // Romania
  RU: /^(\+?7|8)?9\d{9}$/, // Russia
  RW: /^(\+?250|0)?[7]\d{8}$/, // Rwanda
  BL: /^(\+?590|0|00590)[67]\d{8}$/, // Saint Barthélemy
  SH: /^(\+?290)?[78]\d{4}$/, // Saint Helena, Ascension and Tristan da Cunha
  KN: /^(\+?1-869|0)\d{7}$/, // Saint Kitts and Nevis
  LC: /^(\+?1-758|0)\d{7}$/, // Saint Lucia
  MF: /^(\+?590|0|00590)[67]\d{8}$/, // Saint Martin
  PM: /^(\+?508|0)[67]\d{7}$/, // Saint Pierre and Miquelon
  VC: /^(\+?1-784|0)\d{7}$/, // Saint Vincent and the Grenadines
  WS: /^(\+?685)?\d{7}$/, // Samoa
  SM: /^(\+?378)?[6-7]\d{5}$/, // San Marino
  ST: /^(\+?239)?\d{7}$/, // Sao Tome and Principe
  SA: /^(!?(\+?966)|0)?5\d{8}$/, // Saudi Arabia
  SN: /^(\+?221)?[3-9]\d{7}$/, // Senegal
  RS: /^(\+381|0)([0-6]|[7][0-2])\d{6,7}$/, // Serbia
  SC: /^(\+?248)?[28]\d{6}$/, // Seychelles
  SL: /^(\+?232|0|00232)[7-9][0-9]\d{6}$/, // Sierra Leone
  SG: /^(\+?65)?[89]\d{7}$/, // Singapore
  SX: /^(\+?1-721|0)\d{7}$/, // Sint Maarten
  SK: /^(\+?421)?[6-9]\d{8}$/, // Slovakia
  SI: /^(\+?386|0)?[5]\d{7}$/, // Slovenia
  SB: /^(\+?677)?[347]\d{6}$/, // Solomon Islands
  SO: /^(\+?252|0)?[2457]\d{7}$/, // Somalia
  ZA: /^(\+?27|0)\d{9}$/, // South Africa
  KR: /^(\+?82|0)(10|1[1-9])[1-9]\d{6,7}$/, // South Korea
  SS: /^(\+?211|0)?[7]\d{8}$/, // South Sudan
  ES: /^(\+?34)?[6|7]\d{8}$/, // Spain
  LK: /^(\+?94|0)?(7|5)(\d{7,8})$/, // Sri Lanka
  SD: /^(\+?249)?[0-9]\d{8}$/, // Sudan
  SR: /^(\+?597)?[6]\d{7}$/, // Suriname
  SJ: /^(\+?47)?[49]\d{7}$/, // Svalbard and Jan Mayen
  SZ: /^(\+?268)?[2368]\d{7,8}$/, // Swaziland
  SE: /^(\+?46|0)?[7-9]\d{9}$/, // Sweden
  CH: /^(\+?41|0)([6][126-9])\d{7}$/, // Switzerland
  SY: /^(!?(\+?963)|0)?9\d{8}$/, // Syria
  TW: /^(\+?886|0)?[9]\d{8}$/, // Taiwan
  TJ: /^(\+?992|0)?[5-9]\d{8}$/, // Tajikistan
  TZ: /^(\+?255|0)?[67]\d{8}$/, // Tanzania
  TH: /^(\+?66|0)?[689]\d{8}$/, // Thailand
  TG: /^(\+?228)?\d{8}$/, // Togo
  TK: /^(\+?690)?\d{5}$/, // Tokelau
  TO: /^(\+?676)?\d{5}$/, // Tonga
  TT: /^(\+?1-868|0)\d{7}$/, // Trinidad and Tobago
  TN: /^(\+?216)?[2459]\d{7}$/, // Tunisia
  TR: /^(\+?90|0)?5\d{9}$/, // Turkey
  TM: /^(\+?993|0)?[1-9]\d{7}$/, // Turkmenistan
  TC: /^(\+?1-649|0)\d{7}$/, // Turks and Caicos Islands
  TV: /^(\+?688)?\d{5}$/, // Tuvalu
  UG: /^(\+?256|0)?[7]\d{8}$/, // Uganda
  UA: /^(\+?380)?(50|66|95)\d{7}$/, // Ukraine
  AE: /^(\+?971|0)?5[024568]\d{7}$/, // United Arab Emirates
  GB: /^(\+?44|0)7\d{9}$/, // United Kingdom
  US: /^(\+?1)?[2-9]\d{2}[2-9](?!11)\d{6}$/, // United States
  UY: /^(\+?598|0)9[1-9][\d]{6}$/, // Uruguay
  VI: /^(\+?1-340|0)\d{7}$/, // US Virgin Islands
  UZ: /^(\+?998)?[1-9]\d{8}$/, // Uzbekistan
  VU: /^(\+?678)?\d{5}$/, // Vanuatu
  VA: /^(\+?379|0)?\d{6,11}$/, // Vatican City
  VE: /^(\+?58)?(4\d{9})$/, // Venezuela
  VN: /^(\+?84|0)?(3([2-9]))?\d{8}$/, // Vietnam
  WF: /^(\+?681)?\d{6}$/, // Wallis and Futuna
  YE: /^(\+?967)?[3456789]\d{7}$/, // Yemen
  ZM: /^(\+?260|0)?[9]\d{8}$/, // Zambia
  ZW: /^(\+?263|0)?[7]\d{8}$/, // Zimbabwe
};

export const getValidationSchema = (countryCode: string) => {
  console.log("Country Code:", countryCode);
  return Yup.object().shape({
    phoneNumber: Yup.string()
      .matches(phonePatterns[countryCode], `Please enter a valid phone number`)
      .required("Phone number is required"),
  });
};

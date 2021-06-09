import { MainConfig }  from './mainconfig';

import { 
    language,
    dateStyle
} from './language';

import { 
    countries,
    default_country_code
} from './countries';

const AppDetails = MainConfig.AppDetails;
const Google_Map_Key = MainConfig.Google_Map_Key;
const facebookAppId = MainConfig.facebookAppId;


export {
    AppDetails,
    language,
    Google_Map_Key,
    dateStyle,
    facebookAppId,
    countries,
    default_country_code
}